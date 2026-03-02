import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sayan Datta for freelance projects, consultations, or collaborations. Available for WordPress, React, and full-stack development work.",
  alternates: { canonical: "/contact" },
  keywords: [
    "Contact Sayan Datta",
    "Hire WordPress Developer",
    "Freelance Full Stack Developer",
    "Web development consultation",
  ],
  openGraph: {
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
