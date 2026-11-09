import React, { useState } from 'react';
import { Calendar, Users, CheckCircle2, AlertCircle, X, Plus, Minus } from 'lucide-react';
import { ReservationFormData } from '../types';

interface ReservationSectionProps {
  preselectedExperience?: string | null;
}

const TIME_SLOTS = [
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
  '10:00 PM',
];

const SEATING_PREFERENCES = [
  'Main Dining Salon (Romantic Ambience)',
  "Chef's Counter (Open Kitchen View)",
  'Private Alcove (Secluded & Intimate)',
  'Sunset Terrace (Skyline Glass Lounge)',
];

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  preselectedExperience,
}) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    email: '',
    phone: '',
    date: today,
    time: '08:00 PM',
    guests: 2,
    tablePreference: 'Main Dining Salon (Romantic Ambience)',
    specialRequests: preselectedExperience ? `Bespoke Experience: ${preselectedExperience}` : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  const validate = () => {
    const errs: Partial<Record<keyof ReservationFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please provide a valid phone number';
    }
    if (!formData.date) errs.date = 'Please select a reservation date';
    if (!formData.time) errs.time = 'Please select a preferred dining time';
    if (formData.guests < 1 || formData.guests > 16) {
      errs.guests = 'Party size must be between 1 and 16 guests';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = 'NS-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
    }, 700);
  };

  return (
    <section id="reservation" className="relative py-14 sm:py-20 lg:py-28 bg-[#090909]">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[500px] bg-[#D98739]/5 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-6 sm:w-8 h-[1px] bg-[#D98739]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D98739]">
              TABLE RESERVATION
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#D98739]" />
          </div>

          <h2 className="font-serif text-[clamp(1.85rem,5.5vw,3rem)] font-semibold text-[#F5F1EC] tracking-tight">
            Your Table{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D98739] to-[#E6AF68]">
              Awaits
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#B7B0A8] font-light leading-relaxed max-w-md mx-auto">
            Make your next dining experience truly unforgettable. Reserve your table in advance to
            ensure an exquisite evening.
          </p>
        </div>

        {/* Reservation Form Card (Mobile-friendly padding & fields) */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#141414] subtle-border p-4 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
          <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#B7B0A8] mb-1.5">
                  Full Name <span className="text-[#D98739]">*</span>
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Vivienne Montgomery"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-3 text-base sm:text-sm text-[#F5F1EC] placeholder-[#858079] focus:outline-none focus:border-[#D98739] transition-colors min-h-[48px] ${
                    errors.fullName ? 'border-red-500' : ''
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#B7B0A8] mb-1.5">
                  Email Address <span className="text-[#D98739]">*</span>
                </label>
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="e.g. vivienne@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-3 text-base sm:text-sm text-[#F5F1EC] placeholder-[#858079] focus:outline-none focus:border-[#D98739] transition-colors min-h-[48px] ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#B7B0A8] mb-1.5">
                  Phone Number <span className="text-[#D98739]">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-3 text-base sm:text-sm text-[#F5F1EC] placeholder-[#858079] focus:outline-none focus:border-[#D98739] transition-colors min-h-[48px] ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Reservation Date */}
              <div>
                <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#B7B0A8] mb-1.5">
                  Reservation Date <span className="text-[#D98739]">*</span>
                </label>
                <input
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-3 text-base sm:text-sm text-[#F5F1EC] focus:outline-none focus:border-[#D98739] transition-colors min-h-[48px]"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#B7B0A8] mb-1.5">
                  Preferred Time <span className="text-[#D98739]">*</span>
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-3 text-base sm:text-sm text-[#F5F1EC] focus:outline-none focus:border-[#D98739] transition-colors min-h-[48px]"
                >
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t} className="bg-[#1b1918] text-[#F5F1EC]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Guests with touch-friendly Stepper */}
              <div>
                <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#B7B0A8] mb-1.5">
                  Number of Guests <span className="text-[#D98739]">*</span>
                </label>
                <div className="flex items-center justify-between bg-[#1e1c1b] subtle-border rounded-xl px-3 py-2 min-h-[48px]">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, guests: Math.max(1, formData.guests - 1) })}
                    className="w-9 h-9 rounded-lg bg-[#141414] subtle-border flex items-center justify-center text-[#B7B0A8] hover:text-[#F5F1EC] active:scale-95"
                    aria-label="Decrease guest count"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#D98739]" />
                    <span className="font-serif text-lg font-bold text-[#F5F1EC] tabular-nums">
                      {formData.guests}
                    </span>
                    <span className="text-xs text-[#858079]">
                      {formData.guests === 1 ? 'Guest' : 'Guests'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, guests: Math.min(16, formData.guests + 1) })}
                    className="w-9 h-9 rounded-lg bg-[#141414] subtle-border flex items-center justify-center text-[#B7B0A8] hover:text-[#F5F1EC] active:scale-95"
                    aria-label="Increase guest count"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Seating Preference */}
            <div>
              <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#B7B0A8] mb-1.5">
                Seating Atmosphere Preference
              </label>
              <select
                value={formData.tablePreference}
                onChange={(e) => setFormData({ ...formData, tablePreference: e.target.value })}
                className="w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-3 text-base sm:text-sm text-[#F5F1EC] focus:outline-none focus:border-[#D98739] transition-colors min-h-[48px]"
              >
                {SEATING_PREFERENCES.map((pref) => (
                  <option key={pref} value={pref} className="bg-[#1b1918] text-[#F5F1EC]">
                    {pref}
                  </option>
                ))}
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#B7B0A8] mb-1.5">
                Special Requests or Dietary Allergies
              </label>
              <textarea
                rows={2}
                placeholder="Anniversary celebration, window table preference, allergies, etc."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-3 text-base sm:text-sm text-[#F5F1EC] placeholder-[#858079] focus:outline-none focus:border-[#D98739] transition-colors"
              />
            </div>

            {/* Demo Notice */}
            <p className="text-[10px] sm:text-[11px] text-[#858079] text-center leading-relaxed">
              * Demonstration: Reservation requests simulate instant table assignment with immediate verification.
            </p>

            {/* Submit Button (Min 48px touch target) */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#D98739] via-[#E6AF68] to-[#D98739] text-[#090909] font-bold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:brightness-110 active:scale-98 transition-all duration-300 shadow-[0_4px_30px_rgba(217,135,57,0.35)] flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                {isSubmitting ? (
                  <span>CONFIRMING RESERVATION...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#090909]" />
                    <span>CONFIRM RESERVATION</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmationCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#141414] subtle-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl text-center max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => setConfirmationCode(null)}
              className="absolute top-4 right-4 text-[#858079] hover:text-[#F5F1EC] w-10 h-10 flex items-center justify-center"
              aria-label="Close confirmation"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-14 h-14 rounded-full bg-[#1e1c1b] subtle-border text-[#E6AF68] mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#D98739]" />
            </div>

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#D98739] font-semibold block mb-1">
              Table Reserved
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#F5F1EC] mb-1.5">
              We Look Forward to Hosting You
            </h3>
            <p className="text-xs sm:text-sm text-[#B7B0A8] mb-5">
              A private confirmation summary has been registered for{' '}
              <strong className="text-[#F5F1EC]">{formData.fullName}</strong>.
            </p>

            <div className="bg-[#1e1c1b] subtle-border rounded-xl p-3.5 sm:p-4 text-left space-y-2 mb-5 text-xs text-[#B7B0A8]">
              <div className="flex justify-between border-b border-[rgba(207,143,77,0.15)] pb-2">
                <span>Confirmation Code:</span>
                <span className="font-mono font-bold text-[#E6AF68] text-sm">
                  {confirmationCode}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Date &amp; Time:</span>
                <span className="text-[#F5F1EC] font-medium">
                  {formData.date} at {formData.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Party Size:</span>
                <span className="text-[#F5F1EC] font-medium">
                  {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Atmosphere:</span>
                <span className="text-[#F5F1EC] font-medium truncate ml-2">
                  {formData.tablePreference}
                </span>
              </div>
            </div>

            <div className="p-2.5 bg-[#242424]/60 rounded-lg text-[10px] sm:text-[11px] text-[#858079] mb-5 leading-relaxed">
              * Demonstration Notice: This booking request is a functional simulated reservation created for testing the restaurant guest workflow.
            </div>

            <button
              onClick={() => setConfirmationCode(null)}
              className="w-full py-3.5 bg-[#1e1c1b] subtle-border hover:border-[#D98739] text-[#F5F1EC] hover:text-[#E6AF68] font-semibold text-xs tracking-wider uppercase rounded-xl transition-colors min-h-[44px]"
            >
              CLOSE CONFIRMATION
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
