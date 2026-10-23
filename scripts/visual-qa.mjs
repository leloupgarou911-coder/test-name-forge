import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';

const baseUrl = process.env.VISUAL_QA_BASE_URL || 'http://127.0.0.1:4173/test-name-forge/';
const outputDir = 'artifacts/visual-qa';
await mkdir(outputDir, { recursive: true });

const server = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], {
  stdio: 'ignore',
  shell: process.platform === 'win32',
});

let browser;
const failures = [];
const results = [];
async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error('Vite preview did not become available at ' + baseUrl);
}

try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });
  const viewports = [
    { name: 'desktop', width: 1440, height: 1000 },
    { name: 'mobile', width: 390, height: 844 },
  ];
  const themes = ['light', 'dark'];
  const pages = [
    { name: 'home', hash: '' },
    { name: 'catalog', hash: '#/generators' },
    { name: 'generator-detail', hash: '#/generator/fantasy' },
    { name: 'my-names', hash: '#/my-names' },
    { name: 'style-studio', hash: '#/style-studio' },
  ];

  for (const viewport of viewports) {
    for (const theme of themes) {
      for (const view of pages) {
        const page = await browser.newPage({
          viewport: { width: viewport.width, height: viewport.height },
          deviceScaleFactor: 1,
          reducedMotion: 'reduce',
        });
        const pageErrors = [];
        page.on('pageerror', (error) => pageErrors.push(error.message));
        await page.addInitScript((selectedTheme) => {
          localStorage.setItem('nameforge_settings', JSON.stringify({
            language: 'en',
            theme: selectedTheme,
            defaultGenLanguage: 'auto',
            textSize: 'normal',
          }));
        }, theme);

        const response = await page.goto(baseUrl + view.hash, { waitUntil: 'networkidle', timeout: 45000 });
        await page.waitForTimeout(500);

        const state = await page.evaluate(() => ({
          title: document.title,
          bodyTextLength: (document.body?.innerText || '').trim().length,
          htmlClass: document.documentElement.className,
          viewportWidth: window.innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          mainCount: document.querySelectorAll('main').length,
          images: [...document.images].map((img) => ({
            src: img.currentSrc || img.src,
            loaded: img.complete && img.naturalWidth > 0,
          })),
        }));

        const label = viewport.name + '-' + theme + '-' + view.name;
        const screenshotPath = outputDir + '/' + label + '.png';
        await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });

        if (!response || response.status() >= 400) failures.push(label + ': HTTP response failed (' + (response?.status() ?? 'none') + ')');
        if (state.bodyTextLength < 100) failures.push(label + ': likely blank/incomplete page (' + state.bodyTextLength + ' text characters)');
        if (!state.htmlClass.includes(theme === 'light' ? 'light' : 'dark')) failures.push(label + ': requested theme class missing; html class=' + state.htmlClass);
        if (state.documentWidth > state.viewportWidth + 2) failures.push(label + ': horizontal overflow (' + state.documentWidth + 'px content vs ' + state.viewportWidth + 'px viewport)');
        if (pageErrors.length) failures.push(label + ': JavaScript page errors: ' + pageErrors.join(' | '));
        const brokenImages = state.images.filter((img) => !img.loaded && !img.src.startsWith('data:'));
        if (brokenImages.length) failures.push(label + ': broken images: ' + brokenImages.map((img) => img.src).join(', '));

        results.push({
          view: view.name,
          theme,
          viewport: viewport.name,
          status: response?.status() ?? null,
          title: state.title,
          textCharacters: state.bodyTextLength,
          htmlClass: state.htmlClass,
          viewportWidth: state.viewportWidth,
          documentWidth: state.documentWidth,
          imageCount: state.images.length,
          brokenImageCount: brokenImages.length,
          pageErrors,
          screenshot: screenshotPath,
        });
        await page.close();
      }
    }
  }
} finally {
  if (browser) await browser.close();
  server.kill('SIGTERM');
}

const report = { baseUrl, testedCombinations: results.length, failures, results };
await (await import('node:fs/promises')).writeFile(outputDir + '/report.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
