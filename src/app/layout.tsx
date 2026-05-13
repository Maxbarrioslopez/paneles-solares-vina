import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import { 
  SEO_TITLE, 
  SEO_DESCRIPTION, 
  SEO_KEYWORDS,
  COMPANY_NAME 
} from "@/constants/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.tuempresasolar.cl",
    siteName: COMPANY_NAME,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Instalación de paneles solares en Viña del Mar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@tuempresasolar",
  },
  alternates: {
    canonical: "https://www.tuempresasolar.cl",
  },
  verification: {
    google: "[TU_CODIGO_DE_VERIFICACION_GOOGLE]",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f59e0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": COMPANY_NAME,
              "description": SEO_DESCRIPTION,
              "url": "https://www.tuempresasolar.cl",
              "telephone": "+569XXXXXXXX",
              "email": "contacto@empresasolar.cl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Viña del Mar",
                "addressRegion": "Valparaíso",
                "addressCountry": "CL",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.0153,
                "longitude": -71.5503,
              },
              "areaServed": [
                "Viña del Mar",
                "Valparaíso",
                "Concón",
                "Quilpué",
                "Villa Alemana",
                "Reñaca",
                "Limache",
                "Olmué",
                "Casablanca",
              ],
              "serviceType": [
                "Instalación de paneles solares",
                "Sistemas fotovoltaicos",
                "Energía solar residencial",
                "Energía solar comercial",
                "Mantención de sistemas solares",
              ],
              "priceRange": "$",
              "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
