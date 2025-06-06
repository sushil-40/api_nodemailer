import nodemailer from "nodemailer";
// config the  SMTP
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// create the email processor  - send out the email

const emailProcessor = async (templateObj) => {
  const info = await transporter.sendMail(templateObj);
  console.log(info.messageId);
};

// functions to create template
export const userUpdateTemplate = async ({ email, subject, message }) => {
  const obj = {
    from: "Message from contact From",
    to: "sushildangoriya40@gmail.com",
    subject,
    text: message,

    html: `<p><strong>Sender Email:</strong> ${email}</p><h4>${subject}</h4>
    <p>${message}</p>`,
  };
  return await emailProcessor(obj);
};
