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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="DriveTeam Logo"
            className="max-xl:w-56 sm:w-24 md:w-32 lg:w-40 xl:w-48"
          />
        </Link>
        <div className="hidden sm:flex sm:items-center sm:justify-around sm:gap-2 md:gap-4 lg:gap-8">
          {navbarLinks.map((el) => (
            <Link
              scroll={true}
              key={el.href}
              href={el.href}
              className={cn(
                pathname === el.href
                  ? "text-teal-500"
                  : "text-white hover:text-teal-500"
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
