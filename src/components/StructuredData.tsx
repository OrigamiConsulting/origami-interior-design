import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Origami Interior Design",
    "description": "AI-enhanced interior design services specializing in house flipping, bespoke interior design, and custom furniture painting in Johannesburg and Cape Town.",
    "url": "https://origami-interior-design.vercel.app",
    "telephone": "+27 11 123 4567",
    "email": "hello@origami-design.co.za",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      "addressRegion": "Gauteng",
      "addressLocality": "Johannesburg"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Johannesburg"
      },
      {
        "@type": "City", 
        "name": "Cape Town"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -26.2041,
        "longitude": 28.0473
      },
      "geoRadius": "50000"
    },
    "services": [
      {
        "@type": "Service",
        "name": "House Flipping",
        "description": "Complete property transformations with AI-powered design insights"
      },
      {
        "@type": "Service", 
        "name": "Interior Design",
        "description": "Bespoke interior solutions enhanced by cutting-edge AI technology"
      },
      {
        "@type": "Service",
        "name": "Furniture Painting", 
        "description": "Custom furniture restoration and painting services"
      }
    ],
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
