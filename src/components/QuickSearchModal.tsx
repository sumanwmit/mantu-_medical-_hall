import React, { useState } from 'react';
import { Search, X, Pill, ArrowRight } from 'lucide-react';
import stockDataRaw from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { useOrderModal } from '../context/OrderModalContext';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { openOrderModal } = useOrderModal();

  if (!isOpen) return null;

  const inventory: MedicineItem[] = stockDataRaw as MedicineItem[];

  const results = query.trim()
    ? inventory.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.brand.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-16 px-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative animate-in fade-in zoom-in-95 duration-150">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
            Quick Medicine & Service Search
          </h3>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicine name, brand (e.g. Paracetamol, Omron, Diapers)..."
            className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
          />
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-sm">
              <Pill className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p>No exact match for "{query}".</p>
              <button
                onClick={() => {
                  onClose();
                  openOrderModal(query);
                }}
                className="mt-3 text-xs font-bold text-[#0A8F6A] underline hover:text-emerald-500 cursor-pointer"
              >
                Inquire about "{query}" directly via WhatsApp
              </button>
            </div>
          )}

          {results.map(item => (
            <div
              key={item.id}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between gap-3 border border-slate-200/60 dark:border-slate-700/60 transition-colors"
            >
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Brand: {item.brand} • {item.category}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                  ₹{item.discountMrp ? item.discountMrp.toFixed(2) : item.mrp.toFixed(2)}
                </span>
                <button
                  onClick={() => {
                    onClose();
                    openOrderModal(item.name);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <span>Order</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}

          {!query.trim() && (
            <div className="py-6 text-center text-xs text-slate-400">
              Popular searches: <span className="text-slate-600 dark:text-slate-300 font-medium">Dolo 650, Pan 40, Omron BP Monitor, Lactogen, Volini</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
