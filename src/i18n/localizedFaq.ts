import { LanguageCode } from '../types';
import { FAQItem, COMPREHENSIVE_FAQ_LIST } from '../data/faqData';

/**
 * FAQ content is authored in French in faqData.ts. Keep explicit translations
 * here instead of silently showing French while English is selected.
 * Untranslated locales deliberately use the authored source until their reviewed
 * translations are added; see the localization audit tests.
 */
const EN_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: 'How does a name generator like NameForge work?', a: 'NameForge combines linguistic roots, harmonious syllables, and morphology rules tailored to each universe (fantasy, tech, branding, and storytelling). Unlike basic random generators, its naming engine considers rhythm, pronunciation, and thematic relevance.' },
  { q: 'How do I choose a name that truly fits my project?', a: 'First define the tone you want (prestigious, sharp, mysterious, or friendly). Say the name aloud to test it. Make sure its length fits the intended use: short for a mobile app, or more evocative for a book series.' },
  { q: 'How can I create an original, memorable name?', a: 'Try unexpected syllable combinations or subtle portmanteaus. Avoid tired clichés and unnecessary numbers. Choose the Short option for punchy names and Medium for a balanced result.' },
  { q: 'How can I avoid similar names across generations?', a: 'NameForge keeps a local rolling memory of the 100 most recently generated names. During later generations, recent suggestions are filtered out to encourage fresher, more varied results.' },
  { q: 'Can I generate names with different languages and sounds?', a: 'Yes. Each generator has a Generation Language selector (French, English, Japanese/anime, Arabic/oriental, Latin/elf, Nordic, and tech). It changes the phonetic roots used without changing the website interface language.' },
  { q: 'How do style and length settings work?', a: 'Length affects name structure: Short generally produces one or two punchy syllables, Medium aims for two or three balanced syllables, and Long favors compound or narrative names. Style adjusts the dominant sounds and intended archetype.' },
  { q: 'How do I copy, save, and find my names again?', a: 'Each name card has a one-click Copy button, a Save button for favorites, and a Like button. Find selected names in My Names from the navigation bar.' },
  { q: 'How do favorites, collections, and private notes work?', a: 'In My Names, create themed collections to group names by project. You can also add private notes to individual names to remember an idea or intended role.' },
  { q: 'How are stars and top-name rankings calculated?', a: 'You can rate each suggestion from one to five stars. The top-name list highlights your highest-rated creations in this workspace without fabricating votes.' },
  { q: 'Can I export or import my name lists?', a: 'Yes. In My Names, export saved items as JSON (including notes and collections) or CSV for spreadsheets. You can also safely restore a previous JSON backup.' },
  { q: 'Is my personal data stored on my device?', a: 'NameForge works locally: no user account or password is required. Your saved names, notes, and preferences stay in your browser storage.' },
  { q: 'Are generated names guaranteed to be unique worldwide?', a: 'The engine combines many roots to produce a wide range of uncommon combinations. However, no algorithm can guarantee absolute worldwide uniqueness; a name may already exist by chance in another language.' },
  { q: 'Can I use a generated name for my company or product?', a: 'The suggestions are provided royalty-free for creative use. Before using a name commercially, check relevant trademark registers for your sector and jurisdiction, such as the EUIPO or USPTO.' },
  { q: 'How do I check whether an internet domain is available?', a: 'Enter your chosen name at a domain registrar to check whether extensions such as .com, .fr, or .io are available for registration.' },
  { q: 'Should I check registered trademarks before using a name?', a: 'Yes. This is essential before investing in branding, a logo, or company registration. NameForge does not certify legal availability; it provides inspiration.' },
  { q: 'Does the website work on phones and tablets?', a: 'Yes. The responsive interface is designed for use on smartphones, tablets, and desktop screens.' },
  { q: 'What if I do not like a result?', a: 'Select Forge new names or press G on your keyboard. You can also change the archetype, length, or generation language to explore a different sound.' },
  { q: 'How can I report a problem or suggest an improvement?', a: 'You can share suggestions through the project repository or propose new archetypes to consider for future versions.' },
];

export function getLocalizedFaq(language: LanguageCode): FAQItem[] {
  if (language !== 'en') return COMPREHENSIVE_FAQ_LIST;
  return COMPREHENSIVE_FAQ_LIST.map((item, index) => ({
    ...item,
    ...(EN_FAQ[index] || {}),
  }));
}

export const FAQ_TRANSLATED_LANGUAGES = ['en'] as const;
