import React, { useEffect, useState } from 'react';
import { Search, Sparkles, ArrowRight, Dices } from 'lucide-react';
import { ALL_GENERATORS_LIST, GENERATOR_FAMILIES_CONFIG } from '../data/generators';
import { GeneratorId, LanguageCode } from '../types';
import { getAppSettings, subscribeToSettings } from '../services/settings';
import { getLocalizedGeneratorDescription } from '../i18n/generatorContent';
import { normalizeSearchText } from '../services/search';

interface GeneratorsListViewProps {
  onNavigate: (view: string, generatorId?: GeneratorId) => void;
}

const CATALOGUE_COPY: Partial<Record<LanguageCode, {
  eyebrow: string; title: string; description: string; search: string;
  random: string; randomTitle: string; shown: string; of: string; clear: string;
  forge: string; empty: string; reset: string; generatorWord: string; categories: Record<string, string>;
}>> = {
  en: { eyebrow: 'COMPLETE CATALOGUE OF', title: 'All Name Generators', description: 'Explore specialized tools for brands, businesses, novels, anime heroes, RPG campaigns, science, technology, and imaginary worlds.', search: 'Search generators (e.g. brand, dragon, anime)...', random: '🎲 Random', randomTitle: 'Open a random generator', shown: 'Showing', of: 'of', clear: 'Clear search', forge: 'Forge', empty: 'No generators match', reset: 'Reset filters', generatorWord: 'generators', categories: { all: 'All', fantasy: 'Fantasy & Myth', business: 'Business & Projects', creative: 'Creative & Media', innovation: 'Innovation & Tech' } },
  fr: { eyebrow: 'CATALOGUE COMPLET DES', title: 'Tous les générateurs de noms', description: 'Explorez nos outils spécialisés pour les marques, commerces, romans, héros d’anime, campagnes RPG, sciences, technologies et univers imaginaires.', search: 'Rechercher un générateur (ex. marque, dragon, anime)...', random: '🎲 Aléatoire', randomTitle: 'Ouvrir un générateur aléatoire', shown: 'Affichage de', of: 'sur', clear: 'Effacer la recherche', forge: 'Forger', empty: 'Aucun générateur ne correspond à', reset: 'Réinitialiser les filtres', generatorWord: 'générateurs', categories: { all: 'Tous', fantasy: 'Fantasy & Mythes', business: 'Entreprises & Projets', creative: 'Création & Médias', innovation: 'Innovation & Tech' } },
  ar: { eyebrow: 'الفهرس الكامل لـ', title: 'جميع مولدات الأسماء', description: 'اكتشف أدوات متخصصة للعلامات التجارية والشركات والروايات وأبطال الأنمي وحملات تقمص الأدوار والعلوم والتقنية والعوالم الخيالية.', search: 'ابحث عن مولّد (مثل علامة تجارية أو تنين أو أنمي)...', random: '🎲 عشوائي', randomTitle: 'افتح مولّدًا عشوائيًا', shown: 'عرض', of: 'من', clear: 'مسح البحث', forge: 'أنشئ', empty: 'لا توجد مولدات تطابق', reset: 'إعادة ضبط عوامل التصفية', generatorWord: 'مولدات', categories: { all: 'الكل', fantasy: 'الخيال والأساطير', business: 'الأعمال والمشاريع', creative: 'الإبداع والإعلام', innovation: 'الابتكار والتقنية' } },
  es: { eyebrow: 'CATÁLOGO COMPLETO DE', title: 'Todos los generadores de nombres', description: 'Explora herramientas especializadas para marcas, negocios, novelas, héroes de anime, campañas de rol, ciencia, tecnología y mundos imaginarios.', search: 'Buscar generadores (p. ej., marca, dragón, anime)...', random: '🎲 Aleatorio', randomTitle: 'Abrir un generador aleatorio', shown: 'Mostrando', of: 'de', clear: 'Borrar búsqueda', forge: 'Crear', empty: 'Ningún generador coincide con', reset: 'Restablecer filtros', generatorWord: 'generadores', categories: { all: 'Todos', fantasy: 'Fantasía y mitos', business: 'Empresas y proyectos', creative: 'Creación y medios', innovation: 'Innovación y tecnología' } },
  de: { eyebrow: 'VOLLSTÄNDIGER KATALOG MIT', title: 'Alle Namensgeneratoren', description: 'Entdecke spezialisierte Tools für Marken, Unternehmen, Romane, Anime-Helden, RPG-Kampagnen, Wissenschaft, Technologie und Fantasiewelten.', search: 'Generatoren suchen (z. B. Marke, Drache, Anime)...', random: '🎲 Zufällig', randomTitle: 'Zufälligen Generator öffnen', shown: 'Angezeigt', of: 'von', clear: 'Suche löschen', forge: 'Erstellen', empty: 'Keine Generatoren gefunden für', reset: 'Filter zurücksetzen', generatorWord: 'Generatoren', categories: { all: 'Alle', fantasy: 'Fantasy & Mythen', business: 'Unternehmen & Projekte', creative: 'Kreatives & Medien', innovation: 'Innovation & Technik' } },
  it: { eyebrow: 'CATALOGO COMPLETO DI', title: 'Tutti i generatori di nomi', description: 'Esplora strumenti specializzati per marchi, aziende, romanzi, eroi anime, campagne RPG, scienza, tecnologia e mondi immaginari.', search: 'Cerca generatori (es. marchio, drago, anime)...', random: '🎲 Casuale', randomTitle: 'Apri un generatore casuale', shown: 'Visualizzati', of: 'di', clear: 'Cancella ricerca', forge: 'Crea', empty: 'Nessun generatore corrisponde a', reset: 'Reimposta filtri', generatorWord: 'generatori', categories: { all: 'Tutti', fantasy: 'Fantasy e miti', business: 'Aziende e progetti', creative: 'Creatività e media', innovation: 'Innovazione e tecnologia' } },
  pt: { eyebrow: 'CATÁLOGO COMPLETO DE', title: 'Todos os geradores de nomes', description: 'Explore ferramentas especializadas para marcas, empresas, romances, heróis de anime, campanhas de RPG, ciência, tecnologia e mundos imaginários.', search: 'Pesquisar geradores (ex.: marca, dragão, anime)...', random: '🎲 Aleatório', randomTitle: 'Abrir um gerador aleatório', shown: 'A mostrar', of: 'de', clear: 'Limpar pesquisa', forge: 'Criar', empty: 'Nenhum gerador corresponde a', reset: 'Redefinir filtros', generatorWord: 'geradores', categories: { all: 'Todos', fantasy: 'Fantasia e mitos', business: 'Empresas e projetos', creative: 'Criação e mídia', innovation: 'Inovação e tecnologia' } },
  tr: { eyebrow: 'TAM KATALOG:', title: 'Tüm İsim Oluşturucular', description: 'Markalar, işletmeler, romanlar, anime kahramanları, RPG kampanyaları, bilim, teknoloji ve hayalî dünyalar için özel araçları keşfedin.', search: 'Oluşturucu ara (ör. marka, ejderha, anime)...', random: '🎲 Rastgele', randomTitle: 'Rastgele oluşturucu aç', shown: 'Gösterilen', of: '/', clear: 'Aramayı temizle', forge: 'Oluştur', empty: 'Şununla eşleşen oluşturucu yok:', reset: 'Filtreleri sıfırla', generatorWord: 'oluşturucu', categories: { all: 'Tümü', fantasy: 'Fantastik ve Mitler', business: 'İşletme ve Projeler', creative: 'Yaratıcılık ve Medya', innovation: 'Yenilik ve Teknoloji' } },
  ja: { eyebrow: '完全なカタログ：', title: 'すべての名前ジェネレーター', description: 'ブランド、企業、小説、アニメのヒーロー、RPGキャンペーン、科学、技術、想像上の世界向けの専用ツールを探しましょう。', search: 'ジェネレーターを検索（例：ブランド、ドラゴン、アニメ）...', random: '🎲 ランダム', randomTitle: 'ランダムなジェネレーターを開く', shown: '表示中', of: '/', clear: '検索をクリア', forge: '作成', empty: '一致するジェネレーターはありません：', reset: 'フィルターをリセット', generatorWord: 'ジェネレーター', categories: { all: 'すべて', fantasy: 'ファンタジーと神話', business: 'ビジネスとプロジェクト', creative: '創作とメディア', innovation: 'イノベーションと技術' } },
  ko: { eyebrow: '전체 카탈로그:', title: '모든 이름 생성기', description: '브랜드, 기업, 소설, 애니메이션 영웅, RPG 캠페인, 과학, 기술 및 상상 속 세계를 위한 전문 도구를 탐색하세요.', search: '생성기 검색 (예: 브랜드, 드래곤, 애니메이션)...', random: '🎲 무작위', randomTitle: '무작위 생성기 열기', shown: '표시', of: '/', clear: '검색 지우기', forge: '생성', empty: '일치하는 생성기가 없습니다:', reset: '필터 초기화', generatorWord: '생성기', categories: { all: '전체', fantasy: '판타지 및 신화', business: '비즈니스 및 프로젝트', creative: '창작 및 미디어', innovation: '혁신 및 기술' } },
};

const EN_COPY = CATALOGUE_COPY.en!;

export const GeneratorsListView: React.FC<GeneratorsListViewProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [language, setLanguage] = useState<LanguageCode>(() => getAppSettings().language);

  useEffect(() => subscribeToSettings((settings) => setLanguage(settings.language)), []);

  const t = CATALOGUE_COPY[language] || EN_COPY;
  const categoryLabel = (id: string, fallback: string) => t.categories[id] || fallback;
  const filtered = ALL_GENERATORS_LIST.filter((gen) => {
    const query = normalizeSearchText(search);
    const searchableFields = [
      gen.id,
      gen.title,
      getLocalizedGeneratorDescription(gen, language),
      gen.shortTitle,
      gen.badge,
      gen.generatorTitle,
      gen.generatorSubtitle,
      gen.guideTitle,
      gen.category,
    ];
    const matchesSearch = !query || searchableFields.some((field) =>
      normalizeSearchText(String(field || '')).includes(query)
    );
    return matchesSearch && (selectedCategory === 'all' || gen.category === selectedCategory);
  });

  return (
    <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-extrabold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t.eyebrow} {ALL_GENERATORS_LIST.length} {t.generatorWord}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">{t.title}</h1>
        <p className="text-sm sm:text-base text-slate-300">{t.description}</p>
      </div>

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0f172a] border border-slate-800">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input type="text" aria-label={t.search} placeholder={t.search} value={search} onChange={(e) => setSearch(e.target.value)} className="w-full h-10 pl-10 pr-3 bg-[#0a0f1d] border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 shadow-inner" />
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto justify-end">
            <button onClick={() => {
              const randomGen = ALL_GENERATORS_LIST[Math.floor(Math.random() * ALL_GENERATORS_LIST.length)];
              onNavigate('generator-detail', randomGen.id);
            }} className="py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-purple-600/20 hover:from-amber-500/30 hover:to-purple-600/30 text-amber-300 border border-amber-500/40 cursor-pointer" title={t.randomTitle}>
              <Dices className="w-3.5 h-3.5 text-amber-400" /><span>{t.random}</span>
            </button>
            {GENERATOR_FAMILIES_CONFIG.map((cat) => (
              <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} aria-pressed={selectedCategory === cat.id} className={`py-1.5 px-3 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${selectedCategory === cat.id ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' : 'bg-[#10182c] text-slate-400 hover:text-white border border-slate-700/80'}`}>
                <span>{cat.icon}</span><span>{categoryLabel(cat.id, cat.label)}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-2 text-xs text-slate-400 font-medium">
          <span>{t.shown} <strong className="text-white">{filtered.length}</strong> {t.of} {ALL_GENERATORS_LIST.length} {t.generatorWord}</span>
          {search && <button onClick={() => setSearch('')} className="text-purple-400 hover:underline cursor-pointer text-[11px]">{t.clear}</button>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((gen) => (
          <article key={gen.id} className="group relative p-6 rounded-3xl bg-gradient-to-b from-[#101728] to-[#0a0f1d] border border-slate-800 hover:border-purple-500/60 transition-all duration-200 hover:-translate-y-1 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl group-hover:scale-110 transition">{gen.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">{gen.badge}</span>
              </div>
              <h2 className="text-lg font-black text-white group-hover:text-cyan-300 transition mb-2">{gen.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed min-h-[48px] line-clamp-3">{getLocalizedGeneratorDescription(gen, language)}</p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase">{categoryLabel(gen.category, gen.category)}</span>
              <button onClick={() => onNavigate('generator-detail', gen.id)} className="py-1.5 px-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-md shadow-purple-600/30">
                <span>{t.forge}</span><ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          <p className="text-sm">{t.empty} « {search} ».</p>
          <button onClick={() => { setSearch(''); setSelectedCategory('all'); }} className="mt-3 text-xs text-purple-400 hover:underline cursor-pointer">{t.reset}</button>
        </div>
      )}
    </div>
  );
};
