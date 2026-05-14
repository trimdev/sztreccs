import { SITE } from "./site";
import { PRODUCTS, TESTIMONIALS } from "./products";

export function buildJsonLd() {
  const orgId = `${SITE.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.legalName,
        alternateName: SITE.name,
        url: `${SITE.url}/`,
        logo: `${SITE.url}/hero.webp`,
        email: SITE.email,
        telephone: SITE.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          postalCode: SITE.address.postalCode,
          addressLocality: SITE.address.city,
          addressCountry: SITE.address.country,
        },
        taxID: SITE.taxId,
        areaServed: "HU",
        sameAs: [],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          reviewCount: String(TESTIMONIALS.length),
          itemReviewed: { "@id": orgId },
        },
      },
      {
        "@type": ["LocalBusiness", "Manufacturer"],
        "@id": `${SITE.url}/#localbusiness`,
        name: SITE.legalName,
        alternateName: SITE.name,
        url: `${SITE.url}/`,
        parentOrganization: { "@id": orgId },
        email: SITE.email,
        telephone: SITE.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          postalCode: SITE.address.postalCode,
          addressLocality: SITE.address.city,
          addressCountry: SITE.address.country,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: SITE.hours.open,
            closes: SITE.hours.close,
          },
        ],
        priceRange: `${PRODUCTS[0].priceHUF}–${PRODUCTS[PRODUCTS.length - 1].priceHUF} HUF`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: `${SITE.name} — ${SITE.legalName}`,
        url: `${SITE.url}/`,
        inLanguage: "hu",
        publisher: { "@id": orgId },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE.url}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: `${SITE.url}/`,
        name: `${SITE.name} — Magyarország vezető sztreccs sátor szállítója`,
        inLanguage: "hu",
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": orgId },
        primaryImageOfPage: `${SITE.url}/hero.webp`,
        datePublished: SITE.publishedDate,
        dateModified: SITE.modifiedDate,
        breadcrumb: { "@id": `${SITE.url}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Kezdőlap",
            item: `${SITE.url}/`,
          },
        ],
      },
      ...PRODUCTS.map((p) => ({
        "@type": "Product",
        "@id": `${SITE.url}/#product-${p.id}`,
        name: `Sztreccs sátor ${p.size}`,
        description: p.description,
        brand: { "@id": orgId },
        manufacturer: { "@id": orgId },
        image: `${SITE.url}${p.image}`,
        category: "Rendezvénysátor / Stretch tent",
        material: "PVC bevonatú prémium szövet, 720 g/m²",
        offers: {
          "@type": "Offer",
          price: p.priceHUF,
          priceCurrency: "HUF",
          availability: "https://schema.org/InStock",
          url: `${SITE.url}/#satorak`,
          priceValidUntil: "2026-12-31",
          seller: { "@id": orgId },
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Max. álló kapacitás",
            value: `${p.capacityStanding} fő`,
          },
          {
            "@type": "PropertyValue",
            name: "Max. ülő kapacitás",
            value: `${p.capacitySeated} fő`,
          },
          { "@type": "PropertyValue", name: "Vízállóság", value: "2000 mm/nap" },
          { "@type": "PropertyValue", name: "Szélállóság", value: "85 km/h" },
          { "@type": "PropertyValue", name: "Tűzbizonyítvány", value: "M1" },
          { "@type": "PropertyValue", name: "Garancia", value: "1 év" },
        ],
      })),
      ...TESTIMONIALS.map((t, i) => ({
        "@type": "Review",
        "@id": `${SITE.url}/#review-${i + 1}`,
        itemReviewed: { "@id": orgId },
        author: {
          "@type": "Person",
          name: t.name,
          jobTitle: t.title,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: t.text,
      })),
    ],
  };
}
