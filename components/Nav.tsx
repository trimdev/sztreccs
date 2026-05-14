"use client";

import { useEffect } from "react";

export function Nav() {
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

  return (
    <nav id="site-nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          Sztreccs<span>Sátor</span>
        </a>
        <div className="nav-links">
          <a href="#mi-az">Mi ez?</a>
          <a href="#rolunk">Rólunk</a>
          <a href="#satorak">Sátraink</a>
          <a href="#galeria">Galéria</a>
          <a href="#kapcsolat" className="nav-cta">
            Árajánlat kérése
          </a>
        </div>
      </div>
    </nav>
  );
}
