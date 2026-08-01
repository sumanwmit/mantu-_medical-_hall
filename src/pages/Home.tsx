import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  HeartPulse, 
  Award, 
  Clock, 
  Users, 
  Search, 
  HelpCircle, 
  Sparkles,
  Pill,
  Send,
  Star
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST, REVIEWS_LIST, FAQ_LIST, HEALTH_TIPS, WHY_CHOOSE_US } from '../data/businessData';
import { SEOHead } from '../components/SEOHead';
import { useOrderModal } from '../context/OrderModalContext';

export const Home: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  const featuredServices = SERVICES_LIST.slice(0, 6);
  const topFaqs = FAQ_LIST.slice(0, 4);

  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      <SEOHead
        title="Home - Mantu Medical Hall Pharmacy Jehanabad"
        description="Your trusted medical store in Jehanabad for 100% genuine prescription medicines, healthcare devices, surgical items, baby care, and WhatsApp order delivery."
        keywords="Mantu Medical Hall, Pharmacy in Jehanabad, Medical Store Fida Hussain Rd, Genuine Medicines Bihar, WhatsApp Medicine Order Jehanabad"
        canonicalPath="/"
        faqList={topFaqs.map(f => ({ question: f.question, answer: f.answer }))}
      />

      {/* Hero Banner Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-900 text-white pt-6 pb-16">
        {/* Hero Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1920"
            alt="Mantu Medical Hall Pharmacy Interior"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-pulse duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Genuine Certified Medicines • Fida Hussain Rd, Jehanabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight">
              Your Trusted Medical Store for <span className="text-emerald-400 underline decoration-emerald-500/50 decoration-wavy">Genuine Medicines</span> & Healthcare Needs
            </h1>

            {/* Description as required in prompt */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
            </p>

            {/* Required Action Buttons: Call Now, WhatsApp Order, Get Directions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-xl shadow-emerald-600/30 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <button
                onClick={() => openOrderModal()}
                className="gradient-emerald-blue hover:opacity-95 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-xl shadow-emerald-600/30 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2.5 transition-colors backdrop-blur-sm"
              >
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Open Everyday 8 AM - 10 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>12+ Years Local Trust</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>15,000+ Families Served</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Short About Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Mantu Medical Hall</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading leading-tight">
              Jehanabad’s Premier Chemist & Healthcare Destination
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Established in 2012 at Fida Hussain Road, Mantu Medical Hall has grown into Jehanabad's most dependable pharmacy. We strictly sell 100% genuine medications, maintain temperature-controlled storage for sensitive drugs, and offer expert guidance to ensure your family stays healthy.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Direct Authorized Stockists</span>
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Refrigerated Cold-Chain Storage</span>
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Fast Local WhatsApp Order Service</span>
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Fair Transparent MRP Pricing</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A8F6A] hover:text-emerald-500 transition-colors group"
              >
                <span>Read Our Complete Business Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800"
                alt="Mantu Medical Hall Counter"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#0A8F6A] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border-2 border-white dark:border-slate-800">
              <span className="text-3xl font-extrabold font-heading">12+</span>
              <span className="text-xs font-bold leading-tight uppercase">Years of Service<br/>in Jehanabad</span>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Services Preview Section (Maximum 6 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-2">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Comprehensive Healthcare Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              Our Core Pharmacy Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-xl">
              Everything your family needs for daily wellness, prescription fulfillment, and home health monitoring.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors shrink-0"
          >
            <span>View All Services & Inventory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map(service => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Pill className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-2 group-hover:text-[#0A8F6A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 mb-4">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Popular Item:</span> {service.popularItem}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => openOrderModal(service.title)}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order {service.title}</span>
                </button>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-100 dark:bg-slate-900/60 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              The Mantu Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
              Why Families Trust Mantu Medical Hall
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              We combine traditional pharmaceutical ethics with modern WhatsApp order convenience for Jehanabad residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-base mb-4 font-heading border border-emerald-200 dark:border-emerald-800">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Preview / Featured Inventory CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-emerald-blue rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-md">
              <Search className="w-3.5 h-3.5" />
              <span>Searchable Medicine Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading leading-tight">
              Looking for a Specific Medicine or BP Monitor?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Use our live stock checker on the Services page to check prices, stock availability, and expiry dates before visiting our Fida Hussain Road store.
            </p>
          </div>

          <div className="z-10 shrink-0 space-y-3 w-full sm:w-auto text-center sm:text-left">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold text-base shadow-xl transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Search className="w-5 h-5 text-emerald-600" />
              <span>Search Stock Checker Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            What Our Local Customers Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Real feedback from verified patients and doctors in Jehanabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_LIST.slice(0, 2).map(review => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm italic leading-relaxed mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{review.author}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{review.location}</p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Verified Local Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
              Have Questions About Ordering?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {topFaqs.map(faq => (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Pharmacist Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              Latest Health & Wellness Tips
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map(tip => (
            <div
              key={tip.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group hover:shadow-xl transition-all"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md">
                  {tip.category}
                </span>
              </div>
              <div className="p-5">
                <span className="text-[11px] text-slate-400 font-medium">{tip.date} • {tip.readTime}</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mt-1 mb-2 group-hover:text-[#0A8F6A] transition-colors leading-snug">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tip.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Stay Updated with Health Alerts & Stock Restocks
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Subscribe for local Jehanabad health guidance and seasonal medicine availability updates.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to Mantu Medical Hall updates!');
            }}
            className="flex w-full lg:w-auto items-center gap-2 max-w-md"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};
