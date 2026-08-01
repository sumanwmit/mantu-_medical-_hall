import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Pill, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  MessageSquare, 
  Filter, 
  RefreshCw,
  FileText,
  Tag,
  ArrowUpDown
} from 'lucide-react';
import stockDataRaw from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { useOrderModal } from '../context/OrderModalContext';

export const MedicineStockChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'mrp'>('name');
  const { openOrderModal } = useOrderModal();

  // Cast JSON data
  const inventory: MedicineItem[] = stockDataRaw as MedicineItem[];

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(inventory.map(item => item.category)));
    return ['All', ...cats];
  }, [inventory]);

  // Filter & Search Logic
  const filteredInventory = useMemo(() => {
    return inventory
      .filter(item => {
        const matchesSearch =
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          selectedCategory === 'All' || item.category === selectedCategory;

        const matchesStatus =
          statusFilter === 'All' || item.status === statusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return a.mrp - b.mrp;
      });
  }, [inventory, searchTerm, selectedCategory, statusFilter, sortBy]);

  const getStatusBadge = (status: MedicineItem['status'], qty: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Available ({qty} in stock)</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Limited Stock ({qty} left)</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>Out of Stock</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-800">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-2">
            <Pill className="w-3.5 h-3.5" />
            <span>Live Stock Availability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Medicine & Healthcare Stock Checker
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Search 100% genuine medicines available at Mantu Medical Hall, Fida Hussain Rd, Jehanabad.
          </p>
        </div>

        <button
          onClick={() => {
            setSearchTerm('');
            setSelectedCategory('All');
            setStatusFilter('All');
          }}
          className="self-start md:self-auto flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Search & Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        {/* Search Input */}
        <div className="relative sm:col-span-2">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name, brand (e.g. Dolo, Cipla, Omron)..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
          />
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full py-3 px-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                Category: {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Stock Status Filter */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full py-3 px-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] cursor-pointer"
          >
            <option value="All">All Stock Statuses</option>
            <option value="Available">Available</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

      </div>

      {/* Results Count & Sort */}
      <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 px-1">
        <span>Found <strong className="text-slate-900 dark:text-white">{filteredInventory.length}</strong> items in inventory</span>
        
        <div className="flex items-center gap-2">
          <span>Sort:</span>
          <button
            onClick={() => setSortBy(sortBy === 'name' ? 'mrp' : 'name')}
            className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 font-semibold hover:text-[#0A8F6A] cursor-pointer"
          >
            <span>{sortBy === 'name' ? 'Name (A-Z)' : 'MRP (Low to High)'}</span>
            <ArrowUpDown className="w-3 h-3 text-emerald-600" />
          </button>
        </div>
      </div>

      {/* Grid of Medicine Cards */}
      {filteredInventory.length === 0 ? (
        <div className="text-center py-12 px-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
          <Pill className="w-10 h-10 text-slate-400 mx-auto mb-3 animate-bounce" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 font-heading">
            No exact stock match found
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mt-1 mb-4">
            We might still have this medicine in our physical store counter or can arrange it within hours. Message us directly on WhatsApp!
          </p>
          <button
            onClick={() => openOrderModal(searchTerm)}
            className="gradient-emerald-blue text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire '{searchTerm || 'Medicine'}' on WhatsApp</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredInventory.map(item => (
            <div
              key={item.id}
              className="bg-slate-50/80 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Status Badge & Rx */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  {getStatusBadge(item.status, item.availableQuantity)}
                  {item.prescriptionRequired && (
                    <span className="text-[11px] font-bold text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-950/80 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900 flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span>Rx Required</span>
                    </span>
                  )}
                </div>

                {/* Name & Brand */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading group-hover:text-[#0A8F6A] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>Brand: {item.brand}</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span>{item.packSize || item.dosageForm}</span>
                </p>

                {/* Usage Summary */}
                {item.usageSummary && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 bg-white/80 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Used for:</span> {item.usageSummary}
                  </p>
                )}
              </div>

              {/* Bottom Price & Action */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                      ₹{item.discountMrp ? item.discountMrp.toFixed(2) : item.mrp.toFixed(2)}
                    </span>
                    {item.discountMrp && item.discountMrp < item.mrp && (
                      <span className="text-xs text-slate-400 line-through">
                        MRP ₹{item.mrp.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Expiry: <span className="font-medium text-slate-600 dark:text-slate-300">{item.expiry}</span>
                  </p>
                </div>

                <button
                  onClick={() => openOrderModal(item.name)}
                  disabled={item.status === 'Out of Stock'}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    item.status === 'Out of Stock'
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/30 active:scale-95'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{item.status === 'Out of Stock' ? 'Unavailable' : 'Order Now'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Notice */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
        <p>• Stock updated daily at Mantu Medical Hall counter, Fida Hussain Rd, Jehanabad.</p>
        <p className="font-semibold text-[#0A8F6A]">WhatsApp Hotline: 8409582002</p>
      </div>

    </div>
  );
};
