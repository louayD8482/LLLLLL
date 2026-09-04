import React from 'react';
import schoolOfficialEmblem from '../assets/images/school_official_emblem_new_1788539947195.jpg';

export interface SchoolLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  layout?: 'vertical' | 'horizontal' | 'stacked-center';
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 50,
  showText = false,
  textColor = '',
  layout = 'vertical',
}) => {
  return (
    <div
      className={`flex ${
        layout === 'stacked-center'
          ? 'flex-col items-center text-center gap-2'
          : 'items-center gap-3'
      } select-none ${className}`}
    >
      {/* Emblem Crest Badge */}
      <div
        className="relative shrink-0 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 p-[2px] transition-transform hover:scale-105"
        style={{ width: size, height: size }}
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden relative shadow-inner">
          <img
            src={schoolOfficialEmblem}
            alt="شعار مدارس اليمن النموذجية"
            className="w-full h-full object-contain object-center scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Typography: Vertical Stacked vs Horizontal */}
      {showText && (
        <div
          className={`flex flex-col ${
            layout === 'stacked-center' ? 'items-center text-center' : 'text-right justify-center'
          }`}
        >
          {layout === 'horizontal' ? (
            <div>
              <span
                className={`font-black tracking-tight text-lg md:text-xl ${
                  textColor || 'text-blue-900 dark:text-white'
                }`}
              >
                مَدَارِسُ اليَمَنِ النَّمُوذَجِيَّة
              </span>
              <span className="block text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase font-sans">
                Yemen Model Schools
              </span>
            </div>
          ) : (
            /* Vertical Multi-Line Stacked Format (طولي ومرتب تمام) */
            <div className="space-y-0.5 border-r-2 border-amber-500/80 dark:border-amber-400/80 pr-2.5">
              <div className="flex flex-col leading-tight text-right">
                <span className="text-[10px] sm:text-xs font-black text-amber-600 dark:text-amber-400 tracking-wider">
                  مَــــدَارِسُ
                </span>
                <span
                  className={`text-sm sm:text-base font-black tracking-tight ${
                    textColor || 'text-blue-900 dark:text-white'
                  }`}
                >
                  اليَــمَــنِ
                </span>
                <span className="text-[11px] sm:text-xs font-black text-slate-800 dark:text-blue-300 tracking-wide">
                  النَّــمُــوذَجِــيَّــة
                </span>
              </div>
              <span className="block text-[8.5px] sm:text-[9px] font-bold text-slate-400 dark:text-slate-400 tracking-widest uppercase font-sans">
                YEMEN MODEL SCHOOLS
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

