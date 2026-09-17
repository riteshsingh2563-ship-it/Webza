export type UserRole = 'admin' | 'editor' | 'client';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

export interface SiteSettings {
  brandName: string;
  tagline: string;
  heroTitleLine1: string;
  heroHighlight: string;
  heroTitleLine2: string;
  heroDescription: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  contactEmail: string;
  contactPhone: string;
  locations: string[];
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
  seoDefaults: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
  };
}

export interface ServiceRecord {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  quote: string;
  status: 'active' | 'archived';
  order: number;
}

export interface ProjectRecord {
  id: string;
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

export interface BlogPostRecord {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  status: 'published' | 'draft';
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface TestimonialRecord {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  rating: number;
  order: number;
  visible: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  nda: boolean;
  status: 'new' | 'reviewed' | 'archived';
  createdAt: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  path: string;
  sizeBytes: number;
  mimeType: string;
  uploadedAt: string;
}
