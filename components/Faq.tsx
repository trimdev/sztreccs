import { Reveal } from "@/components/Reveal";
import type { FaqItem } from "@/lib/faq";

type FaqProps = {
  items: readonly FaqItem[];
  eyebrow?: string;
  title?: React.ReactNode;
  /** When true, renders without the outer <section> wrapper (for use inside another section). */
  bare?: boolean;
  id?: string;
};

export function Faq({
  items,
  eyebrow = "GYIK",
  title,
  bare = false,
  id = "gyik",
}: FaqProps) {
  const inner = (
    <div className="container-wrap">
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <Reveal as="span" className="section-eyebrow">
          {eyebrow}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={1} style={{ margin: "0 auto" }}>
          {title ?? (
            <>
              Gyakran ismételt<br />
              <em>kérdések</em>
            </>
          )}
        </Reveal>
      </div>

      <div className="faq-list">
        {items.map((item, idx) => (
          <Reveal
            key={item.q}
            as="details"
            className="faq-item"
            delay={(idx % 3) as 0 | 1 | 2}
          >
            <summary className="faq-question">
              <span>{item.q}</span>
              <svg
                className="faq-chevron"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );

  if (bare) return inner;

  return (
    <section id={id} style={{ background: "#0f0d0b" }}>
      {inner}
    </section>
  );
}
