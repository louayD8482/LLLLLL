import React, { useState } from 'react';
import {
  GraduationCap,
  Baby,
  BookMarked,
  CheckCircle,
  Layers,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import { EDUCATIONAL_STAGES } from '../data/schoolData';

interface StagesSectionProps {
  onOpenRegistration: () => void;
}

export const StagesSection: React.FC<StagesSectionProps> = ({ onOpenRegistration }) => {
  const [selectedStageId, setSelectedStageId] = useState(EDUCATIONAL_STAGES[0].id);

  const selectedStage =
    EDUCATIONAL_STAGES.find((s) => s.id === selectedStageId) || EDUCATIONAL_STAGES[0];

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'kindergarten':
        return Baby;
      case 'primary':
        return GraduationCap;
      case 'secondary':
        return BookMarked;
      default:
        return GraduationCap;
    }
  };

  return (
    <section
      id="stages"
      className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-900 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
            <span>المَسَارَاتُ التَّعْلِيمِيَّة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            المَرَاحِلُ الدِّرَاسِيَّةُ <span className="text-blue-700 dark:text-blue-400">بِالمَدَارِس</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            منظومة تعليمية متدرجة تضمن البناء المعرفي والقيمي المتين للطالب من سن الطفولة المبكرة حتى التخرج.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {EDUCATIONAL_STAGES.map((stage) => {
            const Icon = getStageIcon(stage.id);
            const isActive = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/70 border-2 border-slate-200 dark:border-slate-700'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-white/20 text-amber-300' : 'bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{stage.title.split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Showcase */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Stage Text & Curricula */}
            <div className="lg:col-span-8 space-y-6 text-right">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 text-xs font-black">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{selectedStage.grades}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {selectedStage.title}
                </h3>
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                  {selectedStage.subtitle}
                </p>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedStage.description}
              </p>

              {/* Distinctive Features */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  أبرز ما يميز هذه المرحلة في مدارسنا:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedStage.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={onOpenRegistration}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-sm font-bold shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98]"
                >
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                  <span>تسجيل طالب جديد في هذه المرحلة</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Stage Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl p-6 bg-blue-950 text-white text-right space-y-5 shadow-2xl border border-blue-800/80 relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  {React.createElement(getStageIcon(selectedStage.id), {
                    className: 'w-7 h-7 text-amber-300',
                  })}
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">
                    معايير الجودة الأكاديمية
                  </span>
                  <h4 className="text-xl font-black">بيئة تربوية محفزة للنمو</h4>
                  <p className="text-xs text-blue-100/80 leading-relaxed">
                    متابعة دورية مع أولياء الأمور، تقارير أداء شهرية، خطط علاجية للمتعثرين، وبرامج خاصة لرعاية الموهوبين والمتميزين.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-blue-200">
                    <span>نسبة الإشراف المباشر:</span>
                    <span className="font-bold text-white">معلم لكل 20 طالب</span>
                  </div>
                  <div className="flex justify-between items-center text-blue-200">
                    <span>الأنشطة المرافقة:</span>
                    <span className="font-bold text-white">رياضية، ثقافية، علمية</span>
                  </div>
                  <div className="flex justify-between items-center text-blue-200">
                    <span>الخدمات المساندة:</span>
                    <span className="font-bold text-white">إرشاد نفسي وصحي</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
