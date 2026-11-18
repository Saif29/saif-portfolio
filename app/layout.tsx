import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saifurrehman.dev";
const SITE_NAME = "Saif Ur Rehman";
const ROLE = "Full Stack Engineer";
const TAGLINE = `${ROLE} building fintech, payments, and AI products in React, Next.js, React Native, Node.js, and PostgreSQL.`;
const DESCRIPTION =
  "Full Stack Engineer with 4+ years in React, Next.js, TypeScript, React Native, Node.js, Express, and PostgreSQL. Currently building a cross-border payment platform that moved $1M+ in cash flow in 5 months. Prior work with a Y Combinator-backed fintech, AI video, and US insurance. Open to remote and relocation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${ROLE} (React, Next.js, Node.js)`,
    template: `%s | ${SITE_NAME} - ${ROLE}`,
  },
  description: DESCRIPTION,
  applicationName: `${SITE_NAME} - Portfolio`,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  keywords: [
    "Saif Ur Rehman",
    "Full Stack Engineer",
    "Full Stack Developer",
    "React Engineer",
    "Next.js Developer",
    "TypeScript",
    "React Native",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "TypeORM",
    "Sequelize",
    "REST APIs",
    "Fintech Engineer",
    "Payments Engineer",
    "Stripe",
    "Apple Pay",
    "Google Pay",
    "ACH",
    "SWIFT",
    "Crypto Payments",
    "Remote Full Stack Engineer",
    "Pakistan Engineer",
    "Islamabad",
    "Hire Full Stack Developer",
    "Y Combinator",
    "Nomod",
    "WhizPay",
    "DeepReel",
    "Graana",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: `${SITE_NAME} - Portfolio`,
    title: `${SITE_NAME} | ${ROLE}`,
    description: TAGLINE,
    locale: "en_US",
    firstName: "Saif",
    lastName: "Ur Rehman",
    username: "saif29",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${ROLE}`,
    description: TAGLINE,
    creator: "@saif29",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {},
  other: {
    "profile:first_name": "Saif",
    "profile:last_name": "Ur Rehman",
    "profile:username": "saif29",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  alternateName: "Saif",
  url: SITE_URL,
  jobTitle: ROLE,
  description: DESCRIPTION,
  email: "mailto:saifurrehmancs@gmail.com",
  telephone: "+92-309-5688231",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  worksFor: {
    "@type": "Organization",
    name: "WhizPay",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National University of Sciences and Technology (NUST)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "TypeORM",
    "Sequelize",
    "REST APIs",
    "Payments",
    "Stripe",
    "Apple Pay",
    "Google Pay",
    "ACH",
    "SWIFT",
    "Crypto Pay-ins",
    "Fintech",
    "AI Video",
    "Core Web Vitals",
  ],
  knowsLanguage: ["en"],
  sameAs: [
    "https://www.linkedin.com/in/saifurrehman29/",
    "https://github.com/saif29",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${SITE_NAME} - Portfolio`,
  url: SITE_URL,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var e=(s==='light'||s==='dark')?s:(d?'dark':'light');document.documentElement.setAttribute('data-theme',e);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
