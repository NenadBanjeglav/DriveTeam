"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";

interface Korak {
  step: number;
  title: string;
  description: string;
}

const koraci: Korak[] = [
  {
    step: 0,
    title: "Prijava i upis",
    description:
      "Ako si navršio 16 godina, tvoja avantura počinje ovde! Prikupi važeću ličnu kartu i zakorači u svet vožnje. Svaka pustolovina počinje prvim korakom – u tvom slučaju, prijavom!",
  },
  {
    step: 1,
    title: "Teorijska obuka",
    description:
      "U narednih 13 dana, naučićeš sve tajne vožnje kroz 40 časova uzbudljivih predavanja. Upoznaj se s vozilom, saobraćajnim signalima i propisima. Svaka lekcija te vodi bliže tvojoj vozačkoj licenci!",
  },
  {
    step: 2,
    title: "Teorijski ispit",
    description:
      "Pripremi se da dokažeš svoje znanje! Ispit traje 45 minuta i sadrži 41 pitanje. Osvoji najmanje 85 bodova i osiguraj sebi put do sledeće faze. Ovaj izazov je tvoj ključ za slobodu na putu!",
  },
  {
    step: 3,
    title: "Lekarski pregled",
    description:
      "Pre nego što započneš praktičnu obuku, osiguraj svoje zdravstveno stanje. Donesi lekarsko uverenje koje će ti otvoriti vrata ka vožnji. Tvoj put ka nezavisnosti zahteva zdrav um i telo!",
  },
  {
    step: 4,
    title: "Praktična obuka",
    description:
      "Sada počinje prava avantura! U 40 časova praktične obuke, vozićeš pod budnim okom instruktora. Dva časa dnevno, prilagođeni raspored, i ti za volanom. Oseti adrenalin dok stičeš veštine vožnje!",
  },
  {
    step: 5,
    title: "Prva pomoć",
    description:
      "Učeći prvu pomoć, osiguraj da si spreman za svaku situaciju. Ova obuka te priprema za nepredviđene izazove na putu. Pokaži da si odgovoran vozač pre nego što se suočiš sa praktičnim ispitom!",
  },
  {
    step: 6,
    title: "Praktični ispit",
    description:
      "Stigao si do finalnog izazova! Sa navršenih 17 godina, polažeš praktični ispit. Uključi motor, savladaj poligonske veštine i vožnju u saobraćaju. Ovaj ispit je tvoja prilika da pokažeš sve što si naučio i zakoračiš u svet slobodne vožnje!",
  },
];

const SteppedProgress = () => {
  const [stepsComplete, setStepsComplete] = useState(0);
  const numSteps = 6;

  const handleSetStep = (num: number) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return;
    }

    setStepsComplete((pv) => pv + num);
  };

  return (
    <section
      id="steps"
      className="mx-auto flex w-full flex-col items-center justify-center gap-16 p-8 md:mb-24"
      aria-labelledby="steps-heading"
    >
      <h3 className="text-center text-4xl font-semibold italic text-teal-600 md:text-left md:text-6xl">
        Kako do vozačke?
      </h3>
      <p className="text-center text-lg leading-relaxed md:text-left md:text-xl">
        Ovo su koraci koji te dele od vozačke dozvole i slobode na putu!
      </p>
      <div className="bg-gray-100">
        <div className="mx-auto w-full max-w-7xl  rounded-md bg-white p-8 shadow-lg">
          <Steps numSteps={numSteps} stepsComplete={stepsComplete} />

          <div
            className="my-6 h-fit  gap-4 rounded-lg border-2 border-dashed border-gray-200 bg-gray-100 p-4"
            aria-live="polite"
          >
            <h4 className="mb-8 text-center text-xl italic leading-relaxed text-teal-600 md:text-2xl">
              {koraci[stepsComplete].title}
            </h4>
            <p className="text-center text-lg leading-relaxed md:text-xl">
              {koraci[stepsComplete].description}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            {stepsComplete === numSteps ? (
              <div className="flex flex-col gap-4 md:flex-row">
                <Link
                  className="flex gap-4 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
                  href="tel:0213824417"
                  aria-label="Call driving school at 021 382 4417"
                >
                  <Phone size={24} className="text-black" /> 021 382 4417
                </Link>
                <Link
                  className="rounded-2xl border-2 border-black bg-teal-500 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
                  href="#contact"
                  aria-label="Register online"
                >
                  Prijavi se online
                </Link>
              </div>
            ) : (
              <>
                <button
                  className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
                  onClick={() => handleSetStep(-1)}
                  aria-label="Go to previous step"
                >
                  Nazad
                </button>
                <button
                  className="rounded-2xl border-2 border-black bg-teal-500 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
                  onClick={() => handleSetStep(1)}
                  aria-label="Go to next step"
                >
                  Dalje
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepsProps {
  numSteps: number;
  stepsComplete: number;
}

const Steps = ({ numSteps, stepsComplete }: StepsProps) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className="flex items-center justify-between gap-3">
      {stepArray.map((num) => {
        const stepNum = num + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== stepArray.length && (
              <div className="relative h-1 w-full rounded-full bg-gray-200">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-teal-600"
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

interface StepProps {
  num: number;
  isActive: boolean;
}

const Step = ({ num, isActive }: StepProps) => {
  return (
    <div
      className="relative"
      role="listitem"
      tabIndex={isActive ? 0 : -1}
      aria-current={isActive ? "step" : undefined}
      aria-label={`Step ${num} ${isActive ? "(complete)" : "(incomplete)"}`}
    >
      <div
        className={`relative z-10 flex size-4 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-300 sm:size-6 md:size-10 ${
          isActive
            ? "border-teal-600 bg-teal-600 text-white"
            : "border-gray-300 text-gray-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg
              key="icon-marker-check"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
              aria-hidden="true"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span
              key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute -inset-1.5 z-0 animate-pulse rounded-full bg-teal-100" />
      )}
    </div>
  );
};

export default SteppedProgress;
