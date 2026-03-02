import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sayan Datta — Developer Portfolio",
    short_name: "Sayan Datta",
    description:
      "Full Stack Developer, WordPress Expert, and Open Source contributor from India.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#a78bfa",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
