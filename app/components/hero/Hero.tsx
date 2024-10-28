import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import Image from "next/image";

const HeroSection = () => {
  return (
    <header
      id="home"
      className="relative mt-[-100px] flex h-screen flex-col items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
      }}
    >
      <div className="mt-[100px] flex w-full flex-col items-center justify-center rounded bg-black/40 p-8 py-12 text-center text-white shadow-lg lg:mt-[100px]">
        <Image
          src="/logo.svg"
          width={200}
          height={100}
          alt="DriveTeam Logo"
          className="mt-4"
        />
        <AnimatedHeading />
        <p className="text-lg italic text-muted md:text-xl">
          Spremni za putovanje koje će vam promeniti život?
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 space-x-0 md:flex-row md:space-x-4">
          <Link
            className="flex gap-4 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
            href="tel:0213824417"
          >
            <Phone size={24} className="text-black" /> 021 382 4417
          </Link>
          <Link
            className="rounded-2xl border-2 border-black bg-teal-500 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
            href="#contact"
          >
            Prijavi se online
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
