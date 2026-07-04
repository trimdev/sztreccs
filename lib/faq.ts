export type FaqItem = { q: string; a: string };

/**
 * Homepage GYIK — visibly rendered on the site AND emitted as FAQPage JSON-LD.
 * Answers are kept factual and consistent with lib/site.ts and lib/products.ts.
 */
export const HOME_FAQ: readonly FaqItem[] = [
  {
    q: "Mi az a sztreccs sátor?",
    a: "A sztreccs sátor (más néven afrikai sátor) egy rugalmas, víz- és szélálló technikai anyagból készült modern rendezvénysátor, amely egyedi, organikus formákban feszíthető ki. A nyújtható vászon egyenetlen terephez is alkalmazkodik, és csatlakoztatható meglévő épületekhez, falakhoz is.",
  },
  {
    q: "Mennyibe kerül egy sztreccs sátor?",
    a: "Áraink 9 méretben 888 810 Ft-tól indulnak (5×5 m), a legnagyobb, 10×15 méteres sátor 3 699 930 Ft. Minden ár tartalmazza az ÁFÁ-t és a komplett felszerelést. A pontos árakat a méret-összehasonlító táblázatban találod.",
  },
  {
    q: "Hová és milyen gyorsan szállítotok?",
    a: "Debrecenből Magyarország egész területére szállítunk, jellemzően 24 órán belül. Előre egyeztetett időpontban debreceni telephelyünkön személyes bemutatóra is van lehetőség.",
  },
  {
    q: "Milyen időjárást bír a sztreccs sátor?",
    a: "A 720 g/m²-es PVC bevonatú prémium szövet 100%-ban vízálló (napi 2000 mm vízoszlop) és 85 km/h-ig (8 Beaufort) szélálló, UV-álló és M1 tűzbizonyítvánnyal rendelkezik — így az esemény minden körülmény között zavartalanul megtartható.",
  },
  {
    q: "Milyen szabványnak és tűzvédelmi előírásnak felel meg?",
    a: "Sátraink megfelelnek a holland NEN-EN 8020-41:2012 szabványnak — az iparág legszigorúbb előírásának — és M1 tűzbizonyítvánnyal rendelkeznek, ami segíti a rendezvények engedélyeztetését.",
  },
  {
    q: "Mi van a csomagban?",
    a: "Minden sátor komplett felszereléssel érkezik: oszlopkészlet, középső rúd, 100 cm-es karó, M12 karabiner és szemcsavar, kötélracsni, hordtáska és konfigurációs diagram — plusz 1 év teljes garancia. Nincsenek rejtett pótrendelések.",
  },
  {
    q: "Mekkora sátor kell a rendezvényemhez?",
    a: "Álló fogadáshoz kb. 1 m²/fő, ültetett vacsorához 1,5 m²/fő az irányadó. 25 főig az 5×5 m, 50 főig az 5×7–7×7 m, 80–100 főig a 8×10–10×10 m, 120–150+ főig a 10×12–10×15 m ajánlott. Kérésre segítünk kiválasztani a megfelelő méretet.",
  },
  {
    q: "Megvásárolható vagy csak bérelhető a sztreccs sátor?",
    a: "Sátraink megvásárolhatók (lásd az árakat), és aktívan támogatjuk azokat az ügyfeleket is, akik saját sztreccs sátor bérbeadó vállalkozást indítanak — a konfiguráció tanácsadástól az üzleti modell kialakításáig.",
  },
];
