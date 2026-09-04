import React, { useState } from 'react';
import {
  Target,
  Sparkles,
  HeartHandshake,
  BookOpenCheck,
  TrendingUp,
  Award,
  Trophy,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Users,
  Building,
  RefreshCw,
  LineChart,
} from 'lucide-react';
import { INITIAL_OBJECTIVES, INITIAL_PRINCIPLES } from '../data/schoolData';

export const ObjectivesAndPrinciplesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'objectives' | 'principles'>('both');

  const objectiveIcons = [
    HeartHandshake,
    BookOpenCheck,
    Sparkles,
    TrendingUp,
    Award,
    Trophy,
  ];

  const principleIcons = [
    ShieldCheck,
    HeartHandshake,
    Building,
    RefreshCw,
    Users,
    HeartHandshake,
    LineChart,
    Compass,
  ];

  return (
    <section
      id="objectives-principles"
      className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-900 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-2xs">
            <Target className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
            <span>الغَايَاتُ وَالمَبَادِئُ التَّنْظِيمِيَّة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            الأَهْدَافُ الاسْتِرَاتِيجِيَّةُ <span className="text-blue-700 dark:text-blue-400">وَأُسُسُ التَّعَامُل</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            المستخرجة بدقة من وثيقة التعريف الرسمية لمدارس اليمن النموذجية لتوجيه العمل اليومي والتربوي.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'both'
                  ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              عرض الكل معاً
            </button>
            <button
              onClick={() => setActiveTab('objectives')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'objectives'
                  ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              الأهداف الستة
            </button>
            <button
              onClick={() => setActiveTab('principles')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'principles'
                  ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              أسس التعامل والعمل
            </button>
          </div>
        </div>

        {/* Section 1: Objectives (الأهداف الستة) */}
        {(activeTab === 'both' || activeTab === 'objectives') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-r-4 border-blue-900 pr-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-800 dark:text-blue-300">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  أَهْدَافُ مَدَارِسِ اليَمَنِ النَّمُوذَجِيَّة
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  المرتكزات الستة الأساسية المعتمدة رسمياً
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INITIAL_OBJECTIVES.map((item, index) => {
                const IconComponent = objectiveIcons[index % objectiveIcons.length];
                return (
                  <div
                    key={item.id}
                    className="relative group rounded-3xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 p-6 text-right hover:bg-white dark:hover:bg-slate-800 hover:border-blue-700 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Number badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-xl bg-blue-900 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-900/20">
                        {index + 1}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 2: Principles of Dealing & Working (أسس التعامل) */}
        {(activeTab === 'both' || activeTab === 'principles') && (
          <div>
            <div className="flex items-center gap-3 mb-8 border-r-4 border-amber-400 pr-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-700 dark:text-amber-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  أُسُسُ التَّعَامُلِ وَالعَمَل
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  المبادئ الثمانية التي تضبط سلوكنا الإداري والتربوي مع الطلاب وأولياء الأمور
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {INITIAL_PRINCIPLES.map((principle, index) => {
                const IconComponent = principleIcons[index % principleIcons.length];
                return (
                  <div
                    key={principle.id}
                    className="rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-5 text-right flex flex-col justify-between hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-lg transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100/90 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                          {principle.badge}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                        {principle.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {principle.text}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-1.5 text-[11px] text-amber-600 dark:text-amber-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>أساس معتمد رقم {index + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
