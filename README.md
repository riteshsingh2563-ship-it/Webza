# WEBZA — BUILT TO BE SEEN
### Premier Creative Technology & Digital Engineering Studio

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.4-orange?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Optimized-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 01. Overview

**WEBZA** is an elite digital flagship and full-stack creative technology studio designed to engineer web platforms that refuse to blend into generic SaaS templates.

Built around the official **WEBZA** brand identity (featuring the geometric "W" emblem with the signature `#6b7d50` olive chevron and architectural typography), this repository contains the complete production-grade web experience, including an art-directed public web flagship, dynamic case studies, interactive scope and budget calculators, and an administrative CMS at `/admin`.

---

## 02. Architectural Highlights & Features

1. **Art-Directed Editorial Frontend**:
   - **Hero Experience**: Architectural typography (`Space Grotesk`, `Instrument Serif`, `Plus Jakarta Sans`, `JetBrains Mono`), high-res master exhibition branding, and real-time telemetry strip.
   - **Manifesto & Brand Statement**: Typographic statement rejecting generic homogenized UI presets.
   - **Interactive Capability Matrix**: Dynamic hover/focus preview system linking services to deliverables, toolchains, and client philosophy.
   - **Case Studies & Portfolio**: Rich editorial project breakdowns with challenge, solution, and verifiable technical deliverables (`/work`, `/work/[slug]`).
   - **Interactive Scope Estimator**: Multi-step pricing and timeline calculator with instant JSON brief generation and direct inquiry submission.
   - **Executive Contact Engine**: Validated inquiry channel with automatic NDA preferences and direct Firebase dispatch.

2. **Full-Stack Firebase CMS (`/admin`)**:
   - **Executive Console**: Secured master access screen (`WEBZA-2026-ADMIN`).
   - **Overview Dashboard**: Live statistics (inquiries, active projects, capabilities, media assets, system status).
   - **CRM & Lead Inbox**: Table with status workflow (`new` → `reviewed` → `archived`), full message inspection drawer, and search filters.
   - **Projects Manager**: Create, edit, toggle featured, reorder, or delete portfolio case studies.
   - **Services Manager**: Manage studio capabilities, deliverables, and technical stacks.
   - **Editorial / Blog Engine**: Draft and publish thought leadership essays with tags and SEO metadata.
   - **Client Testimonials**: Curate and toggle visibility of client quotes and star ratings.
   - **Media Library**: Index, preview, and copy public URLs of hosted brand visual assets.
   - **Site Settings**: Real-time management of brand name, hero lines, contact channels, locations, and global SEO defaults.
   - **Dual-Mode Persistence**: Safe out-of-the-box local reactive storage fallback when Firebase credentials are not yet configured; seamlessly connects to live Firestore cloud once `.env.local` is set!

3. **Zero-Trust Security & Governance**:
   - `firestore.rules`: Strict collection-level validation. Prevents unauthorized writes, validates contact email syntax and length constraints, and protects admin settings.
   - `storage.rules`: Strict asset MIME-type verification (`image/*`) and 15MB upload boundaries.

4. **100% Vercel Serverless Ready**:
   - Zero local SQLite or filesystem write dependencies in production.
   - Dynamic sitemap (`app/sitemap.ts`) and crawler control (`app/robots.ts`).
   - Built-in Next.js App Router error boundaries (`app/error.tsx`), loading skeletons (`app/loading.tsx`), and branded 404 page (`app/not-found.tsx`).

---

## 03. Tech Stack

- **Framework**: Next.js 14.2 (App Router, Server Components)
- **Language**: TypeScript 5.7 (Strict Type Checking)
- **Styling**: Tailwind CSS 3.4, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Cloud Backend**: Google Firebase (Firestore Database, Firebase Storage, Firebase Auth)
- **Deployment**: Vercel (Global Edge Network)

---

## 04. Local Development Setup

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/webza-web.git
cd webza-web

# 2. Install dependencies
npm install

# 3. Launch the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the public experience.  
Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the Executive CMS Dashboard.

---

## 05. Environment Configuration

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your Firebase credentials:

```env
# Firebase Web App Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyB...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=102938475610
NEXT_PUBLIC_FIREBASE_APP_ID=1:102938475610:web:...

# Admin Master Access Key
NEXT_PUBLIC_ADMIN_MASTER_KEY=WEBZA-2026-ADMIN

# Production Site URL
NEXT_PUBLIC_SITE_URL=https://webza.agency
```

> **Note**: Even without Firebase configured, the entire website and `/admin` console run smoothly in **Local Reactive Fallback Mode**, saving edits to browser storage and displaying live changes across the site.

---

## 06. Firebase Setup & Security Rules

### 1. Create Firebase Project
1. Navigate to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project named `webza-agency` (or your chosen identifier).
3. Under **Build**, select **Firestore Database** and create a database in **Production mode**.
4. Under **Build**, select **Storage** and initialize your Cloud Storage bucket.
5. In Project Settings, add a **Web App** and copy the configuration keys into your `.env.local` or Vercel environment variables.

### 2. Deploy Firestore Security Rules
Deploy `firestore.rules` via Firebase CLI:

```bash
firebase deploy --only firestore:rules
```

Or copy the contents of `firestore.rules` directly into **Firestore Database > Rules** in the Firebase Console:
- Publicly readable for active projects, published articles, and testimonials.
- Unauthenticated users can only submit contact inquiries matching strict email and length validations.
- All writes, modifications, and administrative settings require authentication.

### 3. Deploy Storage Rules
Deploy `storage.rules` via Firebase CLI:

```bash
firebase deploy --only storage
```

Or copy `storage.rules` directly into **Storage > Rules** in the Firebase Console.

---

## 07. Executive Admin Console Setup

1. Navigate to `/admin`.
2. Enter the Master Access Key: `WEBZA-2026-ADMIN` (or click `[Quick Sign In with Default Master Key]` for demonstration).
3. You now have full executive governance over:
   - **Platform Overview**: Live inquiry count, project states, capability matrix.
   - **Client Inquiries**: Review inbound leads, mark status (`reviewed`, `archived`), read project parameters.
   - **Projects**: Add new case studies, edit deliverables, upload imagery, toggle homepage feature status.
   - **Capabilities / Services**: Update service descriptions, quotes, and technology tags.
   - **Editorial / Blog**: Write and publish essays.
   - **Testimonials**: Add and curate client quotes and ratings.
   - **Media Library**: Register and preview brand visuals.
   - **Global Settings & SEO**: Edit hero copy, studio email/phone, locations, and OpenGraph metadata.
   - **Backup & Export**: Download a full JSON snapshot of your entire CMS database in 1 click.

---

## 08. Vercel Deployment Guide

Deploying WEBZA to Vercel is seamless and zero-configuration:

1. Push your code to GitHub / GitLab / Bitbucket:
   ```bash
   git add .
   git commit -m "feat: complete WEBZA full-stack experience"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your repository.
4. In **Environment Variables**, paste the keys from `.env.example`:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_ADMIN_MASTER_KEY`
   - `NEXT_PUBLIC_SITE_URL`
5. Click **Deploy**. Vercel will automatically build the Next.js App Router application and serve it globally with sub-50ms TTFB.

---

## 09. Production Verification

To verify the production build locally:

```bash
npm run build
npm run start
```

All routes (including static routes `/`, `/work`, `/services`, `/about`, `/process`, `/contact`, dynamic case study routes `/work/[slug]`, and the `/admin` CMS console) compile with **0 errors**.

---

## 10. Brand Assets & License

- Master Logo (`public/brand/webza-logo-master.jpg`) & Vector SVG (`components/Logo.tsx`)
- Brand Poster (`public/brand/webza-brand-poster.jpg`)
- Official Tagline: **BUILT TO BE SEEN**
- Palette: Obsidian (`#090a09`), Olive Green (`#6b7d50`), Off-White (`#f5f4ee`), Slate (`#8e9189`)

© 2026 WEBZA. All rights reserved.
