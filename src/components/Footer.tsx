import React from 'react';
import { ALL_GENERATORS_LIST, GENERATOR_FAMILIES_CONFIG } from '../data/generators';
import { GeneratorId } from '../types';
import { Logo } from './Logo';
import { getAppSettings } from '../services/settings';
import { getTranslations } from '../i18n';
import { ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, generatorId?: GeneratorId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const settings = getAppSettings();
  const t = getTranslations(settings.language).footer;
  const footerLabels: Record<string, { studio: string; favorites: string; catalog: string; home: string; all: string; names: string; generators: string; styles: string; free: string }> = {
    fr: { studio: '{labels.studio}', favorites: '{labels.favorites}', catalog: 'Catalogue', home: 'Accueil', all: 'Tous les générateurs', names: 'Mes noms', generators: 'Générateurs', styles: 'Styles', free: '100 % Gratuit & local' },
    en: { studio: 'Style Studio (Unicode & Canvas)', favorites: 'Favorites & Notes', catalog: 'Catalog', home: 'Home', all: 'All generators', names: 'My names', generators: 'Generators', styles: 'Styles', free: '100% Free & local' },
    ar: { studio: 'استوديو الأنماط (Unicode وCanvas)', favorites: 'المفضلة والملاحظات', catalog: 'الفهرس', home: 'الرئيسية', all: 'جميع المولدات', names: 'أسمائي', generators: 'مولدات الأسماء', styles: 'أنماط', free: 'مجاني ومحلي 100٪' },
    es: { studio: 'Estudio de estilo (Unicode y Canvas)', favorites: 'Favoritos y notas', catalog: 'Catálogo', home: 'Inicio', all: 'Todos los generadores', names: 'Mis nombres', generators: 'Generadores', styles: 'Estilos', free: '100 % gratis y local' },
    de: { studio: 'Style-Studio (Unicode & Canvas)', favorites: 'Favoriten & Notizen', catalog: 'Katalog', home: 'Startseite', all: 'Alle Generatoren', names: 'Meine Namen', generators: 'Generatoren', styles: 'Stile', free: '100 % kostenlos & lokal' },
    it: { studio: 'Studio Stile (Unicode & Canvas)', favorites: 'Preferiti e note', catalog: 'Catalogo', home: 'Home', all: 'Tutti i generatori', names: 'I miei nomi', generators: 'Generatori', styles: 'Stili', free: '100% gratuito e locale' },
    pt: { studio: 'Estúdio de estilo (Unicode & Canvas)', favorites: 'Favoritos e notas', catalog: 'Catálogo', home: 'Início', all: 'Todos os geradores', names: 'Meus nomes', generators: 'Geradores', styles: 'Estilos', free: '100% gratuito e local' },
    tr: { studio: 'Stil Stüdyosu (Unicode & Canvas)', favorites: 'Favoriler ve Notlar', catalog: 'Katalog', home: 'Ana sayfa', all: 'Tüm oluşturucular', names: 'İsimlerim', generators: 'Oluşturucular', styles: 'Stiller', free: '%100 ücretsiz ve yerel' },
    ja: { studio: 'スタイルスタジオ (Unicode & Canvas)', favorites: 'お気に入りとメモ', catalog: 'カタログ', home: 'ホーム', all: 'すべてのジェネレーター', names: 'マイネーム', generators: 'ジェネレーター', styles: 'スタイル', free: '完全無料・ローカル' },
    ko: { studio: '스타일 스튜디오 (Unicode & Canvas)', favorites: '즐겨찾기 및 메모', catalog: '카탈로그', home: '홈', all: '모든 생성기', names: '내 이름', generators: '생성기', styles: '스타일', free: '100% 무료 및 로컬' },
  };
  const labels = footerLabels[settings.language] || footerLabels.en;

  const fantasyGens = ALL_GENERATORS_LIST.filter((g) => g.category === 'fantasy').slice(0, 5);
  const businessGens = ALL_GENERATORS_LIST.filter((g) => g.category === 'business').slice(0, 5);
  const creativeGens = ALL_GENERATORS_LIST.filter((g) => g.category === 'creative').slice(0, 5);

  return (
    <footer className="border-t border-white/5 bg-[#05070e] py-14 mt-20 text-slate-400">
      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="cursor-pointer text-left focus:outline-none"
            >
              <Logo size="lg" />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.tagline}
            </p>
            <div className="text-xs text-purple-400 font-semibold pt-1">
              ✨ {ALL_GENERATORS_LIST.length} {labels.generators} • 300+ {labels.styles} • {labels.free}
            </div>
            {/* Legal Notice */}
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2 max-w-md">
              <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{t.legalNote}</span>
            </div>
          </div>

          {/* Fantasy Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.exploreTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {fantasyGens.map((gen) => (
                <li key={gen.id}>
                  <button
                    onClick={() => onNavigate('generator-detail', gen.id)}
                    className="hover:text-purple-300 transition flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span>{gen.icon}</span>
                    <span>{gen.shortTitle}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.businessTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {businessGens.map((gen) => (
                <li key={gen.id}>
                  <button
                    onClick={() => onNavigate('generator-detail', gen.id)}
                    className="hover:text-purple-300 transition flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span>{gen.icon}</span>
                    <span>{gen.shortTitle}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Creative & Tools Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.creativeTitle}
            </h4>
            <ul className="space-y-2 text-xs mb-6">
              {creativeGens.map((gen) => (
                <li key={gen.id}>
                  <button
                    onClick={() => onNavigate('generator-detail', gen.id)}
                    className="hover:text-purple-300 transition flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span>{gen.icon}</span>
                    <span>{gen.shortTitle}</span>
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
              {t.toolsTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('style-studio')}
                  className="hover:text-pink-300 transition flex items-center gap-1.5 cursor-pointer text-pink-400"
                >
                  <span>✨</span>
                  <span>Atelier Style (Unicode & Canvas)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('my-names')}
                  className="hover:text-purple-300 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>📁</span>
                  <span>Mes Favoris & Notes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('generators')}
                  className="hover:text-purple-300 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>🔍</span>
                  <span>{labels.catalog} ({ALL_GENERATORS_LIST.length})</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} NameForge. {t.rights}
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-slate-400 transition cursor-pointer"
            >
              {labels.home}
            </button>
            <button
              onClick={() => onNavigate('generators')}
              className="hover:text-slate-400 transition cursor-pointer"
            >
              {labels.all}
            </button>
            <button
              onClick={() => onNavigate('my-names')}
              className="hover:text-slate-400 transition cursor-pointer"
            >
              {labels.names}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
