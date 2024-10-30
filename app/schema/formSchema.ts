// app/schemas/formSchema.js

import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Korisničko ime mora imati najmanje 2 karaktera.",
  }),
  email: z
    .string()
    .email({
      message: "Molimo vas da unesete važeću email adresu.",
    })
    .min(2, {
      message: "Email mora imati najmanje 2 karaktera.",
    }),
  phone: z.string().regex(/^\d{10,}$/, {
    message: "Unesite važeći broj telefona sa najmanje 10 cifara.",
  }),
  message: z
    .string()
    .max(250, {
      message: "Poruka može imati najviše 250 karaktera.",
    })
    .optional(),
});
