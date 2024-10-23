import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Store,
  Mail,
  HandCoins,
  ShieldQuestion,
  LucideProps,
  Route,
  Book,
  CheckCircle,
  Heart,
  Car,
  ClipboardCheck,
  Ambulance,
  Star,
} from "lucide-react";

interface NavigationProps {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const navbarLinks: NavigationProps[] = [
  {
    name: "O nama",
    href: "#about",
    icon: Store,
  },
  {
    name: "Utisci",
    href: "#testimonials",
    icon: Star,
  },
  {
    name: "Kako do vozačke?",
    href: "#steps",
    icon: Route,
  },
  {
    name: "Paketi i cene",
    href: "#pricing",
    icon: HandCoins,
  },
  {
    name: "Česta Pitanja",
    href: "#faq",
    icon: ShieldQuestion,
  },
  {
    name: "Kontakt",
    href: "#contact",
    icon: Mail,
  },
];

interface StepsProps {
  name: string;
  description: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const processSteps: StepsProps[] = [
  {
    name: "Casovi Teorije",
    description: "Naučite sve što vam treba za uspesnu vožnju.",
    href: "#theory-classes",
    icon: Book,
  },
  {
    name: "Teorijski ispit",
    description: "Pokažite svoje znanje!",
    href: "#theory-exam",
    icon: ClipboardCheck,
  },
  {
    name: "Medicinski pregled",
    description: "Proverite svoje zdravstveno stanje.",
    href: "#medical-pass",
    icon: Heart,
  },
  {
    name: "Časovi vožnje",
    description: "Učenje vožnje sa instruktorom.",
    href: "#driving-classes",
    icon: Car,
  },
  {
    name: "Prva pomoć",
    description: "Naučite kako da pomognete u hitnim situacijama.",
    href: "#first-aid",
    icon: Ambulance,
  },
  {
    name: "Vozacki ispit",
    description: "Pokažite svoje veštine na putu!",
    href: "#driving-test",
    icon: CheckCircle,
  },
];

interface TestimonialsProps {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: TestimonialsProps[] = [
  {
    name: "Nikolai Razguliaev",
    title: "Učenik",
    quote:
      "Sjajna škola, moje preporuke. Posebno instruktor Vladan koji mi je pomogao da se setim kako se koristi manuelna transmisija nakon više od 10 godina. Nakon samo jednog časa povratio sam sve svoje veštine i naučio nekoliko novih stvari o efikasnijem korišćenju manuelne menjačnice. Takođe, Vladan govori dobro engleski, što je sjajno za one koji nisu vrlo vešti u srpskom. Hvala puno!",
  },
  {
    name: "Stevan Grbic",
    title: "Učenik",
    quote:
      "Auto škola sa prijateljskim profesorima i instruktorima. Prijateljski, informativni, strpljivi i veoma dobri. Tim se potrudili da se prilagodi mom teškom rasporedu, na čemu sam im veoma zahvalan. DriveTeam toplo preporučujem, i treba da ih pozovete da naučite da vozite ili čak da se podsetite ako ste imali dugu pauzu.",
  },
  {
    name: "Jovan Pekic",
    title: "Učenik",
    quote:
      "Profesionalizam, odgovornost, odličan odnos sa kandidatima. Sve pohvale za predavača. Preporučeno svima!",
  },
  {
    name: "Matrix Novi Sad",
    title: "Učenik",
    quote:
      "Auto škola koja nadmašuje sva očekivanja! Profesionalni predavač pruža temeljno razumevanje saobraćajnih pravila, čineći teoriju jednostavnom i zanimljivom. Instruktor Boris definiše izvrsnost! Profesionalan, strpljiv i sa izuzetnim motivacionim pristupom. Njegovo bogato iskustvo čini svaku vožnju obrazovnom i uzbudljivom avanturom. Toplo preporučujem ovog instruktora svima koji žele ne samo da nauče da voze, već i da uživaju u procesu sa stručnjakom koji pruža podršku i samopouzdanje na putu do vozačke veštine. Ovo je mesto gde ne samo da učite, već i razvijate ljubav prema vožnji.",
  },
  {
    name: "Zorica Bojovic",
    title: "Bivši učenik",
    quote:
      "Polagala sam pre dugo vremena, i dugo nisam vozila! Nakon nekoliko dodatnih časova, ponovo sam vozač! Sve najbolje!!!",
  },
  {
    name: "Dario",
    title: "Učenik",
    quote:
      "Definitivno najbolja auto škola u gradu, i verujem i u seriji, nisam sreo tako pozitivne i profesionalne ljude u jako dugo vremena. Od predavača koji se trude da sve objasne koliko god je moguće i uspešno to rade, do instruktora koji imaju toliko strpljenja i znanja da podučavaju sve. Od prvog časa sa instruktorom, atmosfera je bila opuštena i to je puno pomoglo da se opustim za volanom u tako prenatrpanom gradu gde svi žure. Svaki rok je ispoštovan, svaki čas je vožen od početka do kraja bez minuta kašnjenja ili skraćivanja.",
  },
  {
    name: "Una Egelja",
    title: "Učenik",
    quote:
      "Ljudi koji će vam samo izmamiti osmeh na lice. Obuka prolazi, a niste ni osetili, s obzirom na energiju koju ovaj tim emituje. Ogromna posvećenost, razumevanje, strpljenje i želja za radom ovih divnih ljudi su upravo ono što će vam pomoći da kročite u saobraćaj puni samopouzdanja bez ikakvog napora ili straha. Milijana Perišić, predavač teorije, devojka je puna pozitivne energije, sa kojom časovi teorije prolaze kao šala. Komunikacija s njom i dogovor su veoma laki, a ona nesebično deli svoje znanje i van časova. Boris Gadžić, instruktor vožnje, uvek opušten i nasmejan. Redovno ispunjava svoj glavni cilj, da vodi kandidate na pravom putu i pokaže im odgovornost i svest o saobraćaju. Spreman da se sastane i koordinira, dogovara datume časova i posvećuje se svakom kandidatu pojedinačno.",
  },
  {
    name: "Marijana Marković",
    title: "Učenik",
    quote:
      "Sve preporuke za Drive Team. 🍀 Divni ljudi, stručnjaci, uvek spremni da pomognu. Imam samo reči hvale. Od Milijane, koja je divan predavač i koja se trudi da prenese znanje, do instruktora Borisa, koji je pun razumevanja i strpljenja, posvećen i profesionalan. Sve najbolje. Preporučujem onima koji se boje vožnje i saobraćaja, kao što sam bila ja, ali i onima koji žele da ovo iskustvo prođe brzo i bez mnogo stresa. 🌻",
  },
  {
    name: "Nikola Zinic",
    title: "Podrška",
    quote:
      "Mlad, ali izuzetno posvećen tim odgovornih ljudi koje treba podržati na svaki način! I ako sam aktivni vozač već dugo vremena, upoznat sam sa njihovim aktivnostima, posvećenošću i marljivošću, tako da njihova auto škola raste iz dana u dan. Napred i sve pohvale momcima!",
  },
  {
    name: "Dajana Kult",
    title: "Učenik",
    quote:
      "Sve preporuke za Drive Team auto školu, prvi utisak pri upisu bio je pozitivan. Dočekala me je Milijana, veoma ljubazna sa svim potrebnim informacijama. Želim da joj se zahvalim na njenom znanju i časovima koji su bili veoma zanimljivi. Takođe, želim posebno da se zahvalim instruktoru Borisu, kojeg bih uvek rado preporučila. Oduševljena sam časovima vožnje, a on me je naučio da vozim sigurno i bez straha!",
  },
  {
    name: "Stefan Vila",
    title: "Učenik",
    quote:
      "Najbolja auto škola sa najboljim profesionalnim osobljem. Brzo i lako dobijate dozvolu na zanimljiv i kreativan način uz teoriju sa Milijanom i časove vožnje sa instruktorom Borisom. Posvećeni svom poslu, uvek su tu da odgovore na sva pitanja i pomognu da što lakše savladate obuku. Čestitke celom timu Drive Team auto škole.",
  },
];
