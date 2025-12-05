import { type Metadata } from "next";

import JsonLd from "@/app/(website)/_components/jsonld";

import CompanyContactWrapper from "./components/contact-us/wrapper";
import ContactHeroContent from "./components/hero/content";

// ----- Metadata -----
export const metadata: Metadata = {
  title: "Contact Us | PPE | Proactive Premium Engineering",
  description:
    "Get in touch with Proactive Premium Engineering. Contact our team for inquiries about engineering services, technical support, or training programs.",
  alternates: {
    canonical: "https://ppe-iq.com/company/contact",
  },
  openGraph: {
    title: "Contact Us | PPE | Proactive Premium Engineering",
    description:
      "Reach out to PPE for reliability engineering, vibration analysis, alignment services, or custom training inquiries. We're here to help.",
    url: "https://ppe-iq.com/company/contact",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact PPE - Proactive Premium Engineering",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | PPE | Proactive Premium Engineering",
    description:
      "Connect with Proactive Premium Engineering — your partner in precision maintenance, condition monitoring, and reliability improvement.",
    images: ["https://ppe-iq.com/images/meta/logo.png"],
  },
};

// ----- JSON-LD Schema -----
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Proactive Premium Engineering",
  url: "https://ppe-iq.com/company/contact",
  description:
    "Contact PPE (Proactive Premium Engineering) for support, service inquiries, and training program details.",
  mainEntity: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: "https://ppe-iq.com/images/meta/logo.png",
    sameAs: [
      "https://www.linkedin.com/ppe-iq",
      "https://www.facebook.com/ppe-iq",
      "https://www.instagram.com/ppe-iq",
      "https://www.x.com/ppe-iq",
      "https://www.youtube.com/ppe-iq",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: process.env.CONTACT_NUMBER || "+964-xxx-xxxx",
        contactType: "Customer Support",
        areaServed: "IQ",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        email: process.env.CONTACT_EMAIL || "info@ppe-iq.com",
        contactType: "Sales & Inquiries",
        areaServed: "IQ",
        availableLanguage: ["English", "Arabic"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Erbil, Kurdistan Region, Iraq",
      addressCountry: "IQ",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ppe-iq.com/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact Us",
        item: "https://ppe-iq.com/company/contact",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactHeroContent />
      <CompanyContactWrapper />
    </>
  );
}
