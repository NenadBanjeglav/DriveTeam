import React from "react";
import DownArrow from "../DownArrow";
import { InfiniteMovingCards } from "@/components/ui/IniniteMovingCards";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center justify-center p-8 lg:py-24"
    >
      <h2 className="mb-32 text-center text-4xl font-bold italic text-teal-600 md:mb-20">
        Šta kažu naši učenici?
      </h2>
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex h-[50vh] items-center overflow-x-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      <DownArrow href="#steps" className="mt-52 md:mt-28" />
    </section>
  );
};

export default Testimonials;
