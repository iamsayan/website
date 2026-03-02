export interface CustomProject {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string | null;
  image?: string;
}

export const customProjects: CustomProject[] = [
  {
    id: "custom-1",
    name: "WP Last Modified Info",
    description:
      "A WordPress plugin to display the last modified date and time of posts and pages with 20k+ active installs.",
    html_url: "https://github.com/iamsayan/wp-last-modified-info",
    homepage: "https://wordpress.org/plugins/wp-last-modified-info/",
    language: "PHP / WordPress",
  },
  {
    id: "custom-2",
    name: "RevivePress",
    description:
      "All-in-one tool for republishing and cloning old posts and pages. 7k+ active installs with a premium version available.",
    html_url: "https://github.com/iamsayan/wp-auto-republish",
    homepage: "https://developer.developer.developer/",
    language: "PHP / WordPress",
  },
  {
    id: "custom-4",
    name: "WaaS Integration",
    description:
      "WordPress plugin supporting site provisioning, template syncing, and integration with InstaWP, WooCommerce, SureCart, and EDD.",
    html_url: "#",
    homepage: null,
    language: "PHP / WordPress",
  },
  {
    id: "custom-5",
    name: "Connect Helpers",
    description:
      "Core Composer package powering InstaWP's site management features — handles API auth, site sync, and remote actions.",
    html_url: "#",
    homepage: null,
    language: "PHP / Composer",
  },
  {
    id: "custom-6",
    name: "Gutena Blocks",
    description:
      "Lightweight accordion, tabs, and testimonial slider plugins for the WordPress block editor (Gutenberg).",
    html_url: "#",
    homepage: null,
    language: "React / PHP",
  },
];
