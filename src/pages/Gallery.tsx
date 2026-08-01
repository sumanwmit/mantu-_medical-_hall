import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/businessData';
import { SEOHead } from '../components/SEOHead';
import { GalleryImage } from '../types';
import { 
  Camera, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  MessageSquare,
  ZoomIn
} from 'lucide-react';
import { useOrderModal } from '../context/OrderModalContext';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const { openOrderModal } = useOrderModal();

  const categories = [
    'All',
    'Store Front',
    'Medicine Shelves',
    'Healthcare Products',
    'Medical Equipment',
    'Customer Care'
  ];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const handleNextImage = () => {
    if (!lightboxImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setLightboxImage(GALLERY_IMAGES[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!lightboxImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setLightboxImage(GALLERY_IMAGES[prevIndex]);
  };

  return (
    <div className="space-y-12 py-8 pb-16">
      <SEOHead
        title="Photo Gallery - Mantu Medical Hall Store Views & Products"
        description="Explore interior and exterior photos of Mantu Medical Hall on Fida Hussain Rd, Jehanabad. View organized medicine shelves, health devices, and baby products."
        keywords="Mantu Medical Hall photos, Pharmacy pictures Jehanabad, Chemist store image Fida Hussain Rd"
        canonicalPath="/gallery"
      />

      {/* Page Header */}
      <section className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden max-w-7xl mx-auto shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
            <Camera className="w-3.5 h-3.5" />
            <span>Store Atmosphere & Inventory Visuals</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight">
            Mantu Medical Hall Gallery
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Take a virtual tour of our clean, organized store on Fida Hussain Road, Jehanabad.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(img => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img)}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 text-white backdrop-blur-md flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  {img.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading group-hover:text-[#0A8F6A] transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-slate-800/80 p-2 rounded-full backdrop-blur-md cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-slate-800/80 hover:bg-emerald-600 p-3 rounded-full backdrop-blur-md cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-slate-800/80 hover:bg-emerald-600 p-3 rounded-full backdrop-blur-md cursor-pointer transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-white mt-0.5">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{lightboxImage.caption}</p>
              </div>

              <button
                onClick={() => {
                  setLightboxImage(null);
                  openOrderModal(lightboxImage.title);
                }}
                className="gradient-emerald-blue text-white px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire Products in Picture</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Bottom Store Invite */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
              Visit Mantu Medical Hall in Person
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Located on Fida Hussain Road, Jehanabad, Bihar 804408. Open 8:00 AM to 10:00 PM everyday.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Mantu+Medical+Hall+Fida+Hussain+Rd+Jehanabad+Bihar+804408"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-emerald-blue text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md inline-flex items-center gap-2 shrink-0"
          >
            <MapPin className="w-4 h-4" />
            <span>Open Google Maps</span>
          </a>
        </div>
      </section>

    </div>
  );
};
