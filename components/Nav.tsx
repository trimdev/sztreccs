"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#mi-az", label: "Mi ez?" },
  { href: "/#satorak", label: "Sátraink" },
  { href: "/felhasznalasi-teruletek", label: "Felhasználás" },
  { href: "/#galeria", label: "Galéria" },
  { href: "/#gyik", label: "GYIK" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("site-nav");
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav id="site-nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          Sztreccs<span>Sátor</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="/#kapcsolat" className="nav-cta">
            Árajánlat kérése
          </a>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-box" aria-hidden="true">
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </span>
        </button>
        <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="/#kapcsolat" className="mobile-menu-cta" onClick={close}>
            Árajánlat kérése
          </a>
        </div>
      </div>
    </nav>
  );
}
