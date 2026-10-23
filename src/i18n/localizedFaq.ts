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


const ES_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: '¿Cómo funciona un generador de nombres como NameForge?', a: 'NameForge combina raíces lingüísticas, sílabas armoniosas y reglas morfológicas adaptadas a cada universo (fantasía, tecnología, marcas y narrativa). A diferencia de los generadores aleatorios básicos, tiene en cuenta el ritmo, la pronunciación y la relación con el tema.' },
  { q: '¿Cómo elijo un nombre que encaje de verdad con mi proyecto?', a: 'Primero define el tono que buscas (prestigioso, contundente, misterioso o cercano). Pronuncia el nombre en voz alta para comprobar cómo suena. Adapta también su longitud al uso previsto: corto para una aplicación móvil o más evocador para una saga de libros.' },
  { q: '¿Cómo puedo crear un nombre original y fácil de recordar?', a: 'Prueba combinaciones de sílabas inesperadas o fusiones sutiles de palabras. Evita los clichés gastados y los números innecesarios. Elige la opción Corta para nombres directos y Media para un resultado equilibrado.' },
  { q: '¿Cómo evito que se repitan nombres entre generaciones?', a: 'NameForge conserva localmente una memoria móvil de los 100 nombres generados más recientemente. En las siguientes generaciones, filtra las sugerencias recientes para fomentar resultados más variados y novedosos.' },
  { q: '¿Puedo generar nombres con diferentes idiomas y sonidos?', a: 'Sí. Cada generador dispone de un selector de idioma de generación (francés, inglés, japonés/anime, árabe/oriental, latín/élfico, nórdico y tecnológico). Este selector modifica las raíces fonéticas sin cambiar el idioma de la interfaz del sitio.' },
  { q: '¿Cómo funcionan los ajustes de estilo y longitud?', a: 'La longitud influye en la estructura: Corta suele producir una o dos sílabas contundentes; Media busca dos o tres sílabas equilibradas; y Larga favorece nombres compuestos o narrativos. El estilo modifica los sonidos predominantes y el arquetipo deseado.' },
  { q: '¿Cómo puedo copiar, guardar y volver a encontrar mis nombres?', a: 'Cada tarjeta de nombre incluye un botón para copiar con un clic, otro para guardar favoritos y otro para indicar que te gusta. Puedes encontrar los nombres seleccionados en Mis nombres, desde la navegación.' },
  { q: '¿Cómo funcionan los favoritos, las colecciones y las notas privadas?', a: 'En Mis nombres puedes crear colecciones temáticas para agrupar nombres por proyecto. También puedes añadir notas privadas a nombres individuales para recordar una idea o el papel previsto.' },
  { q: '¿Cómo se calculan las estrellas y las clasificaciones de los mejores nombres?', a: 'Puedes valorar cada sugerencia de una a cinco estrellas. La lista de los mejores nombres destaca tus creaciones mejor valoradas en este espacio de trabajo, sin inventar votos.' },
  { q: '¿Puedo exportar o importar mis listas de nombres?', a: 'Sí. En Mis nombres puedes exportar los elementos guardados en JSON (incluidas notas y colecciones) o CSV para hojas de cálculo. También puedes restaurar de forma segura una copia de seguridad JSON anterior.' },
  { q: '¿Se guardan mis datos personales en mi dispositivo?', a: 'NameForge funciona localmente: no necesitas una cuenta ni una contraseña. Tus nombres guardados, notas y preferencias permanecen en el almacenamiento del navegador.' },
  { q: '¿Se garantiza que los nombres generados sean únicos en todo el mundo?', a: 'El motor combina numerosas raíces para crear muchas combinaciones poco comunes. Sin embargo, ningún algoritmo puede garantizar una unicidad absoluta en todo el mundo; un nombre podría existir ya por casualidad en otro idioma.' },
  { q: '¿Puedo usar un nombre generado para mi empresa o producto?', a: 'Las sugerencias se ofrecen sin regalías para usos creativos. Antes de utilizar un nombre comercialmente, consulta los registros de marcas pertinentes para tu sector y jurisdicción, como EUIPO o USPTO.' },
  { q: '¿Cómo compruebo si un dominio de internet está disponible?', a: 'Introduce el nombre elegido en un registrador de dominios para comprobar si extensiones como .com, .es o .io están disponibles para registrarse.' },
  { q: '¿Debo comprobar las marcas registradas antes de usar un nombre?', a: 'Sí. Es esencial hacerlo antes de invertir en una marca, un logotipo o el registro de una empresa. NameForge no certifica la disponibilidad legal; ofrece inspiración.' },
  { q: '¿El sitio funciona en teléfonos y tabletas?', a: 'Sí. La interfaz adaptable está diseñada para utilizarse en teléfonos inteligentes, tabletas y pantallas de ordenador.' },
  { q: '¿Qué hago si no me gusta un resultado?', a: 'Selecciona Generar nuevos nombres o pulsa G en el teclado. También puedes cambiar el arquetipo, la longitud o el idioma de generación para explorar otro sonido.' },
  { q: '¿Cómo puedo informar de un problema o sugerir una mejora?', a: 'Puedes compartir sugerencias en el repositorio del proyecto o proponer nuevos arquetipos para considerar en futuras versiones.' },
];


const DE_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: 'Wie funktioniert ein Namensgenerator wie NameForge?', a: 'NameForge kombiniert sprachliche Wortwurzeln, harmonische Silben und Morphologieregeln, die auf verschiedene Bereiche wie Fantasy, Technik, Marken und Geschichten abgestimmt sind. Anders als einfache Zufallsgeneratoren berücksichtigt die Engine Rhythmus, Aussprache und thematische Passung.' },
  { q: 'Wie wähle ich einen Namen, der wirklich zu meinem Projekt passt?', a: 'Lege zuerst den gewünschten Ton fest: prestigeträchtig, prägnant, geheimnisvoll oder freundlich. Sprich den Namen laut aus, um ihn zu testen. Achte auch auf die passende Länge: kurz für eine mobile App, ausdrucksstärker für eine Buchreihe.' },
  { q: 'Wie erstelle ich einen originellen und einprägsamen Namen?', a: 'Probiere ungewöhnliche Silbenkombinationen oder dezente Wortverschmelzungen aus. Vermeide abgenutzte Klischees und unnötige Zahlen. Wähle „Kurz“ für prägnante Namen und „Mittel“ für ein ausgewogenes Ergebnis.' },
  { q: 'Wie vermeide ich ähnliche Namen bei mehreren Generierungen?', a: 'NameForge speichert lokal eine fortlaufende Liste der 100 zuletzt generierten Namen. Bei späteren Durchläufen werden kürzlich vorgeschlagene Namen herausgefiltert, damit die Ergebnisse abwechslungsreicher ausfallen.' },
  { q: 'Kann ich Namen mit verschiedenen Sprachen und Klangwelten erzeugen?', a: 'Ja. Jeder Generator bietet eine Auswahl für die Generierungssprache, etwa Französisch, Englisch, Japanisch/Anime, Arabisch/orientalisch, Latein/elfisch, nordisch oder technisch. Sie verändert die Lautbausteine, ohne die Sprache der Website-Oberfläche zu ändern.' },
  { q: 'Wie funktionieren die Einstellungen für Stil und Länge?', a: 'Die Länge beeinflusst den Aufbau: „Kurz“ ergibt meist ein oder zwei prägnante Silben, „Mittel“ zielt auf zwei oder drei ausgewogene Silben und „Lang“ bevorzugt zusammengesetzte oder erzählerische Namen. Der Stil verändert die vorherrschenden Klänge und den gewünschten Archetyp.' },
  { q: 'Wie kann ich Namen kopieren, speichern und später wiederfinden?', a: 'Jede Namenskarte bietet eine Schaltfläche zum Kopieren mit einem Klick, eine zum Speichern als Favorit und eine Gefällt-mir-Schaltfläche. Gespeicherte Namen findest du über die Navigation unter „Meine Namen“.' },
  { q: 'Wie funktionieren Favoriten, Sammlungen und private Notizen?', a: 'Unter „Meine Namen“ kannst du thematische Sammlungen anlegen, um Namen nach Projekten zu ordnen. Außerdem lassen sich private Notizen zu einzelnen Namen hinzufügen, um Ideen oder vorgesehene Rollen festzuhalten.' },
  { q: 'Wie werden Sterne und Ranglisten der besten Namen berechnet?', a: 'Du kannst jeden Vorschlag mit einem bis fünf Sternen bewerten. Die Liste der besten Namen hebt deine am höchsten bewerteten Kreationen in diesem Arbeitsbereich hervor, ohne Stimmen zu erfinden.' },
  { q: 'Kann ich meine Namenslisten exportieren oder importieren?', a: 'Ja. Unter „Meine Namen“ kannst du gespeicherte Einträge als JSON (einschließlich Notizen und Sammlungen) oder als CSV für Tabellenprogramme exportieren. Eine frühere JSON-Sicherung kannst du auch wiederherstellen.' },
  { q: 'Werden meine persönlichen Daten auf meinem Gerät gespeichert?', a: 'NameForge arbeitet lokal: Du benötigst weder Benutzerkonto noch Passwort. Gespeicherte Namen, Notizen und Einstellungen bleiben im Speicher deines Browsers.' },
  { q: 'Sind generierte Namen garantiert weltweit einzigartig?', a: 'Die Engine kombiniert viele Wortwurzeln und erzeugt dadurch zahlreiche ungewöhnliche Kombinationen. Absolute weltweite Einzigartigkeit kann jedoch kein Algorithmus garantieren; ein Name kann zufällig bereits in einer anderen Sprache existieren.' },
  { q: 'Kann ich einen generierten Namen für mein Unternehmen oder Produkt verwenden?', a: 'Die Vorschläge können für kreative Zwecke lizenzgebührenfrei verwendet werden. Prüfe vor einer kommerziellen Nutzung die relevanten Markenregister für deine Branche und Rechtsordnung, beispielsweise EUIPO oder USPTO.' },
  { q: 'Wie prüfe ich, ob eine Internetdomain verfügbar ist?', a: 'Gib deinen Wunschnamen bei einem Domainanbieter ein, um zu prüfen, ob Endungen wie .com, .de oder .io registriert werden können.' },
  { q: 'Sollte ich eingetragene Marken prüfen, bevor ich einen Namen verwende?', a: 'Ja. Das ist wichtig, bevor du in Branding, ein Logo oder eine Unternehmensregistrierung investierst. NameForge bestätigt keine rechtliche Verfügbarkeit, sondern liefert Inspiration.' },
  { q: 'Funktioniert die Website auf Smartphones und Tablets?', a: 'Ja. Die responsive Oberfläche ist für Smartphones, Tablets und Desktop-Bildschirme ausgelegt.' },
  { q: 'Was kann ich tun, wenn mir ein Ergebnis nicht gefällt?', a: 'Wähle „Neue Namen generieren“ oder drücke die Taste G. Du kannst auch Archetyp, Länge oder Generierungssprache ändern, um andere Klangwelten auszuprobieren.' },
  { q: 'Wie kann ich ein Problem melden oder eine Verbesserung vorschlagen?', a: 'Du kannst Vorschläge im Projekt-Repository teilen oder neue Archetypen vorschlagen, die für zukünftige Versionen berücksichtigt werden sollen.' },
];


const IT_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: 'Come funziona un generatore di nomi come NameForge?', a: 'NameForge combina radici linguistiche, sillabe armoniose e regole morfologiche adattate a ogni universo, come fantasy, tecnologia, marchi e narrazione. A differenza dei generatori casuali di base, considera ritmo, pronuncia e pertinenza tematica.' },
  { q: 'Come scelgo un nome davvero adatto al mio progetto?', a: 'Definisci prima il tono desiderato: prestigioso, incisivo, misterioso o amichevole. Pronuncia il nome ad alta voce per provarlo. Scegli una lunghezza adatta all’uso: breve per un’app mobile, più evocativa per una serie di libri.' },
  { q: 'Come posso creare un nome originale e memorabile?', a: 'Prova combinazioni di sillabe insolite o fusioni discrete di parole. Evita cliché abusati e numeri superflui. Scegli Breve per nomi incisivi e Media per un risultato equilibrato.' },
  { q: 'Come evito nomi simili tra una generazione e l’altra?', a: 'NameForge conserva localmente una memoria mobile degli ultimi 100 nomi generati. Nelle generazioni successive, i suggerimenti recenti vengono filtrati per favorire risultati più vari e originali.' },
  { q: 'Posso generare nomi con lingue e sonorità diverse?', a: 'Sì. Ogni generatore offre un selettore della lingua di generazione, come francese, inglese, giapponese/anime, arabo/orientale, latino/elfico, nordico e tecnologico. Cambia le radici fonetiche senza modificare la lingua dell’interfaccia.' },
  { q: 'Come funzionano le impostazioni di stile e lunghezza?', a: 'La lunghezza influenza la struttura: Breve produce di solito una o due sillabe incisive, Media punta a due o tre sillabe equilibrate e Lunga favorisce nomi composti o narrativi. Lo stile modifica i suoni dominanti e l’archetipo desiderato.' },
  { q: 'Come posso copiare, salvare e ritrovare i miei nomi?', a: 'Ogni scheda del nome offre un pulsante per copiare con un clic, uno per salvare tra i preferiti e uno per indicare che ti piace. Ritrova i nomi selezionati nella sezione I miei nomi della navigazione.' },
  { q: 'Come funzionano preferiti, raccolte e note private?', a: 'In I miei nomi puoi creare raccolte tematiche per organizzare i nomi per progetto. Puoi anche aggiungere note private ai singoli nomi per ricordare un’idea o il ruolo previsto.' },
  { q: 'Come vengono calcolate le stelle e le classifiche dei nomi migliori?', a: 'Puoi valutare ogni suggerimento da una a cinque stelle. La lista dei nomi migliori mette in evidenza le tue creazioni più apprezzate in questo spazio di lavoro, senza inventare voti.' },
  { q: 'Posso esportare o importare le mie liste di nomi?', a: 'Sì. In I miei nomi puoi esportare gli elementi salvati in JSON, comprese note e raccolte, oppure in CSV per i fogli di calcolo. Puoi anche ripristinare in sicurezza un precedente backup JSON.' },
  { q: 'I miei dati personali vengono salvati sul dispositivo?', a: 'NameForge funziona localmente: non serve un account né una password. I nomi salvati, le note e le preferenze restano nella memoria del browser.' },
  { q: 'I nomi generati sono garantiti unici in tutto il mondo?', a: 'Il motore combina molte radici per creare numerose combinazioni poco comuni. Tuttavia, nessun algoritmo può garantire l’unicità assoluta mondiale: un nome potrebbe già esistere casualmente in un’altra lingua.' },
  { q: 'Posso usare un nome generato per la mia azienda o il mio prodotto?', a: 'I suggerimenti sono disponibili senza royalty per usi creativi. Prima di usare un nome a fini commerciali, consulta i registri dei marchi pertinenti al tuo settore e alla tua giurisdizione, come EUIPO o USPTO.' },
  { q: 'Come verifico se un dominio Internet è disponibile?', a: 'Inserisci il nome scelto presso un registrar di domini per verificare se estensioni come .com, .it o .io sono disponibili per la registrazione.' },
  { q: 'Devo controllare i marchi registrati prima di usare un nome?', a: 'Sì. È essenziale farlo prima di investire in un marchio, un logo o la registrazione di un’azienda. NameForge non certifica la disponibilità legale: offre ispirazione.' },
  { q: 'Il sito funziona su telefoni e tablet?', a: 'Sì. L’interfaccia adattiva è progettata per smartphone, tablet e schermi desktop.' },
  { q: 'Cosa faccio se non mi piace un risultato?', a: 'Seleziona Genera nuovi nomi oppure premi G sulla tastiera. Puoi anche cambiare archetipo, lunghezza o lingua di generazione per esplorare sonorità diverse.' },
  { q: 'Come posso segnalare un problema o suggerire un miglioramento?', a: 'Puoi condividere suggerimenti nel repository del progetto o proporre nuovi archetipi da valutare per le versioni future.' },
];


const PT_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: 'Como funciona um gerador de nomes como o NameForge?', a: 'O NameForge combina raízes linguísticas, sílabas harmoniosas e regras morfológicas adaptadas a cada universo, como fantasia, tecnologia, marcas e narrativas. Ao contrário dos geradores aleatórios básicos, considera o ritmo, a pronúncia e a relevância temática.' },
  { q: 'Como escolho um nome que realmente combine com o meu projeto?', a: 'Primeiro, define o tom desejado: prestigiado, marcante, misterioso ou amigável. Diz o nome em voz alta para testar o som. Escolhe também um comprimento adequado ao uso: curto para uma aplicação móvel ou mais evocativo para uma série de livros.' },
  { q: 'Como posso criar um nome original e memorável?', a: 'Experimenta combinações inesperadas de sílabas ou fusões subtis de palavras. Evita clichés gastos e números desnecessários. Escolhe Curto para nomes incisivos e Médio para um resultado equilibrado.' },
  { q: 'Como evito nomes semelhantes entre várias gerações?', a: 'O NameForge mantém localmente uma memória rotativa dos 100 nomes gerados mais recentemente. Nas gerações seguintes, as sugestões recentes são filtradas para incentivar resultados mais variados e originais.' },
  { q: 'Posso gerar nomes com diferentes línguas e sonoridades?', a: 'Sim. Cada gerador inclui um seletor do idioma de geração, como francês, inglês, japonês/anime, árabe/oriental, latim/élfico, nórdico e tecnológico. Este altera as raízes fonéticas sem mudar o idioma da interface do site.' },
  { q: 'Como funcionam as opções de estilo e comprimento?', a: 'O comprimento influencia a estrutura: Curto costuma produzir uma ou duas sílabas marcantes, Médio procura duas ou três sílabas equilibradas e Longo favorece nomes compostos ou narrativos. O estilo altera os sons predominantes e o arquétipo pretendido.' },
  { q: 'Como posso copiar, guardar e voltar a encontrar os meus nomes?', a: 'Cada cartão de nome inclui um botão para copiar com um clique, outro para guardar nos favoritos e outro para indicar que gostas do nome. Encontra os nomes escolhidos em Os meus nomes, na navegação.' },
  { q: 'Como funcionam os favoritos, as coleções e as notas privadas?', a: 'Em Os meus nomes, podes criar coleções temáticas para agrupar nomes por projeto. Também podes adicionar notas privadas a nomes individuais para guardar uma ideia ou o papel pretendido.' },
  { q: 'Como são calculadas as estrelas e as classificações dos melhores nomes?', a: 'Podes avaliar cada sugestão de uma a cinco estrelas. A lista dos melhores nomes destaca as tuas criações mais bem avaliadas neste espaço de trabalho, sem inventar votos.' },
  { q: 'Posso exportar ou importar as minhas listas de nomes?', a: 'Sim. Em Os meus nomes, podes exportar os itens guardados em JSON, incluindo notas e coleções, ou em CSV para folhas de cálculo. Também podes restaurar com segurança uma cópia de segurança JSON anterior.' },
  { q: 'Os meus dados pessoais ficam guardados no dispositivo?', a: 'O NameForge funciona localmente: não precisas de conta nem palavra-passe. Os nomes guardados, as notas e as preferências ficam no armazenamento do teu navegador.' },
  { q: 'Os nomes gerados são garantidamente únicos em todo o mundo?', a: 'O motor combina muitas raízes para criar várias combinações pouco comuns. Contudo, nenhum algoritmo pode garantir unicidade absoluta mundial; um nome pode já existir por acaso noutra língua.' },
  { q: 'Posso usar um nome gerado para a minha empresa ou produto?', a: 'As sugestões são disponibilizadas sem royalties para usos criativos. Antes de usar um nome comercialmente, consulta os registos de marcas relevantes para o teu setor e jurisdição, como EUIPO ou USPTO.' },
  { q: 'Como verifico se um domínio de Internet está disponível?', a: 'Introduz o nome escolhido num registador de domínios para verificar se extensões como .com, .pt ou .io estão disponíveis para registo.' },
  { q: 'Devo verificar marcas registadas antes de usar um nome?', a: 'Sim. É essencial fazê-lo antes de investir numa marca, num logótipo ou no registo de uma empresa. O NameForge não certifica a disponibilidade legal; oferece inspiração.' },
  { q: 'O site funciona em telemóveis e tablets?', a: 'Sim. A interface adaptável foi concebida para smartphones, tablets e ecrãs de computador.' },
  { q: 'O que faço se não gostar de um resultado?', a: 'Seleciona Gerar novos nomes ou prime G no teclado. Também podes alterar o arquétipo, o comprimento ou o idioma de geração para explorar outras sonoridades.' },
  { q: 'Como posso comunicar um problema ou sugerir uma melhoria?', a: 'Podes partilhar sugestões no repositório do projeto ou propor novos arquétipos para serem considerados em versões futuras.' },
];


const NL_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: 'Hoe werkt een naamgenerator zoals NameForge?', a: 'NameForge combineert taalkundige woordstammen, harmonieuze lettergrepen en morfologische regels die zijn afgestemd op verschillende werelden, zoals fantasy, technologie, merken en verhalen. Anders dan eenvoudige willekeurige generatoren houdt de engine rekening met ritme, uitspraak en thematische relevantie.' },
  { q: 'Hoe kies ik een naam die echt bij mijn project past?', a: 'Bepaal eerst de gewenste uitstraling: prestigieus, krachtig, mysterieus of vriendelijk. Spreek de naam hardop uit om te horen hoe hij klinkt. Kies ook een passende lengte: kort voor een mobiele app of meer verhalend voor een boekenreeks.' },
  { q: 'Hoe maak ik een originele, gemakkelijk te onthouden naam?', a: 'Probeer onverwachte combinaties van lettergrepen of subtiele samenvoegingen van woorden. Vermijd afgezaagde clichés en overbodige cijfers. Kies Kort voor krachtige namen en Gemiddeld voor een evenwichtig resultaat.' },
  { q: 'Hoe voorkom ik vergelijkbare namen bij meerdere generaties?', a: 'NameForge bewaart lokaal een doorlopende lijst met de 100 laatst gegenereerde namen. Bij volgende generaties worden recente suggesties gefilterd om meer variatie en nieuwe resultaten te stimuleren.' },
  { q: 'Kan ik namen maken met verschillende talen en klanken?', a: 'Ja. Elke generator heeft een keuze voor de generatietaal, zoals Frans, Engels, Japans/anime, Arabisch/oosters, Latijn/elfachtig, Noords en technologisch. Die keuze verandert de klankwortels zonder de taal van de website-interface te wijzigen.' },
  { q: 'Hoe werken de instellingen voor stijl en lengte?', a: 'De lengte beïnvloedt de structuur: Kort levert meestal één of twee krachtige lettergrepen op, Gemiddeld mikt op twee of drie evenwichtige lettergrepen en Lang geeft de voorkeur aan samengestelde of verhalende namen. De stijl verandert de dominante klanken en het gewenste archetype.' },
  { q: 'Hoe kan ik namen kopiëren, opslaan en later terugvinden?', a: 'Elke naamkaart heeft een knop om met één klik te kopiëren, een knop om favorieten op te slaan en een vind-ik-leukknop. Je vindt geselecteerde namen via Mijn namen in de navigatie.' },
  { q: 'Hoe werken favorieten, verzamelingen en privénotities?', a: 'In Mijn namen kun je thematische verzamelingen maken om namen per project te groeperen. Je kunt ook privénotities aan afzonderlijke namen toevoegen om ideeën of beoogde rollen te onthouden.' },
  { q: 'Hoe worden sterren en ranglijsten van beste namen berekend?', a: 'Je kunt elke suggestie één tot vijf sterren geven. De lijst met beste namen toont je hoogst beoordeelde creaties in deze werkruimte, zonder stemmen te verzinnen.' },
  { q: 'Kan ik mijn namenlijsten exporteren of importeren?', a: 'Ja. In Mijn namen kun je opgeslagen items exporteren als JSON, inclusief notities en verzamelingen, of als CSV voor spreadsheets. Je kunt ook veilig een eerdere JSON-back-up herstellen.' },
  { q: 'Worden mijn persoonlijke gegevens op mijn apparaat opgeslagen?', a: 'NameForge werkt lokaal: je hebt geen account of wachtwoord nodig. Je opgeslagen namen, notities en voorkeuren blijven in de opslag van je browser.' },
  { q: 'Zijn gegenereerde namen gegarandeerd wereldwijd uniek?', a: 'De engine combineert veel woordstammen voor een breed scala aan ongebruikelijke combinaties. Geen enkel algoritme kan echter absolute wereldwijde uniciteit garanderen; een naam kan toevallig al in een andere taal bestaan.' },
  { q: 'Kan ik een gegenereerde naam gebruiken voor mijn bedrijf of product?', a: 'De suggesties kunnen royaltyvrij voor creatieve doeleinden worden gebruikt. Controleer vóór commercieel gebruik de relevante merkenregisters voor je sector en rechtsgebied, zoals EUIPO of USPTO.' },
  { q: 'Hoe controleer ik of een internetdomein beschikbaar is?', a: 'Voer de gekozen naam in bij een domeinregistrar om te controleren of extensies zoals .com, .nl of .io geregistreerd kunnen worden.' },
  { q: 'Moet ik geregistreerde merken controleren voordat ik een naam gebruik?', a: 'Ja. Dat is belangrijk voordat je investeert in branding, een logo of bedrijfsregistratie. NameForge bevestigt niet dat een naam juridisch beschikbaar is, maar biedt inspiratie.' },
  { q: 'Werkt de website op telefoons en tablets?', a: 'Ja. De responsieve interface is ontworpen voor smartphones, tablets en desktopschermen.' },
  { q: 'Wat kan ik doen als ik een resultaat niet goed vind?', a: 'Kies Nieuwe namen genereren of druk op G op je toetsenbord. Je kunt ook het archetype, de lengte of de generatietaal wijzigen om andere klanken te verkennen.' },
  { q: 'Hoe kan ik een probleem melden of een verbetering voorstellen?', a: 'Je kunt suggesties delen in de projectrepository of nieuwe archetypen voorstellen voor toekomstige versies.' },
];


const TR_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: 'NameForge gibi bir isim oluşturucu nasıl çalışır?', a: 'NameForge; fantastik dünyalar, teknoloji, markalar ve hikâyeler gibi farklı alanlara uyarlanmış dil köklerini, uyumlu heceleri ve biçimbilim kurallarını birleştirir. Basit rastgele oluşturuculardan farklı olarak ritmi, telaffuzu ve konuya uygunluğu dikkate alır.' },
  { q: 'Projem için gerçekten uygun bir ismi nasıl seçerim?', a: 'Önce istediğin tonu belirle: prestijli, güçlü, gizemli veya samimi. İsmi yüksek sesle söyleyerek kulağa nasıl geldiğini dene. Kullanım amacına uygun bir uzunluk seç: mobil uygulama için kısa, kitap serisi için daha anlatımlı bir isim.' },
  { q: 'Özgün ve akılda kalıcı bir ismi nasıl oluşturabilirim?', a: 'Beklenmedik hece birleşimlerini veya kelimelerin incelikli birleşimlerini dene. Eskimiş klişelerden ve gereksiz sayılardan kaçın. Çarpıcı isimler için Kısa, dengeli sonuçlar için Orta seçeneğini kullan.' },
  { q: 'Her yeni üretimde benzer isimleri nasıl önleyebilirim?', a: 'NameForge, son oluşturulan 100 ismi tarayıcında yerel olarak hatırlar. Sonraki üretimlerde yakın zamanda önerilen isimleri filtreleyerek daha çeşitli sonuçlar sunmaya çalışır.' },
  { q: 'Farklı dillerde ve seslerde isimler oluşturabilir miyim?', a: 'Evet. Her oluşturucuda Fransızca, İngilizce, Japonca/anime, Arapça/doğu, Latince/elf, İskandinav ve teknoloji gibi ses kökenleri seçilebilir. Bu ayar, sitenin arayüz dilini değiştirmeden isimlerin fonetik köklerini etkiler.' },
  { q: 'Stil ve uzunluk ayarları nasıl çalışır?', a: 'Uzunluk isim yapısını etkiler: Kısa genellikle bir veya iki güçlü hece, Orta iki ya da üç dengeli hece, Uzun ise birleşik veya anlatı niteliğinde isimler üretmeyi hedefler. Stil, baskın sesleri ve istenen arketipi değiştirir.' },
  { q: 'İsimlerimi nasıl kopyalar, kaydeder ve yeniden bulurum?', a: 'Her isim kartında tek tıklamayla kopyalama, favorilere kaydetme ve beğenme düğmeleri bulunur. Seçtiğin isimleri gezinme menüsündeki İsimlerim bölümünde bulabilirsin.' },
  { q: 'Favoriler, koleksiyonlar ve özel notlar nasıl çalışır?', a: 'İsimlerim bölümünde isimleri projelerine göre gruplamak için temalı koleksiyonlar oluşturabilirsin. Ayrıca bir fikri veya kullanım amacını hatırlamak için isimlere özel notlar ekleyebilirsin.' },
  { q: 'Yıldız puanları ve en iyi isim sıralaması nasıl hesaplanır?', a: 'Her öneriye bir ila beş yıldız arasında puan verebilirsin. En iyi isimler listesi, bu çalışma alanında en yüksek puan verdiğin isimleri gösterir; sahte oylar oluşturmaz.' },
  { q: 'İsim listelerimi dışa veya içe aktarabilir miyim?', a: 'Evet. İsimlerim bölümünde kayıtlı öğeleri notlar ve koleksiyonlar dâhil JSON olarak ya da elektronik tablolar için CSV biçiminde dışa aktarabilirsin. Önceden alınmış bir JSON yedeğini de geri yükleyebilirsin.' },
  { q: 'Kişisel verilerim cihazımda saklanıyor mu?', a: 'NameForge yerel olarak çalışır; hesap veya parola gerekmez. Kaydettiğin isimler, notlar ve tercihlerin tarayıcının depolama alanında kalır.' },
  { q: 'Oluşturulan isimlerin dünya çapında benzersiz olduğu garanti edilir mi?', a: 'Motor, alışılmadık birleşimler oluşturmak için birçok kökü bir araya getirir. Ancak hiçbir algoritma dünya çapında mutlak benzersizlik garantisi veremez; aynı isim başka bir dilde zaten kullanılıyor olabilir.' },
  { q: 'Oluşturulan bir ismi şirketim veya ürünüm için kullanabilir miyim?', a: 'Öneriler yaratıcı amaçlarla telif ücreti olmadan kullanılabilir. Ticari kullanımdan önce sektörün ve bulunduğun bölgenin marka kayıtlarını kontrol et; örneğin EUIPO veya USPTO kayıtlarına bak.' },
  { q: 'Bir internet alan adının kullanılabilir olduğunu nasıl kontrol ederim?', a: 'Seçtiğin ismi bir alan adı kayıt kuruluşunda aratarak .com, .tr veya .io gibi uzantıların kayda açık olup olmadığını kontrol edebilirsin.' },
  { q: 'Bir ismi kullanmadan önce tescilli markaları kontrol etmeli miyim?', a: 'Evet. Markalaşmaya, logoya veya şirket kaydına yatırım yapmadan önce bu kontrol önemlidir. NameForge yasal kullanılabilirliği onaylamaz; yalnızca fikir verir.' },
  { q: 'Web sitesi telefonlarda ve tabletlerde çalışıyor mu?', a: 'Evet. Duyarlı arayüz akıllı telefonlarda, tabletlerde ve masaüstü ekranlarında kullanılacak şekilde tasarlanmıştır.' },
  { q: 'Bir sonucu beğenmezsem ne yapabilirim?', a: 'Yeni isimler oluştur seçeneğini seç veya klavyede G tuşuna bas. Farklı sesler denemek için arketipi, uzunluğu ya da üretim dilini de değiştirebilirsin.' },
  { q: 'Bir sorunu nasıl bildirebilir veya iyileştirme önerebilirim?', a: 'Önerilerini proje deposunda paylaşabilir veya gelecekteki sürümlerde değerlendirilmek üzere yeni arketipler önerebilirsin.' },
];


const AR_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: 'كيف يعمل مولّد الأسماء مثل NameForge؟', a: 'يجمع NameForge الجذور اللغوية والمقاطع المتناغمة وقواعد تشكيل الكلمات المناسبة لعوالم مختلفة، مثل الخيال والتقنية والعلامات التجارية والقصص. وعلى خلاف المولّدات العشوائية البسيطة، يراعي الإيقاع والنطق ومدى ملاءمة الاسم للموضوع.' },
  { q: 'كيف أختار اسماً يناسب مشروعي فعلاً؟', a: 'حدّد أولاً النبرة التي تريدها: فخمة أو قوية أو غامضة أو ودودة. انطق الاسم بصوت مسموع لتختبر وقعه، واختر طولاً يناسب الاستخدام؛ اسماً قصيراً لتطبيق هاتف أو اسماً أكثر تعبيراً لسلسلة كتب.' },
  { q: 'كيف أنشئ اسماً أصلياً وسهل التذكّر؟', a: 'جرّب مزج مقاطع صوتية غير متوقعة أو دمج كلمات بطريقة لطيفة. تجنّب العبارات المستهلكة والأرقام غير الضرورية. اختر الطول القصير للأسماء السريعة والمتوسطة للحصول على نتيجة متوازنة.' },
  { q: 'كيف أتجنّب الأسماء المتشابهة بين عمليات التوليد؟', a: 'يحتفظ NameForge محلياً بذاكرة لآخر 100 اسم تم إنشاؤه. وفي عمليات التوليد التالية، تُستبعد الاقتراحات الحديثة للمساعدة على تقديم نتائج أكثر تنوعاً.' },
  { q: 'هل يمكنني إنشاء أسماء بأصوات ولغات مختلفة؟', a: 'نعم. يتيح كل مولّد اختيار لغة التوليد أو طابعها الصوتي، مثل الفرنسية والإنجليزية واليابانية/الأنمي والعربية واللاتينية/الإلفية والإسكندنافية والتقنية. يؤثر ذلك في الجذور الصوتية دون تغيير لغة واجهة الموقع.' },
  { q: 'كيف تعمل إعدادات الأسلوب والطول؟', a: 'يؤثر الطول في بنية الاسم: القصير يستهدف عادةً مقطعاً أو مقطعين، والمتوسط مقطعين أو ثلاثة متوازنة، والطويل يفضّل الأسماء المركبة أو السردية. أما الأسلوب فيغيّر الأصوات الغالبة والطابع المطلوب.' },
  { q: 'كيف أنسخ الأسماء وأحفظها وأعثر عليها لاحقاً؟', a: 'تحتوي كل بطاقة اسم على زر للنسخ بنقرة واحدة، وزر للحفظ في المفضلة، وزر للإعجاب. يمكنك العثور على الأسماء التي اخترتها في قسم «أسمائي» ضمن قائمة التنقّل.' },
  { q: 'كيف تعمل المفضلة والمجموعات والملاحظات الخاصة؟', a: 'يمكنك في قسم «أسمائي» إنشاء مجموعات حسب موضوع المشروع. كما يمكنك إضافة ملاحظات خاصة إلى كل اسم لتذكّر فكرة أو الغرض المقصود منه.' },
  { q: 'كيف تُحسب النجوم وترتيبات أفضل الأسماء؟', a: 'يمكنك تقييم كل اقتراح من نجمة إلى خمس نجوم. وتُبرز قائمة أفضل الأسماء إبداعاتك الأعلى تقييماً في مساحة العمل هذه، دون اختلاق أصوات أو تقييمات.' },
  { q: 'هل يمكنني تصدير قوائم الأسماء أو استيرادها؟', a: 'نعم. يمكنك تصدير العناصر المحفوظة من قسم «أسمائي» بصيغة JSON، بما في ذلك الملاحظات والمجموعات، أو بصيغة CSV لجداول البيانات. ويمكنك أيضاً استعادة نسخة احتياطية سابقة بصيغة JSON.' },
  { q: 'هل تُحفظ بياناتي الشخصية على جهازي؟', a: 'يعمل NameForge محلياً ولا يحتاج إلى حساب أو كلمة مرور. تبقى الأسماء المحفوظة والملاحظات والتفضيلات في مساحة التخزين الخاصة بمتصفحك.' },
  { q: 'هل الأسماء الناتجة فريدة في العالم بشكل مضمون؟', a: 'يجمع المحرّك جذوراً كثيرة لإنتاج تركيبات غير مألوفة. لكن لا يمكن لأي خوارزمية ضمان التفرد المطلق عالمياً؛ فقد يكون الاسم مستخدماً بالفعل في لغة أخرى.' },
  { q: 'هل يمكنني استخدام اسم مُنشأ لشركتي أو منتجي؟', a: 'يمكن استخدام الاقتراحات لأغراض إبداعية دون رسوم ملكية. قبل الاستخدام التجاري، تحقّق من سجلات العلامات التجارية ذات الصلة بقطاعك وبلدك، مثل سجلات EUIPO أو USPTO.' },
  { q: 'كيف أتحقق من توفر اسم نطاق على الإنترنت؟', a: 'أدخل الاسم الذي اخترته لدى مسجّل نطاقات للتحقق من إمكانية تسجيل امتدادات مثل ‎.com أو ‎.dz أو ‎.io.' },
  { q: 'هل ينبغي التحقق من العلامات التجارية المسجلة قبل استخدام الاسم؟', a: 'نعم. من المهم فعل ذلك قبل الاستثمار في الهوية التجارية أو الشعار أو تسجيل الشركة. لا يؤكد NameForge التوفر القانوني للاسم، بل يقدّم أفكاراً وإلهاماً.' },
  { q: 'هل يعمل الموقع على الهواتف والأجهزة اللوحية؟', a: 'نعم. صُممت الواجهة المتجاوبة لتعمل على الهواتف الذكية والأجهزة اللوحية وشاشات الحاسوب.' },
  { q: 'ماذا أفعل إذا لم تعجبني النتيجة؟', a: 'اختر إنشاء أسماء جديدة أو اضغط على المفتاح G في لوحة المفاتيح. ويمكنك أيضاً تغيير الطابع أو الطول أو لغة التوليد لاستكشاف أصوات مختلفة.' },
  { q: 'كيف أبلّغ عن مشكلة أو أقترح تحسيناً؟', a: 'يمكنك مشاركة اقتراحاتك في مستودع المشروع أو اقتراح أنماط جديدة للنظر فيها في الإصدارات القادمة.' },
];


const JA_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
  { q: 'NameForgeのような名前ジェネレーターはどのように動作しますか？', a: 'NameForgeは、ファンタジー、テクノロジー、ブランド、物語などの分野に合わせて、言語の語根、調和する音節、語形のルールを組み合わせます。単純なランダム生成とは異なり、リズムや発音、テーマとの相性も考慮します。' },
  { q: '自分のプロジェクトに合う名前を選ぶには？', a: 'まず、目指す印象を決めましょう。高級感、力強さ、神秘的な雰囲気、親しみやすさなどです。声に出して響きを確かめ、用途に合った長さを選びます。モバイルアプリなら短く、書籍シリーズなら物語性のある名前が向いています。' },
  { q: '独創的で覚えやすい名前を作るには？', a: '意外性のある音節の組み合わせや、言葉同士の自然な融合を試してみましょう。使い古された表現や不要な数字は避けます。印象の強い名前には「短い」、バランスを重視するなら「中くらい」を選びましょう。' },
  { q: '生成するたびに似た名前が出るのを防ぐには？', a: 'NameForgeは、直近に生成した100件の名前をブラウザー内に保存します。次回以降の生成では最近の候補を除外し、より多様な結果になるようにします。' },
  { q: '異なる言語や音の雰囲気で名前を作れますか？', a: 'はい。各ジェネレーターでは、フランス語、英語、日本語・アニメ風、アラビア語・東洋風、ラテン語・エルフ風、北欧風、テクノロジー風などの生成スタイルを選べます。サイトの表示言語を変えずに、名前の音の組み立て方を変えられます。' },
  { q: 'スタイルと長さの設定はどのように機能しますか？', a: '長さは名前の構造に影響します。「短い」は通常1～2音節、「中くらい」はバランスのよい2～3音節、「長い」は複合的または物語性のある名前を目指します。スタイルは主な音の傾向や名前の archetype を変えます。' },
  { q: '名前をコピーして保存し、あとから見つけるには？', a: '各名前カードには、ワンクリックでコピーするボタン、お気に入りに保存するボタン、いいねボタンがあります。選んだ名前はナビゲーションの「My Names（自分の名前）」から確認できます。' },
  { q: 'お気に入り、コレクション、個人メモはどう使いますか？', a: '「My Names」では、プロジェクトごとに名前をまとめるテーマ別コレクションを作成できます。名前ごとに非公開メモを追加して、アイデアや用途を記録することもできます。' },
  { q: '星評価と人気の名前の順位はどう決まりますか？', a: '各候補に1～5個の星を付けて評価できます。上位の名前リストには、この作業スペースで高く評価した名前が表示され、架空の投票数が作られることはありません。' },
  { q: '名前のリストをエクスポートまたはインポートできますか？', a: 'はい。「My Names」から、メモやコレクションを含む保存データをJSON形式、または表計算ソフト向けのCSV形式でエクスポートできます。以前作成したJSONバックアップを復元することもできます。' },
  { q: '個人データは自分の端末に保存されますか？', a: 'NameForgeはローカルで動作し、アカウントやパスワードは必要ありません。保存した名前、メモ、設定はブラウザーのストレージ内に保持されます。' },
  { q: '生成された名前が世界中で唯一であると保証されますか？', a: 'エンジンは多くの語根を組み合わせ、珍しい名前を作ります。ただし、どのアルゴリズムでも世界中での完全な唯一性は保証できません。別の言語ですでに使われている可能性があります。' },
  { q: '生成した名前を会社や製品に使えますか？', a: '提案された名前は創作目的でロイヤリティなしに利用できます。商用利用の前には、業界や地域に関係する商標登録を確認してください。たとえばEUIPOやUSPTOの登録情報を調べる方法があります。' },
  { q: 'インターネットのドメイン名が空いているか確認するには？', a: 'ドメイン登録サービスで選んだ名前を検索し、.com、.jp、.io などの拡張子が登録可能か確認してください。' },
  { q: '名前を使う前に登録商標を確認すべきですか？', a: 'はい。ブランド、ロゴ、会社登録に投資する前に確認することが重要です。NameForgeは法的な使用可能性を保証するものではなく、アイデアを提供するツールです。' },
  { q: 'このサイトはスマートフォンやタブレットでも使えますか？', a: 'はい。画面サイズに合わせて表示が変わるため、スマートフォン、タブレット、デスクトップで利用できます。' },
  { q: '生成結果が気に入らない場合はどうすればよいですか？', a: '「新しい名前を生成」を選ぶか、キーボードのGキーを押してください。アーキタイプ、長さ、生成言語を変えて、別の響きを試すこともできます。' },
  { q: '問題を報告したり、改善案を提案したりするには？', a: 'プロジェクトのリポジトリで提案を共有したり、今後のバージョンで検討してほしい新しいアーキタイプを提案したりできます。' },
];

const KO_FAQ: Array<Pick<FAQItem, 'q' | 'a'>> = [
{q:'NameForge 같은 이름 생성기는 어떻게 작동하나요?',a:'NameForge는 판타지, 기술, 브랜드, 이야기 분야에 맞는 언어 어근과 음절, 단어 형성 규칙을 결합하며 발음과 주제 적합성도 고려합니다.'},
{q:'프로젝트에 맞는 이름은 어떻게 고르나요?',a:'원하는 분위기를 정하고 이름을 소리 내어 읽어 보세요. 모바일 앱에는 짧은 이름, 책 시리즈에는 더 서사적인 이름이 어울립니다.'},
{q:'독창적이고 기억하기 쉬운 이름을 만들려면?',a:'새로운 음절 조합이나 자연스러운 단어 결합을 시도하고 진부한 표현과 불필요한 숫자는 피하세요.'},
{q:'반복 생성에서 비슷한 이름을 피하려면?',a:'NameForge는 최근 생성한 100개 이름을 브라우저에 저장하고 다음 생성에서 최근 결과를 걸러 다양성을 높입니다.'},
{q:'다른 언어와 발음으로 이름을 만들 수 있나요?',a:'네. 프랑스어, 영어, 일본 애니메이션풍, 아랍·동양풍, 라틴·엘프풍, 북유럽풍, 기술풍 등을 선택할 수 있으며 사이트 UI 언어는 바뀌지 않습니다.'},
{q:'스타일과 길이 설정은 어떻게 작동하나요?',a:'짧게는 보통 1~2음절, 중간은 2~3음절, 길게는 복합형 이름을 지향합니다. 스타일은 주요 발음과 이름의 유형을 바꿉니다.'},
{q:'이름을 복사하고 저장한 뒤 다시 찾으려면?',a:'이름 카드의 복사, 즐겨찾기, 좋아요 버튼을 사용하세요. 저장한 이름은 메뉴의 내 이름에서 찾을 수 있습니다.'},
{q:'즐겨찾기, 컬렉션, 비공개 메모는 어떻게 쓰나요?',a:'내 이름에서 프로젝트별 컬렉션을 만들고 각 이름에 비공개 메모를 추가할 수 있습니다.'},
{q:'별점과 최고 이름 순위는 어떻게 정해지나요?',a:'각 이름에 별 1~5개를 줄 수 있습니다. 순위에는 이 작업 공간에서 직접 높게 평가한 이름이 표시됩니다.'},
{q:'이름 목록을 내보내거나 가져올 수 있나요?',a:'저장 항목을 메모와 컬렉션을 포함한 JSON 또는 표 계산용 CSV로 내보낼 수 있으며 JSON 백업도 복원할 수 있습니다.'},
{q:'개인 데이터는 내 기기에 저장되나요?',a:'NameForge는 계정 없이 로컬에서 작동합니다. 저장한 이름, 메모, 설정은 브라우저 저장소에 남습니다.'},
{q:'이름이 전 세계에서 유일하다고 보장되나요?',a:'아니요. 여러 어근을 조합하지만 다른 언어에서 같은 이름이 이미 사용될 수 있습니다.'},
{q:'생성한 이름을 회사나 제품에 사용할 수 있나요?',a:'창작 목적으로 사용할 수 있지만 상업적 사용 전에는 EUIPO나 USPTO 등 관련 상표 등록 정보를 확인하세요.'},
{q:'도메인 사용 가능 여부는 어떻게 확인하나요?',a:'도메인 등록 서비스에서 이름을 검색해 .com, .kr, .io 등의 등록 가능 여부를 확인하세요.'},
{q:'이름을 쓰기 전에 등록 상표를 확인해야 하나요?',a:'네. 브랜드나 회사에 투자하기 전에 확인하세요. NameForge는 법적 사용 가능성을 보증하지 않습니다.'},
{q:'사이트가 휴대전화와 태블릿에서도 작동하나요?',a:'네. 반응형 인터페이스는 휴대전화, 태블릿, 데스크톱에 맞게 설계되었습니다.'},
{q:'결과가 마음에 들지 않으면 어떻게 하나요?',a:'새 이름 생성을 선택하거나 G를 누르세요. 유형, 길이, 생성 언어도 바꿀 수 있습니다.'},
{q:'문제를 신고하거나 개선안을 제안하려면?',a:'프로젝트 저장소에서 의견을 공유하거나 다음 버전에 반영할 새로운 유형을 제안할 수 있습니다.'}
];
export function getLocalizedFaq(language: LanguageCode): FAQItem[] {
  if (language === 'fr') return COMPREHENSIVE_FAQ_LIST;
  const translations = language === 'en' ? EN_FAQ : language === 'es' ? ES_FAQ : language === 'de' ? DE_FAQ : language === 'it' ? IT_FAQ : language === 'pt' ? PT_FAQ : language === 'nl' ? NL_FAQ : language === 'tr' ? TR_FAQ : language === 'ar' ? AR_FAQ : language === 'ja' ? JA_FAQ : language === 'ko' ? KO_FAQ : null;
  if (!translations) return COMPREHENSIVE_FAQ_LIST;
  return COMPREHENSIVE_FAQ_LIST.map((item, index) => ({
    ...item,
    ...(translations[index] || {}),
  }));
}

export const FAQ_TRANSLATED_LANGUAGES = ['en', 'es', 'de', 'it', 'pt', 'nl', 'tr', 'ar', 'ja', 'ko'] as const;
