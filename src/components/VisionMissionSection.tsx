import React from 'react';
import { Eye, Mail, Award, Target, Sparkles, Check } from 'lucide-react';
import { INITIAL_MISSION, INITIAL_VISION } from '../data/schoolData';

export const VisionMissionSection: React.FC = () => {
  return (
    <section
      id="vision-mission"
      className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden"
    >
      {/* Decorative subtle polygon accents */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-900 clip-path-hero opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-900 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-2xs">
            <Award className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
            <span>البَوْصَلَةُ التَّرْبَوِيَّة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            الرُّؤْيَةُ <span className="text-blue-700 dark:text-blue-400">وَالرِّسَالَة</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            المنطلقات الاستراتيجية المعتمدة لمدارس اليمن النموذجية وفق الوثيقة الرسمية للمؤسسة.
          </p>
        </div>

        {/* 2 Main Showcase Cards: Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Vision Card (الرؤية) */}
          <div className="relative group">
            <div className="h-full rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-blue-700 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between text-right overflow-hidden relative">
              {/* Top Accent Band */}
              <div className="absolute top-0 right-0 left-0 h-2.5 bg-blue-900" />

              <div className="space-y-5 pt-2">
                {/* Icon & Label */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                    <Eye className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900 text-blue-900 dark:text-blue-300 font-bold text-xs">
                    الطموح والمستقبل
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                    الرُّؤْيَة
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                    Our Vision — الغاية الكبرى لمدارسنا
                  </p>
                </div>

                {/* The Exact Vision Text */}
                <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                  <blockquote className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                    «{INITIAL_VISION}»
                  </blockquote>
                </div>

                {/* Breakdown items */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>الريادة الأكاديمية على مستوى مدارس الجمهورية اليمنية.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>تطبيق أرقى المعايير التربوية والتعليمية الحديثة.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>تخريج أجيال تتبوأ مقاعد التفوق في الجامعات وسوق العمل.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>وثيقة الاعتماد المؤسسي</span>
                <span className="font-bold text-blue-900 dark:text-blue-400">مدارس اليمن النموذجية</span>
              </div>
            </div>
          </div>

          {/* Mission Card (الرسالة) */}
          <div className="relative group">
            <div className="h-full rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 flex flex-col justify-between text-right overflow-hidden relative">
              {/* Top Accent Band */}
              <div className="absolute top-0 right-0 left-0 h-2.5 bg-amber-400" />

              <div className="space-y-5 pt-2">
                {/* Icon & Label */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center shadow-lg shadow-amber-400/20">
                    <Mail className="w-7 h-7 text-blue-950" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-900 text-amber-800 dark:text-amber-300 font-bold text-xs">
                    الواجب والمسؤولية
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                    الرِّسَالَة
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    Our Mission — دورنا التربوي اليومي
                  </p>
                </div>

                {/* The Exact Mission Text */}
                <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-slate-800/80 border border-amber-100 dark:border-slate-700">
                  <blockquote className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                    «{INITIAL_MISSION}»
                  </blockquote>
                </div>

                {/* Breakdown items */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>تعليم نوعي متطور يلبي متطلبات العصر والتقنية.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>تسلح علمي وأخلاقي وثقافي واجتماعي متكامل.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>تنمية التفكير والابتكار والإبداع والمساهمة في خدمة المجتمع.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>الالتزام التربوي والأخلاقي</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">مدارس اليمن النموذجية</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
