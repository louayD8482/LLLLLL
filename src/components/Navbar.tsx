import React, { useState, useEffect } from 'react';
import { SchoolLogo } from './SchoolLogo';
import { Menu, X, Sun, Moon, GraduationCap, ShieldCheck, PhoneCall } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenRegistration: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenRegistration,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'عن المدرسة', href: '#about' },
    { label: 'الرؤية والرسالة', href: '#vision-mission' },
    { label: 'الأهداف والأسس', href: '#objectives-principles' },
    { label: 'المراحل الدراسية', href: '#stages' },
    { label: 'الهيئة التعليمية', href: '#faculty' },
    { label: 'الأخبار', href: '#news' },
    { label: 'معرض الصور', href: '#gallery' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-2.5'
          : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title (Vertical Stacked Format) */}
          <a
            href="#hero"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl p-1 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors"
            title="مدارس اليمن النموذجية - الرئيسية"
          >
            <SchoolLogo size={scrolled ? 44 : 52} showText={true} layout="vertical" />
          </a>

          {/* Desktop Navigation Links - Geometrically Balanced */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 text-slate-600 dark:text-slate-300 font-bold text-xs xl:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-blue-900 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs (Geometric Balance layout) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Registration Button */}
            <button
              onClick={onOpenRegistration}
              aria-label="تقديم طلب تسجيل طالب جديد"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-black rounded-xl bg-blue-900 hover:bg-blue-800 text-white shadow-sm cursor-pointer active:scale-95 transition-all"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>تسجيل طالب</span>
            </button>

            {/* Dark/Light Mode Interactive Toggle */}
            <button
              onClick={onToggleDarkMode}
              aria-label="تبديل الوضع الليلي والنهاري"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-black border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-amber-300 hover:border-amber-400 dark:hover:border-amber-400 hover:bg-white dark:hover:bg-slate-700 transition-all cursor-pointer shadow-xs"
              title={darkMode ? 'انقر للتحويل إلى الوضع النهاري' : 'انقر للتحويل إلى الوضع الليلي'}
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden xl:inline text-amber-300">الوضع النهاري</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-blue-900" />
                  <span className="hidden xl:inline text-slate-700">الوضع الليلي</span>
                </>
              )}
            </button>

            {/* Admin Panel Button */}
            <button
              onClick={onOpenAdmin}
              aria-label="لوحة تحكم إدارة المدرسة"
              title="لوحة تحكم الإدارة لإضافة الأخبار والصور وتحديث البيانات"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-blue-800 dark:text-blue-400" />
              <span className="hidden sm:inline">لوحة الإدارة</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="فتح القائمة الرئيسية"
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md px-4 pt-4 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Quick Dark Mode in Mobile Menu */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">مظهر التطبيق:</span>
            <button
              onClick={onToggleDarkMode}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-amber-300"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>الوضع النهاري</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-blue-900" />
                  <span>الوضع الليلي</span>
                </>
              )}
            </button>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-right px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-900 dark:hover:text-amber-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-black text-sm shadow-md shadow-blue-900/20 cursor-pointer transition-all active:scale-[0.98]"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>تقديم طلب تسجيل طالب جديد</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-blue-700 dark:text-blue-400" />
              <span>دخول لوحة تحكم الإدارة</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 text-sm font-bold"
            >
              <PhoneCall className="w-4 h-4" />
              <span>معلومات التواصل والموقع</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
