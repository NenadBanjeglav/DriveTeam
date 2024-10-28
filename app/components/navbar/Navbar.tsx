"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/public/logo.svg";
import MobileNav from "./MobileNav";
import { navbarLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MapPin, Clock, Mail, Phone, Smartphone } from "lucide-react";
import { RxInstagramLogo } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, sethidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      sethidden(true);
    } else {
      sethidden(false);
    }
  });

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full bg-teal-700 p-6 sm:px-12"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <address className="mx-auto mb-4 hidden max-w-7xl items-center justify-between text-xs text-white lg:flex">
        <div className="flex max-w-7xl items-center justify-center gap-4">
          <Link
            href="https://www.google.com/maps/place/Auto+%C5%A0kola+-+Drive+Team/@45.2416609,19.7985495,15z/data=!4m6!3m5!1s0x475b11494ca5fa35:0x2001355c5b160bf4!8m2!3d45.2416609!4d19.7985495!16s%2Fg%2F11q9gxqqxl?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
            className="flex items-center gap-2"
          >
            <MapPin size={16} className="text-teal-500" /> Bulevar patrijarha
            Pavla 111,Novi Sad 21000
          </Link>
          <p className="flex items-center gap-2">
            <Clock size={16} className="text-teal-500" /> Pon - Pet : 09.00 -
            17.00
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            className="flex items-center gap-2"
            href="mailto:as.driveteam@yahoo.com"
          >
            <Mail size={16} className="text-teal-500" />
            as.driveteam@yahoo.com
          </Link>

          <Link className="flex items-center gap-2" href="tel:0668805100">
            <Smartphone size={16} className="text-teal-500" />
            066 880 5100
          </Link>

          <Link className="flex items-center gap-2" href="tel:0213824417">
            <Phone size={16} className="text-teal-500" />
            021 3824 417
          </Link>

          <Link
            className="flex items-center gap-2"
            href="https://www.instagram.com/autoskola.driveteam"
          >
            <RxInstagramLogo size={16} className="text-teal-500" />
            Instagram
          </Link>
        </div>
      </address>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="DriveTeam Logo"
            className="max-xl:w-56 md:w-36 xl:w-48"
          />
        </Link>
        <div className="hidden sm:gap-2 md:flex md:items-center md:justify-around md:gap-4 lg:gap-8">
          {navbarLinks.map((el) => (
            <Link
              scroll={true}
              key={el.href}
              href={el.href}
              className={cn(
                pathname === el.href
                  ? "text-teal-500"
                  : "text-white hover:text-teal-500 text-sm lg:text-base md:text-sm"
              )}
            >
              {el.name}
            </Link>
          ))}
        </div>

        <MobileNav />
      </div>
    </motion.nav>
  );
};

export default Navbar;
