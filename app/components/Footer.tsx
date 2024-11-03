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
      {/* Accessibility: Added alt text for better description */}
      <Link href="/" aria-label="DriveTeam Homepage">
        <Image
          src={Logo}
          alt="DriveTeam Logo"
          className="max-xl:w-56 md:w-36 xl:w-48"
        />
      </Link>

      {/* Accessibility: aria-label for screen readers to describe contact info */}
      <address aria-label="Contact Information" className="not-italic">
        <div className="flex flex-col items-start justify-start gap-6 lg:flex-row lg:items-center lg:justify-center">
          {/* Accessibility: Added aria-hidden to icon and aria-label for screen reader clarity */}
          <Link
            className="flex items-center gap-2"
            href="https://www.google.com/maps/place/Auto+%C5%A0kola+-+Drive+Team/@45.2416609,19.7985495,15z/data=!4m6!3m5!1s0x475b11494ca5fa35:0x2001355c5b160bf4!8m2!3d45.2416609!4d19.7985495!16s%2Fg%2F11q9gxqqxl?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure for external links
            aria-label="Find us at Bulevar Patrijarha Pavla 111, Novi Sad, 21000"
          >
            <MapPin size={24} className="text-teal-500" aria-hidden="true" />
            Bulevar Patrijarha Pavla 111, Novi Sad
          </Link>

          {/* Accessibility: aria-hidden for icon since it's decorative */}
          <p className="flex items-center gap-2" aria-label="Business hours">
            <Clock size={24} className="text-teal-500" aria-hidden="true" />
            Pon - Pet: 09:00 - 17:00
          </p>

          {/* Accessibility: aria-label for email link, aria-hidden for icon */}
          <Link
            href="mailto:as.driveteam@yahoo.com"
            className="flex items-center gap-2"
            aria-label="Send an email to as.driveteam@yahoo.com"
          >
            <Mail size={24} className="text-teal-500" aria-hidden="true" />
            as.driveteam@yahoo.com
          </Link>

          {/* Accessibility: aria-label for phone numbers, aria-hidden for icons */}
          <Link
            href="tel:0668805100"
            className="flex items-center gap-2"
            aria-label="Call us at 066 880 5100"
          >
            <Smartphone
              size={24}
              className="text-teal-500"
              aria-hidden="true"
            />
            066 880 5100
          </Link>

          <Link
            href="tel:0213824417"
            className="flex items-center gap-2"
            aria-label="Call us at 021 3824 417"
          >
            <Phone size={24} className="text-teal-500" aria-hidden="true" />
            021 3824 417
          </Link>

          {/* Accessibility: aria-label for Instagram link, opens in new tab */}
          <Link
            href="https://www.instagram.com/autoskola.driveteam"
            className="flex items-center gap-2"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure for external links
            aria-label="Visit our Instagram page"
          >
            <RxInstagramLogo
              size={24}
              className="text-teal-500"
              aria-hidden="true"
            />
            Instagram
          </Link>
        </div>
      </address>
    </footer>
  );
};

export default Footer;
