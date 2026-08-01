import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Building, 
  UserCheck, 
  MapPin, 
  Phone, 
  MessageSquare,
  Thermometer,
  Boxes
} from 'lucide-react';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '../data/businessData';
import { SEOHead } from '../components/SEOHead';
import { useOrderModal } from '../context/OrderModalContext';

export const About: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  const timelineEvents = [
    {
      year: '2012',
      title: 'Store Establishment',
      description: 'Mantu Medical Hall opened its doors on Fida Hussain Road, Jehanabad with a vow to deliver authentic medicines at reasonable prices.'
    },
    {
      year: '2016',
      title: 'Cold-Chain & Health Monitors Expansion',
      description: 'Upgraded infrastructure with specialized medical refrigeration for insulin and stocked digital BP apparatus & glucometers.'
    },
    {
      year: '2020',
      title: 'Pandemic Community Helpline',
      description: 'Provided 24/7 essential drug supply, sanitizers, N95 masks, and home delivery support during lockdown emergencies.'
    },
    {
      year: '2024',
      title: 'WhatsApp Ordering Integration',
      description: 'Launched instant WhatsApp prescription ordering (8409582002) enabling effortless medication refills for seniors.'
    },
    {
      year: 'Present',
      title: 'Trusted Local Healthcare Brand',
      description: 'Serving over 15,000 satisfied families and partnering with top pharmaceutical manufacturers in India.'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-20 py-8 pb-16">
      <SEOHead
        title="About Us - Mantu Medical Hall Pharmacy Jehanabad"
        description="Learn about Mantu Medical Hall on Fida Hussain Rd, Jehanabad. Serving Bihar with 100% genuine prescription medicines, baby care, and healthcare devices since 2012."
        keywords="About Mantu Medical Hall, Pharmacy history Jehanabad, Chemist Fida Hussain Road, Medical store story Bihar"
        canonicalPath="/about"
      />

      {/* Page Header Banner */}
      <section className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden max-w-7xl mx-auto shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
            <Building className="w-3.5 h-3.5" />
            <span>Dedicated Pharmacy Excellence Since 2012</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight">
            About Mantu Medical Hall
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Your reliable neighborhood pharmacy on Fida Hussain Road, Jehanabad, committed to genuine medications, strict quality control, and compassionate patient care.
          </p>
        </div>
      </section>

      {/* Main Business Story & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Heritage & Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              A Legacy of Trust in Jehanabad Healthcare
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Mantu Medical Hall was founded with a singular mission: to ensure every citizen in Jehanabad has access to <strong>100% genuine, unadulterated prescription medicines</strong> and healthcare supplies without financial stress.
              </p>
              <p>
                Located conveniently at <strong>6X8Q+5MJ, Fida Hussain Road, Jehanabad</strong>, our store maintains an exhaustive inventory of life-saving drugs, pediatric products, surgical dressings, and home diagnostic equipment. We partner directly with verified pharmaceutical distributors representing brands like Cipla, Sun Pharma, Mankind, Abbott, Alkem, and Micro Labs.
              </p>
              <p>
                Every medicine on our shelf is subjected to strict batch checks and stored under optimal climate conditions to preserve drug potency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700">
                <Thermometer className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm font-heading">Cold-Chain Storage</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">24/7 refrigeration for insulin and vaccines.</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700">
                <Boxes className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm font-heading">Exhaustive Stock</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Over 3,000+ formulations always in stock.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800"
                alt="Pharmacist Consulting Patient"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision, Values Grid */}
      <section className="bg-slate-100 dark:bg-slate-900/60 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To safeguard community health in Jehanabad by providing 100% genuine medications, accurate drug counseling, and accessible home delivery options at fair MRP discounts.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To be Jehanabad's most admired healthcare retail brand, known for uncompromised quality standards, patient empathy, and modern digital ordering conveniences.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                Our Core Values
              </h3>
              <ul className="text-slate-600 dark:text-slate-300 text-xs space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Unwavering Authenticity & Zero Fake Drugs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Patient-First Compassionate Service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Strict Expiry Date Monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacist / Owner Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Founder's Message</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              "Your Health & Trust Are Our Greatest Responsibility"
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
              "At Mantu Medical Hall, we understand that behind every prescription is a patient seeking recovery and a family praying for wellness. We treat every medicine order with the highest ethical responsibility. When you buy from us on Fida Hussain Road, you get guaranteed genuine drugs, honest pricing, and genuine warmth."
            </p>

            <div className="pt-2">
              <p className="font-bold text-white text-base">Management & Pharmacist Team</p>
              <p className="text-xs text-emerald-400">Mantu Medical Hall • Jehanabad, Bihar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
            Milestones of Mantu Medical Hall
          </h2>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative flex items-center gap-6 md:justify-between group">
              <div className="w-12 h-12 rounded-full bg-[#0A8F6A] text-white font-bold flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30 z-10 text-xs">
                {evt.year}
              </div>

              <div className="flex-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mb-1">
                  {evt.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Full Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading mb-6">
            Why Jehanabad Residents Choose Mantu Medical Hall
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-base font-heading mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Location: Fida Hussain Rd, Jehanabad, Bihar 804408</span>
            </div>

            <button
              onClick={() => openOrderModal()}
              className="gradient-emerald-blue text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp: 8409582002</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
