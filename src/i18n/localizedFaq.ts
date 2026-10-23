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

export function getLocalizedFaq(language: LanguageCode): FAQItem[] {
  if (language === 'fr') return COMPREHENSIVE_FAQ_LIST;
  const translations = language === 'en' ? EN_FAQ : language === 'es' ? ES_FAQ : language === 'de' ? DE_FAQ : language === 'it' ? IT_FAQ : language === 'pt' ? PT_FAQ : null;
  if (!translations) return COMPREHENSIVE_FAQ_LIST;
  return COMPREHENSIVE_FAQ_LIST.map((item, index) => ({
    ...item,
    ...(translations[index] || {}),
  }));
}

export const FAQ_TRANSLATED_LANGUAGES = ['en', 'es', 'de', 'it', 'pt'] as const;
