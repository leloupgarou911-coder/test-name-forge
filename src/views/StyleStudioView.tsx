import React, { useState, useEffect, useRef } from 'react';
import {
  Wand2,
  Copy,
  Check,
  Download,
  Code,
  Sparkles,
  Sliders,
  Type,
  Layers,
  Palette,
  RotateCcw,
  Image as ImageIcon,
  ArrowLeft,
  Share2,
} from 'lucide-react';
import {
  UNICODE_STYLES,
  VISUAL_EFFECTS,
  TEXTURE_FILLS,
  renderStyledTextToCanvas,
  downloadCanvasAsPng,
  generateSvgCode,
} from '../services/textStyler';
import { GeneratorId } from '../types';
import { getAppSettings, subscribeToSettings } from '../services/settings';
import { getTranslations } from '../i18n';
import { getStudioLabel } from '../i18n/studio';

interface StyleStudioViewProps {
  initialText?: string;
  onNavigate: (view: string, generatorId?: GeneratorId) => void;
}

const PRESET_SAMPLE_NAMES = [
  'NameForge',
  'AeroVance',
  'CyberVex',
  'Kaelith',
  'L’Atelier Doré',
  'Solaris Prime',
  'Valkyrie',
  'Apex Studio',
];

const FONT_OPTIONS = [
  { id: 'sans', name: 'Modern Sans (Inter / System)', family: 'system-ui, -apple-system, sans-serif' },
  { id: 'serif', name: 'Classic Serif (Georgia / Editorial)', family: 'Georgia, Cambria, serif' },
  { id: 'mono', name: 'Futuristic Mono (JetBrains / Fira)', family: 'monospace' },
  { id: 'display', name: 'Impact Display (Heavy Black)', family: 'Impact, Arial Black, sans-serif' },
  { id: 'cursive', name: 'Script Calligraphy (Brush)', family: 'cursive, "Brush Script MT", sans-serif' },
];

export const StyleStudioView: React.FC<StyleStudioViewProps> = ({
  initialText = 'NameForge',
  onNavigate,
}) => {
  const [inputText, setInputText] = useState(initialText);
  const [activeTab, setActiveTab] = useState<'unicode' | 'effects' | 'textures' | 'export'>('unicode');
  const [selectedEffect, setSelectedEffect] = useState(VISUAL_EFFECTS[0].id);
  const [selectedTexture, setSelectedTexture] = useState(TEXTURE_FILLS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedGeneral, setCopiedGeneral] = useState(false);

  // Canvas Studio Controls
  const [fontSize, setFontSize] = useState<number>(48);
  const [letterSpacing, setLetterSpacing] = useState<number>(2);
  const [fontFamily, setFontFamily] = useState<string>(FONT_OPTIONS[0].family);
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [exportScale, setExportScale] = useState<number>(2);
  const [svgCopied, setSvgCopied] = useState(false);
  const [cssCopied, setCssCopied] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [settings, setSettings] = useState(getAppSettings);
  const t = getTranslations(settings.language);

  // Keep the studio's labels and direction in sync while it remains open.
  useEffect(() => subscribeToSettings(setSettings), []);

  // When initialText changes, update input
  useEffect(() => {
    if (initialText) {
      setInputText(initialText);
    }
  }, [initialText]);

  // Redraw canvas whenever parameters change
  useEffect(() => {
    if (!canvasRef.current) return;
    renderStyledTextToCanvas(canvasRef.current, {
      text: inputText || 'NameForge',
      fontSize,
      fontFamily,
      letterSpacing,
      effectId: selectedEffect,
      textureId: selectedTexture,
      isTransparentBg: isTransparent,
      scale: exportScale,
    });
  }, [inputText, fontSize, fontFamily, letterSpacing, selectedEffect, selectedTexture, isTransparent, exportScale, activeTab]);

  const handleCopyText = async (textToCopy: string, id: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const ta = document.createElement('textarea');
        ta.value = textToCopy;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const handleExportPng = () => {
    if (!canvasRef.current) return;
    downloadCanvasAsPng(canvasRef.current, inputText || 'styled_name');
  };

  const copyToClipboard = async (value: string): Promise<void> => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }

    // Clipboard API may be unavailable on older browsers or non-secure origins.
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    if (!copied) {
      throw new Error('Clipboard copy is not supported in this browser.');
    }
  };

  const handleCopySvg = async () => {
    const code = generateSvgCode(
      inputText || 'NameForge',
      fontSize,
      fontFamily,
      selectedEffect,
      selectedTexture,
      isTransparent
    );
    try {
      await copyToClipboard(code);
      setSvgCopied(true);
      setTimeout(() => setSvgCopied(false), 1500);
    } catch (e) {
      console.error('Failed to copy SVG', e);
    }
  };

  const handleCopyCss = async () => {
    const currentEffect = VISUAL_EFFECTS.find((e) => e.id === selectedEffect) || VISUAL_EFFECTS[0];
    const cssCode = `/* NameForge Styled Typography: ${currentEffect.name} */
.styled-text {
  font-family: ${fontFamily};
  font-size: ${fontSize}px;
  font-weight: 800;
  letter-spacing: ${letterSpacing}px;
  background: ${currentEffect.gradientCSS};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(${currentEffect.textShadowCSS.split(',')[0]});
}`;
    try {
      await copyToClipboard(cssCode);
      setCssCopied(true);
      setTimeout(() => setCssCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div lang={settings.language} dir={settings.language === 'ar' || settings.language === 'he' ? 'rtl' : 'ltr'} className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12 animate-fade-in">
      {/* Top Breadcrumb & Return */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={() => onNavigate('home')}
          className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{getStudioLabel(settings.language, 'backHome')}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/15 border border-purple-400/30 text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{getStudioLabel(settings.language, 'title')}</span>
          </span>
        </div>
      </div>

      {/* Hero Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {getStudioLabel(settings.language, 'heroTitle')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            {getStudioLabel(settings.language, 'heroAccent')}
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          {getStudioLabel(settings.language, 'heroDescription')}
        </p>
      </div>

      {/* Main Studio Input Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#11182c] to-[#0a101d] border border-slate-700/80 shadow-2xl mb-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          <div className="flex-1 relative">
            <label htmlFor="styler-input" className="sr-only">
              {getStudioLabel(settings.language, 'inputLabel')}
            </label>
            <input
              id="styler-input"
              type="text"
              dir={settings.language === 'ar' || settings.language === 'he' ? 'rtl' : 'ltr'}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={getStudioLabel(settings.language, 'inputPlaceholder')}
              className={`w-full px-5 py-4 rounded-2xl bg-[#090d19] border border-slate-700 text-lg sm:text-xl font-bold text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition shadow-inner ${settings.language === 'ar' || settings.language === 'he' ? 'text-right pl-12' : 'text-left pr-12'}`}
              maxLength={60}
            />
            {inputText && (
              <button
                onClick={() => setInputText('')}
                className={`absolute top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-300 p-1 ${settings.language === 'ar' || settings.language === 'he' ? 'left-4' : 'right-4'}`}
                title={getStudioLabel(settings.language, 'clearInput')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick copy input button */}
          <button
            onClick={() => handleCopyText(inputText, 'input-raw')}
            className="px-6 py-4 rounded-2xl font-bold text-sm bg-purple-600 hover:bg-purple-500 text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-900/30"
          >
            {copiedId === 'input-raw' ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>{getStudioLabel(settings.language, 'copied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{getStudioLabel(settings.language, 'copyPlain')}</span>
              </>
            )}
          </button>
        </div>

        {/* Preset sample names quick pills */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-slate-400 shrink-0">
            {`${getStudioLabel(settings.language, 'quickPresets')}:`}
          </span>
          {PRESET_SAMPLE_NAMES.map((name) => (
            <button
              key={name}
              onClick={() => setInputText(name)}
              className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition shrink-0 cursor-pointer"
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('unicode')}
          className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shrink-0 border ${
            activeTab === 'unicode'
              ? 'bg-purple-600/30 text-purple-200 border-purple-500/80 shadow-md'
              : 'bg-[#0f172a] text-slate-400 hover:text-white border-slate-800'
          }`}
        >
          <Type className="w-4 h-4 text-purple-400" />
          <span>{getStudioLabel(settings.language, 'unicodeTab')}</span>
        </button>

        <button
          onClick={() => setActiveTab('effects')}
          className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shrink-0 border ${
            activeTab === 'effects'
              ? 'bg-cyan-600/30 text-cyan-200 border-cyan-500/80 shadow-md'
              : 'bg-[#0f172a] text-slate-400 hover:text-white border-slate-800'
          }`}
        >
          <Palette className="w-4 h-4 text-cyan-400" />
          <span>{getStudioLabel(settings.language, 'effectsTab')}</span>
        </button>

        <button
          onClick={() => setActiveTab('textures')}
          className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shrink-0 border ${
            activeTab === 'textures'
              ? 'bg-pink-600/30 text-pink-200 border-pink-500/80 shadow-md'
              : 'bg-[#0f172a] text-slate-400 hover:text-white border-slate-800'
          }`}
        >
          <Layers className="w-4 h-4 text-pink-400" />
          <span>{getStudioLabel(settings.language, 'texturesTab')}</span>
        </button>

        <button
          onClick={() => setActiveTab('export')}
          className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shrink-0 border ${
            activeTab === 'export'
              ? 'bg-emerald-600/30 text-emerald-200 border-emerald-500/80 shadow-md'
              : 'bg-[#0f172a] text-slate-400 hover:text-white border-slate-800'
          }`}
        >
          <Sliders className="w-4 h-4 text-emerald-400" />
          <span>{getStudioLabel(settings.language, 'exportTab')}</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: UNICODE COPYABLE FONTS
          ========================================================================= */}
      {activeTab === 'unicode' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm text-slate-400">
              {getStudioLabel(settings.language, 'unicodeHint')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {UNICODE_STYLES.map((style) => {
              const styledText = style.transform(inputText || 'NameForge');
              const isCopied = copiedId === style.id;

              return (
                <div
                  key={style.id}
                  onClick={() => handleCopyText(styledText, style.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      void handleCopyText(styledText, style.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${getStudioLabel(settings.language, 'clickToCopy')}: ${style.name}`}
                  className="p-5 rounded-2xl bg-[#0f172a] hover:bg-[#131d36] border border-slate-800 hover:border-purple-500/70 transition-all cursor-pointer group flex flex-col justify-between shadow-md hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                        {style.name}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {style.category}
                      </span>
                    </div>

                    <div className="text-xl sm:text-2xl font-medium text-white break-words py-2 group-hover:text-cyan-200 transition">
                      {styledText}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 group-hover:text-slate-400 font-medium">
                      {getStudioLabel(settings.language, 'clickToCopy')}
                    </span>
                    <button
                      className={`px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 transition ${
                        isCopied
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-purple-600/20 text-purple-300 group-hover:bg-purple-600 group-hover:text-white'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{getStudioLabel(settings.language, 'copied')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{getStudioLabel(settings.language, 'copy')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: VISUAL EFFECTS & GLOWS
          ========================================================================= */}
      {activeTab === 'effects' && (
        <div className="space-y-6">
          <p className="text-xs sm:text-sm text-slate-400">
            {getStudioLabel(settings.language, 'effectsHint')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VISUAL_EFFECTS.map((effect) => {
              const isSelected = selectedEffect === effect.id;

              return (
                <div
                  key={effect.id}
                  onClick={() => setSelectedEffect(effect.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedEffect(effect.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={effect.name}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'border-purple-500 shadow-2xl shadow-purple-950/50 bg-[#0d1424]'
                      : 'border-slate-800 hover:border-slate-700 bg-[#0c101d]'
                  }`}
                  style={{ backgroundColor: effect.bgColor }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                      {effect.name}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      {effect.category}
                    </span>
                  </div>

                  {/* Live Render Sample */}
                  <div className="py-8 text-center flex items-center justify-center">
                    <span
                      className="text-3xl sm:text-4xl font-black tracking-tight"
                      style={effect.cssStyle}
                    >
                      {inputText || 'NameForge'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">{effect.description}</p>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      {isSelected ? `✓ ${getStudioLabel(settings.language, 'selectedForStudio')}` : getStudioLabel(settings.language, 'clickToApply')}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEffect(effect.id);
                        setActiveTab('export');
                      }}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <span>{getStudioLabel(settings.language, 'openCanvas')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: TEXTURE FILLS & CLIPPING MASKS
          ========================================================================= */}
      {activeTab === 'textures' && (
        <div className="space-y-6">
          <p className="text-xs sm:text-sm text-slate-400">
            {getStudioLabel(settings.language, 'texturesHint')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEXTURE_FILLS.map((texture) => {
              const isSelected = selectedTexture === texture.id;

              return (
                <div
                  key={texture.id}
                  onClick={() => setSelectedTexture(texture.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedTexture(texture.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={texture.name}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-pink-500 shadow-2xl shadow-pink-950/40 bg-[#101526]'
                      : 'border-slate-800 hover:border-slate-700 bg-[#0a0f1d]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                        {texture.name}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {texture.patternType}
                      </span>
                    </div>

                    {/* Preview box */}
                    <div className="h-28 rounded-2xl flex items-center justify-center p-4 bg-[#05070e] border border-slate-800/80 my-3">
                      <span
                        className="text-2xl sm:text-3xl font-black tracking-tight"
                        style={{
                          background: texture.cssBackground,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))',
                        }}
                      >
                        {inputText || 'NameForge'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">
                      {isSelected ? `✓ ${getStudioLabel(settings.language, 'textureActive')}` : getStudioLabel(settings.language, 'chooseTexture')}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTexture(texture.id);
                        setActiveTab('export');
                      }}
                      className="text-xs font-bold text-pink-400 hover:text-pink-300"
                    >
                      Canvas →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: STUDIO CANVAS & HD RETINA EXPORT
          ========================================================================= */}
      {activeTab === 'export' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#0d1424] border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>{getStudioLabel(settings.language, 'typographySettings')}</span>
              </h3>
              <button
                onClick={() => {
                  setFontSize(48);
                  setLetterSpacing(2);
                  setFontFamily(FONT_OPTIONS[0].family);
                  setIsTransparent(true);
                  setExportScale(2);
                }}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                title={getStudioLabel(settings.language, 'reset')}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{getStudioLabel(settings.language, 'reset')}</span>
              </button>
            </div>

            {/* Font Family */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">{getStudioLabel(settings.language, 'fontFamily')}</label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-slate-700 text-sm font-semibold text-white focus:outline-none focus:border-cyan-500"
              >
                {FONT_OPTIONS.map((f) => (
                  <option key={f.id} value={f.family}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Font Size Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-300">{getStudioLabel(settings.language, 'fontSize')}</span>
                <span className="text-cyan-400">{fontSize}px</span>
              </div>
              <input
                type="range"
                min="24"
                max="96"
                step="2"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Letter Spacing */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-300">{getStudioLabel(settings.language, 'letterSpacing')}</span>
                <span className="text-cyan-400">{letterSpacing}px</span>
              </div>
              <input
                type="range"
                min="-2"
                max="16"
                step="1"
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Active Effect & Texture Pickers */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">{getStudioLabel(settings.language, 'visualEffect')}</label>
                <select
                  value={selectedEffect}
                  onChange={(e) => setSelectedEffect(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-xl bg-[#090e1c] border border-slate-700 text-xs font-semibold text-white focus:outline-none"
                >
                  {VISUAL_EFFECTS.map((eff) => (
                    <option key={eff.id} value={eff.id}>
                      {eff.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">{getStudioLabel(settings.language, 'textureMask')}</label>
                <select
                  value={selectedTexture}
                  onChange={(e) => setSelectedTexture(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-xl bg-[#090e1c] border border-slate-700 text-xs font-semibold text-white focus:outline-none"
                >
                  {TEXTURE_FILLS.map((tex) => (
                    <option key={tex.id} value={tex.id}>
                      {tex.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Transparent vs Dark Backing Toggle */}
            <div className="flex items-center justify-between pt-2">
              <label htmlFor="transparent-toggle" className="text-xs font-bold text-slate-300">
                {getStudioLabel(settings.language, 'transparentBg')}
              </label>
              <input
                id="transparent-toggle"
                type="checkbox"
                checked={isTransparent}
                onChange={(e) => setIsTransparent(e.target.checked)}
                className="w-5 h-5 accent-purple-500 cursor-pointer rounded"
              />
            </div>

            {/* Resolution multiplier */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-bold text-slate-300">{getStudioLabel(settings.language, 'exportQuality')}</span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((s) => (
                  <button
                    key={s}
                    onClick={() => setExportScale(s)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition ${
                      exportScale === s
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {s}x {s === 2 ? '(HD)' : s === 3 ? '(4K)' : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Live Preview & Export Action Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0a0f1d] border border-slate-800 shadow-2xl flex flex-col items-center justify-center min-h-[300px] overflow-hidden relative">
              {/* Checkerboard background for transparent canvas visual check */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, #334155 25%, transparent 25%), linear-gradient(-45deg, #334155 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #334155 75%), linear-gradient(-45deg, transparent 75%, #334155 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
              />

              {/* HTML5 Canvas Element */}
              <canvas
                ref={canvasRef}
                className="max-w-full h-auto rounded-xl shadow-2xl z-10"
              />
            </div>

            {/* Action Buttons for Export */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={handleExportPng}
                className="py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-950/40 transition"
              >
                <Download className="w-4 h-4" />
                <span>{getStudioLabel(settings.language, 'exportPng')}</span>
              </button>

              <button
                onClick={handleCopySvg}
                className="py-3 px-4 rounded-2xl bg-[#0d1424] hover:bg-[#141f38] border border-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition"
              >
                {svgCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{getStudioLabel(settings.language, 'svgCopied')}</span>
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-4 h-4 text-pink-400" />
                    <span>{getStudioLabel(settings.language, 'copySvg')}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyCss}
                className="py-3 px-4 rounded-2xl bg-[#0d1424] hover:bg-[#141f38] border border-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition"
              >
                {cssCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{getStudioLabel(settings.language, 'cssCopied')}</span>
                  </>
                ) : (
                  <>
                    <Code className="w-4 h-4 text-cyan-400" />
                    <span>{getStudioLabel(settings.language, 'copyCss')}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleStudioView;
