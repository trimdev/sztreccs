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

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SpecsBand />
        <WhatIs />
        <div className="section-separator" />
        <About />
        <div className="section-separator" />
        <Features />
        <div className="section-separator" />
        <Products />
        <div className="section-separator" />
        <Gallery />
        <div className="section-separator" />
        <Testimonials />
        <div className="section-separator" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
