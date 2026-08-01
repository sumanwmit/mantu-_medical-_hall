import { FAQItem, GalleryImage, ReviewItem, ServiceCategory, HealthTip } from '../types';

export const BUSINESS_INFO = {
  name: 'Mantu Medical Hall',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  category: 'Pharmacy & Healthcare Store',
  phone: '8409582002',
  phoneFormatted: '+91 8409582002',
  whatsappNumber: '918409582002',
  address: '6X8Q+5MJ, Fida Hussain Rd, Jehanabad, Bihar 804408',
  plusCode: '6X8Q+5MJ, Jehanabad',
  landmark: 'Near Fida Hussain Road Crossing, Jehanabad Town',
  city: 'Jehanabad',
  state: 'Bihar',
  pincode: '804408',
  email: 'contact@mantumedicalhall.com',
  workingHours: '8:00 AM - 10:00 PM (Monday to Sunday)',
  emergencyAvailable: '24/7 Emergency WhatsApp Medicine Support',
  establishedYear: '2012',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.824883907535!2d84.97811237592473!3d25.209123830869688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2eb4fb532d80d%3A0x7d6a5c1b52bc6642!2sFida%20Hussain%20Rd%2C%20Jehanabad%2C%20Bihar%20804408!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Mantu+Medical+Hall+Fida+Hussain+Rd+Jehanabad+Bihar+804408',
  socials: {
    facebook: 'https://facebook.com/mantumedicalhall',
    whatsapp: 'https://wa.me/918409582002',
    googleProfile: 'https://maps.google.com/?q=6X8Q+5MJ,Fida+Hussain+Rd,Jehanabad,Bihar+804408'
  }
};

export const SERVICES_LIST: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    iconName: 'Pill',
    shortDesc: '100% authentic temperature-controlled prescription drugs from certified pharmaceutical brands.',
    fullDesc: 'We stock a complete range of doctor-prescribed medications for chronic and acute conditions including Cardiology, Diabetology, Respiratory, Gastroenterology, Neurology, and Orthopedics. All medicines are sourced directly from authorized distributors with strict batch verification and cold-chain storage.',
    items: ['Antibiotics & Anti-infectives', 'Diabetic Care & Insulin', 'Blood Pressure & Heart Care', 'Asthma & Respiratory Inhalers', 'Gastric & Ulcer Medications'],
    popularItem: 'Diabetic & Cardiac Special Medications'
  },
  {
    id: 'otc-medicines',
    title: 'OTC Medicines & First Aid',
    iconName: 'Stethoscope',
    shortDesc: 'Everyday relief medicines, pain balms, antacids, cold treatments, and immediate first-aid kits.',
    fullDesc: 'Quick over-the-counter access to reliable remedies for fever, pain relief, cough, cold, acidity, muscle strain, rehydration, and wound dressings. Our knowledgeable staff helps guide you on dosage and instructions.',
    items: ['Pain Relief Balms & Sprays', 'Fever & Cough Syrups', 'Oral Rehydration Salts (ORS)', 'Antacid Liquids & Sachets', 'Complete Household First Aid Kits'],
    popularItem: 'Instant Pain Relief & Antacids'
  },
  {
    id: 'health-devices',
    title: 'Health Devices & Monitors',
    iconName: 'Activity',
    shortDesc: 'Digital BP monitors, glucometers, pulse oximeters, nebulizers, and clinical thermometers.',
    fullDesc: 'Empower your home health monitoring with clinically validated digital health devices. We offer warranty-backed BP apparatus, blood glucose testing kits, infrared thermometers, oxygen saturation meters, and nebulizer machines with full usage demonstration.',
    items: ['Digital Blood Pressure Monitors', 'Glucometer Kits & Test Strips', 'Pulse Oximeters (SpO2)', 'Nebulizer Machines', 'Digital & Infrared Thermometers'],
    popularItem: 'Automatic BP Monitors & Glucometers'
  },
  {
    id: 'baby-maternity',
    title: 'Baby Care & Maternity',
    iconName: 'Baby',
    shortDesc: 'Gentle baby skincare, diapers, baby formula, feeding accessories, and maternal health care.',
    fullDesc: 'Comprehensive care for newborn babies and mothers. Stocking trusted pediatrician-recommended brands like Himalaya Baby, Pampers, Johnson & Johnson, Lactogen, Nan PRO, and mother care supplements for prenatal and postnatal nutrition.',
    items: ['Newborn Diapers & Wipes', 'Pediatric Skincare & Lotions', 'Infant Formula Foods', 'Baby Feeding Bottles & Teethers', 'Maternity Nutrition Supplements'],
    popularItem: 'Premium Diapers & Baby Formula'
  },
  {
    id: 'supplements-nutrition',
    title: 'Supplements & Wellness',
    iconName: 'HeartPulse',
    shortDesc: 'Calcium, Vitamin D3, Multivitamins, Protein Powders, and Herbal Immunity boosters.',
    fullDesc: 'Boost your family’s daily energy and immunity with high-potency vitamins, mineral supplements, joint care formulas, protein drinks, and Ayurvedic wellness products from top trusted brands.',
    items: ['Multivitamins & Minerals', 'Calcium & Vitamin D3 Tablets', 'Protein Powders & Energy Drinks', 'Chyawanprash & Herbal Tonics', 'Joint & Bone Health Care'],
    popularItem: 'Multivitamins & Bone Health Formula'
  },
  {
    id: 'medical-equipment',
    title: 'Surgical & Home Care Essentials',
    iconName: 'ShieldCheck',
    shortDesc: 'Sterile bandages, surgical gloves, adult diapers, steam inhalers, and walker supports.',
    fullDesc: 'Essential surgical supplies and elder care equipment for post-hospitalization recovery at home. Sourced for clinical durability and hygienic packaging.',
    items: ['Sterile Gauze & Cotton Rolls', 'Surgical Tapes & Antiseptics', 'Adult Diapers & Underpads', 'Steam Inhalers & Vaporizers', 'Orthopedic Braces & Support Belts'],
    popularItem: 'Surgical Dressings & Elderly Care'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Kumar Sharma',
    location: 'Jehanabad Main Town',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Mantu Medical Hall is the most reliable pharmacy on Fida Hussain Road. They always have genuine medicines in stock and offer fair prices. Very polite behavior and fast service on WhatsApp orders!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Dr. Anita Sinha',
    location: 'Jehanabad',
    rating: 5,
    date: '1 month ago',
    comment: 'As a local healthcare professional, I appreciate Mantu Medical Hall for keeping properly stored, unexpired, genuine drugs. Their commitment to patient health in Jehanabad is commendable.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Manoj Kumar',
    location: 'Fida Hussain Road',
    rating: 5,
    date: '2 months ago',
    comment: 'I ordered my mother’s diabetic and blood pressure medicines via WhatsApp. They packed everything neatly and delivered quickly. Excellent service and highly trustworthy staff.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Suman Verma',
    location: 'Jehanabad',
    rating: 5,
    date: '3 months ago',
    comment: 'Great store for baby products and health monitors. I bought an Omron BP monitor from here with genuine warranty. Mantu Bhai guided me nicely on how to use it at home.',
    verified: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I order medicines on WhatsApp from Mantu Medical Hall?',
    answer: 'It is simple! Click the "WhatsApp Order" button on our website or message us at 8409582002. Type your medicine requirement or attach a clear photo of your doctor’s prescription. We will confirm stock availability and pricing immediately.',
    category: 'Ordering'
  },
  {
    id: 'faq-2',
    question: 'Is a prescription required for purchasing medicines?',
    answer: 'Yes, Schedule H and Schedule H1 medications (like antibiotics, cardiac drugs, and specialized tablets) strictly require a valid prescription from a registered medical practitioner as per Indian Drug Laws. Over-the-counter (OTC) items, vitamins, and healthcare devices do not require a prescription.',
    category: 'Prescriptions'
  },
  {
    id: 'faq-3',
    question: 'Are all medicines sold at Mantu Medical Hall 100% genuine?',
    answer: 'Absolutely. We source all medications directly from certified pharmaceutical manufacturers and authorized company stockists. We strictly verify batch details, expiry dates, and maintain refrigerated storage for temperature-sensitive drugs like insulin.',
    category: 'Quality'
  },
  {
    id: 'faq-4',
    question: 'What are the working hours of Mantu Medical Hall?',
    answer: 'We are open every day from 8:00 AM to 10:00 PM (Monday through Sunday). For emergency medicine needs outside standard hours, you can reach out via our WhatsApp helpline at 8409582002.',
    category: 'Store Hours'
  },
  {
    id: 'faq-5',
    question: 'Where is Mantu Medical Hall located in Jehanabad?',
    answer: 'Our store is conveniently located at 6X8Q+5MJ, Fida Hussain Road, Jehanabad, Bihar 804408. You can easily locate us using Google Maps or by calling 8409582002 for live directions.',
    category: 'Location'
  },
  {
    id: 'faq-6',
    question: 'Do you keep baby care products and health monitors like BP apparatus?',
    answer: 'Yes! We maintain an extensive range of baby care essentials (diapers, baby lotions, infant formula) and home medical monitors (digital BP apparatus, glucometers, pulse oximeters, and nebulizer machines).',
    category: 'Products'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Mantu Medical Hall Store Front View',
    category: 'Store Front',
    url: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200',
    caption: 'Welcoming store entrance on Fida Hussain Road, Jehanabad with organized counters.'
  },
  {
    id: 'gal-2',
    title: 'Organized Prescription Medicine Shelves',
    category: 'Medicine Shelves',
    url: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1200',
    caption: 'Systematically sorted pharmaceutical stock for instant prescription fulfillment.'
  },
  {
    id: 'gal-3',
    title: 'Healthcare & OTC Essentials Display',
    category: 'Healthcare Products',
    url: 'https://images.unsplash.com/photo-1631549912265-d061c028e08d?auto=format&fit=crop&q=80&w=1200',
    caption: 'Wide array of OTC vitamins, pain relief balms, antiseptics, and health supplements.'
  },
  {
    id: 'gal-4',
    title: 'Digital Health Monitors & Medical Equipment',
    category: 'Medical Equipment',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200',
    caption: 'Genuine BP apparatus, glucometers, oximeters, and nebulizers ready for home testing.'
  },
  {
    id: 'gal-5',
    title: 'Dedicated Baby Care & Maternity Corner',
    category: 'Healthcare Products',
    url: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=1200',
    caption: 'Trusted baby skincare, infant nutrition formula, and pediatric diapers.'
  },
  {
    id: 'gal-6',
    title: 'Helpful Pharmacist Customer Support',
    category: 'Customer Care',
    url: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=1200',
    caption: 'Experienced pharmacists providing courteous consultation and guidance in Jehanabad.'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'How to Store Temperature-Sensitive Medicines Correctly at Home',
    category: 'Medicine Safety',
    readTime: '3 min read',
    summary: 'Insulin, eye drops, and specific probiotics require cool storage. Learn how to maintain the right temperature without freezing them.',
    date: 'July 2026',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tip-2',
    title: '5 Tips for Accurate Home Blood Pressure Monitoring',
    category: 'Health Monitoring',
    readTime: '4 min read',
    summary: 'Avoid common errors like sitting with crossed legs or talking during BP readings. Get clinical precision with digital monitors.',
    date: 'June 2026',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tip-3',
    title: 'Understanding Antibiotic Stewardship & Completing Full Courses',
    category: 'Prescription Care',
    readTime: '3 min read',
    summary: 'Stopping antibiotics early can lead to bacterial resistance. Why following your doctor’s prescribed dosage is essential.',
    date: 'May 2026',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: '100% Genuine Medicines',
    description: 'Sourced directly from authorized manufacturers with full batch verification and zero risk of counterfeit products.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Fast WhatsApp Ordering',
    description: 'Send prescription photos or item lists directly to 8409582002 for quick packing and hassle-free pickup or local delivery.',
    icon: 'MessageSquare'
  },
  {
    title: 'Affordable & Honest Pricing',
    description: 'Transparent MRP discounts and budget-friendly healthcare essentials for every family in Jehanabad.',
    icon: 'Tag'
  },
  {
    title: 'Expert Pharmacist Guidance',
    description: 'Our qualified staff verifies dosages, checks expiry dates, and explains drug usage clearly.',
    icon: 'UserCheck'
  },
  {
    title: 'Complete Health Stock',
    description: 'From daily prescriptions to baby care, surgical supplies, and health monitors under one roof.',
    icon: 'PackageCheck'
  },
  {
    title: 'Prime Location in Jehanabad',
    description: 'Conveniently situated on Fida Hussain Road with easy parking and rapid emergency assistance.',
    icon: 'MapPin'
  }
];
