"use server";

import { Resend } from "resend";

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message?: string; // Make this optional if it's not always required
}

export async function sendContactEmail(values: ContactFormValues) {
  const { name, email, phone, message } = values;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "prijava@autoskoladt.rs",
      to: ["as.driveteam@yahoo.com"],
      subject: "Prijava za voznju",
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
