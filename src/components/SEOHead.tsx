import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/businessData';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  faqList?: { question: string; answer: string }[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'Mantu Medical Hall, Pharmacy in Jehanabad, Medical Store Fida Hussain Rd, Genuine Medicines Bihar',
  canonicalPath = '/',
  faqList
}) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | ${BUSINESS_INFO.name} - Jehanabad`;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Meta Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw) {
      metaKw.setAttribute('content', keywords);
    }

    // JSON-LD Schema Insertion
    const schemaId = 'mantu-jsonld-schema';
    let existingScript = document.getElementById(schemaId);
    if (existingScript) {
      existingScript.remove();
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      'name': BUSINESS_INFO.name,
      'image': 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1200',
      'telephone': BUSINESS_INFO.phoneFormatted,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Fida Hussain Road, 6X8Q+5MJ',
        'addressLocality': 'Jehanabad',
        'addressRegion': 'Bihar',
        'postalCode': '804408',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.2091,
        'longitude': 84.9781
      },
      'url': window.location.origin + canonicalPath,
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '08:00',
        'closes': '22:00'
      },
      'priceRange': '₹'
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin + '/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': title,
          'item': window.location.origin + canonicalPath
        }
      ]
    };

    const schemasToInject: any[] = [localBusinessSchema, breadcrumbSchema];

    if (faqList && faqList.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqList.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      };
      schemasToInject.push(faqSchema);
    }

    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemasToInject);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, [title, description, keywords, canonicalPath, faqList]);

  return null;
};
