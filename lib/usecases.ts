import { PRODUCTS, type Product } from "./products";

export type UseCaseFaq = { q: string; a: string };

export type UseCaseBenefit = { title: string; desc: string };

export type UseCase = {
  /** URL slug under /felhasznalasi-teruletek/ */
  slug: string;
  /** Short label for nav / cards / breadcrumbs */
  nav: string;
  /** Card teaser on the hub page */
  cardText: string;
  /** SERP <title> */
  metaTitle: string;
  /** SERP meta description (~150–160 chars) */
  metaDescription: string;
  /** Page eyebrow */
  eyebrow: string;
  /** Page H1 */
  h1: string;
  /** Hero image (from /public/images) */
  image: string;
  imageAlt: string;
  /** Answer-first lead paragraph — the definition/answer in the first ~150 tokens */
  intro: string;
  /** Supporting paragraph */
  intro2: string;
  /** Use-case-specific benefits */
  benefits: UseCaseBenefit[];
  /** Recommended product ids for this use-case, in order */
  recommendedSizes: string[];
  /** One-line note under the size recommendation */
  sizeNote: string;
  /** Practical considerations / checklist */
  considerations: { title: string; body: string }[];
  /** Use-case-specific FAQ */
  faq: UseCaseFaq[];
  /** Slugs of related use-cases to cross-link */
  related: string[];
};

export const USE_CASES: readonly UseCase[] = [
  {
    slug: "eskuvo",
    nav: "Esküvői sátor",
    cardText:
      "Légies, romantikus tér a szertartáshoz és a vacsorához — bármilyen kerthez, birtokhoz vagy szabadtéri helyszínhez.",
    metaTitle: "Esküvői sátor — sztreccs sátor esküvőre | SztreccsSátor",
    metaDescription:
      "Sztreccs sátor esküvőre: romantikus, időjárásálló szabadtéri helyszín 50–120 főre. 720 g/m² PVC, M1 tűzbizonyítvány, 24 órás kiszállítás. Kérj árajánlatot!",
    eyebrow: "Felhasználás · Esküvő",
    h1: "Esküvői sztreccs sátor",
    image: "/images/Stretchtent-10x8_06-2-1024x700.jpg",
    imageAlt: "Esküvői sztreccs sátor napos réten",
    intro:
      "Az esküvői sztreccs sátor egy rugalmas, víz- és szélálló technikai anyagból kifeszített szabadtéri helyszín, amely légies, romantikus teret ad a szertartásnak, a vacsorának és a bulinak — időjárástól függetlenül. Egyedi, organikus formája miatt gyönyörűen mutat kerti, birtok- és tóparti esküvőkön, és bármilyen egyenetlen terephez alkalmazkodik.",
    intro2:
      "A nyújtható sátorvászon a magassági pontok változtatásával egyedi ívekbe feszíthető, így minden esküvő helyszíne egyedi lesz. Csatlakoztatható meglévő épülethez, teraszhoz vagy falhoz, és kombinálható több sátorral is, ha a szertartást és a vacsorát külön térben szeretnétek.",
    benefits: [
      {
        title: "Esőben és tűző napon is zavartalan nap",
        desc: "100% vízálló vászon (napi 2000 mm) és 85 km/h szélállóság — a menyasszonyi ruha és a menü biztonságban marad, akármit hoz az időjárás.",
      },
      {
        title: "Instagramra kész esztétika",
        desc: "A légies, ívelt forma önmagában dekoráció. Fényfüzérrel, élővirággal és textillel könnyen a saját stílusotokra hangolható.",
      },
      {
        title: "Bármilyen helyszínhez alkalmazkodik",
        desc: "Nem kell tökéletesen sík terület: a sztreccs sátor lejtős kertben, sziklás tóparton és a szülői ház udvarán is felállítható.",
      },
    ],
    recommendedSizes: ["7x10", "8x10", "10x12", "10x15"],
    sizeNote:
      "Ültetett vacsorához fő szabályként 1–1,5 m² vendégenként a komfortos. 60–80 fős ültetett esküvőhöz a 8×10 m, 100+ főhöz a 10×12 m vagy 10×15 m az ideális.",
    considerations: [
      {
        title: "Szertartás + vacsora egy helyszínen",
        body: "Egy nagyobb sátor tereloválható, vagy két sátor egybeépíthető, így a szertartás, a fogadás és a vacsora külön hangulatot kaphat.",
      },
      {
        title: "Oldalfalak és fűtés",
        body: "Hűvösebb estékre vagy tavaszi-őszi dátumra érdemes oldalfalakról és fűtésről gondoskodni — a sátor formája ezt támogatja.",
      },
      {
        title: "Foglalás időben",
        body: "A főszezonban (május–szeptember) a szombatok gyorsan betelnek. A saját sátor megvásárlása alternatíva, ha több eseményt is terveztek.",
      },
    ],
    faq: [
      {
        q: "Hány fős esküvőre elég egy sztreccs sátor?",
        a: "Mérettől függően 15 főtől 150+ főig. Ültetett vacsorához a 8×10 m-es sátor kb. 50, a 10×12 m-es kb. 80, a 10×15 m-es akár 120 vendéget fogad kényelmesen. Több sátor egybeépíthető nagyobb létszámhoz.",
      },
      {
        q: "Bírja az eső egy esküvői sztreccs sátor?",
        a: "Igen. A 720 g/m²-es PVC bevonatú vászon 100%-ban vízálló (napi 2000 mm vízoszlop), és 85 km/h-ig (8 Beaufort) szélálló, M1 tűzbizonyítvánnyal. A nap tervezhető marad esőben is.",
      },
      {
        q: "Bérelni vagy venni érdemes esküvőre?",
        a: "Egyszeri eseményhez a bérlés is megoldás, de ha több családi rendezvényt terveztek, a saját sátor gyorsan megtérül — és bérbe is adható. Segítünk kiválasztani a nektek megfelelő megoldást.",
      },
    ],
    related: ["kerti-parti", "ceges-rendezveny", "berbeadas"],
  },
  {
    slug: "fesztival",
    nav: "Fesztiválsátor",
    cardText:
      "Nagy fesztiválsátor színpadhoz, VIP-térhez, food courthoz és backstage-hez — több sátor egybeépítve tetszőleges alaprajzra.",
    metaTitle: "Fesztiválsátor — nagy sztreccs sátor rendezvényre | SztreccsSátor",
    metaDescription:
      "Fesztiválsátor sztreccs technológiával: színpad, VIP, food court, backstage akár 150+ főre. 85 km/h szélállóság, M1 tűzbizonyítvány, országos kiszállítás.",
    eyebrow: "Felhasználás · Fesztivál",
    h1: "Fesztiválsátor sztreccs technológiával",
    image: "/images/Stretchtent-10x12_07.jpg",
    imageAlt: "Nagy fesztiváli sztreccs sátor",
    intro:
      "A fesztiválsátor egy nagy alapterületű, gyorsan telepíthető sztreccs sátor, amely színpadot, VIP-teret, food courtot, bárt vagy backstage-et fed le egyetlen, feltűnő építményben. Az organikus, ívelt forma messziről is látványos, a moduláris rendszer pedig tetszőleges alaprajzra bővíthető — több sátor egybeépíthető akár 150+ fős területté.",
    intro2:
      "A fesztiválkörnyezet kemény: sár, szél, folyamatos terhelés. A sztreccs sátor 85 km/h-ig szélálló, teljesen vízálló, és egyenetlen, sáros talajon is stabilan feszíthető ki — nincs szükség betonozott, sík alapra. A telepítés fixen rögzített és feszített pányvás oszlopokkal, valamint víztartályos súlyozással is megoldható.",
    benefits: [
      {
        title: "Moduláris, bővíthető alaprajz",
        desc: "Több sátor egybeépíthető, így a színpad, a nézőtér és a vendéglátótér összefüggő, fedett területté kapcsolható — a helyszín adottságaihoz igazítva.",
      },
      {
        title: "Gyors fel- és leszerelés",
        desc: "A komplett készlet (oszlopok, karók, racsni, karabinerek) a dobozban érkezik. Több napos rendezvényen is stabil, a bontás pedig gyors.",
      },
      {
        title: "Bírja a tömeget és az időjárást",
        desc: "M1 tűzbizonyítvány, 1000 N/5 cm szakítószilárdság és teljes vízállóság — a látogatók és a technika végig védve vannak.",
      },
    ],
    recommendedSizes: ["10x10", "10x12", "10x15"],
    sizeNote:
      "Fesztiváli funkciókhoz a 10×10 m-től felfelé ajánljuk. Nagyobb színpadhoz vagy food courthoz több sátor egybeépítése a leggyakoribb megoldás.",
    considerations: [
      {
        title: "Talaj és rögzítés",
        body: "Füves vagy sáros talajon karós rögzítés, burkolt felületen víztartályos súlyozás használható — mindkettőt támogatja a rendszer.",
      },
      {
        title: "Tűzvédelem és engedélyek",
        body: "Az M1 tűzbizonyítvány és a NEN-EN 8020-41:2012 szabvány segít a rendezvényengedélyeztetésben. A műszaki adatokat dokumentáljuk.",
      },
      {
        title: "Több napos használat",
        body: "Állandó és több hetes telepítésre egyaránt alkalmas. Bérbeadó partnereknek külön konfigurációs tanácsadást adunk.",
      },
    ],
    faq: [
      {
        q: "Mekkora területet fed le egy fesztiválsátor?",
        a: "Egyetlen sátorral 25 m²-től 150 m²-ig. Több sátor egybeépítésével gyakorlatilag korlátlanul bővíthető a fedett terület a színpad, a food court és a VIP-zóna igényei szerint.",
      },
      {
        q: "Bírja a szelet és a többnapos terhelést?",
        a: "Igen. A sztreccs sátor 85 km/h-ig (8 Beaufort) szélálló, teljesen vízálló, és állandó telepítésre is alkalmas. Több napos vagy több hetes fesztiválon is stabil marad.",
      },
      {
        q: "Meg lehet felelni a tűzvédelmi előírásoknak?",
        a: "A vászon M1 tűzbizonyítvánnyal rendelkezik és megfelel a holland NEN-EN 8020-41:2012 szabványnak, ami az iparág legszigorúbb előírása — ez segíti a rendezvény engedélyeztetését.",
      },
    ],
    related: ["ceges-rendezveny", "berbeadas", "vendeglatas"],
  },
  {
    slug: "ceges-rendezveny",
    nav: "Céges rendezvénysátor",
    cardText:
      "Reprezentatív, márkázható tér termékbemutatóhoz, céges naphoz, konferenciához és állófogadáshoz.",
    metaTitle: "Céges rendezvénysátor — sztreccs sátor cégeknek | SztreccsSátor",
    metaDescription:
      "Céges rendezvénysátor: reprezentatív, márkázható tér termékbemutatóhoz, céges naphoz, konferenciához 50–120 főre. Prémium 720 g/m² PVC, 24 órás kiszállítás.",
    eyebrow: "Felhasználás · Céges rendezvény",
    h1: "Céges rendezvénysátor",
    image: "/images/Stretchtent-10x10_01-1024x700.jpg",
    imageAlt: "Céges rendezvényre kifeszített sztreccs sátor",
    intro:
      "A céges rendezvénysátor egy reprezentatív, prémium megjelenésű sztreccs sátor, amely termékbemutatóhoz, céges naphoz, konferenciához, csapatépítéshez vagy állófogadáshoz ad időjárásálló, márkázható teret. A letisztult, ívelt forma önmagában is igényes hátteret ad a márkának, és néhány óra alatt felállítható a cég udvarán vagy bármilyen szabadtéri helyszínen.",
    intro2:
      "A prémium 720 g/m²-es szövet és a gondos kivitel a vállalati arculathoz méltó minőséget képvisel. A sátor teljesen vízálló és 85 km/h-ig szélálló, így a rendezvény időpontja nem az időjárás függvénye — a program tervezhető, a vendégek és a technika végig védve vannak.",
    benefits: [
      {
        title: "Reprezentatív márkaélmény",
        desc: "A prémium megjelenés a cég igényességét közvetíti. A semleges, letisztult tér könnyen arculatra öltöztethető roll-upokkal, molinókkal, brandelt textillel.",
      },
      {
        title: "Tervezhető program, garantált időpont",
        desc: "Teljes időjárásállóság mellett nem kell tartaléknapot vagy fedett alternatívát fenntartani — a rendezvény a tervezett napon megtartható.",
      },
      {
        title: "Rugalmas elrendezés",
        desc: "Előadói tér, kóstoló, állófogadás vagy workshop — az egybefüggő, oszlopmentes belső tér sokféle rendezvényformát kiszolgál.",
      },
    ],
    recommendedSizes: ["7x10", "8x10", "10x10", "10x12"],
    sizeNote:
      "Állófogadáshoz kb. 1 m²/fő, ültetett konferenciához 1,5–2 m²/fő az irányadó. 80–100 fős céges eseményhez a 8×10 m vagy a 10×10 m a leggyakoribb választás.",
    considerations: [
      {
        title: "Márkázás és dekoráció",
        body: "A belső tér egybefüggő és oszlopmentes, így könnyen elrendezhető színpad, pult és kiállítói zóna. Az arculati elemek gyorsan felhelyezhetők.",
      },
      {
        title: "Céges telephely vagy külső helyszín",
        body: "Felállítható a parkolóban, az udvaron vagy bérelt zöldterületen. Burkolt felületen víztartályos súlyozással rögzíthető.",
      },
      {
        title: "Ismételt használat",
        body: "Rendszeres céges eseményeknél a saját sátor költséghatékonyabb a bérlésnél, és az arculathoz szabható.",
      },
    ],
    faq: [
      {
        q: "Alkalmas konferenciára és termékbemutatóra?",
        a: "Igen. Az egybefüggő, oszlopmentes belső tér ideális előadásokhoz, kiállításokhoz és állófogadáshoz. 50–120 fő fogadható a mérettől függően, ültetve vagy állva.",
      },
      {
        q: "Rá lehet tenni a cég logóját?",
        a: "A sátor semleges, letisztult felülete könnyen brandelhető molinóval, roll-uppal, brandelt textillel és fénytechnikával, így a tér a vállalati arculatra hangolható.",
      },
      {
        q: "Mennyi idő alatt áll fel?",
        a: "A komplett készlet a dobozban érkezik, konfigurációs diagrammal. Egy közepes sátor néhány óra alatt felállítható; a Debrecenből induló kiszállítás országosan 24 óra.",
      },
    ],
    related: ["fesztival", "vendeglatas", "eskuvo"],
  },
  {
    slug: "vendeglatas",
    nav: "Vendéglátás / terasz",
    cardText:
      "Egész szezonos, fedett terasz éttermnek, kávézónak, borászatnak — állandó telepítésre tervezve.",
    metaTitle: "Kültéri terasz sátor vendéglátásba — HoReCa | SztreccsSátor",
    metaDescription:
      "Sztreccs sátor vendéglátásba: állandó, időjárásálló kültéri terasz éttermnek, kávézónak, borászatnak. 720 g/m² PVC, UV-álló, M1 tűzbizonyítvány, 1 év garancia.",
    eyebrow: "Felhasználás · Vendéglátás",
    h1: "Kültéri terasz sátor vendéglátásba",
    image: "/images/Stretchtent-7x5_01-1-1024x700.jpg",
    imageAlt: "Vendéglátó teraszt fedő sztreccs sátor",
    intro:
      "A vendéglátásba szánt sztreccs sátor egy állandó telepítésre tervezett, időjárásálló kültéri terasz, amely éttermeknek, kávézóknak, borászatoknak és rendezvényhelyszíneknek bővíti a vendégterét — esőben és tűző napon egyaránt használható marad. A hangulatos, ívelt forma egyedi arculatot ad a helynek, és egész szezonban növeli a férőhelyek számát.",
    intro2:
      "A 720 g/m²-es, UV-álló, penész- és tűzálló (M1) vászon tartós, kültéri használatra készült, a NEN-EN 8020-41:2012 szabvány szerint. Fixen rögzíthető meglévő épülethez, teraszhoz vagy falhoz, és a súlyozott, feszített kialakítás állandó, egész éves üzemeltetést tesz lehetővé.",
    benefits: [
      {
        title: "Több vendég, hosszabb szezon",
        desc: "A fedett terasz esős és hűvös napokon is használható marad, így a férőhelyek és a bevétel egész szezonban kiszámíthatóbb.",
      },
      {
        title: "Tartós, kültéri minőség",
        desc: "UV-álló, penész- és tűzálló, teljesen vízálló szövet — állandó telepítésre tervezve, hosszú élettartammal. Egy vendégünk évek után is „mint az új” állapotot jelez.",
      },
      {
        title: "Egyedi arculat",
        desc: "Az ívelt, légies forma megkülönböztető megjelenést ad a helynek — a terasz maga lesz a hely egyik látványossága.",
      },
    ],
    recommendedSizes: ["5x5", "5x7", "7x7", "6x10"],
    sizeNote:
      "Terasz- és utcafronti bővítéshez az 5×5 m és 5×7 m a leggyakoribb; nagyobb kültéri étteremhez a 7×7 m vagy 6×10 m ajánlott. A méret a rendelkezésre álló területhez igazítható.",
    considerations: [
      {
        title: "Állandó telepítés",
        body: "Épülethez, falhoz vagy teraszhoz rögzítve, feszített oszlopokkal és súlyozással egész éves üzemre alkalmas. A pontos kialakítást a helyszín szabja meg.",
      },
      {
        title: "Oldalfalak és fűtés",
        body: "Oldalfalakkal és fűtéssel a terasz a hidegebb hónapokban is használható marad, kiterjesztve a nyitva tartást.",
      },
      {
        title: "Karbantartás",
        body: "A technikai szövet könnyen tisztítható és igénytelen. A komplett hardverkészlet és az 1 év garancia a nyugodt üzemeltetést segíti.",
      },
    ],
    faq: [
      {
        q: "Használható egész évben kültéri teraszként?",
        a: "Igen. A sátor állandó telepítésre alkalmas: UV-álló, teljesen vízálló, M1 tűzbizonyítvánnyal. Oldalfalakkal és fűtéssel a hidegebb hónapokban is üzemeltethető.",
      },
      {
        q: "Rögzíthető a meglévő épülethez?",
        a: "Igen, a sztreccs sátor csatlakoztatható meglévő épülethez, teraszhoz és falhoz, valamint feszített oszlopokkal és súlyozással is telepíthető — a helyszín adottságaihoz igazítva.",
      },
      {
        q: "Meddig tart ki?",
        a: "A 720 g/m²-es PVC bevonatú, UV- és penészálló szövet tartós kültéri használatra készült. Ügyfeleink évekig tartó, folyamatos használatról számolnak be. Minden sátorra 1 év garanciát adunk.",
      },
    ],
    related: ["kerti-parti", "ceges-rendezveny", "berbeadas"],
  },
  {
    slug: "kerti-parti",
    nav: "Kerti parti sátor",
    cardText:
      "Kompakt, könnyen kezelhető sátor születésnaphoz, évfordulóhoz, kerti összejövetelhez — bármilyen kertbe.",
    metaTitle: "Kerti parti sátor — kompakt sztreccs sátor | SztreccsSátor",
    metaDescription:
      "Kerti parti sátor: kompakt, hangulatos, időjárásálló sztreccs sátor születésnaphoz, évfordulóhoz 15–50 főre. 888 810 Ft-tól, komplett felszereléssel, 1 év garancia.",
    eyebrow: "Felhasználás · Kerti parti",
    h1: "Kerti parti sztreccs sátor",
    image: "/images/Stretchtent-5x5_09-3.jpg",
    imageAlt: "Kompakt sztreccs sátor kerti partihoz",
    intro:
      "A kerti parti sztreccs sátor egy kompakt, könnyen kezelhető szabadtéri sátor születésnapokhoz, évfordulókhoz, keresztelőhöz és baráti összejövetelekhez, amely hangulatos, fedett teret ad a saját kertben — esőben és tűző napon egyaránt. A kisebb, 5×5 és 5×7 méteres méretek gyorsan felállíthatók, és bármilyen kerthez, egyenetlen talajhoz alkalmazkodnak.",
    intro2:
      "Nem kell tökéletesen sík terület vagy nagy szabad hely: a nyújtható vászon lejtős kertben, teraszhoz csatlakoztatva és fák között is kifeszíthető. A teljes felszerelés a dobozban érkezik, konfigurációs diagrammal, így a családi rendezvény minden alkalommal gyorsan összeállítható.",
    benefits: [
      {
        title: "Kompakt és kezelhető",
        desc: "Az 5×5 és 5×7 méteres sátrak kis kertekbe is beférnek, gyorsan felállíthatók, és otthoni tárolásra is alkalmasak a hordtáskában.",
      },
      {
        title: "Bármilyen kerthez alkalmazkodik",
        desc: "Lejtős, egyenetlen talajon és teraszhoz csatlakoztatva is kifeszíthető — ott is, ahol a merev partisátrak nem állnak meg.",
      },
      {
        title: "Sokszor megtérülő beruházás",
        desc: "Egyszer megvéve minden nyáron használható, sőt a szomszédságnak, baráti körnek bérbe is adható — a sátor gyorsan visszahozza az árát.",
      },
    ],
    recommendedSizes: ["5x5", "5x7", "7x7"],
    sizeNote:
      "15–25 fős kerti összejövetelhez az 5×5 m, 30–50 fős partihoz az 5×7 m vagy 7×7 m a legjobb választás. Az 5×5 m ára 888 810 Ft-tól indul.",
    considerations: [
      {
        title: "Tárolás két rendezvény között",
        body: "A sátor a mellékelt hordtáskában kompakt méretre hajtható, így garázsban vagy tárolóban is elfér, és bármikor újra felállítható.",
      },
      {
        title: "Felállítás segédkezekkel",
        body: "A kisebb méretek néhány ember segítségével felállíthatók a konfigurációs diagram alapján — nincs szükség szakemberre.",
      },
      {
        title: "Fűtés és világítás",
        body: "Fényfüzérrel és hősugárzóval a kerti parti estébe nyúlóan, hűvösebb időben is kellemes marad.",
      },
    ],
    faq: [
      {
        q: "Mekkora kerti sátor kell 30 fős partihoz?",
        a: "30 fős kerti összejövetelhez az 5×7 m-es (35 m²) vagy a 7×7 m-es (49 m²) sátor ajánlott. Kisebb, 15–25 fős alkalomhoz az 5×5 m-es sátor is elegendő.",
      },
      {
        q: "Mennyibe kerül a legkisebb sztreccs sátor?",
        a: "A legkisebb, 5×5 méteres sztreccs sátor ára 888 810 Ft-tól indul, komplett felszereléssel (oszlopok, karók, karabinerek, hordtáska, konfigurációs diagram) és 1 év garanciával.",
      },
      {
        q: "Fel tudom állítani egyedül?",
        a: "A kisebb méretek néhány segítővel, a mellékelt konfigurációs diagram alapján felállíthatók — nem igényel szakembert. A sátor a hordtáskában könnyen szállítható és tárolható.",
      },
    ],
    related: ["eskuvo", "vendeglatas", "berbeadas"],
  },
  {
    slug: "berbeadas",
    nav: "Sátor bérbeadás",
    cardText:
      "Indíts saját sztreccs sátor bérbeadó vállalkozást — mi adjuk a prémium eszközt és a szakmai támogatást.",
    metaTitle: "Sztreccs sátor bérbeadás — indíts vállalkozást | SztreccsSátor",
    metaDescription:
      "Sztreccs sátor bérbeadó vállalkozáshoz: tartós, prémium 720 g/m² eszköz, konfigurációs és üzleti tanácsadás. Egy sátor több szezonon át termel bevételt.",
    eyebrow: "Felhasználás · Bérbeadás",
    h1: "Sztreccs sátor bérbeadás — saját vállalkozás",
    image: "/images/imgi_94_Productie_06.jpg",
    imageAlt: "Bérbeadásra gyártott sztreccs sátrak",
    intro:
      "A sztreccs sátor bérbeadás egy jól skálázható vállalkozási modell: egyetlen tartós, prémium sátor több szezonon át, eseményről eseményre termel bevételt esküvőkön, fesztiválokon és céges rendezvényeken. A magas kereslet, a látványos megjelenés és a hosszú élettartam miatt a sztreccs sátor az egyik legjobban megtérülő rendezvénytechnikai eszköz — mi pedig aktívan segítünk az induláshoz.",
    intro2:
      "A 720 g/m²-es, M1 tűzbizonyítvánnyal rendelkező szövet és a robusztus kivitel bírja a folyamatos szállítást, fel- és leszerelést. A konfiguráció kiválasztásától az üzleti modell kialakításáig végigkísérjük a bérbeadó partnereinket, hogy a beruházás minél gyorsabban megtérüljön.",
    benefits: [
      {
        title: "Több szezonon át termel",
        desc: "A tartós, kültéri minőségű eszköz évekig bérbe adható. Egy sátor akár szezononként több tucat eseményt szolgálhat ki.",
      },
      {
        title: "Magas, stabil kereslet",
        desc: "Esküvő, fesztivál, céges nap, kerti parti — a sztreccs sátor iránti kereslet széles és egész szezonban jelen van.",
      },
      {
        title: "Szakmai támogatás az induláshoz",
        desc: "A konfiguráció tanácsadástól az üzleti modell kialakításáig segítünk — nem csak eszközt, hanem tudást is adunk a vállalkozás beindításához.",
      },
    ],
    recommendedSizes: ["5x5", "8x10", "10x12"],
    sizeNote:
      "Kezdő flottához gyakran egy sokoldalú méret (pl. 8×10 m) a legjobb belépő; a kereslet növekedésével egy kisebb (5×5 m) és egy nagyobb (10×12 m) sátorral bővíthető a kínálat.",
    considerations: [
      {
        title: "Eszközválasztás és megtérülés",
        body: "Segítünk kiválasztani azt a méretet vagy flottát, amely a helyi kereslethez és a célpiachoz illik, és a leggyorsabban megtérül.",
      },
      {
        title: "Szállítás, fel- és leszerelés",
        body: "A robusztus szövet és a komplett hardverkészlet bírja az ismételt szállítást és telepítést. Konfigurációs diagramot minden sátorhoz adunk.",
      },
      {
        title: "Karbantartás és élettartam",
        body: "Az UV- és penészálló, tűzálló vászon igénytelen és tartós, így a bérbeadott eszköz sokáig prémium állapotban marad.",
      },
    ],
    faq: [
      {
        q: "Segítetek elindítani a bérbeadó vállalkozást?",
        a: "Igen. Aktívan támogatjuk a saját sztreccs sátor bérbeadó vállalkozásba kezdő ügyfeleket — a megfelelő konfiguráció kiválasztásától az üzleti modell kialakításáig.",
      },
      {
        q: "Melyik méret a legjobb bérbeadásra?",
        a: "Sokoldalúsága miatt a 8×10 m-es sátor gyakran ideális belépő. A kereslet növekedésével egy kisebb (5×5 m) és egy nagyobb (10×12 m) sátorral bővíthető a kínálat.",
      },
      {
        q: "Mennyire tartós a bérbeadott sátor?",
        a: "A 720 g/m²-es, UV- és penészálló, M1 tűzbizonyítvánnyal rendelkező szövet a folyamatos szállítást és telepítést is bírja, így az eszköz több szezonon át prémium állapotban marad.",
      },
    ],
    related: ["fesztival", "ceges-rendezveny", "eskuvo"],
  },
] as const;

export function getUseCase(slug: string): UseCase | undefined {
  return USE_CASES.find((u) => u.slug === slug);
}

export function productsByIds(ids: readonly string[]): Product[] {
  return ids
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}
