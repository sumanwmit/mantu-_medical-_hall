export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  discountMrp?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  prescriptionRequired: boolean;
  dosageForm?: string; // Tablet, Syrup, Injection, Ointment, etc.
  packSize?: string;
  usageSummary?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  items: string[];
  popularItem: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Healthcare Products' | 'Medical Equipment' | 'Customer Care';
  url: string;
  caption: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  date: string;
  imageUrl: string;
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email?: string;
  address: string;
  medicineName: string;
  prescriptionAttached: boolean;
  prescriptionFile?: File | null;
  message?: string;
  preferredDeliveryTime: string;
}
