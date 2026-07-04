import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SpecsBand } from "@/components/SpecsBand";
import { WhatIs } from "@/components/WhatIs";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Faq } from "@/components/Faq";
import { HOME_FAQ } from "@/lib/faq";
import { buildHomeGraph } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomeGraph()) }}
      />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <SpecsBand />
        <WhatIs />
        <div className="section-separator" />
        <About />
        <div className="section-separator" />
        <Features />
        <div className="section-separator" />
        <Products />
        <section
          className="section-tight-top"
          aria-label="Méret- és ár-összehasonlítás"
          style={{ background: "#0f0d0b" }}
        >
          <div className="container-wrap">
            <ComparisonTable />
          </div>
        </section>
        <div className="section-separator" />
        <Gallery />
        <div className="section-separator" />
        <Testimonials />
        <div className="section-separator" />
        <Faq items={HOME_FAQ} />
        <div className="section-separator" />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
