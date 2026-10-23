import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { GeneratorsListView } from './views/GeneratorsListView';
import { GeneratorDetailView } from './views/GeneratorDetailView';
import { MyNamesView } from './views/MyNamesView';
import { StyleStudioView } from './views/StyleStudioView';
import { GeneratorId } from './types';
import { GENERATORS_METADATA, ALL_GENERATORS_LIST } from './data/generators';
import { applySettingsToDOM, getAppSettings, subscribeToSettings } from './services/settings';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentGenerator, setCurrentGenerator] = useState<GeneratorId>('fantasy');
  const [styleStudioText, setStyleStudioText] = useState<string>('NameForge');
  const [settings, setSettings] = useState(getAppSettings());

  // Initialize and subscribe to settings
  useEffect(() => {
    const initialSettings = getAppSettings();
    applySettingsToDOM(initialSettings);

    const unsub = subscribeToSettings((s) => {
      setSettings(s);
      applySettingsToDOM(s);
    });

    // Keep the "system" theme in sync when the operating system theme changes.
    const media = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;
    const handleSystemThemeChange = () => {
      const current = getAppSettings();
      if (current.theme === 'system') {
        applySettingsToDOM(current);
      }
    };

    media?.addEventListener?.('change', handleSystemThemeChange);
    // Compatibility with older browsers that expose the legacy listener API.
    if (media && !media.addEventListener) {
      media.addListener(handleSystemThemeChange);
    }

    return () => {
      unsub();
      media?.removeEventListener?.('change', handleSystemThemeChange);
      if (media && !media.removeEventListener) {
        media.removeListener(handleSystemThemeChange);
      }
    };
  }, []);

  // Handle URL hash changes for deep linking
  const parseHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash || hash === 'faq') {
      setCurrentView('home');
      return;
    }
    if (hash === 'generators' || hash === 'all-name-generators') {
      setCurrentView('generators');
      return;
    }
    if (hash === 'my-names') {
      setCurrentView('my-names');
      return;
    }
    if (hash === 'style-studio' || hash === 'atelier-style' || hash === 'text-styler') {
      setCurrentView('style-studio');
      return;
    }
    if (hash.startsWith('generator/')) {
      const genId = hash.replace('generator/', '') as GeneratorId;
      if (GENERATORS_METADATA[genId]) {
        setCurrentGenerator(genId);
        setCurrentView('generator-detail');
        return;
      }
    }
    // Also match legacy file-like hashes if any: e.g. #anime-name-generator
    const matchLegacy = hash.replace('-name-generator', '') as GeneratorId;
    if (GENERATORS_METADATA[matchLegacy]) {
      setCurrentGenerator(matchLegacy);
      setCurrentView('generator-detail');
      return;
    }

    setCurrentView('home');
  };

  useEffect(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    const handleCustomNav = (e: any) => {
      if (e.detail?.view) {
        handleNavigate(e.detail.view, e.detail.name || e.detail.generatorId);
      }
    };
    window.addEventListener('nameforge:navigate', handleCustomNav);
    return () => {
      window.removeEventListener('hashchange', parseHash);
      window.removeEventListener('nameforge:navigate', handleCustomNav);
    };
  }, []);

  const handleNavigate = (view: string, generatorId?: GeneratorId | string) => {
    if (view === 'home') {
      window.location.hash = '';
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'generators') {
      window.location.hash = '/generators';
      setCurrentView('generators');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'my-names') {
      window.location.hash = '/my-names';
      setCurrentView('my-names');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'style-studio') {
      window.location.hash = '/style-studio';
      if (generatorId) {
        setStyleStudioText(String(generatorId));
      }
      setCurrentView('style-studio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'generator-detail' && generatorId) {
      const gId = generatorId as GeneratorId;
      window.location.hash = `/generator/${gId}`;
      setCurrentGenerator(gId);
      setCurrentView('generator-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync document title and meta
  useEffect(() => {
    if (currentView === 'home') {
      document.title = `NameForge — ${ALL_GENERATORS_LIST.length} Générateurs de Noms Gratuits & Professionnels`;
    } else if (currentView === 'generators') {
      document.title = `Tous les ${ALL_GENERATORS_LIST.length} Générateurs de Noms — NameForge`;
    } else if (currentView === 'my-names') {
      document.title = 'Mes Noms — Favoris, Notes & Collections | NameForge';
    } else if (currentView === 'style-studio') {
      document.title =
        settings.language === 'fr'
          ? 'Atelier de Stylisation & Polices Unicode | NameForge'
          : 'Typography & Style Studio | NameForge';
    } else if (currentView === 'generator-detail') {
      const meta = GENERATORS_METADATA[currentGenerator];
      document.title = `${meta ? meta.title : 'Générateur de Noms'} | NameForge`;
    }
  }, [currentView, currentGenerator, settings.language]);

  return (
    <div className="min-h-screen bg-[#060611] text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white transition-colors duration-200">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-xl focus:shadow-xl focus:outline-none"
      >
        Passer au contenu principal
      </a>

      <Navbar
        currentView={currentView}
        currentGenerator={currentView === 'generator-detail' ? currentGenerator : undefined}
        onNavigate={handleNavigate}
      />

      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {currentView === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentView === 'generators' && <GeneratorsListView onNavigate={handleNavigate} />}
        {currentView === 'generator-detail' && (
          <GeneratorDetailView generatorId={currentGenerator} onNavigate={handleNavigate} />
        )}
        {currentView === 'my-names' && <MyNamesView onNavigate={handleNavigate} />}
        {currentView === 'style-studio' && (
          <StyleStudioView onNavigate={handleNavigate} initialText={styleStudioText} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
