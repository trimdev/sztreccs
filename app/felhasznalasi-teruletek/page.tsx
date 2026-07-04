import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { USE_CASES } from "@/lib/usecases";
import { buildHubGraph } from "@/lib/schema";

const HUB_PATH = "/felhasznalasi-teruletek";

export const metadata: Metadata = {
  title: "Felhasználási területek — mire jó a sztreccs sátor? | SztreccsSátor",
  description:
    "Mire használható a sztreccs sátor? Esküvő, fesztivál, céges rendezvény, vendéglátás, kerti parti és bérbeadás — nézd meg, melyik megoldás illik az eseményedhez.",
  alternates: {
    canonical: HUB_PATH,
    languages: { hu: HUB_PATH, "x-default": HUB_PATH },
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}${HUB_PATH}`,
    title: "Sztreccs sátor felhasználási területek",
    description:
      "Esküvő, fesztivál, céges rendezvény, vendéglátás, kerti parti, bérbeadás — mire jó a sztreccs sátor.",
    images: [{ url: "/hero.webp", width: 1920, height: 1080, alt: "Sztreccs sátor" }],
  },
};

export default function HubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHubGraph()) }}
      />
      <Nav />
      <main id="main" tabIndex={-1}>
        <div className="subpage-head">
          <div className="container-wrap">
            <nav className="uc-breadcrumb" aria-label="Morzsamenü">
              <a href="/">Kezdőlap</a>
              <span className="sep" aria-hidden="true">/</span>
              <span className="current">Felhasználási területek</span>
            </nav>
            <Reveal as="span" className="section-eyebrow">
              Felhasználás
            </Reveal>
            <Reveal as="h1" className="uc-title" delay={1}>
              Mire jó a<br />
              <em>sztreccs sátor?</em>
            </Reveal>
            <Reveal as="p" className="uc-lead" delay={2}>
              A sztreccs sátor rendkívül sokoldalú: ugyanaz a prémium, időjárásálló
              technológia szolgál ki esküvőt, fesztivált, céges rendezvényt, kültéri
              teraszt és kerti partit — sőt, saját bérbeadó vállalkozás alapja is lehet.
              Válaszd ki a hozzád illő felhasználási területet.
            </Reveal>
          </div>
        </div>

        <section
          aria-label="Felhasználási területek"
          style={{ background: "#0f0d0b", paddingTop: 56 }}
        >
          <div className="container-wrap">
            <div className="hub-grid">
              {USE_CASES.map((u, idx) => (
                <Reveal
                  key={u.slug}
                  as="article"
                  delay={(idx % 3) as 0 | 1 | 2}
                  style={{ display: "flex" }}
                >
                  <a
                    href={`${HUB_PATH}/${u.slug}`}
                    className="hub-card"
                    aria-label={u.nav}
                  >
                    <div className="hub-card-img-wrap">
                      <Image
                        className="hub-card-img"
                        src={u.image}
                        alt={u.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="hub-card-body">
                      <h2 className="hub-card-title">{u.nav}</h2>
                      <p className="hub-card-text">{u.cardText}</p>
                      <span className="hub-card-link">
                        Részletek
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-separator" />

        <section className="uc-cta" style={{ background: "#0f0d0b" }}>
          <div className="container-wrap">
            <Reveal as="span" className="section-eyebrow">
              Kapcsolat
            </Reveal>
            <Reveal as="h2" className="section-title" delay={1}>
              Nem tudod, melyik<br />
              <em>a megfelelő?</em>
            </Reveal>
            <Reveal as="p" className="section-body" delay={2}>
              Meséld el, milyen eseményt tervezel, és segítünk kiválasztani a méretet és
              a megoldást. Hétfőtől péntekig 07:00–16:00 között hívható vagy.
            </Reveal>
            <div className="uc-cta-actions">
              <a href="/#kapcsolat" className="hero-btn-primary">
                Árajánlat kérése
              </a>
              <a href={`tel:${SITE.phone}`} className="hero-btn-secondary">
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
