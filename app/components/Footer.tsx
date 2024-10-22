import { MapPin, Clock, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxInstagramLogo } from "react-icons/rx";
import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";

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
          <p className="flex items-center gap-2 ">
            <MapPin size={24} /> Bulevar patrijarha Pavla 111,Novi Sad 21000
          </p>
          <p className="flex items-center gap-2 ">
            <Clock size={24} /> Pon - Pet : 09.00 - 18.00
          </p>

          <p>
            <a
              href="mailto:autoskola-dt@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail size={24} />
              autoskola-dt@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:0213824417" className="flex items-center gap-2">
              <Phone size={24} />
              021 3824 417
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/autoskola.driveteam"
              className="flex items-center gap-2"
            >
              <RxInstagramLogo size={20} />
              Instagram
            </a>
          </p>
        </div>
      </address>
      <Button className="rounded-full bg-teal-600 hover:bg-teal-500">
        PRIJAVI SE ONLINE
      </Button>
    </footer>
  );
};

export default Footer;
