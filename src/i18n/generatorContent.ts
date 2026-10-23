import { GeneratorMeta, LanguageCode } from '../types';

const LOCALIZED_DESCRIPTIONS: Record<string, Record<string, string>> = {
  "en": {
    "fantasy": "Create evocative names for heroes, mythical peoples, legendary places, and imaginative adventures.",
    "business": "Generate distinctive names for brands, companies, products, and professional projects.",
    "creative": "Find names for stories, characters, books, media, and creative projects.",
    "innovation": "Explore modern, futuristic, and experimental names for technology and new ideas."
  },
  "fr": {
    "fantasy": "Créez des noms évocateurs pour des héros, peuples mythiques, lieux légendaires et aventures imaginaires.",
    "business": "Trouvez des noms distinctifs pour des marques, entreprises, produits et projets professionnels.",
    "creative": "Découvrez des noms pour des récits, personnages, livres, médias et projets créatifs.",
    "innovation": "Explorez des noms modernes, futuristes et expérimentaux pour la technologie et les idées nouvelles."
  },
  "es": {
    "fantasy": "Crea nombres evocadores para héroes, pueblos míticos, lugares legendarios y aventuras imaginarias.",
    "business": "Genera nombres distintivos para marcas, empresas, productos y proyectos profesionales.",
    "creative": "Encuentra nombres para relatos, personajes, libros, medios y proyectos creativos.",
    "innovation": "Explora nombres modernos, futuristas y experimentales para tecnología e ideas nuevas."
  },
  "de": {
    "fantasy": "Erstelle eindrucksvolle Namen für Helden, mythische Völker, legendäre Orte und fantastische Abenteuer.",
    "business": "Finde unverwechselbare Namen für Marken, Unternehmen, Produkte und berufliche Projekte.",
    "creative": "Entdecke Namen für Geschichten, Figuren, Bücher, Medien und kreative Projekte.",
    "innovation": "Erkunde moderne, futuristische und experimentelle Namen für Technologie und neue Ideen."
  },
  "it": {
    "fantasy": "Crea nomi evocativi per eroi, popoli mitici, luoghi leggendari e avventure immaginarie.",
    "business": "Genera nomi distintivi per marchi, aziende, prodotti e progetti professionali.",
    "creative": "Trova nomi per racconti, personaggi, libri, media e progetti creativi.",
    "innovation": "Esplora nomi moderni, futuristici e sperimentali per tecnologia e nuove idee."
  },
  "pt": {
    "fantasy": "Crie nomes marcantes para heróis, povos míticos, lugares lendários e aventuras imaginárias.",
    "business": "Gere nomes distintos para marcas, empresas, produtos e projetos profissionais.",
    "creative": "Encontre nomes para histórias, personagens, livros, mídia e projetos criativos.",
    "innovation": "Explore nomes modernos, futuristas e experimentais para tecnologia e novas ideias."
  },
  "ar": {
    "fantasy": "أنشئ أسماء مميزة للأبطال والشعوب الأسطورية والأماكن العريقة والمغامرات الخيالية.",
    "business": "أنشئ أسماء فريدة للعلامات التجارية والشركات والمنتجات والمشاريع المهنية.",
    "creative": "اكتشف أسماء للقصص والشخصيات والكتب والإعلام والمشاريع الإبداعية.",
    "innovation": "استكشف أسماء حديثة ومستقبلية وتجريبية للتقنية والأفكار الجديدة."
  },
  "tr": {
    "fantasy": "Kahramanlar, efsanevi halklar, unutulmaz yerler ve hayalî maceralar için etkileyici adlar üretin.",
    "business": "Markalar, şirketler, ürünler ve profesyonel projeler için özgün adlar üretin.",
    "creative": "Hikâyeler, karakterler, kitaplar, medya ve yaratıcı projeler için adlar bulun.",
    "innovation": "Teknoloji ve yeni fikirler için modern, fütüristik ve deneysel adlar keşfedin."
  },
  "ja": {
    "fantasy": "英雄、神話の民、伝説の場所、想像上の冒険にふさわしい印象的な名前を作成します。",
    "business": "ブランド、企業、製品、ビジネスプロジェクト向けの個性的な名前を生成します。",
    "creative": "物語、キャラクター、本、メディア、創作プロジェクトの名前を見つけます。",
    "innovation": "テクノロジーや新しいアイデア向けに、現代的で未来的な名前を探します。"
  },
  "ko": {
    "fantasy": "영웅, 신화 속 종족, 전설적인 장소와 상상 속 모험에 어울리는 이름을 만드세요.",
    "business": "브랜드, 기업, 제품 및 전문 프로젝트를 위한 독창적인 이름을 생성하세요.",
    "creative": "이야기, 캐릭터, 책, 미디어 및 창작 프로젝트의 이름을 찾아보세요.",
    "innovation": "기술과 새로운 아이디어를 위한 현대적이고 미래적인 이름을 탐색하세요."
  },
  "zh": {
    "fantasy": "为英雄、神话族群、传奇地点和想象中的冒险创作富有感染力的名称。",
    "business": "为品牌、公司、产品和专业项目生成独特名称。",
    "creative": "为故事、角色、书籍、媒体和创意项目寻找名称。",
    "innovation": "探索适用于技术与新想法的现代、未来风格和实验性名称。"
  },
  "ru": {
    "fantasy": "Создавайте выразительные имена для героев, мифических народов, легендарных мест и фантастических приключений.",
    "business": "Подбирайте уникальные названия для брендов, компаний, продуктов и профессиональных проектов.",
    "creative": "Находите имена для историй, персонажей, книг, медиа и творческих проектов.",
    "innovation": "Исследуйте современные, футуристические и экспериментальные названия для технологий и новых идей."
  },
  "hi": {
    "fantasy": "नायकों, पौराणिक जातियों, प्रसिद्ध स्थानों और काल्पनिक रोमांच के लिए प्रभावशाली नाम बनाएँ।",
    "business": "ब्रांड, कंपनियों, उत्पादों और पेशेवर परियोजनाओं के लिए विशिष्ट नाम बनाएँ।",
    "creative": "कहानियों, पात्रों, पुस्तकों, मीडिया और रचनात्मक परियोजनाओं के लिए नाम खोजें।",
    "innovation": "तकनीक और नए विचारों के लिए आधुनिक, भविष्यवादी और प्रयोगात्मक नाम खोजें।"
  },
  "nl": {
    "fantasy": "Bedenk aansprekende namen voor helden, mythische volken, legendarische plaatsen en fantasieavonturen.",
    "business": "Genereer onderscheidende namen voor merken, bedrijven, producten en professionele projecten.",
    "creative": "Vind namen voor verhalen, personages, boeken, media en creatieve projecten.",
    "innovation": "Verken moderne, futuristische en experimentele namen voor technologie en nieuwe ideeën."
  },
  "pl": {
    "fantasy": "Twórz sugestywne nazwy dla bohaterów, mitycznych ludów, legendarnych miejsc i fantastycznych przygód.",
    "business": "Generuj charakterystyczne nazwy marek, firm, produktów i projektów zawodowych.",
    "creative": "Znajduj nazwy dla opowieści, postaci, książek, mediów i projektów kreatywnych.",
    "innovation": "Odkrywaj nowoczesne, futurystyczne i eksperymentalne nazwy dla technologii i nowych pomysłów."
  },
  "sv": {
    "fantasy": "Skapa uttrycksfulla namn för hjältar, mytiska folk, legendariska platser och fantasifulla äventyr.",
    "business": "Skapa unika namn för varumärken, företag, produkter och professionella projekt.",
    "creative": "Hitta namn för berättelser, karaktärer, böcker, medier och kreativa projekt.",
    "innovation": "Utforska moderna, futuristiska och experimentella namn för teknik och nya idéer."
  },
  "vi": {
    "fantasy": "Tạo tên giàu sức gợi cho anh hùng, tộc người thần thoại, địa danh huyền thoại và cuộc phiêu lưu tưởng tượng.",
    "business": "Tạo tên riêng biệt cho thương hiệu, doanh nghiệp, sản phẩm và dự án chuyên nghiệp.",
    "creative": "Tìm tên cho câu chuyện, nhân vật, sách, truyền thông và dự án sáng tạo.",
    "innovation": "Khám phá tên hiện đại, vị lai và thử nghiệm cho công nghệ và ý tưởng mới."
  },
  "id": {
    "fantasy": "Buat nama yang berkesan untuk pahlawan, bangsa mitologis, tempat legendaris, dan petualangan imajinatif.",
    "business": "Hasilkan nama khas untuk merek, perusahaan, produk, dan proyek profesional.",
    "creative": "Temukan nama untuk cerita, karakter, buku, media, dan proyek kreatif.",
    "innovation": "Jelajahi nama modern, futuristik, dan eksperimental untuk teknologi serta ide baru."
  },
  "th": {
    "fantasy": "สร้างชื่อที่น่าจดจำสำหรับวีรบุรุษ เผ่าพันธุ์ในตำนาน สถานที่ในตำนาน และการผจญภัยในจินตนาการ",
    "business": "สร้างชื่อที่โดดเด่นสำหรับแบรนด์ บริษัท ผลิตภัณฑ์ และโครงการระดับมืออาชีพ",
    "creative": "ค้นหาชื่อสำหรับเรื่องราว ตัวละคร หนังสือ สื่อ และโครงการสร้างสรรค์",
    "innovation": "สำรวจชื่อสมัยใหม่ แนวอนาคต และเชิงทดลองสำหรับเทคโนโลยีและแนวคิดใหม่"
  },
  "el": {
    "fantasy": "Δημιουργήστε εκφραστικά ονόματα για ήρωες, μυθικούς λαούς, θρυλικούς τόπους και φανταστικές περιπέτειες.",
    "business": "Δημιουργήστε ξεχωριστά ονόματα για επωνυμίες, εταιρείες, προϊόντα και επαγγελματικά έργα.",
    "creative": "Βρείτε ονόματα για ιστορίες, χαρακτήρες, βιβλία, μέσα και δημιουργικά έργα.",
    "innovation": "Εξερευνήστε σύγχρονα, φουτουριστικά και πειραματικά ονόματα για τεχνολογία και νέες ιδέες."
  },
  "he": {
    "fantasy": "צרו שמות מעוררי דמיון לגיבורים, עמים מיתיים, מקומות אגדיים והרפתקאות בדיוניות.",
    "business": "צרו שמות ייחודיים למותגים, חברות, מוצרים ופרויקטים מקצועיים.",
    "creative": "מצאו שמות לסיפורים, דמויות, ספרים, מדיה ופרויקטים יצירתיים.",
    "innovation": "גלו שמות מודרניים, עתידניים וניסיוניים לטכנולוגיה ולרעיונות חדשים."
  },
  "cs": {
    "fantasy": "Vytvářejte působivá jména pro hrdiny, mytické národy, legendární místa a fantastická dobrodružství.",
    "business": "Vytvářejte osobitá jména pro značky, firmy, produkty a profesionální projekty.",
    "creative": "Hledejte jména pro příběhy, postavy, knihy, média a kreativní projekty.",
    "innovation": "Objevujte moderní, futuristická a experimentální jména pro technologie a nové nápady."
  },
  "ro": {
    "fantasy": "Creează nume expresive pentru eroi, popoare mitice, locuri legendare și aventuri imaginare.",
    "business": "Generează nume distincte pentru mărci, companii, produse și proiecte profesionale.",
    "creative": "Găsește nume pentru povești, personaje, cărți, media și proiecte creative.",
    "innovation": "Explorează nume moderne, futuriste și experimentale pentru tehnologie și idei noi."
  },
  "da": {
    "fantasy": "Skab sigende navne til helte, mytiske folk, legendariske steder og fantasifulde eventyr.",
    "business": "Generér særprægede navne til brands, virksomheder, produkter og professionelle projekter.",
    "creative": "Find navne til historier, figurer, bøger, medier og kreative projekter.",
    "innovation": "Udforsk moderne, futuristiske og eksperimenterende navne til teknologi og nye idéer."
  },
  "fi": {
    "fantasy": "Luo mieleenpainuvia nimiä sankareille, myyttisille kansoille, legendaarisille paikoille ja mielikuvituksellisille seikkailuille.",
    "business": "Luo erottuvia nimiä brändeille, yrityksille, tuotteille ja ammatillisille projekteille.",
    "creative": "Etsi nimiä tarinoille, hahmoille, kirjoille, medialle ja luoville projekteille.",
    "innovation": "Tutki moderneja, futuristisia ja kokeellisia nimiä teknologialle ja uusille ideoille."
  }
};

/** Localized, honest category-level summary. Detailed editorial guides remain in their authored source language. */
export function getLocalizedGeneratorDescription(meta: GeneratorMeta, language: LanguageCode): string {
  const locale = LOCALIZED_DESCRIPTIONS[language];
  if (!locale) return meta.description;
  return locale[meta.category] || locale.creative || meta.description;
}
