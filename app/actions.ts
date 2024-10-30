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
    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["nenadmobmail@gmail.com"],
      subject: "Prijava za voznju",
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
    });

    // Log the response to see if it indicates success
    console.log("Email send response:", response);

    // Check if the response indicates success (modify based on actual response structure)
    if (response.error) {
      throw new Error(
        "Email sending failed: " + response.error || "Unknown error"
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email: " + error);
  }
}
