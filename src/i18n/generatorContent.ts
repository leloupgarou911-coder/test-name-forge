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


/**
 * Reviewed, generator-specific descriptions for core generators.
 * Other pages keep their category summary until their own translations are reviewed.
 */
const GENERATOR_DESCRIPTION_OVERRIDES: Record<string, Record<string, string>> = {
  fantasy: {
    en: 'Forge names for fantasy heroes, magical lineages, legendary realms, and original worlds for your stories or games.',
    fr: 'Forgez des noms pour des héros fantastiques, des lignées magiques, des royaumes légendaires et des univers originaux.',
    es: 'Crea nombres para héroes fantásticos, linajes mágicos, reinos legendarios y mundos originales para tus historias o juegos.',
    de: 'Erschaffe Namen für Fantasy-Helden, magische Blutlinien, legendäre Reiche und eigene Welten für Geschichten oder Spiele.'
  },
  baby_name: {
    en: 'Explore baby names with attention to real-world usage, pronunciation, cultural origins, and meanings where available.',
    fr: 'Explorez des prénoms de bébé en tenant compte de leur usage réel, de leur prononciation, de leur origine culturelle et de leur signification lorsqu’elle est connue.',
    es: 'Explora nombres para bebés teniendo en cuenta su uso real, pronunciación, origen cultural y significado cuando esté disponible.',
    de: 'Entdecke Vornamen für Babys mit Blick auf tatsächlichen Gebrauch, Aussprache, kulturelle Herkunft und Bedeutung, sofern bekannt.',
    it: 'Esplora nomi per bambini considerando l’uso reale, la pronuncia, le origini culturali e i significati quando disponibili.',
    pt: 'Explore nomes de bebês considerando o uso real, a pronúncia, as origens culturais e os significados quando disponíveis.',
    ar: 'اكتشف أسماء الأطفال مع مراعاة الاستخدام الفعلي والنطق والأصول الثقافية والمعاني عند توفرها.',
    tr: 'Bebek isimlerini gerçek kullanım, telaffuz, kültürel kökenler ve mevcut olduğunda anlamları açısından keşfedin.',
    ja: '実際の使用例、発音、文化的な由来、確認できる場合は意味にも配慮しながら赤ちゃんの名前を探しましょう。',
    ko: '실제 사용 여부, 발음, 문화적 기원과 확인 가능한 의미를 고려해 아기 이름을 찾아보세요.',
    zh: '探索婴儿名字，并关注其实际使用情况、发音、文化来源以及有资料可查时的含义。',
    ru: 'Подбирайте имена для детей с учётом реального употребления, произношения, культурного происхождения и значений, если они известны.',
    hi: 'बच्चों के नाम खोजें और उनके वास्तविक उपयोग, उच्चारण, सांस्कृतिक मूल तथा उपलब्ध होने पर अर्थ पर ध्यान दें।',
    nl: 'Ontdek babynamen met aandacht voor daadwerkelijk gebruik, uitspraak, culturele herkomst en betekenissen wanneer die bekend zijn.',
    pl: 'Odkrywaj imiona dla dzieci, zwracając uwagę na rzeczywiste użycie, wymowę, pochodzenie kulturowe i dostępne znaczenia.',
    sv: 'Utforska babynamn med hänsyn till faktisk användning, uttal, kulturellt ursprung och betydelser där de är kända.',
    vi: 'Khám phá tên cho em bé, chú ý đến cách dùng thực tế, cách phát âm, nguồn gốc văn hóa và ý nghĩa khi có thông tin.',
    id: 'Jelajahi nama bayi dengan memperhatikan penggunaan nyata, pelafalan, asal budaya, dan makna jika tersedia.',
    th: 'ค้นหาชื่อเด็กโดยคำนึงถึงการใช้งานจริง การออกเสียง ที่มาทางวัฒนธรรม และความหมายเมื่อมีข้อมูล',
    el: 'Ανακαλύψτε ονόματα για μωρά με έμφαση στην πραγματική χρήση, την προφορά, την πολιτισμική προέλευση και τις διαθέσιμες σημασίες.',
    he: 'גלו שמות לתינוקות תוך התחשבות בשימוש בפועל, בהגייה, במקור התרבותי ובמשמעויות כאשר הן ידועות.',
    cs: 'Objevujte jména pro děti s ohledem na skutečné používání, výslovnost, kulturní původ a dostupné významy.',
    ro: 'Descoperă nume pentru copii, ținând cont de utilizarea reală, pronunție, originea culturală și semnificațiile cunoscute.',
    da: 'Find babynavne med fokus på faktisk brug, udtale, kulturel oprindelse og betydninger, når de er kendte.',
    fi: 'Tutustu vauvojen nimiin huomioiden todellinen käyttö, ääntäminen, kulttuurinen alkuperä ja tunnetut merkitykset.'
  },
  pet_name: {
    en: 'Find pet names suited to an animal’s personality, species, and everyday use; favor easy pronunciation and avoid claiming unsupported cultural meanings.',
    fr: 'Trouvez des noms adaptés à la personnalité, à l’espèce et à l’usage quotidien de votre animal ; privilégiez une prononciation facile sans attribuer de significations culturelles non vérifiées.',
    es: 'Encuentra nombres adecuados para la personalidad, la especie y el uso diario de tu mascota; prioriza una pronunciación sencilla y evita atribuir significados culturales no verificados.',
    de: 'Finde Tiernamen passend zu Persönlichkeit, Tierart und Alltag. Achte auf einfache Aussprache und vermeide unbelegte kulturelle Bedeutungen.',
    it: 'Trova nomi adatti alla personalità, alla specie e all’uso quotidiano del tuo animale; privilegia una pronuncia semplice ed evita significati culturali non verificati.',
    pt: 'Encontre nomes adequados à personalidade, à espécie e ao dia a dia do seu animal; prefira uma pronúncia simples e evite atribuir significados culturais não verificados.',
    ar: 'اعثر على أسماء تناسب شخصية حيوانك ونوعه والاستخدام اليومي، مع تفضيل النطق السهل وتجنب المعاني الثقافية غير الموثقة.',
    tr: 'Evcil hayvanınızın kişiliğine, türüne ve günlük kullanıma uygun adlar bulun; kolay telaffuzu tercih edin ve doğrulanmamış kültürel anlamlar yüklemeyin.',
    ja: 'ペットの性格や種類、日常での呼びやすさに合う名前を探しましょう。発音のしやすさを重視し、未確認の文化的な意味を断定しないでください。',
    ko: '반려동물의 성격과 종류, 일상적인 사용에 어울리는 이름을 찾아보세요. 부르기 쉬운 발음을 우선하고 확인되지 않은 문화적 의미는 단정하지 마세요.',
    zh: '为宠物寻找符合其性格、种类和日常使用习惯的名字；优先考虑易于呼唤的发音，不要声称未经证实的文化含义。',
    ru: 'Подбирайте клички с учётом характера, вида животного и повседневного использования; выбирайте удобное произношение и не приписывайте непроверенные культурные значения.',
    hi: 'पालतू जानवर के स्वभाव, प्रजाति और रोज़मर्रा के उपयोग के अनुसार नाम चुनें; आसान उच्चारण को प्राथमिकता दें और अप्रमाणित सांस्कृतिक अर्थ न बताएं।',
    nl: 'Vind diernamen die passen bij het karakter, de diersoort en dagelijks gebruik. Kies een makkelijke uitspraak en vermijd onbevestigde culturele betekenissen.',
    pl: 'Wybierz imię pasujące do charakteru, gatunku i codziennego użycia; postaw na łatwą wymowę i nie przypisuj niepotwierdzonych znaczeń kulturowych.',
    sv: 'Hitta djurnamn som passar personlighet, art och vardaglig användning. Välj namn som är lätta att uttala och undvik obekräftade kulturella betydelser.',
    vi: 'Tìm tên phù hợp với tính cách, loài vật và cách gọi hằng ngày; ưu tiên cách phát âm dễ dàng và tránh khẳng định ý nghĩa văn hóa chưa được xác minh.',
    id: 'Temukan nama hewan yang sesuai dengan kepribadian, jenis, dan penggunaan sehari-hari; utamakan pelafalan yang mudah dan hindari makna budaya yang belum terverifikasi.',
    th: 'ค้นหาชื่อสัตว์เลี้ยงที่เหมาะกับนิสัย สายพันธุ์ และการเรียกใช้ในชีวิตประจำวัน โดยเน้นการออกเสียงง่ายและไม่กล่าวอ้างความหมายทางวัฒนธรรมที่ยังไม่ยืนยัน',
    el: 'Βρείτε ονόματα που ταιριάζουν στον χαρακτήρα, το είδος και την καθημερινή χρήση του ζώου σας· προτιμήστε εύκολη προφορά και αποφύγετε μη επιβεβαιωμένες πολιτισμικές σημασίες.',
    he: 'מצאו שמות שמתאימים לאופי חיית המחמד, למין שלה ולשימוש יומיומי; העדיפו הגייה פשוטה והימנעו מייחוס משמעויות תרבותיות שלא אומתו.',
    cs: 'Vyberte jméno podle povahy, druhu a každodenního používání; upřednostněte snadnou výslovnost a nepřisuzujte neověřené kulturní významy.',
    ro: 'Alege nume potrivite personalității, speciei și folosirii zilnice a animalului; preferă pronunția ușoară și evită semnificațiile culturale neverificate.',
    da: 'Find kæledyrsnavne, der passer til personlighed, art og daglig brug; vælg nem udtale, og undgå udokumenterede kulturelle betydninger.',
    fi: 'Etsi lemmikin luonteeseen, lajiin ja arkikäyttöön sopivia nimiä; suosi helppoa ääntämistä äläkä väitä kulttuurisia merkityksiä varmoiksi ilman näyttöä.'
  },
  brand: {
    en: 'Develop memorable brand-name ideas for products and services, then check trademarks, domains, and market use before adopting one.',
    fr: 'Trouvez des idées de noms de marque mémorables pour des produits et services, puis vérifiez les marques déposées, les domaines et les usages avant de les adopter.',
    es: 'Encuentra ideas de marcas memorables para productos y servicios; antes de usarlas, comprueba marcas registradas, dominios y usos comerciales.',
    de: 'Finde einprägsame Markennamen für Produkte und Dienstleistungen. Prüfe vor der Nutzung Markenrechte, Domains und bestehende Verwendungen.',
    it: 'Sviluppa idee memorabili per nomi di marchi e servizi; prima di adottarne uno, verifica marchi registrati, domini e usi commerciali.',
    pt: 'Crie ideias memoráveis de nomes de marca para produtos e serviços; antes de adotar um, verifique marcas registradas, domínios e usos comerciais.',
    ar: 'ابتكر أفكارًا لأسماء علامات تجارية يسهل تذكرها للمنتجات والخدمات، ثم تحقّق من العلامات المسجلة والنطاقات والاستخدام التجاري قبل اعتماد الاسم.',
    tr: 'Ürün ve hizmetler için akılda kalıcı marka adı fikirleri geliştirin; birini seçmeden önce tescilli markaları, alan adlarını ve ticari kullanımı kontrol edin.',
    ja: '商品やサービスの覚えやすいブランド名を考え、採用前に商標、ドメイン、既存の商用利用を確認しましょう。',
    ko: '제품과 서비스를 위한 기억하기 쉬운 브랜드 이름을 구상하고, 채택하기 전에 상표·도메인·기존 상업적 사용 여부를 확인하세요.',
    zh: '为产品和服务构思易记的品牌名称；正式采用前，请核查商标、域名及现有商业用途。',
    ru: 'Придумывайте запоминающиеся названия брендов для товаров и услуг, а перед выбором проверяйте товарные знаки, домены и существующее коммерческое использование.',
    hi: 'उत्पादों और सेवाओं के लिए यादगार ब्रांड नाम सोचें; अपनाने से पहले ट्रेडमार्क, डोमेन और मौजूदा व्यावसायिक उपयोग की जाँच करें।',
    nl: 'Bedenk memorabele merknamen voor producten en diensten en controleer vóór gebruik handelsmerken, domeinen en bestaand commercieel gebruik.',
    pl: 'Twórz zapadające w pamięć nazwy marek produktów i usług, a przed wyborem sprawdź znaki towarowe, domeny i istniejące zastosowania.',
    sv: 'Ta fram minnesvärda varumärkesnamn för produkter och tjänster och kontrollera varumärken, domäner och befintlig kommersiell användning innan du väljer.',
    vi: 'Tạo ý tưởng tên thương hiệu dễ nhớ cho sản phẩm và dịch vụ; hãy kiểm tra nhãn hiệu, tên miền và việc sử dụng thương mại hiện có trước khi chọn.',
    id: 'Kembangkan ide nama merek yang mudah diingat untuk produk dan layanan; periksa merek dagang, domain, dan penggunaan komersial yang sudah ada sebelum memilih.',
    th: 'คิดชื่อแบรนด์ที่จดจำง่ายสำหรับสินค้าและบริการ และตรวจสอบเครื่องหมายการค้า โดเมน และการใช้งานเชิงพาณิชย์ที่มีอยู่ก่อนนำไปใช้',
    el: 'Δημιουργήστε αξιομνημόνευτες ιδέες επωνυμίας για προϊόντα και υπηρεσίες και ελέγξτε εμπορικά σήματα, τομείς και υπάρχουσα εμπορική χρήση πριν επιλέξετε.',
    he: 'פתחו רעיונות לשמות מותג שקל לזכור עבור מוצרים ושירותים, ובדקו סימני מסחר, דומיינים ושימוש מסחרי קיים לפני הבחירה.',
    cs: 'Vymýšlejte zapamatovatelné názvy značek pro produkty a služby a před výběrem ověřte ochranné známky, domény a stávající komerční použití.',
    ro: 'Creează idei memorabile de nume de marcă pentru produse și servicii; înainte de a alege, verifică mărcile înregistrate, domeniile și utilizările comerciale existente.',
    da: 'Udvikl mindeværdige brandnavne til produkter og tjenester, og kontrollér varemærker, domæner og eksisterende kommerciel brug, før du vælger.',
    fi: 'Kehitä mieleenpainuvia brändinimiä tuotteille ja palveluille ja tarkista tavaramerkit, verkkotunnukset sekä olemassa oleva kaupallinen käyttö ennen valintaa.'
  },
  business: {
    en: 'Find professional business-name ideas suited to a company’s positioning, audience, and long-term plans; verify legal availability before registration.',
    fr: 'Trouvez des idées de noms d’entreprise adaptées à son positionnement, à son public et à ses ambitions, puis vérifiez leur disponibilité juridique avant l’immatriculation.',
    es: 'Encuentra nombres profesionales para empresas según su posicionamiento, público y objetivos; verifica la disponibilidad legal antes de registrarlos.',
    de: 'Finde professionelle Firmennamen passend zu Positionierung, Zielgruppe und langfristigen Zielen. Prüfe vor der Registrierung die rechtliche Verfügbarkeit.',
    it: 'Trova nomi professionali per aziende in linea con posizionamento, pubblico e obiettivi a lungo termine; verifica la disponibilità legale prima della registrazione.',
    pt: 'Encontre nomes profissionais para empresas alinhados ao posicionamento, público e planos de longo prazo; verifique a disponibilidade legal antes do registro.',
    ar: 'اعثر على أفكار احترافية لأسماء الشركات تناسب مكانتها وجمهورها وخططها طويلة الأجل، وتحقّق من التوفر القانوني قبل التسجيل.',
    tr: 'Bir şirketin konumlandırmasına, hedef kitlesine ve uzun vadeli planlarına uygun profesyonel işletme adları bulun; kayıttan önce yasal uygunluğu doğrulayın.',
    ja: '企業の位置づけ、対象顧客、長期計画に合うビジネス名を考え、登録前に法的な使用可能性を確認しましょう。',
    ko: '기업의 포지셔닝, 대상 고객, 장기 계획에 맞는 전문적인 상호 이름을 찾고 등록 전에 법적 사용 가능성을 확인하세요.',
    zh: '为企业寻找符合其定位、受众和长期规划的专业名称，并在注册前核实法律上的可用性。',
    ru: 'Подбирайте деловые названия с учётом позиционирования компании, аудитории и долгосрочных планов; перед регистрацией проверьте юридическую доступность.',
    hi: 'कंपनी की स्थिति, लक्षित दर्शकों और दीर्घकालिक योजनाओं के अनुरूप व्यावसायिक नाम खोजें; पंजीकरण से पहले कानूनी उपलब्धता जाँचें।',
    nl: 'Vind professionele bedrijfsnamen die passen bij positionering, doelgroep en langetermijnplannen; controleer de juridische beschikbaarheid vóór registratie.',
    pl: 'Znajdź profesjonalne nazwy firm dopasowane do pozycjonowania, odbiorców i planów długoterminowych; przed rejestracją sprawdź dostępność prawną.',
    sv: 'Hitta professionella företagsnamn som passar företagets positionering, målgrupp och långsiktiga planer; kontrollera juridisk tillgänglighet före registrering.',
    vi: 'Tìm tên doanh nghiệp chuyên nghiệp phù hợp với định vị, khách hàng mục tiêu và kế hoạch dài hạn; hãy kiểm tra tính khả dụng pháp lý trước khi đăng ký.',
    id: 'Temukan ide nama bisnis profesional yang sesuai dengan posisi, audiens, dan rencana jangka panjang perusahaan; periksa ketersediaan hukum sebelum mendaftar.',
    th: 'ค้นหาชื่อธุรกิจที่เป็นมืออาชีพและเหมาะกับจุดยืน กลุ่มเป้าหมาย และแผนระยะยาวของบริษัท พร้อมตรวจสอบความพร้อมทางกฎหมายก่อนจดทะเบียน',
    el: 'Βρείτε επαγγελματικές επωνυμίες που ταιριάζουν στη θέση, στο κοινό και στα μακροπρόθεσμα σχέδια μιας εταιρείας· ελέγξτε τη νομική διαθεσιμότητα πριν από την εγγραφή.',
    he: 'מצאו רעיונות לשמות עסקיים מקצועיים המתאימים למיצוב החברה, לקהל היעד ולתוכניות ארוכות הטווח; בדקו זמינות משפטית לפני הרישום.',
    cs: 'Najděte profesionální názvy firem odpovídající jejich pozici, cílovému publiku a dlouhodobým plánům; před registrací ověřte právní dostupnost.',
    ro: 'Găsește nume profesionale pentru afaceri, potrivite poziționării, publicului și planurilor pe termen lung; verifică disponibilitatea legală înainte de înregistrare.',
    da: 'Find professionelle virksomhedsnavne, der passer til virksomhedens positionering, målgruppe og langsigtede planer; kontrollér den juridiske tilgængelighed før registrering.',
    fi: 'Etsi yrityksen asemaan, kohdeyleisöön ja pitkän aikavälin suunnitelmiin sopivia nimiä ja tarkista niiden oikeudellinen saatavuus ennen rekisteröintiä.'
  },
  product: {
    en: 'Create product-name ideas that communicate a clear benefit and fit the intended audience, packaging, and product category.',
    fr: 'Créez des idées de noms de produits qui expriment un bénéfice clair et correspondent au public visé, à l’emballage et à la catégorie du produit.',
    es: 'Crea nombres de productos que comuniquen un beneficio claro y encajen con el público, el envase y la categoría del producto.',
    de: 'Entwickle Produktnamen, die einen klaren Nutzen vermitteln und zur Zielgruppe, Verpackung und Produktkategorie passen.'
  },
  startup: {
    en: 'Explore concise, distinctive startup names for emerging ventures; check domain, company-register, and trademark availability before launch.',
    fr: 'Explorez des noms courts et distinctifs pour une startup ; vérifiez les domaines, les registres d’entreprises et les marques avant le lancement.',
    es: 'Explora nombres breves y distintivos para startups; comprueba dominios, registros mercantiles y marcas antes del lanzamiento.',
    de: 'Entdecke kurze, unverwechselbare Namen für Start-ups. Prüfe vor dem Start Domains, Unternehmensregister und Markenrechte.'
  },
  book: {
    en: 'Find book-title ideas shaped around genre, atmosphere, central themes, and the impression you want readers to remember.',
    fr: 'Trouvez des titres de livres adaptés au genre, à l’atmosphère, aux thèmes centraux et à l’impression que vous souhaitez laisser aux lecteurs.',
    es: 'Encuentra títulos de libros acordes con el género, la atmósfera, los temas centrales y la impresión que quieres dejar en los lectores.',
    de: 'Finde Buchtitel passend zu Genre, Atmosphäre, zentralen Themen und dem Eindruck, den du bei Lesenden hinterlassen möchtest.'
  },
  gaming: {
    en: 'Generate gaming aliases for competitive play, streaming, and online communities; check each platform’s character and availability rules.',
    fr: 'Générez des pseudos pour le jeu compétitif, le streaming et les communautés en ligne ; vérifiez les règles de longueur et la disponibilité sur chaque plateforme.',
    es: 'Genera alias para juegos competitivos, streaming y comunidades en línea; comprueba las reglas de caracteres y disponibilidad de cada plataforma.',
    de: 'Erstelle Gaming-Namen für Wettkampf, Streaming und Online-Communitys. Prüfe die Zeichenregeln und Verfügbarkeit auf jeder Plattform.',
    it: 'Crea nickname per il gioco competitivo, lo streaming e le community online; verifica i limiti di caratteri e la disponibilità su ogni piattaforma.',
    pt: 'Crie nomes de jogador para competições, transmissões e comunidades online; verifique os limites de caracteres e a disponibilidade em cada plataforma.',
    ar: 'أنشئ أسماء مستعارة للألعاب التنافسية والبث والمجتمعات عبر الإنترنت، وتحقق من قواعد الأحرف والتوفر في كل منصة.',
    tr: 'Rekabetçi oyunlar, yayıncılık ve çevrimiçi topluluklar için oyuncu adları oluşturun; her platformun karakter sınırlarını ve kullanılabilirliğini kontrol edin.',
    ja: '対戦プレイ、配信、オンラインコミュニティ向けのゲーム用ユーザー名を作成し、各プラットフォームの文字数制限と利用可能状況を確認しましょう。',
    ko: '경쟁 플레이, 스트리밍 및 온라인 커뮤니티를 위한 게임 닉네임을 만들고 각 플랫폼의 글자 수 제한과 사용 가능 여부를 확인하세요.',
    zh: '为竞技游戏、直播和在线社群生成游戏昵称；请检查各平台的字符限制及名称可用性。',
    ru: 'Создавайте игровые псевдонимы для соревнований, стриминга и онлайн-сообществ; проверяйте ограничения по символам и доступность на каждой платформе.',
    hi: 'प्रतिस्पर्धी गेमिंग, स्ट्रीमिंग और ऑनलाइन समुदायों के लिए गेमिंग नाम बनाएँ; हर प्लेटफ़ॉर्म की अक्षर-सीमा और उपलब्धता जाँचें।',
    nl: 'Bedenk gamernamen voor competitief spelen, streaming en online communities; controleer per platform de tekenlimieten en beschikbaarheid.',
    pl: 'Twórz pseudonimy do rywalizacji, streamingu i społeczności online; sprawdź limity znaków i dostępność na każdej platformie.',
    sv: 'Skapa spelalias för tävlingsspel, streaming och nätgemenskaper; kontrollera teckenregler och tillgänglighet på varje plattform.',
    vi: 'Tạo biệt danh cho thi đấu game, phát trực tiếp và cộng đồng trực tuyến; hãy kiểm tra giới hạn ký tự và tình trạng khả dụng trên từng nền tảng.',
    id: 'Buat nama alias untuk permainan kompetitif, streaming, dan komunitas daring; periksa batas karakter serta ketersediaan di setiap platform.',
    th: 'สร้างชื่อเล่นสำหรับการแข่งขันเกม การสตรีม และชุมชนออนไลน์ พร้อมตรวจสอบข้อจำกัดจำนวนอักขระและความพร้อมใช้งานของแต่ละแพลตฟอร์ม',
    el: 'Δημιουργήστε ψευδώνυμα για ανταγωνιστικό παιχνίδι, streaming και διαδικτυακές κοινότητες· ελέγξτε τα όρια χαρακτήρων και τη διαθεσιμότητα σε κάθε πλατφόρμα.',
    he: 'צרו כינויי משחק לתחרות, לשידורים ולקהילות מקוונות; בדקו את מגבלות התווים ואת הזמינות בכל פלטפורמה.',
    cs: 'Vytvářejte herní přezdívky pro soutěžní hraní, streamování a online komunity; ověřte limity znaků a dostupnost na každé platformě.',
    ro: 'Creează pseudonime pentru jocuri competitive, streaming și comunități online; verifică limitele de caractere și disponibilitatea pe fiecare platformă.',
    da: 'Skab gamer-aliaser til konkurrencespil, streaming og onlinefællesskaber; kontrollér tegnbegrænsninger og tilgængelighed på hver platform.',
    fi: 'Luo pelinimiä kilpailulliseen pelaamiseen, suoratoistoon ja verkkoyhteisöihin; tarkista kunkin alustan merkkirajoitukset ja nimen saatavuus.'
  },
  anime: {
    en: 'Create stylized anime-character names for protagonists, rivals, and original casts, without claiming unverified Japanese meanings.',
    fr: 'Créez des noms stylisés pour des personnages d’anime, héros, rivaux ou distributions originales, sans leur attribuer une signification japonaise non vérifiée.',
    es: 'Crea nombres estilizados para protagonistas, rivales y personajes de anime originales, sin atribuirles significados japoneses que no se hayan verificado.',
    de: 'Erstelle stilisierte Namen für Anime-Hauptfiguren, Rivalen und eigene Figuren, ohne ungeprüfte japanische Bedeutungen zu behaupten.'
  },
  restaurant: {
    en: 'Explore restaurant-name ideas that fit the cuisine, atmosphere, location, and audience; check local businesses and trademark availability before choosing.',
    fr: 'Trouvez des noms de restaurants adaptés à la cuisine, à l’ambiance, au lieu et à la clientèle ; vérifiez les commerces existants et les marques avant de choisir.',
    es: 'Explora nombres para restaurantes acordes con la cocina, el ambiente, la ubicación y el público; revisa negocios y marcas existentes antes de elegir.',
    de: 'Finde Restaurantnamen passend zu Küche, Atmosphäre, Standort und Gästen. Prüfe vor der Entscheidung bestehende Betriebe und Marken.'
  }
};

export const LOCALIZED_GENERATOR_DESCRIPTION_LANGUAGES = Object.keys(LOCALIZED_DESCRIPTIONS);

/** Localized, honest category-level summary. Detailed editorial guides remain in their authored source language. */
export function getLocalizedGeneratorDescription(meta: GeneratorMeta, language: LanguageCode): string {
  const generatorSpecific = GENERATOR_DESCRIPTION_OVERRIDES[meta.id]?.[language];
  if (generatorSpecific) return generatorSpecific;

  const locale = LOCALIZED_DESCRIPTIONS[language];
  if (!locale) return meta.description;
  return locale[meta.category] || locale.creative || meta.description;
}

/** True when this generator has a reviewed, generator-specific description in this locale. */
export function hasLocalizedGeneratorDescription(generatorId: string, language: LanguageCode): boolean {
  return Boolean(GENERATOR_DESCRIPTION_OVERRIDES[generatorId]?.[language]);
}
