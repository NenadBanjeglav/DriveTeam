import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { processSteps } from "@/lib/data";
import Link from "next/link";
import React from "react";

const Steps = () => {
  return (
    <section
      id="steps"
      className="flex flex-col items-center justify-center p-8"
    >
      <h2 className="mb-12 text-center text-4xl font-semibold italic text-teal-600 md:text-6xl">
        Kako do vozačke dozvole?
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <Card
            key={step.name}
            className="flex flex-col items-center justify-center p-6 shadow-sm"
          >
            <CardHeader>
              <CardTitle className="mb-4 flex flex-col items-center justify-center gap-2 text-center text-teal-500">
                <step.icon size={40} />
                {step.name}
              </CardTitle>
              <CardDescription className="text-center text-lg text-teal-500"></CardDescription>
            </CardHeader>
            <CardContent className="mt-[-40px] text-center">
              <p className="italic text-muted-foreground">{step.description}</p>
            </CardContent>
            <CardFooter className="mt-4">
              <Link
                href={step.href}
                className={`rounded-full border border-teal-500 bg-teal-50 px-4 py-2 text-teal-500 transition ease-in-out hover:bg-teal-500 hover:text-white`}
              >
                SAZNAJ VIŠE
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Steps;
