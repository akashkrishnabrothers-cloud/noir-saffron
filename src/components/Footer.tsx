import React, { useState } from 'react';
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 1000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-[#090909] text-[#B7B0A8] subtle-border-top pt-14 sm:pt-16 lg:pt-20 pb-8 pb-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* COLUMN 1: BRAND */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1b1918] subtle-border flex items-center justify-center text-[#E6AF68] font-serif font-bold text-sm">
                N&amp;S
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#F5F1EC]">
                NOIR &amp; SAFFRON
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#858079] leading-relaxed max-w-sm">
              An extraordinary dining destination where culinary creativity meets timeless elegance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-11 h-11 rounded-full bg-[#161616] subtle-border flex items-center justify-center text-[#B7B0A8] hover:text-[#E6AF68] hover:border-[#D98739] transition-colors active:scale-95"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-11 h-11 rounded-full bg-[#161616] subtle-border flex items-center justify-center text-[#B7B0A8] hover:text-[#E6AF68] hover:border-[#D98739] transition-colors active:scale-95"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.056.23-.186.279-.429.168-1.603-.746-2.605-3.086-2.605-4.966 0-4.043 2.937-7.756 8.472-7.756 4.448 0 7.907 3.17 7.907 7.41 0 4.42-2.787 7.978-6.655 7.978-1.3 0-2.522-.676-2.94-1.472l-.8 3.052c-.289 1.109-1.07 2.499-1.595 3.344C9.567 23.834 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#F5F1EC] mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-widest">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Signature Menu', id: 'menu' },
                { label: 'Experiences', id: 'experiences' },
                { label: 'Our Story', id: 'our-story' },
                { label: 'Table Reservation', id: 'reservation' },
                { label: 'Contact Us', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="py-1.5 text-left hover:text-[#E6AF68] transition-colors focus:outline-none min-h-[36px] flex items-center"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT US */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#F5F1EC] mb-4 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D98739] shrink-0 mt-0.5" />
                <span>
                  1788 Gourmet Avenue,<br />
                  New Delhi, India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D98739] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#E6AF68] transition-colors py-1">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D98739] shrink-0" />
                <a href="mailto:hello@noirandsaffron.com" className="hover:text-[#E6AF68] transition-colors py-1">
                  hello@noirandsaffron.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D98739] shrink-0 mt-0.5" />
                <span>
                  Mon &ndash; Sun: 12:00 PM &ndash; 11:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#F5F1EC] mb-2 sm:mb-3 tracking-wide">
              Stay Connected
            </h4>
            <p className="text-xs sm:text-sm text-[#858079] leading-relaxed mb-4">
              Subscribe for exclusive dining offers, seasonal menus, and special events.
            </p>

            {subscribed ? (
              <div className="bg-[#1b1918] subtle-border p-3.5 rounded-xl text-xs text-[#E6AF68] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D98739] shrink-0" />
                <span>Thank you. You are on our private guest dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#161616] subtle-border rounded-xl px-4 py-3 text-base sm:text-sm text-[#F5F1EC] placeholder-[#858079] focus:outline-none focus:border-[#D98739] min-h-[48px]"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full py-3 bg-gradient-to-r from-[#D98739] to-[#E6AF68] text-[#090909] font-bold text-xs uppercase tracking-wider rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-md min-h-[48px]"
                  >
                    <span>SUBSCRIBE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {emailError && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1 pt-1">
                    <AlertCircle className="w-3 h-3" /> {emailError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="pt-6 sm:pt-8 subtle-border-top flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#858079] text-center sm:text-left">
          <p>&copy; 2026 NOIR &amp; SAFFRON. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#home" onClick={() => scrollTo('home')} className="hover:text-[#E6AF68] transition-colors py-1">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#home" onClick={() => scrollTo('home')} className="hover:text-[#E6AF68] transition-colors py-1">
              Terms of Service
            </a>
            <span>|</span>
            <a href="#home" onClick={() => scrollTo('home')} className="hover:text-[#E6AF68] transition-colors py-1">
              Hostinger Ready
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
