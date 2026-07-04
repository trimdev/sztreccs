import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/products";

export function Testimonials() {
  return (
    <section style={{ background: "#0f0d0b" }}>
      <div className="container-wrap">
        <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 0" }}>
          <Reveal as="span" className="section-eyebrow">Vélemények</Reveal>
          <Reveal as="h2" className="section-title" delay={1} style={{ margin: "0 auto" }}>
            Rendezvényszervezők<br /><em>bíznak bennünk</em>
          </Reveal>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal
              key={t.name}
              as="article"
              className="testimonial-card"
              delay={idx as 0 | 1 | 2}
            >
              <span className="stars" role="img" aria-label="5 / 5 csillag">★★★★★</span>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <h3 className="testimonial-name">{t.name}</h3>
                  <span className="testimonial-title">{t.title}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
