import React, { useState } from 'react';
import { 
  Pill, 
  Stethoscope, 
  Activity, 
  Baby, 
  HeartPulse, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  FileText, 
  Send,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';
import { SEOHead } from '../components/SEOHead';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { useOrderModal } from '../context/OrderModalContext';

export const Services: React.FC = () => {
  const { openOrderModal } = useOrderModal();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <div className="space-y-16 lg:space-y-20 py-8 pb-16">
      <SEOHead
        title="Pharmacy Services & Medicine Stock Checker - Jehanabad"
        description="Search genuine prescription medicines, digital health monitors, baby care, and surgical essentials at Mantu Medical Hall, Fida Hussain Rd, Jehanabad. Fast WhatsApp ordering."
        keywords="Medicine Stock Checker Jehanabad, Prescription medicines Fida Hussain Rd, BP monitor store Bihar, Baby products Jehanabad pharmacy"
        canonicalPath="/services"
      />

      {/* Page Banner */}
      <section className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden max-w-7xl mx-auto shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
            <Pill className="w-3.5 h-3.5" />
            <span>Complete Pharmaceutical & Healthcare Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight">
            Our Healthcare Services & Live Medicine Inventory
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Search medicine availability in real-time or explore our complete healthcare product categories stocked at Mantu Medical Hall, Jehanabad.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Medicine Stock Checker Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker />
      </section>

      {/* Detailed Category-wise Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Full Service Spectrum
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
            Healthcare Product Categories
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Every category is maintained with strict quality control, cold-chain refrigeration, and certified batch verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Pill className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-3 group-hover:text-[#0A8F6A] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                  {srv.fullDesc}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Key Products Included:</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {srv.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => openOrderModal(srv.title)}
                  className="w-full gradient-emerald-blue text-white py-3 rounded-2xl font-bold text-sm shadow-md shadow-emerald-600/20 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire {srv.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How To Order Prescription Step-by-Step */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Simple 3-Step Process</span>
            <h2 className="text-3xl font-extrabold font-heading mt-1">
              How to Order Prescription Medicines via WhatsApp
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center mx-auto mb-4 text-lg">
                1
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Upload Prescription</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Snap a clear photo of your doctor’s prescription and upload it using our WhatsApp order form or direct message to 8409582002.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center mx-auto mb-4 text-lg">
                2
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Instant Verification</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our qualified pharmacist checks medicine stock, dosage validity, expiry dates, and calculates your discounted total amount.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center mx-auto mb-4 text-lg">
                3
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Fast Pickup or Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Collect your neatly packed, verified medicines from Fida Hussain Rd, Jehanabad or request express local delivery.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => openOrderModal()}
              className="gradient-emerald-blue text-white font-bold px-8 py-3.5 rounded-2xl text-base shadow-xl hover:scale-105 transition-transform cursor-pointer inline-flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Start Prescription Order Now</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
