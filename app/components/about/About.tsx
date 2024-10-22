import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto my-20 flex w-full flex-col items-center justify-center gap-16 p-8"
    >
      <div className="mx-auto mb-16 flex max-w-7xl flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:gap-28">
        <div className="mb-6 max-w-lg basis-2/4 md:mb-0">
          <h3 className="mb-12 text-center text-4xl font-bold italic text-teal-600 md:text-left">
            Kreni u avanturu!
          </h3>
          <p className="mb-4 text-center text-base leading-relaxed md:text-left">
            U DriveTeam-u verujemo da svaka vožnja započinje avanturom!
          </p>
          <p className="mb-4 text-center text-base leading-relaxed  md:text-left">
            Naša misija je da te osnažimo sa veštinama i samopouzdanjem
            potrebnim da osvojiš puteve.
          </p>
          <p className="mb-4 text-center text-base leading-relaxed md:text-left">
            Obuka voznje nije samo za polaganje ispita, to je putovanje koje te
            vodi ka slobodi i uzbuđenju. Naši instruktori su pravi vozački
            entuzijasti koji dele strast prema vožnji. Svaka lekcija je
            prilagođena baš tebi, kako bismo osigurali da se osećaš sjajno dok
            učiš!
          </p>
          <p className="mb-4 text-center text-base leading-relaxed md:text-left">
            Ponosimo se svojim modernim pristupom obuci vozača. Spajamo
            praktičnu obuku sa najnovijom tehnologijom, stvarajući iskustvo koje
            je zabavno i efikasno. Naš cilj je da tvoje vreme s nama bude
            uzbudljivo, bez stresa i sa puno osmeha.
          </p>
          <p className="text-center text-base leading-relaxed md:text-left">
            Pridruži nam se u DriveTeam-u i kreni na vozačku avanturu koja će ti
            promeniti život. Zajedno ćemo osvojiti puteve i uživati u svakom
            trenutku!
          </p>
          <div className="mt-8 flex basis-2/4 flex-col items-end justify-center">
            <Image
              src="/signiture.png"
              alt="CEO signiture"
              width={200}
              height={100}
              className="mr-2"
            />
            <p className="text-sm text-muted-foreground">
              Boris Gadzic - Direktor i instruktor
            </p>
          </div>
        </div>

        <div className="basis-2/4">
          <Image
            src="/ceo.jpg"
            width={600}
            height={600}
            alt="Slika direktora"
            className="rounded-full object-cover shadow-2xl"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-28">
        <div className="basis-2/4">
          <Image
            src="/about.jpg"
            width={600}
            height={600}
            alt="Zena uci da vozi"
            className="rounded-full object-cover shadow-2xl"
          />
        </div>
        <div className="mb-6 max-w-lg basis-2/4 md:mb-0">
          <h3 className="mb-12  text-center text-4xl font-bold italic text-teal-600 md:text-left">
            Zašto DriveTeam?
          </h3>
          <div className="flex flex-col items-start">
            <p className="mb-4 flex items-center justify-center gap-4 text-center text-base leading-relaxed md:text-left">
              <Check size={24} className="text-teal-500" /> Iskusni i strpljivi
              instruktori
            </p>
            <p className="mb-4 flex items-center justify-center gap-4 text-center text-base leading-relaxed md:text-left">
              <Check size={24} className="text-teal-500" /> Pristup lekcijama
              online
            </p>
            <p className="mb-4 flex items-center justify-center gap-4 text-center text-base leading-relaxed md:text-left">
              <Check size={24} className="text-teal-500" /> Obuka na modernim
              vozilima
            </p>
            <p className="mb-4 flex items-center justify-center gap-4 text-center text-base leading-relaxed md:text-left">
              <Check size={24} className="text-teal-500" /> Konkurentne cene i
              plaćanje na rate
            </p>
            <div className="mt-12 flex w-full items-center justify-start gap-4">
              <Button className="rounded-full bg-teal-600 hover:bg-teal-500">
                PRIJAVI SE ONLINE
              </Button>

              <Link
                href="tel:0213824417"
                className="flex items-center justify-center gap-2 rounded-full border border-teal-500 bg-teal-100 p-2 text-teal-500 hover:border-teal-600 hover:text-teal-600"
              >
                <Phone size={20} />
                021 3824 417
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
