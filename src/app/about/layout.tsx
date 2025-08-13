import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - AI-Enhanced Interior Design | Origami Interior Design",
  description: "Learn about Origami Interior Design's innovative approach combining human creativity with AI technology. Serving Johannesburg and Cape Town with exceptional design solutions.",
  keywords: "AI interior design, about Origami Interior Design, innovative design approach, Johannesburg designers, Cape Town interior designers",
  openGraph: {
    title: "About Origami Interior Design",
    description: "Discover how we combine human creativity with AI technology to create extraordinary spaces.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
