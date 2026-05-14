"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("submitting");
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      if (res.ok && (data.success === "true" || data.success === true)) {
        setState("success");
        form.reset();
      } else throw new Error("submit failed");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3500);
    }
  }

  const buttonLabel =
    state === "submitting"
      ? "Küldés folyamatban…"
      : state === "success"
      ? "Üzenet elküldve ✓"
      : state === "error"
      ? "Hiba — próbáld újra"
      : "Ajánlatot kérek";

  const buttonStyle =
    state === "success"
      ? { background: "#68A357", color: "#f5f0e8" }
      : state === "error"
      ? { background: "#B5443A", color: "#f5f0e8" }
      : undefined;

  return (
    <section id="kapcsolat" style={{ background: "#0f0d0b" }}>
      <div className="container-wrap">
        <div className="contact-grid">
          <div>
            <Reveal as="span" className="section-eyebrow">Kapcsolat</Reveal>
            <Reveal as="h2" className="section-title" delay={1}>
              Tervezzük meg<br /><em>tökéletes sátorod</em>
            </Reveal>
            <Reveal as="p" className="section-body" delay={2} style={{ marginBottom: 48 }}>
              Mesélj az eseményedről és megtaláljuk a számodra legmegfelelőbb sztreccs sátrat. Hétfőtől péntekig 07:00–16:00 között elérhetőek vagyunk.
            </Reveal>

            <div className="contact-info">
              <Reveal as="div" className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.35 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16z" />
                  </svg>
                </div>
                <div>
                  <span className="contact-info-label">Telefon</span>
                  <span className="contact-info-value"><a href="tel:+36209711096">{SITE.phoneDisplay}</a></span>
                </div>
              </Reveal>

              <Reveal as="div" className="contact-info-item" delay={1}>
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="contact-info-label">E-mail</span>
                  <span className="contact-info-value"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></span>
                </div>
              </Reveal>

              <Reveal as="div" className="contact-info-item" delay={2}>
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="contact-info-label">Cím</span>
                  <span className="contact-info-value">{SITE.legalName}<br />{SITE.address.full}</span>
                </div>
              </Reveal>

              <Reveal as="div" className="contact-info-item" delay={3}>
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <span className="contact-info-label">Nyitvatartás</span>
                  <span className="contact-info-value">
                    {SITE.hours.days}, {SITE.hours.open}–{SITE.hours.close}<br />
                    <span style={{ color: "rgba(245,240,232,0.35)", fontSize: "0.85rem" }}>Munkaidőn kívül egyeztetés szerint</span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal as="div" delay={1}>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              action="https://formsubmit.co/ajax/info@sztreccssator.hu"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Új ajánlatkérés — SztreccsSátor weboldal" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                aria-hidden="true"
              />
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="fname">Keresztnév</label>
                  <input type="text" id="fname" name="fname" placeholder="Kovács" required />
                </div>
                <div className="form-field">
                  <label htmlFor="lname">Vezetéknév</label>
                  <input type="text" id="lname" name="lname" placeholder="János" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="email">E-mail cím</label>
                <input type="email" id="email" name="email" placeholder="kovacs@email.hu" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Telefonszám</label>
                <input type="tel" id="phone" name="phone" placeholder="+36 ..." />
              </div>
              <div className="form-field">
                <label htmlFor="tent">Sátorméret</label>
                <select id="tent" name="tent">
                  <option value="">— Válassz méretet —</option>
                  <option>5 × 5 m</option>
                  <option>5 × 7 m</option>
                  <option>7 × 7 m</option>
                  <option>6 × 10 m</option>
                  <option>7 × 10 m</option>
                  <option>8 × 10 m</option>
                  <option>10 × 10 m</option>
                  <option>10 × 12 m</option>
                  <option>10 × 15 m</option>
                  <option>Még nem tudom</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="message">Üzenet</label>
                <textarea id="message" name="message" placeholder="Mesélj az eseményedről — dátum, helyszín, vendégszám..."></textarea>
              </div>
              <button
                type="submit"
                className="btn-submit"
                disabled={state === "submitting"}
                style={buttonStyle}
              >
                {buttonLabel}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
