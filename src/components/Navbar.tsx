import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Pill, 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Search,
  Cross
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useTheme } from '../context/ThemeContext';
import { useOrderModal } from '../context/OrderModalContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { openOrderModal } = useOrderModal();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Contact & Map', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl gradient-emerald-blue p-0.5 flex items-center justify-center shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <Cross className="w-6 h-6 text-emerald-600 dark:text-emerald-400 absolute opacity-20 transform rotate-12" />
                <Pill className="w-6 h-6 text-[#0A8F6A] dark:text-emerald-400 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1 font-heading">
                Mantu <span className="text-[#0A8F6A] dark:text-emerald-400">Medical Hall</span>
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                Genuine Pharmacy • Jehanabad
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200 dark:border-slate-700/60">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-[#0A8F6A] text-white shadow-md shadow-emerald-600/20'
                    : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-white/60 dark:hover:bg-slate-700/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Medicine Search Trigger */}
            <button
              onClick={onOpenSearch}
              title="Search Medicine Inventory"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer flex items-center gap-2 text-xs font-medium"
            >
              <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden xl:inline">Search Stock...</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* WhatsApp Order Button */}
            <button
              onClick={() => openOrderModal()}
              className="gradient-emerald-blue hover:opacity-95 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'light' ? <Moon className="w-5 h-5 text-slate-700" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#0A8F6A] text-white font-bold'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openOrderModal();
              }}
              className="w-full gradient-emerald-blue text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Order via WhatsApp</span>
            </button>
            
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Store: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
