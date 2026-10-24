import { GeneratorId, GeneratorMeta, LanguageCode } from '../types';

/**
 * Reviewed, category-specific editorial copy for the first ten business categories.
 * The source metadata remains authoritative for French; English is deliberately
 * explicit rather than falling back to generic marketing text.
 */
type Editorial = Pick<GeneratorMeta, 'generatorTitle' | 'generatorSubtitle' | 'advantages' | 'limits' | 'guideTitle' | 'guide' | 'cardsTitle' | 'cards' | 'faqTitle' | 'faq'>;

const ENGLISH_EDITORIAL: Partial<Record<GeneratorId, Editorial>> = {
  food_truck: {
    generatorTitle: 'Street Food & Mobile Flavours',
    generatorSubtitle: 'Build a bold, easy-to-spot identity for a kitchen on wheels.',
    advantages: ['Stands out on vehicle wraps and menus', 'A playful tone suits festivals and street markets', 'Easy to remember when customers follow your route'],
    limits: ['Make the main cuisine clear when the name is abstract', 'Check readability from a distance and on small screens'],
    guideTitle: 'Build a memorable food-truck brand',
    guide: [{ h: 'Keep it punchy', p: 'Choose one or two energetic words that look clear on the vehicle, menu, and social profiles.' }],
    cardsTitle: 'Mobile food concepts',
    cards: [{ icon: '🍔', h: 'Gourmet burgers', p: 'A generous, grill-led identity for burgers, fries, and signature sauces.' }, { icon: '🌮', h: 'Global street food', p: 'A lively name for tacos, bao, wraps, and creative fusion menus.' }],
    faqTitle: 'Food-truck questions',
    faq: [{ q: 'How can the name suggest mobility?', a: 'Try imagery linked to routes, wheels, stops, markets, or travel—without making the cuisine impossible to guess.' }],
  },
  hotel_name: {
    generatorTitle: 'Distinctive Hospitality & Retreats',
    generatorSubtitle: 'Promise guests a clear sense of place, comfort, and character.',
    advantages: ['Can signal atmosphere before guests arrive', 'Works across booking listings and guest materials', 'Supports a distinctive identity for a property'],
    limits: ['Check pronunciation for international guests', 'Avoid claims of luxury or location that the property cannot support'],
    guideTitle: 'Name a hotel guests will remember',
    guide: [{ h: 'Start with the place', p: 'Draw from the building, landscape, local history, or the specific kind of stay you offer.' }],
    cardsTitle: 'Hospitality styles',
    cards: [{ icon: '🏰', h: 'Historic stays', p: 'A name suited to heritage houses, manors, and characterful guesthouses.' }, { icon: '✨', h: 'Contemporary boutique hotels', p: 'A clean identity for design-led rooms, rooftop spaces, and personal service.' }],
    faqTitle: 'Hotel-name questions',
    faq: [{ q: 'Can this work for a guesthouse?', a: 'Yes. Choose a welcoming name that fits the scale and personality of the accommodation.' }],
  },
  clothing_brand: {
    generatorTitle: 'Fashion Identity & Signature Style',
    generatorSubtitle: 'Create a label that looks at home on garments, tags, and storefronts.',
    advantages: ['Can remain legible on small labels and embroidery', 'Helps signal a specific fashion direction', 'Can scale from a first collection to a broader range'],
    limits: ['Search relevant trademark classes before committing', 'Check that the name fits both the product and intended audience'],
    guideTitle: 'Name a clothing label',
    guide: [{ h: 'Think about the label', p: 'Test the sound and spelling on a woven tag, clothing label, product page, and social handle.' }],
    cardsTitle: 'Fashion directions',
    cards: [{ icon: '🧢', h: 'Streetwear', p: 'Confident wording for urban silhouettes, oversized cuts, and graphic drops.' }, { icon: '✨', h: 'Minimal and responsible fashion', p: 'A restrained identity for durable pieces, thoughtful materials, and timeless cuts.' }],
    faqTitle: 'Fashion-brand questions',
    faq: [{ q: 'Should a clothing-brand name be short?', a: 'Short names often fit labels more easily, but clarity, distinctiveness, and availability matter more than a fixed letter count.' }],
  },
  jewelry_brand: {
    generatorTitle: 'Fine Jewellery & Personal Keepsakes',
    generatorSubtitle: 'Find a name that conveys craftsmanship, detail, and lasting value.',
    advantages: ['Can communicate refinement and craft', 'Works on small boxes, tags, and engravings', 'Can support a premium or artisan position'],
    limits: ['Keep spelling practical for engraving and search', 'Avoid implying precious materials or certification you do not offer'],
    guideTitle: 'Give a jewellery brand lasting appeal',
    guide: [{ h: 'Balance beauty with clarity', p: 'Explore imagery of light, forms, materials, and personal meaning, then test the name at engraving size.' }],
    cardsTitle: 'Jewellery collections',
    cards: [{ icon: '💍', h: 'Wedding and fine jewellery', p: 'A timeless direction for rings, heirloom pieces, and meaningful gifts.' }, { icon: '🔮', h: 'Artisan and gemstone jewellery', p: 'An earthy identity for handmade pieces, natural stones, and distinctive forms.' }],
    faqTitle: 'Jewellery-brand questions',
    faq: [{ q: 'Can a small independent maker use the name?', a: 'Yes. Choose a name that suits your craft today and leaves room for future collections.' }],
  },
  cosmetics_brand: {
    generatorTitle: 'Beauty, Care & Formulation',
    generatorSubtitle: 'Choose a clear identity for skincare, makeup, or hair-care products.',
    advantages: ['Can communicate a sensory or scientific positioning', 'Can work across bottles, jars, and digital listings', 'Helps distinguish product lines'],
    limits: ['Do not imply medical results or unverified product claims', 'Check legibility on small packaging and labels'],
    guideTitle: 'Create a trustworthy beauty brand',
    guide: [{ h: 'Match the product experience', p: 'Choose sounds and imagery that fit the formula, audience, and brand promise; keep claims factual and supportable.' }],
    cardsTitle: 'Beauty categories',
    cards: [{ icon: '🌿', h: 'Botanical skincare', p: 'A natural direction for plant-based ingredients and simple routines.' }, { icon: '🔬', h: 'Dermocosmetic care', p: 'A precise, clinical tone for carefully formulated skincare products.' }],
    faqTitle: 'Cosmetics-brand questions',
    faq: [{ q: 'Is a short name better for packaging?', a: 'A concise name can help on small labels, but it should still be distinctive, readable, and legally available.' }],
  },
  fitness_studio: {
    generatorTitle: 'Training, Movement & Community',
    generatorSubtitle: 'Give your studio an identity that motivates without intimidating newcomers.',
    advantages: ['Can create a strong community identity', 'Works on signage, apparel, and class schedules', 'Can signal a training style or studio atmosphere'],
    limits: ['Avoid language that makes beginners feel unwelcome', 'Check that the name fits the actual services offered'],
    guideTitle: 'Name a welcoming fitness space',
    guide: [{ h: 'Choose the right energy', p: 'Action words can convey momentum; calmer language may better suit yoga, Pilates, or recovery-focused classes.' }],
    cardsTitle: 'Training styles',
    cards: [{ icon: '⚡', h: 'Strength and conditioning', p: 'An energetic identity for group training, circuits, and performance sessions.' }, { icon: '🧘', h: 'Yoga and Pilates', p: 'A balanced tone for mobility, mindful movement, and controlled strength.' }],
    faqTitle: 'Fitness-studio questions',
    faq: [{ q: 'How can a name build community?', a: 'Choose wording members can say easily, wear proudly, and connect with across classes and events.' }],
  },
  travel_agency: {
    generatorTitle: 'Journeys, Discovery & Escape',
    generatorSubtitle: 'Suggest the kind of journey you plan, from guided treks to tailored escapes.',
    advantages: ['Can evoke a destination or travel style', 'Works across itineraries and digital channels', 'Can support a specialist travel niche'],
    limits: ['Check pronunciation in your target markets', 'Avoid promising destinations or services you cannot provide'],
    guideTitle: 'Create a name that inspires travel',
    guide: [{ h: 'Make the journey tangible', p: 'Use imagery connected to routes, horizons, discovery, or a specialist region—while keeping the offer understandable.' }],
    cardsTitle: 'Travel experiences',
    cards: [{ icon: '🏔️', h: 'Adventure and trekking', p: 'A rugged identity for mountain routes, guided hikes, and outdoor exploration.' }, { icon: '🌴', h: 'Slow travel and eco-retreats', p: 'A calm direction for thoughtful itineraries, nature stays, and lower-impact travel.' }],
    faqTitle: 'Travel-agency questions',
    faq: [{ q: 'Should the name include a destination?', a: 'It can help a specialist agency stand out, but a broader name offers more room to expand.' }],
  },
  real_estate: {
    generatorTitle: 'Property, Trust & Local Expertise',
    generatorSubtitle: 'Create a credible identity for property advice, sales, or management.',
    advantages: ['Can convey stability and professionalism', 'Fits signage, listings, and client documents', 'Can distinguish a local specialist or premium service'],
    limits: ['Avoid vague wording that obscures the service area', 'Check local business-name and professional rules'],
    guideTitle: 'Build trust into a property brand',
    guide: [{ h: 'Sound established and clear', p: 'Consider architecture, place, or stability as inspiration, then pair a distinctive name with a clear service descriptor.' }],
    cardsTitle: 'Property specialisms',
    cards: [{ icon: '🗝️', h: 'Premium property', p: 'A polished direction for distinctive homes, villas, and high-end listings.' }, { icon: '🏙️', h: 'Local sales and advice', p: 'A practical identity for neighbourhood expertise, valuations, and everyday transactions.' }],
    faqTitle: 'Real-estate naming questions',
    faq: [{ q: 'Must the name include “real estate”?', a: 'Not always; a distinctive name with a clear descriptor can make the service understandable.' }],
  },
  architecture_studio: {
    generatorTitle: 'Architecture, Form & Space',
    generatorSubtitle: 'Reflect the studio’s design approach in a name that works on plans and presentations.',
    advantages: ['Can convey a clear design philosophy', 'Looks at home on drawings and project boards', 'Can scale across architecture and urban design work'],
    limits: ['Check professional naming rules in your jurisdiction', 'Avoid a concept so abstract that clients cannot identify the practice'],
    guideTitle: 'Name an architecture practice',
    guide: [{ h: 'Express a design point of view', p: 'Explore ideas of light, structure, material, and space; test the name in a wordmark and on a project title block.' }],
    cardsTitle: 'Architecture specialisms',
    cards: [{ icon: '📐', h: 'Contemporary and timber design', p: 'A restrained direction for material-conscious buildings and daylight-led spaces.' }, { icon: '🏢', h: 'Urban projects and public spaces', p: 'A confident identity for urban planning, civic buildings, and complex developments.' }],
    faqTitle: 'Architecture-studio questions',
    faq: [{ q: 'Can the studio use the partners’ names?', a: 'Yes. A concept-led name can be more flexible, while partners’ names can emphasize personal reputation.' }],
  },
  interior_decor: {
    generatorTitle: 'Interior Design & Atmosphere',
    generatorSubtitle: 'Name a practice around the mood, materials, and experience it creates.',
    advantages: ['Can communicate a recognizable aesthetic', 'Works across portfolios and social channels', 'Can support bespoke design and product curation'],
    limits: ['Avoid tying the identity too tightly to a short-lived trend', 'Check that the name suits both services and any retail activity'],
    guideTitle: 'Name an interior-design practice',
    guide: [{ h: 'Describe the feeling of the space', p: 'Draw inspiration from texture, light, proportion, and materials; test the name against the styles you actually deliver.' }],
    cardsTitle: 'Interior styles',
    cards: [{ icon: '🏺', h: 'Wabi-sabi and natural materials', p: 'An understated direction for tactile finishes, handmade ceramics, and natural surfaces.' }, { icon: '🎨', h: 'Eclectic and expressive interiors', p: 'A more vivid identity for layered colour, vintage pieces, and bold decorative choices.' }],
    faqTitle: 'Interior-design questions',
    faq: [{ q: 'Can the name also suit a décor shop?', a: 'Yes, if you expect to offer both design services and curated products; make the broader offer clear.' }],
  },
  fantasy: {
    generatorTitle: 'Fantasy Worlds & Legendary Names',
    generatorSubtitle: 'Shape names around lineage, culture, magic, and a character’s role in your world.',
    advantages: ['Supports consistent naming across factions and places', 'Offers a fast starting point for stories and campaigns'],
    limits: ['A fantasy tone may not fit contemporary settings', 'Review resemblance to famous fictional characters'],
    guideTitle: 'Create a name that belongs in your world',
    guide: [{ h: 'Define the culture first', p: 'Decide whether the people are courtly, nomadic, ancient, scholarly, or fearsome before choosing sounds and syllable patterns.' }],
    cardsTitle: 'Fantasy naming uses',
    cards: [{ icon: '📚', h: 'Fiction and worldbuilding', p: 'Name protagonists, dynasties, kingdoms, relics, and forgotten places.' }],
    faqTitle: 'Fantasy-name questions',
    faq: [{ q: 'How can a fantasy name feel believable?', a: 'Use consistent sound patterns and connect the name to the character’s culture, history, or role.' }],
  },,

  dragon: {
    generatorTitle: 'Dragon Names & Ancient Broods',
    generatorSubtitle: 'Create names shaped by a dragon’s age, element, territory, and place in its lineage.',
    advantages: ['Distinguishes ancient dragons from young or wild ones', 'Supports consistent names for broods and territories'],
    limits: ['Overly ornate names can be hard to remember', 'Avoid copying recognisable dragons from existing franchises'],
    guideTitle: 'Build a dragon name with character',
    guide: [{ h: 'Start with age and temperament', p: 'Use weightier sounds for an ancient guardian, sharper rhythms for a swift hunter, or softer vowels for a mysterious spirit.' }, { h: 'Connect the name to its domain', p: 'Let storms, volcanic stone, oceans, or stars influence the name without relying on a predictable element word every time.' }],
    cardsTitle: 'Dragon naming directions',
    cards: [{ icon: '🔥', h: 'Fire and volcanic dragons', p: 'Strong, compact names for fierce guardians, mountain lairs, and volcanic realms.' }, { icon: '🌌', h: 'Celestial and ancient dragons', p: 'Measured, ceremonial names suited to star-watchers and keepers of forgotten history.' }],
    faqTitle: 'Dragon-name questions',
    faq: [{ q: 'How do I make a dragon name feel ancient?', a: 'Give it a consistent sound pattern, a cultural origin, and a history that matters in your setting.' }]
  },
  elf: {
    generatorTitle: 'Elf Names & Woodland Lineages',
    generatorSubtitle: 'Shape elven names around culture, ancestry, landscape, and the character’s role.',
    advantages: ['Helps separate woodland, high, dark, and original elven cultures', 'Useful for characters, families, settlements, and fantasy languages'],
    limits: ['A single style may not suit every elven culture', 'Check that similar-sounding names remain distinct in a long cast list'],
    guideTitle: 'Choose an elven name that fits the culture',
    guide: [{ h: 'Decide where the character belongs', p: 'A forest community, a scholarly city, and an underground kingdom may each need different rhythms and naming customs.' }, { h: 'Keep names readable', p: 'Elegant sounds can create an elven feel, but a clear spelling makes the name easier to remember and pronounce.' }],
    cardsTitle: 'Elven naming styles',
    cards: [{ icon: '🌿', h: 'Woodland elves', p: 'Nature-linked names for rangers, healers, guardians, and hidden forest settlements.' }, { icon: '🌙', h: 'Ancient and high elves', p: 'Formal, melodic names for scholars, noble houses, and long-lived dynasties.' }],
    faqTitle: 'Elf-name questions',
    faq: [{ q: 'How can different elf groups sound distinct?', a: 'Give each culture its own preferred syllables, name lengths, and family-name conventions.' }]
  },
  anime: {
    generatorTitle: 'Anime Character Names',
    generatorSubtitle: 'Find character names that fit a genre, personality, setting, and intended cultural context.',
    advantages: ['Useful for original casts and fan projects', 'Helps align a name with a character’s role and tone'],
    limits: ['Generated names are creative suggestions, not proof of authentic cultural usage', 'Check spelling and meaning before presenting a name as Japanese or from another language'],
    guideTitle: 'Match a character name to the story',
    guide: [{ h: 'Choose the setting first', p: 'Modern school drama, science fiction, historical fantasy, and action comedy call for different naming choices.' }, { h: 'Balance style and clarity', p: 'A striking name should still be readable and distinguishable from other characters in the same cast.' }],
    cardsTitle: 'Character-name directions',
    cards: [{ icon: '🎒', h: 'Contemporary stories', p: 'Clear names for school, slice-of-life, romance-free friendship, and workplace casts.' }, { icon: '⚡', h: 'Action and fantasy', p: 'More dramatic names for rivals, teams, powers, and original fictional worlds.' }],
    faqTitle: 'Anime-name questions',
    faq: [{ q: 'Are generated Japanese-style names guaranteed to be authentic?', a: 'No. Verify language, kanji, pronunciation, and cultural meaning with reliable references before claiming authenticity.' }]
  },
  startup: {
    generatorTitle: 'Startup & Venture Names',
    generatorSubtitle: 'Explore concise company names that communicate a product promise, market, and long-term ambition.',
    advantages: ['Encourages memorable, pitch-friendly options', 'Can support a name broad enough for future product growth'],
    limits: ['Availability and trademark status are not checked automatically', 'Avoid names that imply results or capabilities the business cannot deliver'],
    guideTitle: 'Choose a name for a growing company',
    guide: [{ h: 'State the value in plain language', p: 'Identify the problem you solve and the audience you serve before choosing abstract, descriptive, or invented wording.' }, { h: 'Test the name outside the pitch deck', p: 'Say it aloud, spell it over a call, and check how it looks in a domain, app icon, and email address.' }],
    cardsTitle: 'Startup naming approaches',
    cards: [{ icon: '🚀', h: 'Short invented names', p: 'Distinctive options that may suit technology products and future expansion.' }, { icon: '🧭', h: 'Meaning-led names', p: 'Names that signal a clear mission, customer benefit, or industry focus.' }],
    faqTitle: 'Startup-name questions',
    faq: [{ q: 'Does a generated name mean the domain is available?', a: 'No. Check domain registration, company registers, social handles, and relevant trademark databases before committing.' }]
  },
  book: {
    generatorTitle: 'Book Titles & Story Concepts',
    generatorSubtitle: 'Develop title ideas that reflect a book’s genre, central tension, setting, and emotional promise.',
    advantages: ['Provides starting points for brainstorming and cover concepts', 'Helps compare direct, atmospheric, and curiosity-driven titles'],
    limits: ['A title alone cannot communicate the whole story', 'Check existing books and publishing-market conflicts before publication'],
    guideTitle: 'Find a title that fits the manuscript',
    guide: [{ h: 'Identify the reader’s promise', p: 'Decide whether the title should signal genre, introduce a central image, suggest a mystery, or foreground the protagonist.' }, { h: 'Test it with the cover removed', p: 'A strong title should be easy to say, reasonably easy to recall, and appropriate for the actual story.' }],
    cardsTitle: 'Title directions',
    cards: [{ icon: '📖', h: 'Literary and atmospheric', p: 'Image-led titles for reflective stories, layered themes, and distinctive settings.' }, { icon: '🔎', h: 'Mystery and suspense', p: 'Focused titles that suggest a question, secret, clue, or unresolved conflict.' }],
    faqTitle: 'Book-title questions',
    faq: [{ q: 'Can a generated title be published immediately?', a: 'Treat it as a draft. Search catalogues and the web, ask readers for feedback, and confirm any legal or branding concerns.' }]
  },
};

export function getLocalizedGeneratorEditorial(meta: GeneratorMeta, language: LanguageCode): Editorial | null {
  if (language === 'fr') return null;
  if (language !== 'en') return null;
  return ENGLISH_EDITORIAL[meta.id] || null;
}

export function hasLocalizedGeneratorEditorial(generatorId: string, language: LanguageCode): boolean {
  return language === 'fr' || (language === 'en' && Boolean(ENGLISH_EDITORIAL[generatorId as GeneratorId]));
}
