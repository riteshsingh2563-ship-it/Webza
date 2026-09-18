export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  tagline: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  technologies: string[];
  deliverables: string[];
  featured: boolean;
  order: number;
  image: string;
  secondaryImages: string[];
  liveUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  quote: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'sheesh-mahal-raipur',
    title: 'Sheesh Mahal Raipur',
    client: 'Sheesh Mahal Hospitality',
    year: '2026',
    tagline: 'Royal pure vegetarian fine dining flagship with curated culinary journeys.',
    category: 'Luxury Dining & Hospitality',
    overview:
      'A regal digital flagship engineered for Raipur’s premier pure vegetarian fine dining destination at Shankar Nagar. Features royal visual storytelling, curated menu exploration, and private banquet reservations.',
    challenge:
      'The restaurant required a digital presence matching its opulent palace interior, with instantaneous mobile page loads and a direct table and banquet reservation flow.',
    solution:
      'We engineered a high-performance Next.js 14 architecture with smooth royal palettes, optimized image delivery, interactive menu filtering, and one-tap reservation forms connected to direct desk notifications.',
    results: [
      { label: 'Load Speed', value: '0.4s' },
      { label: 'Mobile Score', value: '99/100' },
      { label: 'Inquiries', value: '+240%' },
    ],
    technologies: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Vercel Edge', 'Interactive Menu'],
    deliverables: ['Art Direction & UI', 'Responsive Design', 'Interactive Menu Catalog', 'Banquet Reservation Engine'],
    featured: true,
    order: 1,
    image: '/work/sheesh-mahal.jpg',
    secondaryImages: ['/work/sheesh-mahal.jpg'],
    liveUrl: 'https://sheesh-mahal-premium.vercel.app/',
  },
  {
    slug: 'pushpanjali-legacy',
    title: 'Pushpanjali Legacy',
    client: 'Pushpanjali Jewels Ltd.',
    year: '2026',
    tagline: 'Haute joaillerie and heirloom bridal jewellery flagship across Delhi-NCR.',
    category: 'Haute Joaillerie & Heirlooms',
    overview:
      'Delhi-NCR’s premier digital house for BIS 916 hallmarked 22K gold, certified diamond solitaires, and royal Kundan Polki heirlooms across Sector 50 Noida, Ambedkar Road Ghaziabad, and Gaur City Mall.',
    challenge:
      'Showcasing high-value, intricate bridal jewellery and certified solitaire diamonds requiring high-resolution visual fidelity without compromising mobile performance or loading times.',
    solution:
      'We designed a bespoke Next.js 14 luxury storefront with smooth diamond shine effects, localized showroom discovery, categorized heirloom collections, and direct VIP concierge inquiry.',
    results: [
      { label: 'Architecture', value: 'Edge Next.js' },
      { label: 'Resolution', value: 'Retina 4K' },
      { label: 'Client Reach', value: 'Delhi-NCR' },
    ],
    technologies: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Solitaire Engine', 'WhatsApp Concierge'],
    deliverables: ['Luxury Brand UI', 'Product Taxonomy', 'Showroom Locator', 'Bespoke Bridal Inquiry'],
    featured: true,
    order: 2,
    image: '/work/pushpanjali-jewels.jpg',
    secondaryImages: ['/work/pushpanjali-jewels.jpg'],
    liveUrl: 'https://pushpanjali-jewels-seven.vercel.app/',
  },
  {
    slug: 'roshan-jewel-indore',
    title: 'Roshan Jewel',
    client: 'Roshan Jewelers (Est. 1965)',
    year: '2026',
    tagline: 'Six decades of hallmark integrity, royal bridal heirlooms, and custom solitaires.',
    category: 'Heritage Fine Jewellery',
    overview:
      'An authoritative heritage flagship celebrating 60 years of jewellery excellence at Royal Diamond Building, YN Road, Indore. Built for certified solitaire consultation and bridal curation.',
    challenge:
      'Balancing six decades of traditional family trust and royal prestige with modern digital speed, high-conversion mobile browsing, and private appointment scheduling.',
    solution:
      'We delivered a heritage-inspired luxury UI, live gold & diamond purity verification guides, interactive collection portfolios, and direct showroom visit booking flows.',
    results: [
      { label: 'Legacy', value: '60+ Years' },
      { label: 'Speed Index', value: '0.5s' },
      { label: 'Consultations', value: '3.1× Growth' },
    ],
    technologies: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Interactive Gallery', 'Appointment Engine'],
    deliverables: ['Heritage Identity System', 'Diamond Showcase', 'Showroom Booking Portal', 'SEO & Local AEO'],
    featured: true,
    order: 3,
    image: '/work/roshan-jewel.jpg',
    secondaryImages: ['/work/roshan-jewel.jpg'],
    liveUrl: 'https://roshan-jewel-eta.vercel.app/',
  },
  {
    slug: 'fitness-warrior-bhilai',
    title: 'Fitness Warrior Bhilai',
    client: 'Fitness Warrior Training Hub',
    year: '2026',
    tagline: 'High-intensity athletic training, powerlifting, and strength conditioning hub.',
    category: 'Athletic Training & Strength Hub',
    overview:
      'High-energy digital hub engineered for Fitness Warrior Bhilai. Features comprehensive program breakdowns, certified coach profiles, student transformations, and high-velocity enquiry capture.',
    challenge:
      'The gym required an aggressive, motivating digital presence that captures prospective athletes, outlines specialised training disciplines, and drives immediate walk-in and inquiry conversions.',
    solution:
      'We built an ultra-fast, high-contrast athletic interface with dynamic goal-based inquiry forms, seamless WhatsApp routing, and geo-targeted local discovery.',
    results: [
      { label: 'Conversion', value: '+185%' },
      { label: 'Mobile UX', value: '100/100' },
      { label: 'Response Time', value: '< 20m' },
    ],
    technologies: ['React / Vite', 'Tailwind CSS', 'Lead Generation Engine', 'Interactive Schedule'],
    deliverables: ['Athletic Brand Direction', 'Program Architecture', 'Trainer Profiles', 'Automated Lead Capture'],
    featured: true,
    order: 4,
    image: '/work/fitness-warrior.jpg',
    secondaryImages: ['/work/fitness-warrior.jpg'],
    liveUrl: 'https://fitnesswarriorgym.vercel.app/',
  },
  {
    slug: 'the-rk-fitness-bhilai',
    title: 'THE RK FITNESS',
    client: 'THE RK FITNESS Group',
    year: '2026',
    tagline: 'Bhilai’s premier multi-discipline gym: Heavy Strength, MMA Combat Arena & Zumba.',
    category: 'Premium Multi-Discipline Fitness',
    overview:
      'State-of-the-art web flagship built for THE RK FITNESS in Bhilai. Showcases expansive workout floors, dedicated combat octagon, dynamic group dance classes, and certified personal trainers.',
    challenge:
      'The facility hosts multiple diverse training disciplines (Heavy Iron, MMA, Zumba, Cardio) that needed distinct visual presentation while maintaining unified premium branding and seamless tier selection.',
    solution:
      'We crafted a cinematic dark-mode web experience featuring category-specific program highlights, trainer credentials, interactive member testimonials, and fast pass signups.',
    results: [
      { label: 'Disciplines', value: 'MMA · Gym · Zumba' },
      { label: 'Walk-ins', value: '+3.4×' },
      { label: 'Uptime', value: '100%' },
    ],
    technologies: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Dark Mode UI', 'Lead Capture Engine'],
    deliverables: ['Multi-Discipline UI', 'Facility Photo Gallery', 'Class Scheduling', 'Direct WhatsApp Access'],
    featured: true,
    order: 5,
    image: '/work/rk-fitness.jpg',
    secondaryImages: ['/work/rk-fitness.jpg'],
    liveUrl: 'https://the-rk-fitness-premium-v2.vercel.app/',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Engineering & Flagships',
    tagline: 'Sub-second speed. Rock-solid architecture. Zero template residue.',
    description:
      'We build production-grade web platforms using Next.js 14, TypeScript, and edge computing. Every line of code is structured for performance, longevity, and effortless maintenance.',
    deliverables: [
      'Next.js 14 App Router Architecture',
      'Headless CMS & Content Model Integration',
      'Edge SSR & Sub-50ms Global Routing',
      'Full TypeScript Codebase & Strict Linting',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge'],
    quote: 'Architecture determines longevity. We engineer web systems that scale effortlessly under global load.',
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'Bespoke UI/UX & Art Direction',
    tagline: 'Distinction over duplication. Editorial hierarchy that commands attention.',
    description:
      'We reject generic SaaS templates. We craft distinct visual languages, architectural typographic systems, and intentional interactive choreographies tailored to your exact brand positioning.',
    deliverables: [
      'Custom Brand Art Direction',
      'Responsive Web & Mobile Layouts',
      'Fluid Micro-Interactions & Transitions',
      'High-Fidelity Interactive Prototypes',
    ],
    technologies: ['Figma', 'Design Systems', 'Kinetic Typography', 'Motion Choreography'],
    quote: 'If your website looks like everyone else’s, you have already forfeited your competitive advantage.',
  },
  {
    id: 'digital-products',
    number: '03',
    title: 'Full-Stack Apps & Client Portals',
    tagline: 'Complex workflows simplified into intuitive, high-velocity digital experiences.',
    description:
      'From authenticated client dashboards to real-time analytics hubs, we synthesize resilient backend databases with elegant frontend interfaces for mission-critical software.',
    deliverables: [
      'Role-Based Access & Authentication',
      'Database Architecture (PostgreSQL / Supabase)',
      'Real-Time WebSocket Streams',
      'REST & GraphQL API Endpoints',
    ],
    technologies: ['PostgreSQL', 'Supabase', 'Node.js', 'Next.js Server Actions'],
    quote: 'Software should feel fast, responsive, and predictable at every user touchpoint.',
  },
  {
    id: 'brand-systems',
    number: '04',
    title: 'Design Systems & Token Architecture',
    tagline: 'Systematic visual consistency that accelerates product velocity 3x.',
    description:
      'We document and build comprehensive design systems that bridge the gap between Figma design files and production code, allowing multi-disciplinary teams to ship unified features rapidly.',
    deliverables: [
      'Three-Layer Design Tokens (Primitive → Semantic → Component)',
      'Accessible React Component Libraries',
      'Interactive Documentation & Storybook',
      'Design Governance Guidelines',
    ],
    technologies: ['Tailwind CSS', 'Figma Variables', 'Storybook', 'Radix Primitives'],
    quote: 'A design system is not a set of components — it is a shared language between design and engineering.',
  },
  {
    id: 'headless-ecommerce',
    number: '05',
    title: 'High-Yield Headless Commerce',
    tagline: 'Unshackling storefronts from slow legacy themes to unlock explosive AOV growth.',
    description:
      'We decouple e-commerce frontends from monolithic CMS backends using Shopify Plus GraphQL and custom Stripe checkouts, delivering 0.4s load times and higher cart conversion.',
    deliverables: [
      'Headless Shopify Storefront',
      'Global Currency & FX Localization',
      'Algolia Instant Search & Filtering',
      'Streamlined 1-Click Checkout Flows',
    ],
    technologies: ['Shopify Storefront API', 'Stripe Checkout', 'Next.js Edge', 'Algolia'],
    quote: 'Every 100ms decrease in load time yields a measurable, compounding increase in checkout conversions.',
  },
  {
    id: 'performance-seo',
    number: '06',
    title: 'Performance Hardening & Technical SEO',
    tagline: '100/100 Core Web Vitals guarantee. Zero Cumulative Layout Shift.',
    description:
      'We audit, refactor, and harden web properties to meet the most stringent Google Lighthouse thresholds, ensuring dominant organic search visibility and frictionless mobile experiences.',
    deliverables: [
      'Lighthouse 99+ Core Web Vitals Audit',
      'Zero Cumulative Layout Shift (CLS)',
      'Structured JSON-LD Schema Architecture',
      'WCAG 2.2 AA Accessibility Compliance',
    ],
    technologies: ['Web Vitals API', 'Schema.org', 'Edge Caching', 'Bundle Analyzer'],
    quote: 'Speed is the foundation of user trust. We treat milliseconds as revenue.',
  },
];
