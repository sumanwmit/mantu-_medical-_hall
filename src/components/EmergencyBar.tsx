import React from 'react';
import { Phone, Clock, MapPin, Zap, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useOrderModal } from '../context/OrderModalContext';

export const EmergencyBar: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          <span className="flex items-center gap-1.5 font-medium text-emerald-400">
            <Zap className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>24/7 WhatsApp Order & Emergency Medicine Helpline</span>
          </span>
          <span className="hidden md:inline-block text-slate-600">|</span>
          <span className="hidden md:flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Store Open: {BUSINESS_INFO.workingHours}</span>
          </span>
          <span className="hidden lg:inline-block text-slate-600">|</span>
          <span className="hidden lg:flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>Fida Hussain Rd, Jehanabad</span>
          </span>
        </div>

        {/* Right Call & WhatsApp CTAs */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={() => openOrderModal()}
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Fast Prescription Order</span>
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded font-semibold transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>{BUSINESS_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
