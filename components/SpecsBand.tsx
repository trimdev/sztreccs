import { Reveal } from "@/components/Reveal";

export function SpecsBand() {
  return (
    <div className="specs-band">
      <dl className="container-wrap">
        <Reveal as="div" className="spec-item">
          <dt className="spec-label">Szélállóság (8 Beaufort)</dt>
          <dd className="spec-value">
            85<span className="spec-unit"> km/h</span>
          </dd>
        </Reveal>
        <Reveal as="div" className="spec-item" delay={1}>
          <dt className="spec-label">PVC bevonatú prémium szövet</dt>
          <dd className="spec-value">
            720<span className="spec-unit"> g/m²</span>
          </dd>
        </Reveal>
        <Reveal as="div" className="spec-item" delay={2}>
          <dt className="spec-label">Vízálló (napi 2000 mm)</dt>
          <dd className="spec-value">
            100<span className="spec-unit">%</span>
          </dd>
        </Reveal>
        <Reveal as="div" className="spec-item" delay={3}>
          <dt className="spec-label">Teljes körű garancia minden sátorra</dt>
          <dd className="spec-value">
            1<span className="spec-unit"> év</span>
          </dd>
        </Reveal>
      </dl>
    </div>
  );
}
