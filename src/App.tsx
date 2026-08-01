import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { OrderModalProvider } from './context/OrderModalContext';
import { EmergencyBar } from './components/EmergencyBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { Pill } from 'lucide-react';

// Lazy load the 5 separate React pages as required
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Scroll To Top on Route Change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Loading Fallback
const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-4">
    <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center animate-bounce shadow-lg">
      <Pill className="w-8 h-8" />
    </div>
    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 font-heading">
      Loading Mantu Medical Hall...
    </p>
  </div>
);

export default function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <OrderModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
            
            {/* Top 24/7 Helpline Bar */}
            <EmergencyBar />

            {/* Sticky Navigation */}
            <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

            {/* Main Lazy Loaded Page Routes */}
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>

            {/* Global Footer with Tracking Hook */}
            <Footer />

            {/* Floating WhatsApp, Call & Back to Top Buttons */}
            <FloatingButtons />

            {/* Global WhatsApp Order Modal Form */}
            <WhatsAppOrderModal />

            {/* Global Quick Search Overlay */}
            <QuickSearchModal
              isOpen={searchModalOpen}
              onClose={() => setSearchModalOpen(false)}
            />

          </div>
        </BrowserRouter>
      </OrderModalProvider>
    </ThemeProvider>
  );
}
