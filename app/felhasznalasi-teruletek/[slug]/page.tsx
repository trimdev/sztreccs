import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { formatPriceHUF } from "@/lib/products";
import {
  USE_CASES,
  getUseCase,
  productsByIds,
  type UseCase,
} from "@/lib/usecases";
import { buildUseCaseGraph } from "@/lib/schema";

const HUB_PATH = "/felhasznalasi-teruletek";

export function generateStaticParams() {
  return USE_CASES.map((u) => ({ slug: u.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCase(slug);
  if (!uc) return {};
  const url = `${HUB_PATH}/${uc.slug}`;
  return {
    title: uc.metaTitle,
    description: uc.metaDescription,
    alternates: {
      canonical: url,
      languages: { hu: url, "x-default": url },
    },
    openGraph: {
      type: "article",
      url: `${SITE.url}${url}`,
      title: uc.metaTitle,
      description: uc.metaDescription,
      images: [{ url: uc.image, width: 1024, height: 700, alt: uc.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: uc.metaTitle,
      description: uc.metaDescription,
      images: [uc.image],
    },
  };
}

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const uc = getUseCase(slug);
  if (!uc) notFound();

  const sizes = productsByIds(uc.recommendedSizes);
  const related = uc.related
    .map((s) => getUseCase(s))
    .filter((u): u is UseCase => Boolean(u));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildUseCaseGraph(uc)) }}
      />
      <Nav />
      <main id="main" tabIndex={-1}>
        {/* HERO */}
        <section className="uc-hero" aria-label={uc.h1}>
          <Image
            className="uc-hero-img"
            src={uc.image}
            alt={uc.imageAlt}
            fill
            priority
            sizes="100vw"
          />
          <div className="uc-hero-overlay" />
          <div className="uc-hero-content">
            <nav className="uc-breadcrumb" aria-label="Morzsamenü">
              <a href="/">Kezdőlap</a>
              <span className="sep" aria-hidden="true">/</span>
              <a href={HUB_PATH}>Felhasználási területek</a>
              <span className="sep" aria-hidden="true">/</span>
              <span className="current">{uc.nav}</span>
            </nav>
            <span className="section-eyebrow">{uc.eyebrow}</span>
            <h1 className="uc-title">{uc.h1}</h1>
            <p className="uc-lead">{uc.intro}</p>
            <div className="uc-hero-actions">
              <a href="/#kapcsolat" className="hero-btn-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Árajánlat kérése
              </a>
              <a href="/#satorak" className="hero-btn-secondary">
                Sátraink megtekintése
              </a>
            </div>
          </div>
        </section>

        {/* INTRO + BENEFITS */}
        <section style={{ background: "#0f0d0b" }}>
          <div className="container-wrap">
            <Reveal as="span" className="section-eyebrow">
              Miért sztreccs sátor
            </Reveal>
            <Reveal as="h2" className="section-title" delay={1} style={{ maxWidth: 760 }}>
              Előnyök <em>erre a felhasználásra</em>
            </Reveal>
            <div className="uc-intro" style={{ marginTop: 8 }}>
              <Reveal as="p" delay={1}>
                {uc.intro2}
              </Reveal>
            </div>

            <div className="uc-checklist" style={{ marginTop: 40 }}>
              {uc.benefits.map((b, idx) => (
                <Reveal
                  key={b.title}
                  as="div"
                  className="benefit-item"
                  delay={(idx % 3) as 0 | 1 | 2}
                >
                  <div className="benefit-icon">
                    <CheckIcon />
                  </div>
                  <div>
                    <span className="benefit-title">{b.title}</span>
                    <p className="benefit-desc">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-separator" />

        {/* RECOMMENDED SIZES */}
        <section style={{ background: "#0f0d0b" }}>
          <div className="container-wrap">
            <Reveal as="span" className="section-eyebrow">
              Ajánlott méretek
            </Reveal>
            <Reveal as="h2" className="section-title" delay={1}>
              Melyik méret <em>illik hozzá?</em>
            </Reveal>
            <div className="uc-sizes-grid">
              {sizes.map((p, idx) => (
                <Reveal
                  key={p.id}
                  as="div"
                  className="uc-size-card"
                  delay={(idx % 4) as 0 | 1 | 2 | 3}
                >
                  <span className="s-size">{p.size}</span>
                  <span className="s-cap">
                    max. {p.capacityStanding} álló
                    <br />
                    {p.capacitySeated} ülő
                  </span>
                  <span className="s-price">{formatPriceHUF(p.priceHUF)}</span>
                </Reveal>
              ))}
            </div>
            <p className="uc-size-note">{uc.sizeNote}</p>
            <p className="uc-size-note" style={{ marginTop: 12 }}>
              <a
                href="/#satorak"
                style={{ color: "#D4B896", textDecoration: "underline" }}
              >
                Nézd meg mind a 9 méretet és az árakat →
              </a>
            </p>
          </div>
        </section>

        <div className="section-separator" />

        {/* CONSIDERATIONS */}
        <section style={{ background: "#0f0d0b" }}>
          <div className="container-wrap">
            <Reveal as="span" className="section-eyebrow">
              Jó tudni
            </Reveal>
            <Reveal as="h2" className="section-title" delay={1}>
              Amire érdemes <em>figyelni</em>
            </Reveal>
            <div className="uc-checklist">
              {uc.considerations.map((c, idx) => (
                <Reveal
                  key={c.title}
                  as="div"
                  className="uc-check-item"
                  delay={(idx % 3) as 0 | 1 | 2}
                >
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-separator" />

        {/* FAQ */}
        <section id="gyik" style={{ background: "#0f0d0b" }}>
          <Faq
            items={uc.faq}
            bare
            eyebrow="GYIK"
            title={
              <>
                Gyakori kérdések
                <br />
                <em>{uc.nav.toLowerCase()} témában</em>
              </>
            }
          />
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <>
            <div className="section-separator" />
            <section style={{ background: "#0f0d0b" }}>
              <div className="container-wrap">
                <Reveal as="span" className="section-eyebrow">
                  További felhasználás
                </Reveal>
                <Reveal as="h2" className="section-title" delay={1}>
                  Kapcsolódó <em>megoldások</em>
                </Reveal>
                <div className="uc-related-grid">
                  {related.map((r, idx) => (
                    <Reveal
                      key={r.slug}
                      as="div"
                      delay={(idx % 3) as 0 | 1 | 2}
                      style={{ display: "flex" }}
                    >
                      <a
                        href={`${HUB_PATH}/${r.slug}`}
                        className="uc-related-card"
                        style={{ width: "100%" }}
                      >
                        <span className="r-label">{r.nav}</span>
                        <span className="r-text">{r.cardText}</span>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* CTA */}
        <div className="section-separator" />
        <section className="uc-cta" style={{ background: "#0f0d0b" }}>
          <div className="container-wrap">
            <Reveal as="span" className="section-eyebrow">
              Kapcsolat
            </Reveal>
            <Reveal as="h2" className="section-title" delay={1}>
              Tervezzük meg <em>a rendezvényed</em>
            </Reveal>
            <Reveal as="p" className="section-body" delay={2}>
              Mondd el a részleteket — dátum, helyszín, vendégszám — és ajánljuk a
              legmegfelelőbb sztreccs sátrat. 24 órás országos kiszállítással,
              Debrecenből.
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
