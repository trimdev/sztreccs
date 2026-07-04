export type Product = {
  id: string;
  size: string;
  width: number;
  depth: number;
  area: number;
  capacityStanding: string;
  capacitySeated: string;
  priceHUF: number;
  image: string;
  imageAlt: string;
  description: string;
  popular?: boolean;
};

export const PRODUCTS: readonly Product[] = [
  {
    id: "5x5",
    size: "5 × 5 m",
    width: 5,
    depth: 5,
    area: 25,
    capacityStanding: "25",
    capacitySeated: "15",
    priceHUF: 888810,
    image: "/images/StretchtentFactory5x5_01-1.jpg",
    imageAlt: "5×5 Sztreccs Sátor",
    description:
      "Kompakt 5×5 méteres sztreccs sátor kisebb rendezvényekre, maximum 25 fő állva vagy 15 fő ülve.",
  },
  {
    id: "5x7",
    size: "5 × 7 m",
    width: 5,
    depth: 7,
    area: 35,
    capacityStanding: "50",
    capacitySeated: "50",
    priceHUF: 1198860,
    image: "/images/Stretchtent-7x5_01-1-1024x700.jpg",
    imageAlt: "5×7 Sztreccs Sátor",
    description:
      "Sokoldalú 5×7 méteres sztreccs sátor közepes méretű eseményekre, maximum 50 fő állva vagy 50 fő ülve.",
  },
  {
    id: "7x7",
    size: "7 × 7 m",
    width: 7,
    depth: 7,
    area: 49,
    capacityStanding: "50",
    capacitySeated: "30",
    priceHUF: 1349338,
    image: "/images/Stretchtent-7x7_01-1-1024x700.jpg",
    imageAlt: "7×7 Sztreccs Sátor",
    description:
      "Praktikus 7×7 méteres sztreccs sátor családi és céges rendezvényekre, maximum 50 fő állva vagy 30 fő ülve.",
  },
  {
    id: "6x10",
    size: "6 × 10 m",
    width: 6,
    depth: 10,
    area: 60,
    capacityStanding: "60",
    capacitySeated: "40",
    priceHUF: 1736280,
    image: "/images/Stretchtent-10x6_01-1-1024x700.jpg",
    imageAlt: "6×10 Sztreccs Sátor",
    description:
      "Tágas 6×10 méteres sztreccs sátor nagyobb rendezvényekre, maximum 60 fő állva vagy 40 fő ülve.",
  },
  {
    id: "7x10",
    size: "7 × 10 m",
    width: 7,
    depth: 10,
    area: 70,
    capacityStanding: "70",
    capacitySeated: "50",
    priceHUF: 2025660,
    image: "/images/Stretchtent-10x7-7-1-1024x700.jpg",
    imageAlt: "7×10 Sztreccs Sátor",
    description:
      "Sokoldalú 7×10 méteres sztreccs sátor esküvőkre és céges eseményekre, maximum 70 fő állva vagy 50 fő ülve.",
  },
  {
    id: "8x10",
    size: "8 × 10 m",
    width: 8,
    depth: 10,
    area: 80,
    capacityStanding: "80",
    capacitySeated: "50",
    priceHUF: 2170350,
    image: "/images/Stretchtent-10x8_01-2-1024x700.jpg",
    imageAlt: "8×10 Sztreccs Sátor",
    description:
      "Reprezentatív 8×10 méteres sztreccs sátor közepes és nagy rendezvényekre, maximum 80 fő állva vagy 50 fő ülve.",
    popular: true,
  },
  {
    id: "10x10",
    size: "10 × 10 m",
    width: 10,
    depth: 10,
    area: 100,
    capacityStanding: "100",
    capacitySeated: "65",
    priceHUF: 2397720,
    image: "/images/Stretchtent-10x10_01-1024x700.jpg",
    imageAlt: "10×10 Sztreccs Sátor",
    description:
      "Impozáns 10×10 méteres sztreccs sátor nagyobb rendezvényekre, maximum 100 fő állva vagy 65 fő ülve.",
  },
  {
    id: "10x12",
    size: "10 × 12 m",
    width: 10,
    depth: 12,
    area: 120,
    capacityStanding: "120",
    capacitySeated: "80",
    priceHUF: 2769780,
    image: "/images/Stretchtent-10x12_01-1-1024x700.jpg",
    imageAlt: "10×12 Sztreccs Sátor",
    description:
      "Nagyméretű 10×12 méteres sztreccs sátor esküvőkre és fesztiválokra, maximum 120 fő állva vagy 80 fő ülve.",
  },
  {
    id: "10x15",
    size: "10 × 15 m",
    width: 10,
    depth: 15,
    area: 150,
    capacityStanding: "150+",
    capacitySeated: "120",
    priceHUF: 3699930,
    image: "/images/Stretchtent-10x12_07.jpg",
    imageAlt: "10×15 Sztreccs Sátor",
    description:
      "Legnagyobb 10×15 méteres sztreccs sátor kiemelt rendezvényekre, maximum 150 fő állva vagy 120 fő ülve.",
  },
] as const;

export function formatPriceHUF(price: number): string {
  return new Intl.NumberFormat("hu-HU").format(price) + " Ft";
}

export function formatPriceHUFPlain(price: number): string {
  return new Intl.NumberFormat("hu-HU").format(price);
}

export const TESTIMONIALS = [
  {
    initials: "KB",
    name: "Kovács Bence",
    title: "Ügyvezető asszisztens",
    text: "„Elképesztő volt a tapasztalatunk! Sztreccs sátraik a legjobb minőségűek, elegánsan néztek ki és tökéletesen megfeleltek rendezvényünknek. A szállítástól a felállításig minden zökkenőmentesen és professzionálisan zajlott.”",
  },
  {
    initials: "TE",
    name: "Tóth Eszter",
    title: "Elnök, N. Medical Partners",
    text: "„Mindent időben szállítottak és gondosan összeszereltek. A robusztus és elegáns sztreccs sátoroknak köszönhetően változékony időjárásban is zavartalanul megrendezhettük eseményünket. Profi partner, aki valóban velünk gondolkodik.”",
  },
  {
    initials: "HP",
    name: "Horváth Péter",
    title: "Vezérigazgató",
    text: "„Néhány éve vettük a sztreccs sátrat és még mindig teljesen elégedettek vagyunk! A sátor prémium minőségű, nagyon robusztus — évnyi kültéri használat után is úgy áll, mint az új. Messze felülmúlta elvárásainkat.”",
  },
  {
    initials: "NR",
    name: "Nagy Réka",
    title: "Ügyvezető, Nagyerdő Events Kft. — Debrecen",
    text: "„A debreceni Nagyerdőben rendezett céges nyári fesztiválunkra béreltünk tőlük egy 10×15-ös sztreccs sátrat. Az árajánlattól a felállításig érződött a profizmus — a sátor gyönyörűen keretezte a rendezvényteret, és a hirtelen jött nyári zápor sem tudott megzavarni minket. Legközelebb is náluk kopogtatunk.”",
  },
  {
    initials: "SG",
    name: "Szabó Gergő",
    title: "Tulajdonos, Aranyszandál Rendezvénybirtok — Hajdúszoboszló",
    text: "„Esküvői helyszínként hetente több rendezvényt bonyolítunk, ezért fontos volt egy strapabíró, mégis elegáns megoldás. A sztreccs sátruk pontosan ezt hozza: a párok rendre megjegyzik, milyen légies, különleges hangulatot teremt. Egy teljes szezon után is makulátlan.”",
  },
  {
    initials: "VA",
    name: "Varga Anikó",
    title: "Üzletvezető, Puszta Vendéglátó Kft. — Balmazújváros",
    text: "„A hortobágyi pusztán a szél sosem kíméli az embert, mi mégis nyugodtan terítünk a sztreccs sátor alatt. A legszelesebb napokon is stabilan áll, a vendégeink pedig imádják, hogy közben nyitott, természetközeli maradt a tér. Kiváló befektetés volt.”",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/Stretchtent-10x8_06-2-1024x700.jpg", alt: "10×8 sztreccs sátor" },
  { src: "/images/Stretchtent-10x8_01-2-1024x700.jpg", alt: "10×8 sztreccs sátor réten" },
  { src: "/images/Stretchtent-5x5_12-3.jpg", alt: "5×5 kompakt sztreccs sátor" },
  { src: "/images/Stretchtent-10x7-1.jpg", alt: "7×10 sztreccs sátor" },
  { src: "/images/Stretchtent-5x5_09-3.jpg", alt: "5×5 sztreccs sátor kültéren" },
  { src: "/images/imgi_110_Stretchtent-5x5_03.jpg", alt: "Sztreccs sátor telepítés" },
  { src: "/images/Stretchtent-10x10_01-1024x700.jpg", alt: "10×10 sztreccs sátor" },
  { src: "/images/Stretchtent-10x12_01-1-1024x700.jpg", alt: "10×12 sztreccs sátor" },
  { src: "/images/Stretchtent-10x12_07.jpg", alt: "Nagy sztreccs sátor" },
  { src: "/images/StretchtentFactory5x5_01-1.jpg", alt: "5×5 sztreccs sátor" },
  { src: "/images/Stretchtent-7x7_01-1-1024x700.jpg", alt: "7×7 sztreccs sátor" },
  { src: "/images/20250829_134613934_iOS-1024x768.jpg", alt: "Gyártás" },
] as const;
