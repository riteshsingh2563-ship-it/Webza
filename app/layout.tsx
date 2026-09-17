import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://webza.agency'),
  title: 'WEBZA — Done-For-You Websites in 24 Hours | Built To Be Seen',
  description:
    'We design, build, host, and manage your custom website, e-commerce, SEO, and AI Engine Optimization (AEO). Done for you in 24 hours. No DIY headache.',
  keywords: [
    'WEBZA',
    'Done-for-you website',
    'Website in 24 hours',
    'E-commerce store',
    'SEO & AEO',
    'Built To Be Seen',
    'Next.js web agency',
  ],
  authors: [{ name: 'WEBZA Studio' }],
  openGraph: {
    title: 'WEBZA — Done-For-You Websites in 24 Hours',
    description:
      'We design, build, and manage your website, online store, SEO, and AEO in 24 hours. Done for you.',
    url: 'https://webza.agency',
    siteName: 'WEBZA',
    images: [
      {
        url: '/brand/webza-brand-poster.jpg',
        width: 1200,
        height: 630,
        alt: 'WEBZA — Built To Be Seen',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBZA — Done-For-You Websites in 24 Hours',
    description:
      'We design, build, and manage your website, online store, SEO, and AEO in 24 hours. Done for you.',
    images: ['/brand/webza-brand-poster.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#6b7d50] selection:text-[#FAF7F1]">
        {children}
      </body>
    </html>
  );
}
