import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="rolunk" style={{ background: "#0f0d0b" }}>
      <div className="container-wrap">
        <div className="about-grid">
          <Reveal as="div" className="about-img-stack">
            <Image
              className="about-img-main"
              src="/images/20250829_134613934_iOS-1024x768.jpg"
              alt="Sztreccs sátor gyártás"
              width={1024}
              height={768}
            />
            <Image
              className="about-img-accent"
              src="/images/imgi_94_Productie_06.jpg"
              alt="Szövet gyártás részlet"
              width={800}
              height={600}
            />
            <div className="about-badge">
              <span className="badge-num">20+</span>
              <span className="badge-text">
                Év szakmai<br />tapasztalat
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal as="span" className="section-eyebrow">Rólunk</Reveal>
            <Reveal as="h2" className="section-title" delay={1}>
              Magyar mesterség,<br /><em>globális minőség</em>
            </Reveal>
            <Reveal as="p" className="section-body" delay={2} style={{ marginBottom: 24 }}>
              A Ponyva Faktor Kft. több mint két évtizede foglalkozik ponyva- és sátorgyártással. Teherautó-ponyvától a világszínvonalú sztreccs sátrakig, minden projektbe ugyanolyan megszállott minőségi szemléletet viszünk.
            </Reveal>
            <Reveal as="p" className="section-body" delay={2}>
              Sztreccs sátraink megfelelnek a holland NEN-EN 8020-41:2012 szabványnak — az iparág legszigorúbb előírásának — és minden sátor teljes hardverkészlettel, telepítési útmutatóval és egyéves garanciával érkezik.
            </Reveal>
            <Reveal as="p" className="section-body" delay={2} style={{ marginTop: 16 }}>
              Debreceni telephelyünkön előre egyeztetett időpontban személyes bemutatóra is van lehetőség. <strong style={{ color: "#D4B896" }}>„A legjobb minőség a legjobb áron Magyarországon”</strong> — ez az ígéretünk.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
