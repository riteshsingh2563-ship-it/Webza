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
    slug: 'krypton-protocol',
    title: 'Krypton Protocol',
    client: 'Krypton Labs Ltd.',
    year: '2026',
    tagline: 'High-frequency institutional liquidity and real-time execution engine.',
    category: 'Full-Stack Web Engine',
    overview:
      'A next-generation web application architected for institutional trading desks, delivering sub-12ms real-time market depths and zero-latency cryptographic trade signing.',
    challenge:
      'Institutional participants required streaming WebSocket orderbook feeds across 18 liquidity pairs without UI frame drops, alongside strict SOC2-compliant session management.',
    solution:
      'We designed an edge-first Next.js 14 architecture with client-side Rust WebAssembly modules for instant cryptographic verification, eliminating browser thread locking.',
    results: [
      { label: 'Throughput Speedup', value: '+340%' },
      { label: 'Quarterly Volume', value: '$48M+' },
      { label: 'Execution Latency', value: '12ms' },
    ],
    technologies: ['Next.js 14', 'TypeScript', 'WebSockets', 'Rust WASM', 'Tailwind CSS'],
    deliverables: ['Systems Architecture', 'Trading Interface UI', 'WASM Module', 'Performance Hardening'],
    featured: true,
    order: 1,
    image: '/brand/webza-brand-poster.jpg',
    secondaryImages: ['/brand/webza-logo-master.jpg'],
    liveUrl: 'https://krypton.preview.webza.agency',
  },
  {
    slug: 'aura-spatial',
    title: 'Aura Spatial Audio',
    client: 'Aura Technologies',
    year: '2026',
    tagline: 'Photorealistic spatial computing flagship and interactive 3D configurator.',
    category: 'Creative Technology & 3D',
    overview:
      'An award-winning digital flagship built to launch Aura’s spatial acoustics headset, featuring real-time WebGL audio visualization and tactile 3D customizers.',
    challenge:
      'The client needed a digital flagship that conveyed acoustic luxury and allowed full 3D material customization while preserving fluid 60fps performance on mobile devices.',
    solution:
      'We engineered custom GLSL fragment shaders, compressed 3D GLTF meshes with Draco geometry decoding, and orchestrated scroll-synchronized typography reveals.',
    results: [
      { label: 'Industry Awards', value: 'Site of the Day' },
      { label: 'Pre-Order Conversion', value: '+34%' },
      { label: 'Mobile Framerate', value: '60 FPS' },
    ],
    technologies: ['Three.js', 'WebGL / GLSL', 'Next.js 14', 'Tailwind CSS', 'Draco Mesh'],
    deliverables: ['Art Direction', '3D Configurator', 'Interactive Sound Engine', 'Global Launch Site'],
    featured: true,
    order: 2,
    image: '/brand/webza-logo-master.jpg',
    secondaryImages: ['/brand/webza-brand-poster.jpg'],
    liveUrl: 'https://aura.preview.webza.agency',
  },
  {
    slug: 'solace-goods',
    title: 'Solace Luxury Goods',
    client: 'Solace Atelier Paris',
    year: '2026',
    tagline: 'High-AOV headless commerce engine for sustainable European couture.',
    category: 'Headless E-Commerce',
    overview:
      'An editorial, high-speed commerce flagship designed to elevate average order value, provide localized multi-currency checkouts, and eliminate monolith performance bottlenecks.',
    challenge:
      'Legacy theme monoliths burdened Solace with 4-second initial loads, rigid design constraints, and high mobile cart abandonment in international markets.',
    solution:
      'We engineered a decoupled Next.js frontend communicating with Shopify Plus via Storefront GraphQL API, combined with bespoke micro-interactions and one-click Stripe FX checkout.',
    results: [
      { label: 'Average Order Value', value: '+185%' },
      { label: 'Global Load Time', value: '0.4s' },
      { label: 'Checkout Drop-off', value: '-28%' },
    ],
    technologies: ['Next.js 14', 'Shopify Plus GraphQL', 'Stripe Global FX', 'Tailwind CSS'],
    deliverables: ['Headless Storefront', 'Checkout Optimization', 'Custom Cart Architecture', 'Multi-Currency Flow'],
    featured: true,
    order: 3,
    image: '/brand/webza-brand-poster.jpg',
    secondaryImages: ['/brand/webza-logo-master.jpg'],
    liveUrl: 'https://solace.preview.webza.agency',
  },
  {
    slug: 'verve-health',
    title: 'Verve Precision Telehealth',
    client: 'Verve Clinical Systems',
    year: '2026',
    tagline: 'Enterprise HIPAA-compliant biometric streaming and patient telemetry.',
    category: 'Digital Product & Portal',
    overview:
      'A secure clinical web portal enabling physicians to monitor continuous biometric feeds, schedule encrypted consultations, and manage longitudinal care pathways.',
    challenge:
      'Managing high-throughput biometric data streams under strict HIPAA encryption compliance while keeping the clinician interface remarkably clean and effortless to navigate.',
    solution:
      'We designed a component-driven dashboard utilizing Next.js 14 server components, Row-Level Security database architecture, and real-time biometric anomaly notifications.',
    results: [
      { label: 'Active Monthly Patients', value: '140,000+' },
      { label: 'Uptime Reliability', value: '99.99%' },
      { label: 'Security Audit Score', value: '100% Pass' },
    ],
    technologies: ['Next.js 14', 'PostgreSQL', 'Supabase Auth', 'Tailwind CSS', 'Recharts'],
    deliverables: ['Clinical UX Design', 'HIPAA Data Flow', 'Real-Time Telemetry UI', 'Patient Portal'],
    featured: true,
    order: 4,
    image: '/brand/webza-logo-master.jpg',
    secondaryImages: ['/brand/webza-brand-poster.jpg'],
    liveUrl: 'https://verve.preview.webza.agency',
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
