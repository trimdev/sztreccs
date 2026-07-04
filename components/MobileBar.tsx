import { SITE } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="mobile-cta-bar" aria-label="Gyors elérés">
      <a href={`tel:${SITE.phone}`} className="mobile-cta-call">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.35 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16z" />
        </svg>
        Hívás
      </a>
      <a href="/#kapcsolat" className="mobile-cta-quote">
        Árajánlat kérése
      </a>
    </div>
  );
}
