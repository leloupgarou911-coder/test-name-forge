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

export function getLocalizedFaq(language: LanguageCode): FAQItem[] {
  if (language === 'fr') return COMPREHENSIVE_FAQ_LIST;
  const translations = language === 'en' ? EN_FAQ : language === 'es' ? ES_FAQ : language === 'de' ? DE_FAQ : null;
  if (!translations) return COMPREHENSIVE_FAQ_LIST;
  return COMPREHENSIVE_FAQ_LIST.map((item, index) => ({
    ...item,
    ...(translations[index] || {}),
  }));
}

export const FAQ_TRANSLATED_LANGUAGES = ['en', 'es', 'de'] as const;
