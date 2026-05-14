import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS, formatPriceHUF } from "@/lib/products";

export function Products() {
  return (
    <section id="satorak" style={{ background: "#0f0d0b" }}>
      <div className="container-wrap">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <Reveal as="span" className="section-eyebrow">
              Kollekcióink
            </Reveal>
            <Reveal
              as="h2"
              delay={1}
              className="section-title"
              style={{ marginBottom: 0 }}
            >
              Találd meg<br />
              <em>tökéletes méreted</em>
            </Reveal>
          </div>
          <Reveal
            as="p"
            className="section-body"
            style={{ maxWidth: 380, margin: 0, paddingBottom: 8 }}
          >
            Kilenc szabványméret — az intim 5×5 m-es partiktól a 150 fős 10×15 m-es fesztiválfedezékig. Mindegyik teljes hardverkészlettel érkezik.
          </Reveal>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p: typeof PRODUCTS[number], idx) => (
            <Reveal
              key={p.id}
              as="article"
              className="product-card"
              delay={(idx % 3) as 0 | 1 | 2}
              style={{ position: "relative" }}
            >
              {p.popular && (
                <div className="product-popular-badge">Legnépszerűbb</div>
              )}
              <div className="product-img-wrap">
                <Image
                  className="product-img"
                  src={p.image}
                  alt={p.imageAlt}
                  width={1024}
                  height={700}
                />
              </div>
              <div className="product-body">
                <span className="product-size">{p.size}</span>
                <span className="product-capacity">
                  Max. {p.capacityStanding} álló · {p.capacitySeated} ülő
                </span>
                <span className="product-price">{formatPriceHUF(p.priceHUF)}</span>
                <a href="#kapcsolat" className="product-cta">
                  Árajánlat kérése
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          style={{
            marginTop: 48,
            padding: "32px 40px",
            background: "#1a1714",
            borderRadius: 6,
            border: "1px solid rgba(212,184,150,0.08)",
            display: "flex",
            alignItems: "flex-start",
            gap: 24,
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4B896"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0, marginTop: 2 }}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <div>
            <p
              style={{
                fontWeight: 500,
                color: "#f5f0e8",
                margin: "0 0 6px",
                fontSize: "0.9375rem",
              }}
            >
              Minden sátor komplett felszereléssel érkezik
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.5)",
                margin: 0,
                fontSize: "0.875rem",
                lineHeight: 1.6,
              }}
            >
              Oszlopkészlet · Középső rúd · 100 cm-es karó · Karabiner (M12) · Szemcsavar (M12) · Kötélracsni · Hordtáska · Konfigurációs diagram · 1 év teljes garancia
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
