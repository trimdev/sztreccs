import { Reveal } from "@/components/Reveal";

export function WhatIs() {
  const statNumberStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond',serif",
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#D4B896",
    letterSpacing: "-0.03em",
    lineHeight: 1,
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(245,240,232,0.62)",
    display: "block",
    marginTop: "4px",
  };

  return (
    <section id="mi-az" style={{ background: "#0f0d0b" }}>
      <div className="container-wrap">
        <Reveal as="span" className="section-eyebrow">
          Mi az a sztreccs sátor?
        </Reveal>
        <Reveal
          as="h2"
          className="section-title"
          delay={1}
          style={{ maxWidth: "760px" }}
        >
          A modern rendezvénysátor,<br />
          <em>amely minden formát felvesz</em>
        </Reveal>

        <div className="what-is-grid">
          <div>
            <Reveal
              as="p"
              className="section-body"
              delay={2}
              style={{ marginBottom: "24px" }}
            >
              A sztreccs sátor (más néven afrikai sátor) egy rendkívül rugalmas, víz- és szélálló technikai anyagból készült modern rendezvénysátor, amely egyedi, organikus formákban feszíthető ki. Különleges, stílusos megjelenése miatt népszerű esküvőkön és fesztiválokon — szinte bármilyen egyenetlen terephez alkalmazkodik.
            </Reveal>
            <Reveal as="p" className="section-body" delay={2}>
              A sátorvászon nyújtható, így a magassági pontok változtatásával különböző formák hozhatók létre. Csatlakoztatható meglévő épületekhez, falakhoz és más struktúrákhoz is. Az eredmény: egy vizuálisan lenyűgöző, légies tér, amely tökéletes védelmet nyújt az időjárás ellen.
            </Reveal>
            <Reveal
              as="p"
              className="section-body"
              delay={2}
              style={{ marginTop: "24px" }}
            >
              Telepíthető fixen rögzített oszlopokkal és feszített pányvás oszlopokkal is, valamint az oszlopok súlyozásával (víztartállyal) is.
            </Reveal>

            <Reveal as="div" className="use-cases" delay={3}>
              <span className="use-case-tag">Esküvők</span>
              <span className="use-case-tag">Fesztiválok</span>
              <span className="use-case-tag">Kerti partik</span>
              <span className="use-case-tag">Vendéglátás</span>
              <span className="use-case-tag">Céges rendezvények</span>
              <span className="use-case-tag">Állandó telepítés</span>
              <span className="use-case-tag">Bérbeadás</span>
              <span className="use-case-tag">Camping</span>
            </Reveal>

            <Reveal
              as="div"
              delay={3}
              style={{ marginTop: "40px", display: "flex", gap: "48px" }}
            >
              <div>
                <span style={statNumberStyle}>9</span>
                <span style={statLabelStyle}>Méret</span>
              </div>
              <div>
                <span style={statNumberStyle}>24h</span>
                <span style={statLabelStyle}>Kiszállítás</span>
              </div>
              <div>
                <span style={statNumberStyle}>M1</span>
                <span style={statLabelStyle}>Tűzbizonyítvány</span>
              </div>
            </Reveal>
          </div>

          <div className="what-is-benefits">
            <Reveal as="div" className="benefit-item">
              <div className="benefit-icon">
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
                  <path d="M12 2L2 10v12h20V10L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="benefit-title">Rugalmasság és alakíthatóság</h3>
                <p className="benefit-desc">
                  A sátorvászon nyújtható, így különböző magassági pontokkal egyedi formák hozhatók létre — egyenetlen talajon, sziklás terepen és épületek mellé is felállítható.
                </p>
              </div>
            </Reveal>
            <Reveal as="div" className="benefit-item" delay={1}>
              <div className="benefit-icon">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="benefit-title">Teljes időjárásállóság</h3>
                <p className="benefit-desc">
                  100% vízállóság (napi 2000 mm), 85 km/h szélállóság és UV-álló szövet gondoskodik arról, hogy eseményed minden körülmény között zavartalanul zajljon.
                </p>
              </div>
            </Reveal>
            <Reveal as="div" className="benefit-item" delay={2}>
              <div className="benefit-icon">
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <div>
                <h3 className="benefit-title">Esztétikus megjelenés</h3>
                <p className="benefit-desc">
                  Modern, kreatív és légies hangulatot teremt — ez az, amiért a sztreccs sátor az esküvők, kerti partik és prémium rendezvények első számú választása lett.
                </p>
              </div>
            </Reveal>
            <Reveal as="div" className="benefit-item" delay={3}>
              <div className="benefit-icon">
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
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <h3 className="benefit-title">Kiváló befektetés</h3>
                <p className="benefit-desc">
                  Bérbeadásra, vendéglátásra vagy állandó telepítésre egyaránt ideális. Aktívan segítjük ügyfeleinket saját sztreccs sátor bérlési vállalkozásuk elindításában.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
