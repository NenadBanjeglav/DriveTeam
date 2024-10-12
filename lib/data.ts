import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Store,
  Car,
  Mail,
  Gem,
  HandCoins,
  ShieldQuestion,
  LucideProps,
} from "lucide-react"; // Import the icons you want to use

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
    href: "/about",
    icon: Store,
  },
  {
    name: "Usluge",
    href: "/services",
    icon: Gem,
  },
  {
    name: "Vozila",
    href: "/cars",
    icon: Car,
  },
  {
    name: "Cena",
    href: "/pricing",
    icon: HandCoins,
  },
  {
    name: "Cesta Pitanja",
    href: "/faq",
    icon: ShieldQuestion,
  },
  {
    name: "Kontakt",
    href: "/contact",
    icon: Mail,
  },
];
