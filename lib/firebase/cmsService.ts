import { db, isFirebaseConfigured } from './config';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import {
  SiteSettings,
  ServiceRecord,
  ProjectRecord,
  BlogPostRecord,
  TestimonialRecord,
  ContactSubmission,
  MediaItem,
} from './models';
import { PROJECTS, SERVICES } from '../data';

// Default initial state matching WEBZA Brand Directive
const DEFAULT_SITE_SETTINGS: SiteSettings = {
  brandName: 'WEBZA',
  tagline: 'BUILT TO BE SEEN',
  heroTitleLine1: 'WE BUILD',
  heroHighlight: 'digital',
  heroTitleLine2: 'EXPERIENCES THAT REFUSE TO BLEND IN.',
  heroDescription:
    'A boutique creative technology practice architecting high-velocity web platforms, bespoke brand flagships, and digital systems for businesses that demand distinction.',
  primaryCtaText: 'Start A Project',
  primaryCtaUrl: '/contact',
  secondaryCtaText: 'View Our Work',
  secondaryCtaUrl: '/work',
  contactEmail: 'hello@webza.agency',
  contactPhone: '+1 (415) 890-4120',
  locations: ['San Francisco', 'London', 'Tokyo'],
  socialLinks: {
    github: 'https://github.com/webza-agency',
    twitter: 'https://twitter.com/webza_agency',
    linkedin: 'https://linkedin.com/company/webza',
  },
  seoDefaults: {
    metaTitle: 'WEBZA — Built To Be Seen | Creative Technology Studio',
    metaDescription:
      'Premier creative technology and digital engineering studio. We architect extraordinary web flagships, digital platforms, and high-velocity web systems.',
    ogImage: '/brand/webza-logo-master.jpg',
  },
};

const DEFAULT_BLOG_POSTS: BlogPostRecord[] = [
  {
    id: 'post-1',
    slug: 'the-death-of-generic-saas-templates',
    title: 'The Death of Generic SaaS Templates and the Return to Architectural Craft',
    excerpt: 'Why homogenization in web design has reached a breaking point, and why the next generation of digital leaders are returning to custom engineering.',
    content: `When every landing page is built from the identical Tailwind UI kit or Framer preset, distinction becomes mathematically impossible.

Users have developed subconscious blindness to generic SaaS hero sections. The same pill badge, the same centered headline with a gradient keyword, the same screenshot with an exaggerated glass card floating above it.

At WEBZA, we believe the next era of digital dominance belongs to brands that invest in bespoke art direction and full-stack software excellence.`,
    coverImage: '/brand/webza-brand-poster.jpg',
    author: 'Alex Thorne, Managing Partner',
    publishedAt: '2026-09-01',
    status: 'published',
    tags: ['Design Systems', 'Philosophy', 'Creative Tech'],
    seoTitle: 'The Death of Generic SaaS Templates — WEBZA',
    seoDescription: 'Why custom web architecture is the ultimate competitive advantage in 2026.',
  },
  {
    id: 'post-2',
    slug: 'sub-50ms-web-applications-with-nextjs-14',
    title: 'Engineering Sub-50ms Global Web Applications with Next.js 14 and Edge Infrastructure',
    excerpt: 'A technical breakdown of how we eliminate layout shift, optimize server components, and stream real-time data under 50ms.',
    content: `Speed is not merely a technical benchmark — it is an emotional signal of organizational competence.

Every millisecond of latency introduces friction between the user’s intent and the application’s response. By pairing Next.js App Router streaming with edge compute and WebAssembly modules, we achieve desktop-grade performance directly inside the browser.`,
    coverImage: '/brand/webza-logo-master.jpg',
    author: 'Elena Rostova, Lead Systems Architect',
    publishedAt: '2026-08-20',
    status: 'published',
    tags: ['Engineering', 'Next.js', 'Performance'],
    seoTitle: 'Engineering Sub-50ms Web Applications — WEBZA',
    seoDescription: 'How WEBZA achieves sub-50ms TTFB and 100/100 Core Web Vitals.',
  },
];

const DEFAULT_TESTIMONIALS: TestimonialRecord[] = [
  {
    id: 'test-1',
    author: 'Julian Vance',
    role: 'Chief Technology Officer',
    company: 'Krypton Protocol',
    quote:
      'WEBZA engineered an interface that handles 18 live orderbooks with zero frame drops. They are in a league of their own when it comes to combining visual luxury with hardcore distributed engineering.',
    rating: 5,
    order: 1,
    visible: true,
  },
  {
    id: 'test-2',
    author: 'Camille Laurent',
    role: 'Founder & Creative Director',
    company: 'Solace Atelier Paris',
    quote:
      'Our previous monolithic store felt sluggish and generic. WEBZA transformed Solace into a high-speed editorial runway. Our average order value increased by 185% within 60 days of launch.',
    rating: 5,
    order: 2,
    visible: true,
  },
];

const STORAGE_KEYS = {
  SETTINGS: 'webza_cms_settings',
  SERVICES: 'webza_cms_services',
  PROJECTS: 'webza_cms_projects',
  BLOG: 'webza_cms_blog',
  TESTIMONIALS: 'webza_cms_testimonials',
  CONTACTS: 'webza_cms_contacts',
  MEDIA: 'webza_cms_media',
};

// Safe local storage helpers for client-side persistence
function readLocal<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeLocal<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event('webza-cms-update'));
  } catch (e) {
    console.warn('[WEBZA CMS] Local storage write error:', e);
  }
}

// ==============================================================================
// SITE SETTINGS
// ==============================================================================
export async function getSiteSettings(): Promise<SiteSettings> {
  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDoc(doc(db, 'siteSettings', 'global'));
      if (snap.exists()) {
        return snap.data() as SiteSettings;
      }
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore getSiteSettings error, using fallback:', e);
    }
  }
  return readLocal<SiteSettings>(STORAGE_KEYS.SETTINGS, DEFAULT_SITE_SETTINGS);
}

export async function updateSiteSettings(settings: Partial<SiteSettings>): Promise<SiteSettings> {
  const current = await getSiteSettings();
  const updated = { ...current, ...settings };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'siteSettings', 'global'), updated, { merge: true });
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore updateSiteSettings error:', e);
    }
  }

  writeLocal(STORAGE_KEYS.SETTINGS, updated);
  return updated;
}

// ==============================================================================
// SERVICES
// ==============================================================================
export async function getServices(): Promise<ServiceRecord[]> {
  const defaultServices: ServiceRecord[] = SERVICES.map((s, idx) => ({
    ...s,
    status: 'active',
    order: idx + 1,
  }));

  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDocs(query(collection(db, 'services'), orderBy('order', 'asc')));
      if (!snap.empty) {
        return snap.docs.map((d) => ({ id: d.id, ...d.data() } as ServiceRecord));
      }
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore getServices error, using fallback:', e);
    }
  }
  return readLocal<ServiceRecord[]>(STORAGE_KEYS.SERVICES, defaultServices);
}

export async function saveService(service: Partial<ServiceRecord> & { title: string }): Promise<ServiceRecord> {
  const all = await getServices();
  const id = service.id || `srv-${Date.now()}`;
  const record: ServiceRecord = {
    id,
    number: service.number || `0${all.length + 1}`,
    title: service.title,
    tagline: service.tagline || '',
    description: service.description || '',
    deliverables: service.deliverables || [],
    technologies: service.technologies || [],
    quote: service.quote || '',
    status: service.status || 'active',
    order: service.order ?? all.length + 1,
  };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'services', id), record);
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore saveService error:', e);
    }
  }

  const existingIdx = all.findIndex((s) => s.id === id);
  if (existingIdx >= 0) {
    all[existingIdx] = record;
  } else {
    all.push(record);
  }
  writeLocal(STORAGE_KEYS.SERVICES, all);
  return record;
}

export async function deleteService(id: string): Promise<void> {
  if (isFirebaseConfigured && db) {
    try {
      await deleteDoc(doc(db, 'services', id));
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore deleteService error:', e);
    }
  }
  const all = (await getServices()).filter((s) => s.id !== id);
  writeLocal(STORAGE_KEYS.SERVICES, all);
}

// ==============================================================================
// PROJECTS
// ==============================================================================
export async function getProjects(): Promise<ProjectRecord[]> {
  const defaultProjects: ProjectRecord[] = PROJECTS.map((p) => ({
    ...p,
    id: p.slug,
  }));

  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDocs(query(collection(db, 'projects'), orderBy('order', 'asc')));
      if (!snap.empty) {
        return snap.docs.map((d) => ({ id: d.id, ...d.data() } as ProjectRecord));
      }
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore getProjects error, using fallback:', e);
    }
  }
  return readLocal<ProjectRecord[]>(STORAGE_KEYS.PROJECTS, defaultProjects);
}

export async function saveProject(project: Partial<ProjectRecord> & { title: string; slug: string }): Promise<ProjectRecord> {
  const all = await getProjects();
  const id = project.id || project.slug;
  const record: ProjectRecord = {
    id,
    slug: project.slug,
    title: project.title,
    client: project.client || 'Client Confidential',
    year: project.year || '2026',
    tagline: project.tagline || '',
    category: project.category || 'Digital Platform',
    overview: project.overview || '',
    challenge: project.challenge || '',
    solution: project.solution || '',
    results: project.results || [],
    technologies: project.technologies || [],
    deliverables: project.deliverables || [],
    featured: project.featured ?? true,
    order: project.order ?? all.length + 1,
    image: project.image || '/brand/webza-brand-poster.jpg',
    secondaryImages: project.secondaryImages || [],
    liveUrl: project.liveUrl,
  };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'projects', id), record);
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore saveProject error:', e);
    }
  }

  const existingIdx = all.findIndex((p) => p.id === id);
  if (existingIdx >= 0) {
    all[existingIdx] = record;
  } else {
    all.push(record);
  }
  writeLocal(STORAGE_KEYS.PROJECTS, all);
  return record;
}

export async function deleteProject(id: string): Promise<void> {
  if (isFirebaseConfigured && db) {
    try {
      await deleteDoc(doc(db, 'projects', id));
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore deleteProject error:', e);
    }
  }
  const all = (await getProjects()).filter((p) => p.id !== id);
  writeLocal(STORAGE_KEYS.PROJECTS, all);
}

// ==============================================================================
// BLOG POSTS
// ==============================================================================
export async function getBlogPosts(): Promise<BlogPostRecord[]> {
  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDocs(query(collection(db, 'blogPosts'), orderBy('publishedAt', 'desc')));
      if (!snap.empty) {
        return snap.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPostRecord));
      }
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore getBlogPosts error, using fallback:', e);
    }
  }
  return readLocal<BlogPostRecord[]>(STORAGE_KEYS.BLOG, DEFAULT_BLOG_POSTS);
}

export async function saveBlogPost(post: Partial<BlogPostRecord> & { title: string; slug: string }): Promise<BlogPostRecord> {
  const all = await getBlogPosts();
  const id = post.id || post.slug;
  const record: BlogPostRecord = {
    id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || '',
    content: post.content || '',
    coverImage: post.coverImage || '/brand/webza-brand-poster.jpg',
    author: post.author || 'WEBZA Studio',
    publishedAt: post.publishedAt || new Date().toISOString().split('T')[0],
    status: post.status || 'published',
    tags: post.tags || ['Engineering'],
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
  };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'blogPosts', id), record);
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore saveBlogPost error:', e);
    }
  }

  const existingIdx = all.findIndex((p) => p.id === id);
  if (existingIdx >= 0) {
    all[existingIdx] = record;
  } else {
    all.push(record);
  }
  writeLocal(STORAGE_KEYS.BLOG, all);
  return record;
}

export async function deleteBlogPost(id: string): Promise<void> {
  if (isFirebaseConfigured && db) {
    try {
      await deleteDoc(doc(db, 'blogPosts', id));
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore deleteBlogPost error:', e);
    }
  }
  const all = (await getBlogPosts()).filter((p) => p.id !== id);
  writeLocal(STORAGE_KEYS.BLOG, all);
}

// ==============================================================================
// TESTIMONIALS
// ==============================================================================
export async function getTestimonials(): Promise<TestimonialRecord[]> {
  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDocs(query(collection(db, 'testimonials'), orderBy('order', 'asc')));
      if (!snap.empty) {
        return snap.docs.map((d) => ({ id: d.id, ...d.data() } as TestimonialRecord));
      }
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore getTestimonials error:', e);
    }
  }
  return readLocal<TestimonialRecord[]>(STORAGE_KEYS.TESTIMONIALS, DEFAULT_TESTIMONIALS);
}

export async function saveTestimonial(t: Partial<TestimonialRecord> & { author: string; quote: string }): Promise<TestimonialRecord> {
  const all = await getTestimonials();
  const id = t.id || `test-${Date.now()}`;
  const record: TestimonialRecord = {
    id,
    author: t.author,
    role: t.role || 'Partner',
    company: t.company || 'Enterprise Partner',
    quote: t.quote,
    avatar: t.avatar,
    rating: t.rating ?? 5,
    order: t.order ?? all.length + 1,
    visible: t.visible ?? true,
  };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'testimonials', id), record);
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore saveTestimonial error:', e);
    }
  }

  const existingIdx = all.findIndex((item) => item.id === id);
  if (existingIdx >= 0) {
    all[existingIdx] = record;
  } else {
    all.push(record);
  }
  writeLocal(STORAGE_KEYS.TESTIMONIALS, all);
  return record;
}

export async function deleteTestimonial(id: string): Promise<void> {
  if (isFirebaseConfigured && db) {
    try {
      await deleteDoc(doc(db, 'testimonials', id));
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore deleteTestimonial error:', e);
    }
  }
  const all = (await getTestimonials()).filter((item) => item.id !== id);
  writeLocal(STORAGE_KEYS.TESTIMONIALS, all);
}

// ==============================================================================
// CONTACT SUBMISSIONS
// ==============================================================================
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDocs(query(collection(db, 'contactSubmissions'), orderBy('createdAt', 'desc')));
      if (!snap.empty) {
        return snap.docs.map((d) => ({ id: d.id, ...d.data() } as ContactSubmission));
      }
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore getContactSubmissions error:', e);
    }
  }
  return readLocal<ContactSubmission[]>(STORAGE_KEYS.CONTACTS, []);
}

export async function submitContactForm(submission: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): Promise<ContactSubmission> {
  const id = `sub-${Date.now()}`;
  const record: ContactSubmission = {
    ...submission,
    id,
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'contactSubmissions', id), record);
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore submitContactForm error:', e);
    }
  }

  const all = await getContactSubmissions();
  all.unshift(record);
  writeLocal(STORAGE_KEYS.CONTACTS, all);
  return record;
}

export async function updateSubmissionStatus(id: string, status: 'new' | 'reviewed' | 'archived'): Promise<void> {
  if (isFirebaseConfigured && db) {
    try {
      await updateDoc(doc(db, 'contactSubmissions', id), { status });
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore updateSubmissionStatus error:', e);
    }
  }
  const all = await getContactSubmissions();
  const match = all.find((s) => s.id === id);
  if (match) {
    match.status = status;
    writeLocal(STORAGE_KEYS.CONTACTS, all);
  }
}

// ==============================================================================
// MEDIA LIBRARY
// ==============================================================================
export async function getMediaItems(): Promise<MediaItem[]> {
  const defaultMedia: MediaItem[] = [
    {
      id: 'media-1',
      name: 'webza-logo-master.jpg',
      url: '/brand/webza-logo-master.jpg',
      path: '/brand/webza-logo-master.jpg',
      sizeBytes: 413418,
      mimeType: 'image/jpeg',
      uploadedAt: '2026-09-10',
    },
    {
      id: 'media-2',
      name: 'webza-brand-poster.jpg',
      url: '/brand/webza-brand-poster.jpg',
      path: '/brand/webza-brand-poster.jpg',
      sizeBytes: 308278,
      mimeType: 'image/jpeg',
      uploadedAt: '2026-09-11',
    },
  ];

  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDocs(query(collection(db, 'media'), orderBy('uploadedAt', 'desc')));
      if (!snap.empty) {
        return snap.docs.map((d) => ({ id: d.id, ...d.data() } as MediaItem));
      }
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore getMediaItems error:', e);
    }
  }
  return readLocal<MediaItem[]>(STORAGE_KEYS.MEDIA, defaultMedia);
}

export async function addMediaItem(item: Omit<MediaItem, 'id' | 'uploadedAt'>): Promise<MediaItem> {
  const id = `media-${Date.now()}`;
  const record: MediaItem = {
    ...item,
    id,
    uploadedAt: new Date().toISOString(),
  };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'media', id), record);
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore addMediaItem error:', e);
    }
  }

  const all = await getMediaItems();
  all.unshift(record);
  writeLocal(STORAGE_KEYS.MEDIA, all);
  return record;
}

export async function deleteMediaItem(id: string): Promise<void> {
  if (isFirebaseConfigured && db) {
    try {
      await deleteDoc(doc(db, 'media', id));
    } catch (e) {
      console.warn('[WEBZA CMS] Firestore deleteMediaItem error:', e);
    }
  }
  const all = (await getMediaItems()).filter((m) => m.id !== id);
  writeLocal(STORAGE_KEYS.MEDIA, all);
}
