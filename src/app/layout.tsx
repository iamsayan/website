import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sayandatta.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sayan Datta | Full Stack Developer & WordPress Expert",
    template: "%s | Sayan Datta",
  },
  description:
    "Sayan Datta is a Senior Software Engineer, Full Stack Developer, WordPress Expert, and Open Source contributor from India with 7+ years of experience building plugins, products, and performant web experiences.",

  keywords: [
    "Sayan Datta",
    "Full Stack Developer",
    "WordPress Expert",
    "Senior Software Engineer",
    "React Developer",
    "Next.js Developer",
    "PHP Developer",
    "WordPress Plugin Developer",
    "Open Source Contributor",
    "Web Developer India",
    "Freelance Developer",
  ],

  authors: [{ name: "Sayan Datta", url: siteUrl }],
  creator: "Sayan Datta",
  publisher: "Sayan Datta",
  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sayan Datta",
    title: "Sayan Datta | Full Stack Developer & WordPress Expert",
    description:
      "Senior Software Engineer, Full Stack Developer, WordPress Expert, and Open Source contributor from India with 7+ years of experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sayan Datta — Full Stack Developer & WordPress Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@im_sayaan",
    creator: "@im_sayaan",
    title: "Sayan Datta | Full Stack Developer & WordPress Expert",
    description:
      "Senior Software Engineer, Full Stack Developer, WordPress Expert, and Open Source contributor from India.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="grow pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
