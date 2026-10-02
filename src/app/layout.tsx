import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goodlifeuae.com"),
  title: "Sharjah Auto Scrap LLC — Instant Cash for Scrap & Junk Cars Across UAE",
  description:
    "UAE's premier scrap & junk car buyer. We buy damaged, accident, expired mulkiya & non-running cars across Sharjah, Dubai, Abu Dhabi & all UAE Emirates. 100% Free Doorstep Towing & Instant Cash Payment.",
  keywords: [
    "scrap car Sharjah",
    "sell scrap car UAE",
    "junk car buyer Dubai",
    "sell damaged car Abu Dhabi",
    "instant cash for cars UAE",
    "accident car scrap",
    "expired mulkiya car buyer",
    "Sharjah Auto Scrap LLC",
    "scrap yard Sharjah",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://goodlifeuae.com",
    title: "Sharjah Auto Scrap LLC — Cash for Scrap & Junk Cars Across UAE",
    description:
      "Instant Cash for Junk, Accident & Expired Mulkiya Cars. Free Towing Across All UAE Emirates. Call/WhatsApp 0588900019.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sharjah Auto Scrap LLC - Scrap Car Towing and Cash Payout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharjah Auto Scrap LLC — Cash for Scrap Cars UAE",
    description: "Free Towing & Instant Cash on Pickup Across all UAE Emirates.",
    images: ["/images/hero_bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": SITE_CONFIG.name,
  "alternateName": SITE_CONFIG.shortName,
  "description":
    "Premier scrap car buyer and vehicle recycling service serving all UAE Emirates — Sharjah, Dubai, Abu Dhabi, Ajman, RAK, UAQ, Fujairah.",
  "url": "https://goodlifeuae.com",
  "telephone": "+971588900019",
  "email": SITE_CONFIG.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sharjah",
    "addressRegion": "Sharjah",
    "addressCountry": "AE",
  },
  "areaServed": [
    "Sharjah",
    "Dubai",
    "Abu Dhabi",
    "Ajman",
    "Ras Al Khaimah",
    "Umm Al Quwain",
    "Fujairah",
  ],
  "priceRange": "AED",
  "paymentAccepted": "Cash, Bank Transfer",
  "sameAs": [
    SITE_CONFIG.socials.instagram,
    SITE_CONFIG.socials.facebook,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
