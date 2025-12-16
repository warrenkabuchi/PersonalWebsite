/**
 * Structured Data Components for SEO
 * Implements Schema.org JSON-LD for better search engine understanding
 */

interface PersonSchemaProps {
  name?: string;
  jobTitle?: string;
  url?: string;
  image?: string;
  sameAs?: string[];
}

export function PersonSchema({
  name = "Warren Kabuchi",
  jobTitle = "AI Engineer & Cloud Architect",
  url = "https://warrenkabuchi.com",
  image = "https://warrenkabuchi.com/images/profile.jpg",
  sameAs = [
    "https://linkedin.com/in/warrenkabuchi",
    "https://github.com/warrenkabuchi",
  ],
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    image,
    sameAs,
    knowsAbout: [
      "Artificial Intelligence",
      "Cloud Architecture",
      "Microsoft Copilot Studio",
      "Azure",
      "Google Cloud Platform",
      "AI Governance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = "Warren Kabuchi",
  areaServed = "Worldwide",
  serviceType = "Professional Services",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Person",
      name: provider,
    },
    areaServed,
    serviceType,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author?: string;
  url: string;
}

export function BlogPostingSchema({
  title,
  description,
  image,
  datePublished,
  author = "Warren Kabuchi",
  url,
}: BlogPostingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Person",
      name: author,
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
}

export function WebsiteSchema({
  name = "Warren Kabuchi",
  url = "https://warrenkabuchi.com",
  description = "Personal portfolio and blog of Warren Kabuchi - AI Engineer & Cloud Architect",
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}