"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiXSquare } from "react-icons/fi";

export const Pricing = () => {
  const [selected, setSelected] = useState(1);
  return (
    <section id="pricing" className="bg-gray-100 ">
      <section className="mx-auto max-w-7xl px-2 py-24 md:px-4">
        <h2 className="mx-auto mb-4 max-w-2xl text-center text-4xl font-bold italic leading-[1.15] text-teal-600 md:text-6xl md:leading-[1.15]">
          Paketi i Cene
        </h2>
        <p className="text-center text-lg leading-relaxed md:text-xl">
          Ovdje možete pronaći sve informacije o našim uslugama i cenama. Ako
          već imate vozačku dozvolu za AM/A1, A2/A ili F, odabirom ćete
          prilagoditi cenu paketa vašim potrebama.
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-8 py-12 lg:grid-cols-4">
          {TAB_DATA.map((t) => (
            <ToggleButton
              key={t.id}
              id={t.id}
              selected={selected}
              setSelected={setSelected}
            >
              {t.title}
            </ToggleButton>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          <PriceColumn
            title="Individualni Čas Teorije"
            price="1200 rsd"
            items={[
              {
                children: "Potpuno Prilagođen za Tebe",
                checked: true,
              },
              {
                children: "Dublje Razumevanje",
                checked: true,
              },
              {
                children: "Fokus na Slabe Tačke",
                checked: true,
              },
              {
                children: "Intenzivna Interakcija sa Instruktorom",
                checked: true,
              },
              {
                children: "Fleksibilni Termini",
                checked: true,
              },
            ]}
          />
          <PriceColumn
            title="Teorija i Praksa - Ceo Paket"
            price={
              selected === 1
                ? "90000 rsd"
                : selected === 2
                ? "71650 rsd"
                : selected === 3
                ? "63650 rsd"
                : "47650 rsd"
            }
            // "Sveobuhvatan kurs sa 40 časova teorije i 40 časova vožnje."
            statement={
              selected === 1
                ? "Sveobuhvatan kurs sa 40 časova teorije i 40 časova vožnje."
                : selected === 2
                ? "Sveobuhvatan kurs sa 7 časova teorije i 35 časova vožnje."
                : selected === 3
                ? "Sveobuhvatan kurs sa 7 časova teorije i 30 časova vožnje."
                : "Sveobuhvatan kurs sa 7 časova teorije i 20 časova vožnje."
            }
            highlight
            items={[
              {
                children: "Naučite znakove i propise!",
                checked: true,
              },
              {
                children: "Savladajte veštinu vožnje!",
                checked: true,
              },
              {
                children: "Razumite važnost bezbednosti!",
                checked: true,
              },
              {
                children: "Prilagodite raspored vašim potrebama!",
                checked: true,
              },
              {
                children: "Oslobodite se i započnite avanturu!",
                checked: true,
              },
            ]}
          />

          <PriceColumn
            title="Kondiciona Vožnja"
            price="3200 rsd"
            items={[
              {
                children: "Personalizovani Plan",
                checked: true,
              },
              {
                children: "Fokus na Slabe Tacke",
                checked: true,
              },
              {
                children: "Fleksibilni Termini",
                checked: true,
              },
              {
                children: "Rad sa Iskusnim Instruktorom",
                checked: true,
              },
              {
                children: "Praktični Saveti",
                checked: true,
              },
            ]}
          />
        </div>
      </section>
    </section>
  );
};

interface PriceColumnProps {
  highlight?: boolean;
  title: string;
  price: string;
  statement?: string;
  items: { children: string; checked: boolean }[];
}

const PriceColumn = ({
  highlight,
  title,
  price,
  statement,
  items,
}: PriceColumnProps) => {
  return (
    <div
      style={{
        boxShadow: highlight ? "0px 6px 0px rgb(24, 24, 27)" : "",
      }}
      className={`relative w-full rounded-lg p-6 md:p-8 ${
        highlight ? "border-2 border-zinc-900 bg-white" : ""
      }`}
    >
      {highlight && (
        <span className="absolute right-4 top-0 -translate-y-1/2 rounded-full bg-teal-600 px-2 py-0.5 text-sm text-white">
          Najbolji izbor
        </span>
      )}

      <p className="mb-6 text-xl font-medium">{title}</p>
      <div className="mb-6 flex items-center gap-3">
        <AnimatePresence mode="popLayout">
          <motion.span
            initial={{
              y: 24,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -24,
              opacity: 0,
            }}
            key={price}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="block text-6xl font-bold"
          >
            <p className="text-teal-600">{price}</p>
          </motion.span>
        </AnimatePresence>
      </div>

      <p className="mb-8 text-lg">{statement}</p>

      <div className="mb-8 space-y-2">
        {items.map((i: any) => (
          <CheckListItem key={i.children} checked={i.checked}>
            {i.children}
          </CheckListItem>
        ))}
      </div>

      <button
        className={`w-full rounded-lg p-3 text-base uppercase text-white transition-colors ${
          highlight
            ? "bg-teal-600 hover:bg-teal-700"
            : "bg-zinc-900 hover:bg-zinc-700"
        }`}
      >
        Prijavi se online
      </button>
    </div>
  );
};

const CheckListItem = ({
  children,
  checked,
}: {
  children: any;
  checked: boolean;
}) => {
  return (
    <div className="flex items-center gap-2 text-lg">
      {checked ? (
        <FiCheckCircle className="text-xl text-teal-600" />
      ) : (
        <FiXSquare className="text-xl text-zinc-400" />
      )}
      {children}
    </div>
  );
};

interface ToggleButtonProps {
  children: any;
  selected: number;
  setSelected: (id: number) => void;
  id: number;
}

const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: ToggleButtonProps) => {
  return (
    <div
      className={`rounded-lg transition-colors ${
        selected === id ? "bg-teal-600" : "bg-zinc-900"
      }`}
    >
      <button
        onClick={() => setSelected(id)}
        className={`w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base ${
          selected === id
            ? "-translate-y-1 border-teal-600 bg-white text-teal-600"
            : "border-zinc-900 bg-white text-zinc-900 hover:-rotate-2"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

const TAB_DATA = [
  {
    id: 1,
    title: "Nemam",
  },
  {
    id: 2,
    title: "AM/A1",
  },
  {
    id: 3,
    title: "A2,A",
  },
  {
    id: 4,
    title: "F",
  },
];
