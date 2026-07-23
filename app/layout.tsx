import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import { buildSiteGraph } from "@/lib/schema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Sztreccs sátor gyártó Debrecen — Ponyva Faktor Kft. | SztreccsSátor",
  description:
    "Sztreccs sátor (afrikai sátor) gyártás Debrecenből: 9 méret 888 810 Ft + áfa összegtől, prémium 720 g/m² PVC, M1 tűzbizonyítvány, 24 órás országos kiszállítás, 1 év garancia.",
  keywords: [
    "sztreccs sátor",
    "afrikai sátor",
    "stretch tent",
    "rendezvénysátor",
    "esküvői sátor",
    "fesztiválsátor",
    "sztreccs sátor ár",
    "sztreccs sátor gyártó",
    "Debrecen",
    "Ponyva Faktor",
  ],
  authors: [{ name: SITE.legalName }],
  alternates: {
    canonical: "/",
    languages: {
      hu: "/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: `${SITE.name} — ${SITE.legalName}`,
    locale: "hu_HU",
    url: `${SITE.url}/`,
    title: "Sztreccs sátor gyártó Debrecen — Ponyva Faktor Kft.",
    description:
      "Sztreccs sátor 888 810 Ft + áfa összegtől. 9 méret, prémium 720 g/m² PVC szövet, M1 tűzbizonyítvány, 24 órás kiszállítás, 1 év garancia.",
    images: [
      {
        url: "/hero.webp",
        width: 1920,
        height: 1080,
        alt: "Sztreccs sátor napos réten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sztreccs sátor gyártó Debrecen — Ponyva Faktor Kft.",
    description:
      "Sztreccs sátor 888 810 Ft + áfa összegtől. 9 méret, 720 g/m² PVC, M1 tűzbizonyítvány, 24 órás kiszállítás.",
    images: ["/hero.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0d0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildSiteGraph();
  return (
    <html lang="hu" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Ugrás a tartalomra
        </a>
        {children}
      </body>
    </html>
  );
}
