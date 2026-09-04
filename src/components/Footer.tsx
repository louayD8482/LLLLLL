import React from 'react';
import { SchoolLogo } from './SchoolLogo';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  GraduationCap,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { ContactInfo } from '../types';

interface FooterProps {
  contactInfo: ContactInfo;
  onOpenRegistration: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  contactInfo,
  onOpenRegistration,
  onOpenAdmin,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'عن المدرسة', href: '#about' },
    { label: 'الرؤية والرسالة', href: '#vision-mission' },
    { label: 'الأهداف والأسس', href: '#objectives-principles' },
    { label: 'المراحل الدراسية', href: '#stages' },
    { label: 'الهيئة التعليمية', href: '#faculty' },
    { label: 'الأخبار والإعلانات', href: '#news' },
    { label: 'معرض الصور', href: '#gallery' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-2 border-slate-800 text-right">
      {/* Top Banner */}
      <div className="bg-blue-950 border-b border-blue-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-right">
            <h3 className="text-xl font-black text-white">
              هل ترغب في تسجيل طفلك في مدارس اليمن النموذجية؟
            </h3>
            <p className="text-xs text-blue-200">
              المقاعد محدودة لضمان الكثافة الصفية المثالية. قدم طلبك إلكترونياً الآن.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenRegistration}
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-blue-950 font-black text-xs sm:text-sm shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              تقديم طلب تسجيل
            </button>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>تواصل واتساب</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* School Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <SchoolLogo size={54} showText={true} textColor="text-white" layout="vertical" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              صرح تعليمي نموذجي رائد في الجمهورية اليمنية، يسعى لتقديم خدمة تربوية وتعليمية نوعية تكسب الطلاب معارف ومهارات متطورة لبناء أجيال متسلحة علمياً وأخلاقياً قادرة على الابتكار وخدمة المجتمع.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-amber-400 font-bold">
              <span>«معاً نحو مستقبل أفضل»</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white border-r-4 border-blue-600 pr-2">
              روابط وأقسام الموقع
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(0, 6).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-black text-white border-r-4 border-amber-400 pr-2">
              بيانات التواصل المباشر
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">{contactInfo.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{contactInfo.email}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 border border-slate-800 rounded-xl px-3 py-1.5 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>بوابة مسؤولي المدرسة (لوحة التحكم)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} — مَدَارِسُ اليَمَنِ النَّمُوذَجِيَّة (Yemen Model Schools)
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-950 hover:bg-blue-900 text-slate-200 border border-blue-900 transition-colors shadow-sm cursor-pointer"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
