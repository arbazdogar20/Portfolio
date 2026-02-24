"use server";

import nodemailer from "nodemailer";

export async function sendContactUsEmail(prevState, formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.NODEMAILER_EMAIL}>`,
      to: process.env.NODEMAILER_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send message." };
  }
}
