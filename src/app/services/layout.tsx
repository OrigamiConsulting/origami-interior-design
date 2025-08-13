import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services | House Flipping, Custom Design & Furniture Painting - Origami",
  description: "Professional interior design services in Johannesburg and Cape Town. Specializing in house flipping, bespoke interior design, and custom furniture painting with AI-enhanced planning.",
  keywords: "interior design Johannesburg, interior design Cape Town, house flipping South Africa, furniture painting, AI design, interior decorator",
  openGraph: {
    title: "Interior Design Services - Origami Interior Design",
    description: "Transform your space with our AI-enhanced interior design services in Johannesburg and Cape Town.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
