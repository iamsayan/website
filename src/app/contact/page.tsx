"use client";

import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Sparkles,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sdcreativity12@gmail.com",
      href: "mailto:sdcreativity12@gmail.com",
    },
    {
      icon: MessageSquare,
      label: "Website",
      value: "sayandatta.co.in",
      href: "https://sayandatta.co.in",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/meetsayan",
      href: "https://www.linkedin.com/in/meetsayan/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "West Bengal, India",
      href: null,
    },
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 -z-10 w-120 h-120 bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
      {/* Concentric rings */}
      <div className="absolute top-40 -left-16 w-64 h-64 border border-border/40 rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-48 -left-8 w-48 h-48 border border-border/30 rounded-full pointer-events-none hidden md:block" />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12 md:py-20">
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Contact
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 sm:mb-8 text-foreground tracking-tight leading-[1.05]">
            Let&apos;s work
            <br />
            <span className="gradient-text">together.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Have a project in mind, need consultation, or just want to connect?
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left – Contact Info */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith("http") ? "_blank" : undefined,
                    rel: item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                : {};
              return (
                <Wrapper
                  key={i}
                  {...wrapperProps}
                  className="group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5 sm:mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Right – Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

              {submitted ? (
                <div className="min-h-100 sm:min-h-120 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/10 text-green-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-2 sm:mb-4">
                    <Send className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-sm leading-relaxed">
                    Thanks for reaching out. I&apos;ll review your message and
                    respond within 24-48 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-2 sm:mt-4 rounded-2xl"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6 relative z-10"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs sm:text-sm font-bold text-foreground"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-background border border-border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs sm:text-sm font-bold text-foreground"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-background border border-border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs sm:text-sm font-bold text-foreground"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full bg-background border border-border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs sm:text-sm font-bold text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full bg-background border border-border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full h-12 sm:h-14 text-sm sm:text-base rounded-2xl"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
