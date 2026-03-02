export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sayan Datta",
    url: "https://sayandatta.co.in",
    jobTitle: "Senior Software Engineer",
    description:
      "Full Stack Developer, WordPress Expert, and Open Source contributor from India with 7+ years of experience.",
    sameAs: [
      "https://github.com/iamsayan",
      "https://www.linkedin.com/in/meetsayan/",
      "https://x.com/im_sayaan",
      "https://profiles.wordpress.org/infosatech/",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "PHP",
      "WordPress",
      "Laravel",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "REST API",
      "GraphQL",
      "Docker",
      "Tailwind CSS",
    ],
    worksFor: {
      "@type": "Organization",
      name: "TeamUpdraft",
      url: "https://teamupdraft.com",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IGNOU",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    email: "mailto:iamsayan@pm.me",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sayan Datta",
    url: "https://sayandatta.co.in",
    description:
      "Portfolio of Sayan Datta — Full Stack Developer, WordPress Expert, and Open Source contributor.",
    author: {
      "@type": "Person",
      name: "Sayan Datta",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
