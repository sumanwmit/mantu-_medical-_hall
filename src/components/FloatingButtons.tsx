import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useOrderModal } from '../context/OrderModalContext';

export const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { openOrderModal } = useOrderModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons Group (Bottom Right) */}
      <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            title="Back to top"
            className="w-11 h-11 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white shadow-xl hover:bg-emerald-600 dark:hover:bg-emerald-600 transition-all flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 border border-slate-700/50"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          title="Call Mantu Medical Hall"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/40 transition-all flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 group relative"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
            Call Store: 8409582002
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => openOrderModal()}
          title="WhatsApp Order Medicine"
          className="w-14 h-14 rounded-full gradient-emerald-blue text-white shadow-xl shadow-emerald-600/40 transition-all flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 group relative"
        >
          <MessageSquare className="w-7 h-7 fill-white/20" />
          <span className="absolute right-16 bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            WhatsApp Order Medicine
          </span>
        </button>

      </div>

      {/* Sticky Mobile CTA Bar (Bottom Mobile Screen) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-slate-200 dark:border-slate-700"
        >
          <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Call 8409582002</span>
        </a>

        <button
          onClick={() => openOrderModal()}
          className="flex-1 gradient-emerald-blue text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 active:scale-98 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
