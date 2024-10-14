import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Store,
  Mail,
  HandCoins,
  ShieldQuestion,
  LucideProps,
  Route,
  Clipboard,
  Book,
  CheckCircle,
  Heart,
  Car,
  ClipboardCheck,
  MapPin,
  Ambulance,
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
    name: "Zašto odabrati DriveTeam?",
    href: "#about",
    icon: Store,
  },
  {
    name: "Koraci",
    href: "#steps",
    icon: Route,
  },
  // {
  //   name: "Vozila",
  //   href: "#cars",
  //   icon: Car,
  // },
  {
    name: "Cena",
    href: "#pricing",
    icon: HandCoins,
  },
  {
    name: "Cesta Pitanja",
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
    name: "1. Registracija",
    description: "Prijavite se online ili lično.",
    href: "#registration",
    icon: Clipboard,
  },
  {
    name: "2. Teorijski časovi",
    description: "Naučite sve što vam treba za uspesnu vožnju.",
    href: "#theory-classes",
    icon: Book,
  },
  {
    name: "3. Teorijski ispit",
    description: "Pokažite svoje znanje!",
    href: "#theory-exam",
    icon: ClipboardCheck,
  },
  {
    name: "4. Medicinski pregled",
    description: "Proverite svoje zdravstveno stanje.",
    href: "#medical-pass",
    icon: Heart,
  },
  {
    name: "5. Časovi vožnje",
    description: "Učenje vožnje sa instruktorom.",
    href: "#driving-classes",
    icon: Car,
  },
  {
    name: "6. Prva pomoć",
    description: "Naučite kako da pomognete u hitnim situacijama.",
    href: "#first-aid",
    icon: Ambulance,
  },
  {
    name: "7. Ispit vožnje",
    description: "Pokažite svoje veštine na putu!",
    href: "#driving-test",
    icon: CheckCircle,
  },
  {
    name: "8. Avantura moze da pocne!",
    description: "Uživajte u vožnji i slobodi!",
    href: "#adventure",
    icon: MapPin,
  },
];
