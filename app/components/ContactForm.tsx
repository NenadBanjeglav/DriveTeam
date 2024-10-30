"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SuccessGif from "@/public/success.gif";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import { formSchema } from "../schema/formSchema";
import { sendContactEmail } from "../actions";
import { Loader } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const { formState } = form;
  const { isSubmitting } = formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, phone, message } = values;

    try {
      // Call the server action to send the email
      const result = await sendContactEmail({ name, email, phone, message });

      if (result.success) {
        console.log("Email sent successfully!");

        setIsSent(true);
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto my-16 flex h-full max-w-7xl flex-col items-stretch justify-center rounded-md bg-teal-600 xl:flex-row"
    >
      <div className="basis-2/4 p-4 py-8">
        {isSent ? (
          <div className="flex flex-col items-center justify-center">
            <Image
              src={SuccessGif}
              height={300}
              width={280}
              alt="Success Gif"
            />
            <p className="text-center text-base text-white md:text-lg">
              Prijavili ste se! 🎉 Sve je prošlo u redu, a uskoro ćemo vas
              kontaktirati putem telefona kako bismo se dogovorili sledeće
              korake. Hvala što ste izabrali nas – jedva čekamo da krenemo u
              zajedničku avanturu!
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-center text-2xl font-semibold italic text-white md:text-4xl">
              Prijavi se ovde!
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex h-full flex-col justify-evenly space-y-8"
              >
                <div className="w-full flex-col ">
                  <div className="flex flex-col">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-center text-base text-white md:text-lg">
                            Zdravo👋, treba nam par informacija o tebi...
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="bg-teal-500 font-semibold text-white placeholder:font-medium placeholder:text-white"
                              placeholder="Tvoje Ime"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-orange-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" hidden text-base text-white md:text-lg">
                            email...
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="bg-teal-500 font-semibold text-white placeholder:font-medium placeholder:text-white"
                              placeholder="email@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-orange-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden text-base text-white md:text-lg">
                            telefon...
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="bg-teal-500 font-semibold text-white placeholder:font-medium placeholder:text-white"
                              placeholder="Tvoj telefon"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-orange-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mt-4 md:mt-0">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden text-base text-white md:text-lg">
                            ako imas pitanje ili samo zelis da posaljes 👋:
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ćao, reci nam nešto o sebi ili pitaj šta te zanima, a mi ćemo te nazvati čim pre"
                              className="h-fit bg-teal-500 font-semibold text-white placeholder:font-medium placeholder:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="flex w-full items-center justify-center rounded-2xl border-2 border-black bg-teal-500 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
                >
                  {isSubmitting ? (
                    <Loader size={24} className="animate-spin" />
                  ) : (
                    "Posalji prijavu"
                  )}
                </button>
              </form>
            </Form>
          </>
        )}
      </div>
      <div className="flex h-full  rounded-b-md xl:rounded-r-md">
        <Image
          src="/hero.jpg"
          width={1000}
          height={1000}
          alt="Women Driving to Adventure Image"
          className="w-full rounded-b-md object-cover xl:rounded-r-md xl:rounded-bl-none"
        />
      </div>
    </section>
  );
};

export default ContactForm;
