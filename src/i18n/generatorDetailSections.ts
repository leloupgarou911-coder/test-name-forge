export interface GeneratorDetailSectionLabels {
  guide: string;
  examples: string;
  faq: string;
}

const SECTION_LABELS: Record<string, GeneratorDetailSectionLabels> = {
  en: { guide: 'Guide', examples: 'Ideas & use cases', faq: 'Frequently asked questions' },
  fr: { guide: 'Guide pratique', examples: 'Idées & usages', faq: 'Questions fréquentes' },
  ar: { guide: 'دليل الاستخدام', examples: 'أفكار واستخدامات', faq: 'الأسئلة الشائعة' },
  es: { guide: 'Guía práctica', examples: 'Ideas y usos', faq: 'Preguntas frecuentes' },
  de: { guide: 'Praktischer Leitfaden', examples: 'Ideen und Anwendungen', faq: 'Häufig gestellte Fragen' },
  it: { guide: 'Guida pratica', examples: 'Idee e utilizzi', faq: 'Domande frequenti' },
  pt: { guide: 'Guia prático', examples: 'Ideias e usos', faq: 'Perguntas frequentes' },
  tr: { guide: 'Kullanım rehberi', examples: 'Fikirler ve kullanım alanları', faq: 'Sık sorulan sorular' },
  ja: { guide: '使い方ガイド', examples: 'アイデアと活用例', faq: 'よくある質問' },
  ko: { guide: '사용 가이드', examples: '아이디어 및 활용 사례', faq: '자주 묻는 질문' },
  zh: { guide: '使用指南', examples: '创意与应用场景', faq: '常见问题' },
  ru: { guide: 'Практическое руководство', examples: 'Идеи и применение', faq: 'Часто задаваемые вопросы' },
  hi: { guide: 'उपयोग मार्गदर्शिका', examples: 'विचार और उपयोग', faq: 'अक्सर पूछे जाने वाले प्रश्न' },
  nl: { guide: 'Praktische gids', examples: 'Ideeën en toepassingen', faq: 'Veelgestelde vragen' },
  pl: { guide: 'Praktyczny poradnik', examples: 'Pomysły i zastosowania', faq: 'Często zadawane pytania' },
  sv: { guide: 'Praktisk guide', examples: 'Idéer och användningsområden', faq: 'Vanliga frågor' },
  vi: { guide: 'Hướng dẫn sử dụng', examples: 'Ý tưởng và cách dùng', faq: 'Câu hỏi thường gặp' },
  id: { guide: 'Panduan praktis', examples: 'Ide dan penggunaan', faq: 'Pertanyaan umum' },
  th: { guide: 'คู่มือการใช้งาน', examples: 'ไอเดียและการนำไปใช้', faq: 'คำถามที่พบบ่อย' },
  el: { guide: 'Πρακτικός οδηγός', examples: 'Ιδέες και χρήσεις', faq: 'Συχνές ερωτήσεις' },
  he: { guide: 'מדריך שימוש', examples: 'רעיונות ושימושים', faq: 'שאלות נפוצות' },
  cs: { guide: 'Praktický průvodce', examples: 'Nápady a využití', faq: 'Časté dotazy' },
  ro: { guide: 'Ghid practic', examples: 'Idei și utilizări', faq: 'Întrebări frecvente' },
  da: { guide: 'Praktisk guide', examples: 'Idéer og anvendelser', faq: 'Ofte stillede spørgsmål' },
  fi: { guide: 'Käyttöopas', examples: 'Ideat ja käyttökohteet', faq: 'Usein kysytyt kysymykset' },
};

export const PRIORITY_GENERATOR_DETAIL_LOCALES = Object.keys(SECTION_LABELS);

export function getGeneratorDetailSectionLabels(locale: string): GeneratorDetailSectionLabels {
  return SECTION_LABELS[locale] || SECTION_LABELS.en;
}
