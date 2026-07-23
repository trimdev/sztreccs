import { Reveal } from "@/components/Reveal";
import { PRODUCTS, formatPriceHUF } from "@/lib/products";

export function ComparisonTable() {
  return (
    <Reveal as="div" style={{ overflowX: "auto", marginTop: "48px" }}>
      <div className="comparison-table-wrap">
        <Reveal as="h3" className="comparison-title">
          Méret- és ár-összehasonlítás
        </Reveal>
        <table className="comparison-table">
          <caption className="sr-only">
            Sztreccs sátrak méret, befogadóképesség és ár összehasonlító táblázat
          </caption>
          <thead>
            <tr>
              <th scope="col">Méret</th>
              <th scope="col">Befogadóképesség (álló)</th>
              <th scope="col">Befogadóképesség (ülő)</th>
              <th scope="col">Felület (m²)</th>
              <th scope="col" className="price">Ár</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.size}>
                <th scope="row">{p.size}</th>
                <td>{p.capacityStanding}</td>
                <td>{p.capacitySeated}</td>
                <td>{p.area}</td>
                <td className="price">{formatPriceHUF(p.priceHUF)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="comparison-caption">
          Az árak nettó árak, + áfa. Minden méret komplett felszereléssel és 1 év garanciával. Utolsó árfrissítés: 2026-05-13.
        </p>
      </div>
    </Reveal>
  );
}
