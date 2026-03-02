"use server";

import nodemailer from "nodemailer";

interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Validation
  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // SMTP config from env
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
    console.error("Missing SMTP environment variables");
    return {
      success: false,
      error: "Email service is not configured. Please try again later.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 24px;">New Contact Form Message</h1>
      </div>
      <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top; width: 100px;">Name</td>
            <td style="padding: 12px 0; color: #111827; font-size: 14px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; color: #111827; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #667eea;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top;">Subject</td>
            <td style="padding: 12px 0; color: #111827; font-size: 14px;">${escapeHtml(subject)}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
          <p style="margin: 0; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">Sent from the contact form at sayandatta.co.in</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: toEmail,
      subject: `[Contact] ${subject}`,
      html: htmlBody,
    });

    return { success: true };
  } catch (err) {
    console.error("Failed to send email:", err);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
