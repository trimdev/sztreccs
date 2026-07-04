import { SITE } from "@/lib/site";

const HU_MONTHS = [
  "január", "február", "március", "április", "május", "június",
  "július", "augusztus", "szeptember", "október", "november", "december",
];

function formatHungarianDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}. ${HU_MONTHS[m - 1]} ${d}.`;
}

export function Footer() {
  const modified = SITE.modifiedDate;
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          Sztreccs<span>Sátor</span>
        </div>
        <p className="footer-copy">
          © 2026 {SITE.legalName} · {SITE.address.full} · Adószám: {SITE.taxId}
        </p>
        <div className="footer-contact">
          <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
        <p className="footer-copy" style={{ margin: "0 0 8px" }}>
          Magyar szívvel, mesterien készítve
        </p>
        <p
          className="footer-copy"
          style={{ margin: 0, fontSize: "0.75rem", color: "rgba(245,240,232,0.55)" }}
        >
          Utoljára frissítve: <time dateTime={modified}>{formatHungarianDate(modified)}</time> · Az árak és műszaki adatok a fenti dátumon ellenőrizve.
        </p>
      </div>
    </footer>
  );
}
