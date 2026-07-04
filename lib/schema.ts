import { SITE } from "./site";
import { PRODUCTS, TESTIMONIALS } from "./products";
import { USE_CASES, type UseCase } from "./usecases";
import { HOME_FAQ, type FaqItem } from "./faq";

const orgId = `${SITE.url}/#organization`;
const localBusinessId = `${SITE.url}/#localbusiness`;
const websiteId = `${SITE.url}/#website`;
const hubUrl = `${SITE.url}/felhasznalasi-teruletek`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  postalCode: SITE.address.postalCode,
  addressLocality: SITE.address.city,
  addressCountry: SITE.address.country,
} as const;

function faqPageNode(id: string, url: string, items: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": id,
    url,
    inLanguage: "hu",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function breadcrumbNode(
  id: string,
  crumbs: { name: string; item: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}

/**
 * Site-wide identity graph — rendered in the root layout on EVERY page.
 * Note: aggregateRating and the individual Review nodes live in the homepage
 * graph (buildHomeGraph), where the testimonials are actually visible.
 */
export function buildSiteGraph() {
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
        address: postalAddress,
        taxID: SITE.taxId,
        areaServed: "HU",
        sameAs: [],
      },
      {
        "@type": ["LocalBusiness", "Manufacturer"],
        "@id": localBusinessId,
        name: SITE.legalName,
        alternateName: SITE.name,
        url: `${SITE.url}/`,
        parentOrganization: { "@id": orgId },
        email: SITE.email,
        telephone: SITE.phone,
        address: postalAddress,
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
        "@id": websiteId,
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
    ],
  };
}

/** Homepage-only graph: WebPage, breadcrumb, rating+reviews, products, FAQ. */
export function buildHomeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: `${SITE.url}/`,
        name: `${SITE.name} — Magyarország vezető sztreccs sátor szállítója`,
        inLanguage: "hu",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        primaryImageOfPage: `${SITE.url}/hero.webp`,
        datePublished: SITE.publishedDate,
        dateModified: SITE.modifiedDate,
        breadcrumb: { "@id": `${SITE.url}/#breadcrumb` },
      },
      breadcrumbNode(`${SITE.url}/#breadcrumb`, [
        { name: "Kezdőlap", item: `${SITE.url}/` },
      ]),
      // Partial Organization node — merges with the site-graph node by @id on
      // this page, attaching the rating where the reviews are actually shown.
      {
        "@type": "Organization",
        "@id": orgId,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          reviewCount: String(TESTIMONIALS.length),
          itemReviewed: { "@id": orgId },
        },
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
      faqPageNode(`${SITE.url}/#faq`, `${SITE.url}/`, HOME_FAQ),
    ],
  };
}

/** Use-case hub page graph: CollectionPage + breadcrumb + ItemList. */
export function buildHubGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${hubUrl}#webpage`,
        url: hubUrl,
        name: "Sztreccs sátor felhasználási területek",
        inLanguage: "hu",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        dateModified: SITE.modifiedDate,
        breadcrumb: { "@id": `${hubUrl}#breadcrumb` },
      },
      breadcrumbNode(`${hubUrl}#breadcrumb`, [
        { name: "Kezdőlap", item: `${SITE.url}/` },
        { name: "Felhasználási területek", item: hubUrl },
      ]),
      {
        "@type": "ItemList",
        "@id": `${hubUrl}#itemlist`,
        itemListElement: USE_CASES.map((u, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: u.nav,
          url: `${hubUrl}/${u.slug}`,
        })),
      },
    ],
  };
}

/** Individual use-case page graph: WebPage + breadcrumb + FAQPage. */
export function buildUseCaseGraph(uc: UseCase) {
  const pageUrl = `${hubUrl}/${uc.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: uc.metaTitle,
        description: uc.metaDescription,
        inLanguage: "hu",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        primaryImageOfPage: `${SITE.url}${uc.image}`,
        dateModified: SITE.modifiedDate,
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      breadcrumbNode(`${pageUrl}#breadcrumb`, [
        { name: "Kezdőlap", item: `${SITE.url}/` },
        { name: "Felhasználási területek", item: hubUrl },
        { name: uc.nav, item: pageUrl },
      ]),
      faqPageNode(`${pageUrl}#faq`, pageUrl, uc.faq),
    ],
  };
}
