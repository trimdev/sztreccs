"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { GALLERY_IMAGES } from "@/lib/products";

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".gallery-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (openIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (openIdx === null) return;
      if (e.key === "ArrowLeft") {
        setOpenIdx((i) =>
          i === null ? i : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        );
      } else if (e.key === "ArrowRight") {
        setOpenIdx((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length));
      } else if (e.key === "Escape") {
        setOpenIdx(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIdx]);

  useEffect(() => {
    if (openIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIdx]);

  const prev = () =>
    setOpenIdx((i) =>
      i === null ? i : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  const next = () =>
    setOpenIdx((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length));
  const close = () => setOpenIdx(null);

  return (
    <>
      <section id="galeria" style={{ background: "#0f0d0b" }}>
        <div className="container-wrap">
          <Reveal as="span" className="section-eyebrow">
            Galéria
          </Reveal>
          <Reveal as="h2" className="section-title" delay={1}>
            Sztreccs sátrak<br />
            <em>a valóságban</em>
          </Reveal>

          <div className="gallery-grid">
            {GALLERY_IMAGES.map((img, idx) => {
              const delay = idx % 3;
              const delayClass = delay === 0 ? "" : ` reveal-delay-${delay}`;
              return (
                <div
                  key={img.src}
                  className={`gallery-item reveal${delayClass}`}
                  onClick={() => setOpenIdx(idx)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={700}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div
        id="lightbox"
        className={openIdx !== null ? "open" : ""}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenIdx(null);
        }}
      >
        <button id="lightbox-close" aria-label="Bezárás" onClick={close}>
          ✕
        </button>
        <button id="lightbox-prev" aria-label="Előző" onClick={prev}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="lightbox-img"
          src={openIdx !== null ? GALLERY_IMAGES[openIdx].src : ""}
          alt={openIdx !== null ? GALLERY_IMAGES[openIdx].alt : ""}
        />
        <button id="lightbox-next" aria-label="Következő" onClick={next}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </>
  );
}
