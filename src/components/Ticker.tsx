import React from 'react';
import { Megaphone, Phone, Clock, Sparkles } from 'lucide-react';

interface TickerProps {
  phone: string;
}

export const Ticker: React.FC<TickerProps> = ({ phone }) => {
  return (
    <div className="bg-blue-950 text-slate-300 text-xs border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        {/* Urgent announcement */}
        <div className="flex items-center gap-2 overflow-hidden flex-1 min-w-[280px]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-blue-950 font-bold text-[11px] shrink-0 shadow-sm">
            <Megaphone className="w-3.5 h-3.5 animate-pulse" />
            إعلان هام
          </span>
          <p className="truncate text-slate-300 text-xs">
            📢 باب القبول والتسجيل للعام الدراسي الجديد مفتوح حالياً لجميع المراحل الدراسية مع خصومات خاصة للمتفوقين والإخوة.
          </p>
        </div>

        {/* Quick contact badge and hours */}
        <div className="hidden md:flex items-center gap-4 text-slate-300 text-xs shrink-0">
          <div className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>الدوام الرسمي: 7:30 ص - 2:00 م</span>
          </div>
          <span className="text-blue-800">|</span>
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
