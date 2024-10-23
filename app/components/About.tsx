import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="mx-auto my-20 flex w-full flex-col items-center justify-center gap-16 p-8">
      <div className="mx-auto mb-16 flex max-w-7xl flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:gap-28">
        <div className="mb-6 max-w-lg basis-2/4 md:mb-0">
          <h3 className="mb-12 text-center text-4xl font-semibold italic text-teal-600 md:text-left md:text-6xl">
            Kreni u avanturu!
          </h3>
          <p className="mb-4 text-center text-lg leading-relaxed md:text-left md:text-xl">
            U DriveTeam-u verujemo da svaka vožnja započinje avanturom!
          </p>
          <p className="mb-4 text-center text-lg leading-relaxed md:text-left  md:text-xl">
            Naša misija je da te osnažimo sa veštinama i samopouzdanjem
            potrebnim da osvojiš puteve.
          </p>
          <p className="mb-4 text-center text-lg leading-relaxed md:text-left md:text-xl">
            Obuka voznje nije samo za polaganje ispita, to je putovanje koje te
            vodi ka slobodi i uzbuđenju. Naši instruktori su pravi vozački
            entuzijasti koji dele strast prema vožnji. Svaka lekcija je
            prilagođena baš tebi, kako bismo osigurali da se osećaš sjajno dok
            učiš!
          </p>
          <p className="mb-4 text-center text-lg leading-relaxed md:text-left md:text-xl">
            Ponosimo se svojim modernim pristupom obuci vozača. Spajamo
            praktičnu obuku sa najnovijom tehnologijom, stvarajući iskustvo koje
            je zabavno i efikasno. Naš cilj je da tvoje vreme s nama bude
            uzbudljivo, bez stresa i sa puno osmeha.
          </p>
          <p className="text-center text-lg leading-relaxed md:text-left md:text-xl">
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
            <p className="text-sm italic text-muted-foreground">
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
    </section>
  );
};

export default About;
