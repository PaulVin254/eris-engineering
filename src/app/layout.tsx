import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eris.co.ke"),
  title: {
    default:
      "Eris Engineering | Custom Residential Engineering & Architecture in Kenya",
    template: "%s | Eris Engineering",
  },
  description:
    "Building in Kenya from abroad? Get custom home designs, structural drawings & a real cost breakdown (BOQ) upfront—plus fixed-price building when you're ready.",
  authors: [{ name: "Eris Engineering Ltd" }],
  keywords: [
    "Kenya custom residential builder",
    "structural engineering Kenya",
    "private residence construction Nairobi",
    "diaspora home construction Kenya",
    "Eris Engineering",
  ],
  icons: {
    icon: [
      {
        url: "/eris-favicon.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/eris-favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title:
      "Eris Engineering | Custom Residential Engineering & Architecture in Kenya",
    description:
      "Building in Kenya from abroad? Get custom home designs, structural drawings & a real cost breakdown (BOQ) upfront—plus fixed-price building when you're ready.",
    type: "website",
    url: "https://eris.co.ke",
    siteName: "Eris Engineering",
    images: [
      {
        url: "/cedar-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Private residence engineered by Eris Engineering in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Eris Engineering | Custom Residential Engineering & Architecture in Kenya",
    description:
      "Building in Kenya from abroad? Get custom home designs, structural drawings & a real cost breakdown (BOQ) upfront—plus fixed-price building when you're ready.",
    images: ["/cedar-hero.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HomeAndConstructionBusiness", "Organization"],
      "@id": "https://eris.co.ke/#organization",
      name: "Eris Engineering Ltd",
      alternateName: "Eris Engineering",
      url: "https://eris.co.ke",
      logo: "https://eris.co.ke/eris-logo.png",
      image: "https://eris.co.ke/cedar-hero.jpg",
      description:
        "Custom home design, structural drawings, and fixed-price residential construction in Kenya for diaspora and local homeowners—backed by an upfront BOQ, milestone payments, and weekly filmed site updates.",
      telephone: "+254717297022",
      email: "paul@eris.co.ke",
      priceRange: "KES 17M - 35M+",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Westlands, Nairobi",
        addressRegion: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "City", name: "Nairobi" },
        { "@type": "AdministrativeArea", name: "Kiambu County" },
        { "@type": "AdministrativeArea", name: "Vihiga County" },
        { "@type": "AdministrativeArea", name: "Nakuru County" },
      ],
      founder: {
        "@type": "Person",
        name: "Eng. Paul Wakoli",
      },
      sameAs: [
        "https://erisengineering.co.ke",
        "https://www.instagram.com/erisbuilders/",
        "https://www.facebook.com/profile.php?id=61581890138497",
      ],
      subOrganization: {
        "@type": "EducationalOrganization",
        name: "Ephphatha Sign Language School",
        url: "https://ephphathakenya.co.ke",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://eris.co.ke/#website",
      url: "https://eris.co.ke",
      name: "Eris Engineering",
      publisher: {
        "@id": "https://eris.co.ke/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9C34JQP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Organization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9C34JQP');`}
        </Script>

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CEGS4J8XYT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CEGS4J8XYT');`}
        </Script>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
