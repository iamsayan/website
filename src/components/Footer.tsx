import Link from "next/link";
import { Mail, Heart, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "@/components/icons";

const socialLinks = [
  { href: "https://github.com/iamsayan", icon: GithubIcon, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/meetsayan/",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  { href: "https://x.com/im_sayaan", icon: XTwitterIcon, label: "X / Twitter" },
  { href: "mailto:iamsayan@pm.me", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const quickLinks = [
  {
    href: "https://profiles.wordpress.org/infosatech/",
    label: "WordPress.org",
  },
  { href: "https://github.com/iamsayan", label: "GitHub" },
  { href: "https://www.linkedin.com/in/meetsayan/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-auto">
      {/* Gradient top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Main footer grid */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-heading font-black text-foreground mb-3 sm:mb-4 inline-block"
            >
              Sayan<span className="text-primary">.</span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm mb-6">
              Full Stack Developer & WordPress Expert building plugins,
              products, and performant web experiences.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent hover:bg-primary/10 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 sm:mb-5">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 sm:mb-5">
              Elsewhere
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 sm:py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sayan Datta. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Crafted with{" "}
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
