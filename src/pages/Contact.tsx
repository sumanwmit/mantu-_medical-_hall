import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Navigation,
  Pill
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { SEOHead } from '../components/SEOHead';
import { useOrderModal } from '../context/OrderModalContext';

export const Contact: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('General Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    if (!formName || !formPhone || !formMessage) {
      alert('Please enter your Name, Phone Number, and Message.');
      return;
    }

    const text = 
`Hello ${BUSINESS_INFO.name}
*Website Inquiry*

*Name:* ${formName}
*Phone:* ${formPhone}
${formEmail ? `*Email:* ${formEmail}\n` : ''}*Subject:* ${formSubject}
*Message:* ${formMessage}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="space-y-12 py-8 pb-16">
      <SEOHead
        title="Contact Us & Google Map Directions - Mantu Medical Hall"
        description="Visit or contact Mantu Medical Hall at Fida Hussain Rd, Jehanabad, Bihar 804408. Call 8409582002 or send WhatsApp order inquiries."
        keywords="Contact Mantu Medical Hall, Pharmacy phone Jehanabad 8409582002, Address Fida Hussain Rd Jehanabad map"
        canonicalPath="/contact"
      />

      {/* Page Header */}
      <section className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden max-w-7xl mx-auto shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Location & Direct Helpline</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight">
            Contact Mantu Medical Hall
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reach out for prescription inquiries, medicine availability checks, or driving directions to our store on Fida Hussain Road, Jehanabad.
          </p>

          {/* Prompt Required Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={() => openOrderModal()}
              className="gradient-emerald-blue text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>

            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Business Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Address Box */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                    Store Location Address
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Plus Code: {BUSINESS_INFO.plusCode}</p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed mb-4">
                {BUSINESS_INFO.address}
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200">Landmark:</span> {BUSINESS_INFO.landmark}
              </div>
            </div>

            {/* Phone & Email */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                    Direct Phone & WhatsApp
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Instant response during store hours</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <p className="flex items-center justify-between font-semibold text-slate-800 dark:text-slate-200">
                  <span>Calling Helpline:</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </p>
                <p className="flex items-center justify-between font-semibold text-slate-800 dark:text-slate-200">
                  <span>WhatsApp Orders:</span>
                  <button onClick={() => openOrderModal()} className="text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer">
                    {BUSINESS_INFO.phoneFormatted}
                  </button>
                </p>
                <p className="flex items-center justify-between font-semibold text-slate-800 dark:text-slate-200">
                  <span>Email:</span>
                  <span className="text-slate-600 dark:text-slate-400">{BUSINESS_INFO.email}</span>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-bold font-heading">Store Working Hours</h3>
              </div>
              <p className="text-2xl font-extrabold text-emerald-400">{BUSINESS_INFO.workingHours}</p>
              <p className="text-xs text-slate-400 mt-2">
                Open All 7 Days a Week. 24/7 emergency medicine inquiries via WhatsApp.
              </p>
            </div>

          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                  Quick Inquiry Form
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-1">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
                  Fill out the details below and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Thank you, {formName}! Mantu Medical Hall team will contact you shortly on {formPhone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#0A8F6A] underline hover:text-emerald-500"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 8409582002"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Subject
                      </label>
                      <select
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Medicine Stock Availability">Medicine Stock Availability</option>
                        <option value="Health Monitor Device Query">Health Monitor Device Query</option>
                        <option value="Baby Care Products">Baby Care Products</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Message / Medicine Inquiry *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Write your inquiry or list of required medicines..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-3.5 rounded-2xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-emerald-400" />
                      <span>Submit Website Form</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="flex-1 gradient-emerald-blue hover:opacity-95 text-white font-bold py-3.5 rounded-2xl text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send directly to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Embedded Interactive Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Find Mantu Medical Hall on Google Maps
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                6X8Q+5MJ, Fida Hussain Rd, Jehanabad, Bihar 804408
              </p>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="h-96 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
            <iframe
              title="Mantu Medical Hall Google Map Location"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
