import Image from "next/image";

export function Hero() {
  return (
    <section className="site-hero">
      <Image
        className="hero-bg"
        src="/hero.webp"
        alt="Sztreccs sátor napos réten"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-eyebrow">
          Magyarország vezető sztreccs sátor szállítója
        </span>
        <h1 className="hero-title">
          Formáld meg<br /><em>tökéletes eseményed</em>
        </h1>
        <p className="hero-sub">
          Prémium sztreccs sátrak — intim kerti partiktól nagyszabású fesztiválokig
        </p>
        <div className="hero-actions">
          <a href="#satorak" className="hero-btn-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Sátrainkat nézem
          </a>
          <a href="#mi-az" className="hero-btn-secondary">
            Mi az a sztreccs sátor?
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Görgess</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
