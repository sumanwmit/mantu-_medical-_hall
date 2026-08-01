import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Heart,
  Pill,
  X
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(err => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/30">
                <Pill className="w-6 h-6 transform -rotate-12" />
              </div>
              <span className="text-xl font-bold text-white font-heading tracking-wide">
                Mantu <span className="text-emerald-400">Medical Hall</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted neighborhood pharmacy on Fida Hussain Road, Jehanabad. Providing 100% genuine prescription medicines, OTC items, health devices, and baby care products since 2012.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Pharmaceutical Quality</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base font-heading mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-emerald-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">•</span> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">•</span> About Mantu Medical Hall
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">•</span> Healthcare Services & Medicine Stock
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">•</span> Store Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">•</span> Contact & Google Map Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours & Support */}
          <div>
            <h3 className="text-white font-bold text-base font-heading mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Operating Hours</span>
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <p className="text-xs text-slate-400 font-medium">Store Working Schedule</p>
                <p className="text-emerald-400 font-bold text-base mt-0.5">{BUSINESS_INFO.workingHours}</p>
                <p className="text-xs text-slate-400 mt-1">Open All 7 Days a Week</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 WhatsApp Medicine Order Assistance</span>
              </div>
            </div>
          </div>

          {/* Col 4: Store Location & Contact */}
          <div>
            <h3 className="text-white font-bold text-base font-heading mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Contact Information</span>
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-emerald-400 font-semibold transition-colors">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </p>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-3 py-2 rounded-xl transition-colors mt-1"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Disclaimer Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => setModalType('privacy')} className="hover:text-emerald-400 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setModalType('terms')} className="hover:text-emerald-400 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => setModalType('disclaimer')} className="hover:text-emerald-400 transition-colors cursor-pointer">
              Medical Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-slate-400">
            <span>Developed by</span>
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
            >
              <span>WMIT</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Policy Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacy' && (
              <div>
                <h3 className="text-xl font-bold font-heading mb-3 text-slate-900 dark:text-white">Privacy Policy</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  At Mantu Medical Hall, your privacy is paramount. Any personal information (such as customer name, mobile number, delivery address, or prescriptions shared via WhatsApp or our contact forms) is used solely to facilitate your medicine order fulfillment and inquiries.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We never sell, trade, or expose your health prescription records or private data to third-party marketing companies.
                </p>
              </div>
            )}

            {modalType === 'terms' && (
              <div>
                <h3 className="text-xl font-bold font-heading mb-3 text-slate-900 dark:text-white">Terms of Service</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  1. Prescription drugs under Schedule H & H1 mandate a valid doctor's prescription prior to dispatch.<br/>
                  2. All prices listed are subject to official pharmaceutical MRP tags.<br/>
                  3. Stock availability may vary and is confirmed instantly via our WhatsApp ordering channel.
                </p>
              </div>
            )}

            {modalType === 'disclaimer' && (
              <div>
                <h3 className="text-xl font-bold font-heading mb-3 text-slate-900 dark:text-white">Medical Disclaimer</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  The health information and product details on this website are provided for informational and educational purposes only and do not replace professional medical advice from a registered doctor.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Always consult your physician before starting or changing any medication or health regimen.
                </p>
              </div>
            )}

            <button
              onClick={() => setModalType(null)}
              className="mt-5 w-full bg-slate-800 dark:bg-slate-700 text-white font-semibold py-2.5 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
