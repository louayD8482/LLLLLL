import React from 'react';
import {
  ShieldCheck,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Compass,
  Laptop,
  Users2,
  FileBadge,
} from 'lucide-react';
import { classroomLabImg } from '../data/schoolData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'بيئة تربوية محفزة',
      desc: 'فصول نموذجية مجهزة بالوسائل الذكية، ومختبرات تخصصية تساند الجانب العملي للمناهج.',
      icon: Sparkles,
    },
    {
      title: 'كادر تدريسي نخبوي',
      desc: 'نخبة من خيرة معلمي ومعلمات اليمن الحاصلين على أعلى المؤهلات والخبرات التربوية.',
      icon: Users2,
    },
    {
      title: 'تكنولوجيا التعليم الحديث',
      desc: 'معامل حاسوب متقدمة، وسبورات تفاعلية، وبرامج إثرائية للغات والبرمجة والذكاء الاصطناعي.',
      icon: Laptop,
    },
    {
      title: 'رعاية سلوكية وأخلاقية',
      desc: 'غرس القيم الفاضلة وحب الوطن والمسؤولية المجتمعية والالتزام بالثوابت الأصيلة.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-2xs border border-blue-200/60 dark:border-blue-900">
            <FileBadge className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
            <span>نَبْذَةٌ عَنِ الصَّرْحِ التَّعْلِيمِيّ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            مَدَارِسُ اليَمَنِ النَّمُوذَجِيَّة — <span className="text-blue-700 dark:text-blue-400">رِيَادَةٌ تَرْبَوِيَّةٌ وَعِلْمِيَّة</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            تأسست مدارس اليمن النموذجية لتكون منارة تعليمية رائدة تجمع بين أصالة القيم التربوية وحداثة طرائق التدريس العالمية، بهدف إعداد جيل يمني متفوق قادر على المنافسة وصناعة أثر إيجابي في مجتمعه.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image with Geometric Framing & Stats Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-900">
              <img
                src={classroomLabImg}
                alt="المختبرات العلمية في مدارس اليمن النموذجية"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent" />
              <div className="absolute bottom-4 inset-x-4 p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md shadow-xl border border-slate-200 dark:border-slate-700 text-right">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs sm:text-sm font-black text-blue-900 dark:text-blue-400">
                    مختبرات ومعامل تطبيقية حديثة
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-900 bg-blue-100 dark:bg-blue-950/80 dark:text-blue-300 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-amber-500" />
                    معتمدة رسمياً
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  تجهيزات معملية متطورة تتيح للطالب إجراء التجارب بنفسه وترسيخ المفاهيم النظرية في أذهان الطلاب.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars & Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                لماذا يختار أولياء الأمور مدارس اليمن النموذجية؟
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                نضع في أولوياتنا مصلحة الطالب التربوية والنفسية والتعليمية؛ حيث نعمل بمنظومة متناغمة تضمن الرعاية الفردية لكل طالب، وتشجع الموهوبين وتدعم المتعثرين للوصول بأبنائنا إلى قمة التفوق.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2 hover:border-blue-700 dark:hover:border-blue-500 transition-colors shadow-2xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-700 dark:text-blue-400">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Slogan & Quote block */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-slate-800/80 border-r-4 border-amber-400 text-right space-y-1">
              <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 block">
                شعارنا المعتمد: معاً نحو مستقبل أفضل
              </span>
              <p className="text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-200 leading-relaxed">
                «التعليم ليس مجرد تلقين للمعلومات، بل هو صقل للمواهب وبناء للإنسان القادر على بناء وطنه والنهوض بأمته.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
