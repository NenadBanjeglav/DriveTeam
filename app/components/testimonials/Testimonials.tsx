import React from "react";
import { InfiniteMovingCards } from "@/components/ui/IniniteMovingCards";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center justify-center overflow-x-hidden p-8 lg:py-24"
    >
      <h2 className="text-center text-4xl font-bold italic text-teal-600 md:mb-20">
        Šta kažu naši učenici?
      </h2>
      <div className="flex flex-col items-center justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <Button className="rounded-full bg-teal-600 hover:bg-teal-500">
        PRIJAVI SE I TI
      </Button>
    </section>
  );
};

export default Testimonials;
