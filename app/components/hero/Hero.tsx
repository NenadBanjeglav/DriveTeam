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
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 mt-[100px] flex w-full flex-col items-center justify-center rounded p-8 py-12 text-center text-white shadow-lg lg:mt-[100px]">
        <Image
          src="/logo.svg"
          width={200}
          height={100}
          alt="DriveTeam Logo"
          className="mt-4"
          priority
        />
        <AnimatedHeading />
        <h1 className="text-lg italic text-muted md:text-xl">
          Spremni za putovanje koje će vam promeniti život?
        </h1>

        <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
          <Link
            href="tel:0213824417"
            className="flex gap-4 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-transform duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
            aria-label="Call 021 382 4417"
          >
            <Phone size={24} className="text-black" /> 021 382 4417
          </Link>
          <Link
            href="#contact"
            className="rounded-2xl border-2 border-black bg-teal-500 px-6 py-3 font-semibold uppercase text-black transition-transform duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
            aria-label="Sign up online"
          >
            Prijavi se online
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
