import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Interior Design Projects | Origami Interior Design",
  description: "View our portfolio of completed interior design projects in Johannesburg and Cape Town. House flips, residential design, commercial spaces, and custom furniture.",
  keywords: "interior design portfolio, house flip before after, Johannesburg interior design, Cape Town interior design, residential design, commercial design",
  openGraph: {
    title: "Portfolio - Origami Interior Design",
    description: "Explore our stunning interior design transformations across Johannesburg and Cape Town.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
