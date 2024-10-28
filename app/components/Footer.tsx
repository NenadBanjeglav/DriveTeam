import { MapPin, Clock, Mail, Phone, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxInstagramLogo } from "react-icons/rx";
import Logo from "@/public/logo.svg";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mx-auto flex w-full flex-col items-center justify-center gap-16 bg-teal-700 p-8 py-16 text-white"
    >
      <Link href="/">
        <Image
          src={Logo}
          alt="DriveTeam Logo"
          className="max-xl:w-56 md:w-36 xl:w-48"
        />
      </Link>
      <address>
        <div className="flex flex-col items-start justify-start gap-6 lg:flex-row lg:items-center lg:justify-center">
          <Link
            className="flex items-center gap-2 "
            href="https://www.google.com/maps/place/Auto+%C5%A0kola+-+Drive+Team/@45.2416609,19.7985495,15z/data=!4m6!3m5!1s0x475b11494ca5fa35:0x2001355c5b160bf4!8m2!3d45.2416609!4d19.7985495!16s%2Fg%2F11q9gxqqxl?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
          >
            <MapPin size={24} /> Bulevar patrijarha Pavla 111,Novi Sad 21000
          </Link>

          <p className="flex items-center gap-2 ">
            <Clock size={24} /> Pon - Pet : 09.00 - 17.00
          </p>

          <Link
            href="mailto:as.driveteam@yahoo.com"
            className="flex items-center gap-2"
          >
            <Mail size={24} />
            as.driveteam@yahoo.com
          </Link>

          <Link href="tel:0668805100" className="flex items-center gap-2">
            <Smartphone size={24} />
            066 880 5100
          </Link>

          <Link href="tel:0213824417" className="flex items-center gap-2">
            <Phone size={24} />
            021 3824 417
          </Link>

          <Link
            href="https://www.instagram.com/autoskola.driveteam"
            className="flex items-center gap-2"
          >
            <RxInstagramLogo size={24} />
            Instagram
          </Link>
        </div>
      </address>
    </footer>
  );
};

export default Footer;
