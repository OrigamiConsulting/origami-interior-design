import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free Consultation | Origami Interior Design",
  description: "Contact Origami Interior Design for a free consultation. Serving Johannesburg and Cape Town with AI-enhanced interior design services. Get your quote today.",
  keywords: "contact interior designer, free consultation, Johannesburg interior design contact, Cape Town interior design contact, get quote interior design",
  openGraph: {
    title: "Contact Origami Interior Design",
    description: "Get in touch for a free consultation on your interior design project. Serving Johannesburg and Cape Town.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
