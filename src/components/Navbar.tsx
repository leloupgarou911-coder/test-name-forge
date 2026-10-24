import React, { useEffect, useState } from 'react';
import { Bookmark, Menu, X, ChevronDown, Settings, Search, Globe, Dices, Wand2 } from 'lucide-react';
import { ALL_GENERATORS_LIST, GENERATOR_FAMILIES_CONFIG } from '../data/generators';
import { GeneratorId } from '../types';
import { getSavedNames, subscribeToStorage } from '../services/storage';
import { Logo } from './Logo';
import { SettingsModal } from './SettingsModal';
import { LanguageSelectorModal } from './LanguageSelectorModal';
import { getAppSettings, subscribeToSettings, SUPPORTED_LANGUAGES } from '../services/settings';
import { getTranslations } from '../i18n';
import { getShellLabels } from '../i18n/shell';

interface NavbarProps {
  currentView: string;
  currentGenerator?: GeneratorId;
  onNavigate: (view: string, generatorId?: GeneratorId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  currentGenerator,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [generatorsDropdownOpen, setGeneratorsDropdownOpen] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [settings, setSettings] = useState(getAppSettings());

  const t = getTranslations(settings.language).nav;
  const navCopy: Record<string, { catalog: string; random: string; randomTitle: string; studio: string; mobileRandom: string; mobileStudio: string; menu: string; language: string; languages: string; all: string; generators: string; families: Record<string, string> }> = {
    en: { catalog: 'Catalog', random: 'Random', randomTitle: 'Open a random generator', studio: 'Style Studio', mobileRandom: 'Random generator (🎲 Surprise me)', mobileStudio: 'Style Studio (Unicode & HD Canvas)', menu: 'Menu', language: 'Language:', languages: 'languages', all: 'All', generators: 'NameForge generators', families: { fantasy: 'Fantasy & Myth', business: 'Business & Projects', creative: 'Creative & Media', innovation: 'Innovation & Tech' } },
    fr: { catalog: 'Catalogue', random: 'Aléatoire', randomTitle: 'Ouvrir un générateur aléatoire', studio: 'Atelier Style', mobileRandom: 'Générateur aléatoire (🎲 Surprenez-moi)', mobileStudio: 'Atelier Style (Unicode & Canvas HD)', menu: 'Menu', language: 'Langue :', languages: 'langues', all: 'Les', generators: 'générateurs NameForge', families: { fantasy: 'Fantasy & Mythes', business: 'Entreprises & Projets', creative: 'Création & Médias', innovation: 'Innovation & Tech' } },
    ar: { catalog: 'الفهرس', random: 'عشوائي', randomTitle: 'افتح مولّدًا عشوائيًا', studio: 'استوديو الأنماط', mobileRandom: 'مولّد عشوائي (🎲 فاجئني)', mobileStudio: 'استوديو الأنماط (Unicode وCanvas HD)', menu: 'القائمة', language: 'اللغة:', languages: 'لغات', all: 'كل', generators: 'مولدات NameForge', families: { fantasy: 'الخيال والأساطير', business: 'الأعمال والمشاريع', creative: 'الإبداع والإعلام', innovation: 'الابتكار والتقنية' } },
    es: { catalog: 'Catálogo', random: 'Aleatorio', randomTitle: 'Abrir un generador aleatorio', studio: 'Estudio de estilo', mobileRandom: 'Generador aleatorio (🎲 Sorpréndeme)', mobileStudio: 'Estudio de estilo (Unicode y Canvas HD)', menu: 'Menú', language: 'Idioma:', languages: 'idiomas', all: 'Todos', generators: 'generadores NameForge', families: { fantasy: 'Fantasía y mitos', business: 'Empresas y proyectos', creative: 'Creación y medios', innovation: 'Innovación y tecnología' } },
    de: { catalog: 'Katalog', random: 'Zufällig', randomTitle: 'Zufälligen Generator öffnen', studio: 'Style-Studio', mobileRandom: 'Zufälliger Generator (🎲 Überrasch mich)', mobileStudio: 'Style-Studio (Unicode & HD-Canvas)', menu: 'Menü', language: 'Sprache:', languages: 'Sprachen', all: 'Alle', generators: 'NameForge-Generatoren', families: { fantasy: 'Fantasy & Mythen', business: 'Unternehmen & Projekte', creative: 'Kreatives & Medien', innovation: 'Innovation & Technik' } },
    it: { catalog: 'Catalogo', random: 'Casuale', randomTitle: 'Apri un generatore casuale', studio: 'Studio di stile', mobileRandom: 'Generatore casuale (🎲 Sorprendimi)', mobileStudio: 'Studio di stile (Unicode e Canvas HD)', menu: 'Menu', language: 'Lingua:', languages: 'lingue', all: 'Tutti', generators: 'generatori NameForge', families: { fantasy: 'Fantasy e miti', business: 'Aziende e progetti', creative: 'Creatività e media', innovation: 'Innovazione e tecnologia' } },
    pt: { catalog: 'Catálogo', random: 'Aleatório', randomTitle: 'Abrir um gerador aleatório', studio: 'Estúdio de estilo', mobileRandom: 'Gerador aleatório (🎲 Surpreenda-me)', mobileStudio: 'Estúdio de estilo (Unicode e Canvas HD)', menu: 'Menu', language: 'Idioma:', languages: 'idiomas', all: 'Todos', generators: 'geradores NameForge', families: { fantasy: 'Fantasia e mitos', business: 'Empresas e projetos', creative: 'Criação e mídia', innovation: 'Inovação e tecnologia' } },
    tr: { catalog: 'Katalog', random: 'Rastgele', randomTitle: 'Rastgele oluşturucu aç', studio: 'Stil Stüdyosu', mobileRandom: 'Rastgele oluşturucu (🎲 Şaşırt beni)', mobileStudio: 'Stil Stüdyosu (Unicode ve HD Canvas)', menu: 'Menü', language: 'Dil:', languages: 'dil', all: 'Tümü', generators: 'NameForge oluşturucuları', families: { fantasy: 'Fantastik ve Mitler', business: 'İşletme ve Projeler', creative: 'Yaratıcılık ve Medya', innovation: 'Yenilik ve Teknoloji' } },
    ja: { catalog: 'カタログ', random: 'ランダム', randomTitle: 'ランダムなジェネレーターを開く', studio: 'スタイルスタジオ', mobileRandom: 'ランダム生成器 (🎲 おまかせ)', mobileStudio: 'スタイルスタジオ (Unicode & HD Canvas)', menu: 'メニュー', language: '言語：', languages: '言語', all: 'すべて', generators: 'NameForge ジェネレーター', families: { fantasy: 'ファンタジーと神話', business: 'ビジネスとプロジェクト', creative: '創作とメディア', innovation: 'イノベーションと技術' } },
    ko: { catalog: '카탈로그', random: '무작위', randomTitle: '무작위 생성기 열기', studio: '스타일 스튜디오', mobileRandom: '무작위 생성기 (🎲 놀라게 해줘)', mobileStudio: '스타일 스튜디오 (Unicode 및 HD Canvas)', menu: '메뉴', language: '언어:', languages: '개 언어', all: '전체', generators: 'NameForge 생성기', families: { fantasy: '판타지 및 신화', business: '비즈니스 및 프로젝트', creative: '창작 및 미디어', innovation: '혁신 및 기술' } },
  };
  const navText = navCopy[settings.language] || navCopy.en;

  const updateCount = () => {
    const list = getSavedNames();
    setSavedCount(list.length);
  };

  useEffect(() => {
    updateCount();
    const unsubStorage = subscribeToStorage(updateCount);
    const unsubSettings = subscribeToSettings((s) => setSettings(s));
    return () => {
      unsubStorage();
      unsubSettings();
    };
  }, []);

  const currentLangMeta = SUPPORTED_LANGUAGES.find((l) => l.code === settings.language) || SUPPORTED_LANGUAGES[0];

  return (
    <>
      {showSettingsModal && (
        <SettingsModal
          onClose={() => setShowSettingsModal(false)}
          onSettingsChanged={(s) => setSettings(s)}
        />
      )}

      <LanguageSelectorModal
        isOpen={showLangModal}
        onClose={() => setShowLangModal(false)}
        onLanguageSelected={(code) => {
          setSettings(getAppSettings());
        }}
      />

      <header className="sticky top-0 z-40 bg-[#070912]/95 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="cursor-pointer text-left focus:outline-none py-1"
            aria-label={`NameForge ${t.home}`}
          >
            <Logo size="lg" />
          </button>

          {/* Desktop Nav */}
          <nav aria-label={getShellLabels(settings.language).mainNavigation} className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-semibold transition cursor-pointer ${
                currentView === 'home' && !currentGenerator
                  ? 'text-white border-b-2 border-purple-500 pb-1'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.home}
            </button>

            {/* Generators Dropdown with all 4 families */}
            <div className="relative">
              <button
                onClick={() => setGeneratorsDropdownOpen(!generatorsDropdownOpen)}
                aria-expanded={generatorsDropdownOpen}
                aria-haspopup="true"
                className={`text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer py-1.5 ${
                  currentView === 'generators' || currentView === 'generator-detail'
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{t.generators} ({ALL_GENERATORS_LIST.length})</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {generatorsDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setGeneratorsDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-[520px] rounded-2xl bg-[#0b1020] border border-slate-800 shadow-2xl p-4 z-30 animate-fade-in max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        {navText.all} {ALL_GENERATORS_LIST.length} {navText.generators}
                      </span>
                      <button
                        onClick={() => {
                          onNavigate('generators');
                          setGeneratorsDropdownOpen(false);
                        }}
                        className="text-xs text-purple-400 hover:text-purple-300 font-semibold cursor-pointer"
                      >
                        {t.allGenerators.replace(/\b134\b/g, String(ALL_GENERATORS_LIST.length))} →
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {GENERATOR_FAMILIES_CONFIG.filter((f) => f.id !== 'all').map((fam) => {
                        const items = ALL_GENERATORS_LIST.filter((g) => g.category === fam.id);
                        return (
                          <div key={fam.id} className="space-y-1.5">
                            <div className="text-[11px] font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1">
                              <span>{fam.icon}</span>
                              <span>{navText.families[fam.id] || fam.label} ({items.length})</span>
                            </div>
                            <div className="space-y-0.5">
                              {items.slice(0, 5).map((gen) => (
                                <button
                                  key={gen.id}
                                  onClick={() => {
                                    onNavigate('generator-detail', gen.id);
                                    setGeneratorsDropdownOpen(false);
                                  }}
                                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition flex items-center gap-2 cursor-pointer"
                                >
                                  <span>{gen.icon}</span>
                                  <span className="truncate">{gen.shortTitle}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Catalog Link */}
            <button
              onClick={() => onNavigate('generators')}
              className={`text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                currentView === 'generators'
                  ? 'text-white border-b-2 border-purple-500 pb-1'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>{navText.catalog}</span>
            </button>

            {/* Random Generator Quick Button */}
            <button
              onClick={() => {
                const randomGen = ALL_GENERATORS_LIST[Math.floor(Math.random() * ALL_GENERATORS_LIST.length)];
                onNavigate('generator-detail', randomGen.id);
              }}
              className="text-xs font-bold text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-2.5 py-1.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              title={settings.language === 'fr' ? `${navText.randomTitle} parmi les ${ALL_GENERATORS_LIST.length}` : `${navText.randomTitle} · ${ALL_GENERATORS_LIST.length}`}
            >
              <Dices className="w-3.5 h-3.5 text-amber-400" />
              <span>🎲 {navText.random}</span>
            </button>

            {/* Typography / Style Studio */}
            <button
              onClick={() => onNavigate('style-studio')}
              className={`text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                currentView === 'style-studio'
                  ? 'text-white border-b-2 border-purple-500 pb-1'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wand2 className="w-3.5 h-3.5 text-pink-400" />
              <span>{navText.studio}</span>
            </button>

            {/* My Names with Live Counter */}
            <button
              onClick={() => onNavigate('my-names')}
              className={`text-sm font-semibold flex items-center gap-2 transition cursor-pointer ${
                currentView === 'my-names'
                  ? 'text-white border-b-2 border-purple-500 pb-1'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bookmark className="w-4 h-4 text-purple-400" />
              <span>{t.myNames}</span>
              {savedCount > 0 && (
                <span className="px-2 py-0.5 text-xs font-bold bg-purple-600 text-white rounded-full">
                  {savedCount}
                </span>
              )}
            </button>
          </nav>

          {/* Right Header Tools (Settings & Quick Language) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Language Trigger */}
            <button
              onClick={() => setShowLangModal(true)}
              className="h-10 px-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 text-xs sm:text-sm font-bold text-slate-200 hover:text-white flex items-center gap-2 transition cursor-pointer shadow-sm hover:border-purple-500/60"
              title={settings.language === 'fr' ? `Changer la langue (${SUPPORTED_LANGUAGES.length} langues disponibles)` : `Change language (${SUPPORTED_LANGUAGES.length} languages available)`}
              aria-label={settings.language === 'fr' ? 'Changer la langue' : 'Change language'}
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-base">{currentLangMeta.flag}</span>
              <span className="font-semibold text-xs text-slate-300 hidden xl:inline">{currentLangMeta.native}</span>
              <span className="uppercase text-xs font-bold text-purple-300 xl:hidden">{currentLangMeta.code}</span>
            </button>

            {/* Settings Trigger */}
            <button
              onClick={() => setShowSettingsModal(true)}
              className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition cursor-pointer"
              title={t.settings}
              aria-label={t.settings}
            >
              <Settings className="w-4.5 h-4.5 text-purple-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setShowSettingsModal(true)}
              className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300"
              aria-label={t.settings}
            >
              <Settings className="w-4 h-4 text-purple-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="nameforge-mobile-menu"
              className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-white"
              aria-label={navText.menu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div id="nameforge-mobile-menu" className="md:hidden border-b border-slate-800 bg-[#090d1c] px-4 pt-3 pb-6 space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {t.home}
            </button>

            <button
              onClick={() => {
                onNavigate('generators');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-between"
            >
              <span>{t.allGenerators.replace(/\b134\b/g, String(ALL_GENERATORS_LIST.length))}</span>
              <span className="text-xs bg-purple-600/30 text-purple-300 px-2 py-0.5 rounded-full font-bold">
                {ALL_GENERATORS_LIST.length}
              </span>
            </button>

            <button
              onClick={() => {
                const randomGen = ALL_GENERATORS_LIST[Math.floor(Math.random() * ALL_GENERATORS_LIST.length)];
                onNavigate('generator-detail', randomGen.id);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-amber-300 hover:bg-slate-800 flex items-center gap-2"
            >
              <Dices className="w-4 h-4 text-amber-400" />
              <span>{navText.mobileRandom}</span>
            </button>

            <button
              onClick={() => {
                onNavigate('style-studio');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-pink-300 hover:bg-slate-800 flex items-center gap-2"
            >
              <Wand2 className="w-4 h-4 text-pink-400" />
              <span>{navText.mobileStudio}</span>
            </button>

            <button
              onClick={() => {
                onNavigate('my-names');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-purple-400" />
                <span>{t.myNames}</span>
              </span>
              {savedCount > 0 && (
                <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowLangModal(true);
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-cyan-300 hover:bg-slate-800 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{navText.language} {currentLangMeta.flag} {currentLangMeta.native}</span>
              </span>
              <span className="text-xs bg-cyan-600/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold">
                {SUPPORTED_LANGUAGES.length} {navText.languages}
              </span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowSettingsModal(true);
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2"
            >
              <Settings className="w-4 h-4 text-purple-400" />
              <span>{t.settings}</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};
