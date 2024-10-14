import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto mt-[-150px] w-full bg-gray-50 p-8 py-[250px]"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-28">
        <div className="mb-6 max-w-lg md:mb-0">
          <h2 className="mb-12 text-center text-4xl font-bold italic text-teal-600 md:text-left">
            Zašto odabrati DriveTeam?
          </h2>
          <p className="mb-4 text-center text-sm leading-relaxed text-muted-foreground md:text-left">
            U DriveTeam-u verujemo da svaka vožnja započinje avanturom!
          </p>
          <p className="mb-4 text-center text-sm leading-relaxed text-muted-foreground md:text-left">
            Naša misija je da te osnažimo sa veštinama i samopouzdanjem
            potrebnim da osvojiš puteve.
          </p>
          <p className="mb-4 text-center text-sm leading-relaxed text-muted-foreground md:text-left">
            Obuka voznje nije samo za polaganje ispita, to je putovanje koje te
            vodi ka slobodi i uzbuđenju. Naši instruktori su pravi vozački
            entuzijasti koji dele strast prema vožnji. Svaka lekcija je
            prilagođena baš tebi, kako bismo osigurali da se osećaš sjajno dok
            učiš!
          </p>
          <p className="mb-4 text-center text-sm leading-relaxed text-muted-foreground md:text-left">
            Ponosimo se svojim modernim pristupom obuci vozača. Spajamo
            praktičnu obuku sa najnovijom tehnologijom, stvarajući iskustvo koje
            je zabavno i efikasno. Naš cilj je da tvoje vreme s nama bude
            uzbudljivo, bez stresa i sa puno osmeha.
          </p>
          <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-left">
            Pridruži nam se u DriveTeam-u i kreni na vozačku avanturu koja će ti
            promeniti život. Zajedno ćemo osvojiti puteve i uživati u svakom
            trenutku!
          </p>
          <div className="flex flex-col justify-center mt-8">
            <Image
              src="/signiture.png"
              alt="CEO signiture"
              width={200}
              height={100}
            />
            <p className="text-sm text-muted-foreground">
              Boris Gadzic - Direktor
            </p>
          </div>

          <Button className="mt-12 w-full rounded-full bg-teal-600 hover:bg-teal-500">
            Rezervisi svoje mesto
          </Button>
        </div>

        <div className=" w-full ">
          <Image
            src="/about.jpg"
            width={600}
            height={600}
            alt="Instruktor i ucenik voze auto"
            className="rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
