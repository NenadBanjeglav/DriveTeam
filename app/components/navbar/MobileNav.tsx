import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import MobileNavContent from "./MobileNavContent";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/hamburger.svg"
          alt="Menu"
          height={36}
          width={36}
          className="dark:invert sm:hidden"
        />
      </SheetTrigger>
      <SheetContent className="border-none bg-teal-700" side="left">
        <Link href="/">
          <Image src={Logo} alt="DriveTeam Logo" className="w-48" />
        </Link>
        <div>
          <SheetClose asChild>
            <MobileNavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
