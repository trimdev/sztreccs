import { Reveal } from "@/components/Reveal";

export function Features() {
  return (
    <section style={{ background: "#0f0d0b" }}>
      <div className="container-wrap">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 0" }}>
          <Reveal as="span" className="section-eyebrow">Miért minket válassz</Reveal>
          <Reveal as="h2" className="section-title" delay={1} style={{ margin: "0 auto" }}>
            Teljesítményre tervezve,<br /><em>lenyűgözésre alkotva</em>
          </Reveal>
        </div>

        <div className="features-grid">
          <Reveal as="div" className="feature-card">
            <span className="feature-number">01</span>
            <div className="feature-icon-wrap">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 10v12h20V10L12 2z" />
                <path d="M12 22V12" />
                <path d="M2 10h20" />
              </svg>
            </div>
            <h3>Bármilyen terep, bármilyen forma</h3>
            <p>A nyújtható vászon egyenetlen talajhoz, sziklás területhez és lejtőkhöz is alkalmazkodik — ahol merev sátrak kudarcot vallanak. Épületekhez is csatlakoztatható.</p>
          </Reveal>

          <Reveal as="div" className="feature-card" delay={1}>
            <span className="feature-number">02</span>
            <div className="feature-icon-wrap">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Gyors 24 órás kiszállítás</h3>
            <p>Minden sátor Debrecenből indul, aznapi kiszállítással Magyarország egész területére. Teljes készlet a dobozban — nincsenek rejtett pótrendelések.</p>
          </Reveal>

          <Reveal as="div" className="feature-card" delay={2}>
            <span className="feature-number">03</span>
            <div className="feature-icon-wrap">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>Prémium 720 g/m² szövet</h3>
            <p>Házilag fejlesztett PVC bevonat teljes vízállóságot, UV 8-as védelmet és 1000 N/5 cm-es szakítószilárdságot biztosít — penész- és tűzálló M1 tanúsítvánnyal.</p>
          </Reveal>

          <Reveal as="div" className="feature-card" delay={3}>
            <span className="feature-number">04</span>
            <div className="feature-icon-wrap">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3>Bérlésre kész befektetés</h3>
            <p>Aktívan támogatjuk azokat az ügyfeleket, akik saját sztreccs sátor bérlési vállalkozást indítanak — a konfiguráció tanácsadástól az üzleti modell kialakításáig.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
