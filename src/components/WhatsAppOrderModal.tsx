import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Upload, 
  Phone, 
  CheckCircle, 
  FileText, 
  Clock, 
  MapPin, 
  User, 
  Pill,
  Send
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useOrderModal } from '../context/OrderModalContext';

export const WhatsAppOrderModal: React.FC = () => {
  const { isOpen, prefilledMedicine, closeOrderModal } = useOrderModal();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [hasPrescription, setHasPrescription] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [preferredTime, setPreferredTime] = useState('Immediate / As Soon As Possible');

  useEffect(() => {
    if (prefilledMedicine) {
      setMedicineName(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
      setHasPrescription(true);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !phone.trim() || !medicineName.trim()) {
      alert('Please fill in your Name, Phone Number, and Medicine Required.');
      return;
    }

    const prescriptionStatusText = hasPrescription 
      ? `Yes (File: ${prescriptionFile?.name || 'Attached'})` 
      : 'No / Will show upon pickup';

    const formattedMessage = 
`Hello ${BUSINESS_INFO.name}
*Medicine Order Inquiry*

*Customer Name:* ${customerName.trim()}
*Phone:* ${phone.trim()}
${email.trim() ? `*Email:* ${email.trim()}\n` : ''}*Medicine Required:* ${medicineName.trim()}
*Address:* ${address.trim() || 'Pickup from Store'}
*Prescription:* ${prescriptionStatusText}
*Preferred Time:* ${preferredTime}
${message.trim() ? `*Notes:* ${message.trim()}\n` : ''}
Please confirm availability and total price. Thank you!`;

    const encodedMsg = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank');
    closeOrderModal();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={closeOrderModal}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-[#0A8F6A] dark:text-emerald-400 shrink-0 border border-emerald-200 dark:border-emerald-800">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Fast WhatsApp Order & Inquiry
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
              Order Genuine Medicines
            </h2>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-emerald-600" />
                <span>Customer Name *</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mobile Number *</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 8409582002"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
              />
            </div>
          </div>

          {/* Email & Delivery Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Delivery Address / Area</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. Fida Hussain Rd, Jehanabad"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
              />
            </div>
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <Pill className="w-3.5 h-3.5 text-emerald-600" />
              <span>Medicine Required / Products List *</span>
            </label>
            <textarea
              required
              rows={2}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Dolo 650 - 2 strips, Pan 40 - 1 strip, Omron BP Monitor"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
            />
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Upload Prescription Photo</span>
            </label>
            <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-center hover:border-emerald-500 transition-colors bg-slate-50/50 dark:bg-slate-800/40">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {prescriptionFile ? (
                <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                  <CheckCircle className="w-4 h-4" />
                  <span>Prescription Attached: {prescriptionFile.name}</span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 text-xs">
                  <Upload className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-1" />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Click or Drag Prescription Image</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Supports JPG, PNG or PDF (Doctor prescription photo)</span>
                </div>
              )}
            </div>
          </div>

          {/* Preferred Delivery Time & Additional Message */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Preferred Delivery Time</span>
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
              >
                <option value="Immediate / As Soon As Possible">Immediate / Emergency</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
                <option value="Self Pickup at Fida Hussain Rd Store">Self Pickup at Store</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Additional Message / Notes
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Please check expiry date"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 gradient-emerald-blue hover:opacity-95 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-98"
            >
              <Send className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-colors border border-slate-200 dark:border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Store Now</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-slate-400 pt-1">
            • Instant WhatsApp connect to 8409582002. Mantu Medical Hall, Fida Hussain Rd, Jehanabad.
          </p>

        </form>
      </div>
    </div>
  );
};
