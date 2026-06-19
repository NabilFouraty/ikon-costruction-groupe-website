import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'IKON Construction Group - Premier Construction Services in Miami',
  description = 'IKON Construction Group delivers exceptional residential and commercial construction services in Miami. 25+ years of experience in custom homes, renovations, and commercial buildings.',
  keywords = 'construction Miami, custom homes Miami, commercial construction, residential construction, home renovation, Miami contractors, luxury construction',
  image = 'https://tizdudxhrtazamkkvtxf.supabase.co/storage/v1/object/public/Public%20Images/Ikon-team%20(1).jpeg',
  url = 'https://ikoncg.com',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="IKON Construction Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="IKON Construction Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#F97316" />
      <link rel="canonical" href={url} />
      
      {/* Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ConstructionCompany",
          "name": "IKON Construction Group",
          "description": description,
          "url": "https://ikonconstructiongroup.com",
          "logo": "https://saquyjoebxqmtkmubwyd.supabase.co/storage/v1/object/sign/homepage/logo.png",
          "image": image,
          "telephone": "305-319-0155",
          "email": "gil@ikoncg.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3029 NE 188TH ST",
            "addressLocality": "Aventura",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.9493",
            "longitude": "-80.1426"
          },
          "areaServed": [
            "Miami-Dade County",
            "Broward County",
            "Palm Beach County"
          ],
          "serviceType": [
            "Residential Construction",
            "Commercial Construction",
            "Home Renovation",
            "Custom Home Building"
          ],
          "foundingDate": "2001",
          "founder": {
            "@type": "Person",
            "name": "Gil Suissa"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;