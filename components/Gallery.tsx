"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { GALLERY_IMAGES } from "@/lib/products";

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const triggerIdxRef = useRef<number | null>(null);
  const prevOpenRef = useRef<number | null>(null);

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
      } else if (e.key === "Tab") {
        const container = lightboxRef.current;
        if (!container) return;
        const focusable = Array.from(
          container.querySelectorAll<HTMLButtonElement>("button")
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;
        if (e.shiftKey) {
          if (active === first || !container.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else if (active === last || !container.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIdx]);

  useEffect(() => {
    const wasOpen = prevOpenRef.current !== null;
    const isOpen = openIdx !== null;
    if (isOpen && !wasOpen) {
      closeBtnRef.current?.focus();
    } else if (!isOpen && wasOpen) {
      const t = triggerIdxRef.current;
      if (t !== null) {
        tileRefs.current[t]?.focus();
        triggerIdxRef.current = null;
      }
    }
    prevOpenRef.current = openIdx;
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
                <button
                  type="button"
                  key={img.src}
                  ref={(el) => {
                    tileRefs.current[idx] = el;
                  }}
                  className={`gallery-item reveal${delayClass}`}
                  onClick={() => {
                    triggerIdxRef.current = idx;
                    setOpenIdx(idx);
                  }}
                  aria-label={`Nagyítás: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={700}
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div
        id="lightbox"
        ref={lightboxRef}
        role="dialog"
        aria-modal="true"
        aria-label="Galéria — nagyított nézet"
        className={openIdx !== null ? "open" : ""}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenIdx(null);
        }}
      >
        <button
          id="lightbox-close"
          ref={closeBtnRef}
          aria-label="Bezárás"
          onClick={close}
        >
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
