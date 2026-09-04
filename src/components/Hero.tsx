import React, { useState } from 'react';
import { SchoolLogo } from './SchoolLogo';
import {
  GraduationCap,
  Users,
  Award,
  FlaskConical,
  BookOpen,
  Eye,
  Target,
  Image as ImageIcon,
  PhoneCall,
  Sparkles,
  ChevronLeft,
  Building2,
  Layers,
} from 'lucide-react';
import {
  heroBuildingImg,
  schoolFacadeBannerImg,
  schoolOfficialEmblemImg,
} from '../data/schoolData';

interface HeroProps {
  onOpenRegistration: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistration }) => {
  const [activeVisual, setActiveVisual] = useState<'emblem' | 'facade' | 'campus'>('emblem');

  const quickLinks = [
    { label: 'عن المدرسة', href: '#about', icon: BookOpen },
    { label: 'الرسالة والرؤية', href: '#vision-mission', icon: Eye },
    { label: 'الأهداف والأسس', href: '#objectives-principles', icon: Target },
    { label: 'المراحل الدراسية', href: '#stages', icon: GraduationCap },
    { label: 'معرض الصور', href: '#gallery', icon: ImageIcon },
    { label: 'تواصل معنا', href: '#contact', icon: PhoneCall },
  ];

  const stats = [
    { label: 'طالب وطالبة ملتحقين', value: '+1,450', icon: GraduationCap },
    { label: 'كادر تعليمي وإداري نخبة', value: '+85', icon: Users },
    { label: 'نسبة النجاح والتفوق', value: '99.2%', icon: Award },
    { label: 'معامل ومختبرات تخصصية', value: '8', icon: FlaskConical },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200 dark:border-slate-800">
      {/* Geometric balance polygon backdrop */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900 clip-path-hero -z-10 opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-blue-800 clip-path-hero -z-10 opacity-[0.03] rotate-180 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Info Column (Right side in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Accreditation Badge */}
            <div className="inline-block bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold w-max shadow-sm border border-blue-200/60 dark:border-blue-900">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>صرح تعليمي نموذجي رائد في اليمن منذ 2005</span>
              </span>
            </div>

            {/* School Name & Branding - Vertical Stacked Architecture (طولي ومرتب بفخامة) */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4 sm:gap-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 sm:p-5 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-md">
                <SchoolLogo size={76} showText={false} />
                <div className="flex flex-col text-right border-r-4 border-amber-400 pr-3 sm:pr-4">
                  <span className="text-sm sm:text-base md:text-lg font-black tracking-widest text-amber-500 dark:text-amber-400">
                    مَــــدَارِسُ
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 dark:text-white tracking-tight leading-none my-1">
                    اليَــمَــنِ
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 dark:text-blue-300 tracking-wide">
                    النَّــمُــوذَجِــيَّــة
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase font-sans mt-1">
                    Yemen Model Schools — Excellence & Leadership
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100">
                  صُنّاعُ الغَدِ <span className="text-blue-700 dark:text-amber-400">وَرُوّادُ التَّمَيُّزِ التَّعْلِيمِيّ</span>
                </h2>
              </div>
            </div>

            {/* Motto */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-blue-900" />
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-300/40">
                  شعارنا المعتمد
                </span>
                <span className="text-base sm:text-lg font-black text-blue-900 dark:text-white">
                  معاً نحو مستقبل أفضل
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-semibold leading-relaxed">
                «نحو تعليم نوعي، وبناء أجيال متسلحة بالعلم والأخلاق وقادرة على التفكير والإبداع وخدمة المجتمع»
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenRegistration}
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-900/20 active:scale-[0.98] transition-all"
              >
                <GraduationCap className="w-5 h-5 text-amber-300" />
                <span>التقديم والتسجيل للعام الجديد</span>
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('#vision-mission')}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 font-bold text-sm sm:text-base transition-colors shadow-sm"
              >
                <Eye className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                <span>الرسالة والرؤية</span>
              </button>
            </div>

            {/* Quick Navigation Pills */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2.5">
                تصفح أقسام الموقع السريعة:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-300 hover:text-blue-800 dark:hover:text-blue-300 text-xs font-bold border border-slate-200/80 dark:border-slate-800 transition-colors shadow-2xs"
                  >
                    <item.icon className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Showcase Card with Signature Geometric Balance Rotated Offset */}
          <div className="lg:col-span-5 relative py-6">
            {/* Visual Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3 z-30 relative">
              <button
                type="button"
                onClick={() => setActiveVisual('emblem')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeVisual === 'emblem'
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-900/30 ring-2 ring-amber-400/80'
                    : 'bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>الشعار الرسمي الأساسي</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveVisual('facade')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeVisual === 'facade'
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-900/30 ring-2 ring-amber-400/80'
                    : 'bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>واجهة المدرسة واللافتة</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveVisual('campus')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeVisual === 'campus'
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-900/30 ring-2 ring-amber-400/80'
                    : 'bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>الصرح والمرافق</span>
              </button>
            </div>

            <div className="relative w-full max-w-md mx-auto aspect-4/3 sm:aspect-square">
              {/* Angled background offset frame */}
              <div className="absolute top-5 left-5 sm:top-8 sm:left-8 w-full h-full bg-blue-100 dark:bg-blue-950/60 rounded-[36px] sm:rounded-[44px] -rotate-3 transition-transform pointer-events-none" />

              {/* Main rotated framed element */}
              <div className="relative w-full h-full border-2 border-blue-900 dark:border-blue-700 rounded-[36px] sm:rounded-[44px] rotate-2 overflow-hidden bg-slate-900 shadow-2xl">
                <img
                  src={
                    activeVisual === 'emblem'
                      ? schoolOfficialEmblemImg
                      : activeVisual === 'facade'
                      ? schoolFacadeBannerImg
                      : heroBuildingImg
                  }
                  alt={
                    activeVisual === 'emblem'
                      ? 'الشعار الرسمي المعتمد لمدارس اليمن النموذجية - معاً نحو مستقبل أفضل'
                      : activeVisual === 'facade'
                      ? 'واجهة ولافتة مدارس اليمن النموذجية الرسمية'
                      : 'مبنى مدارس اليمن النموذجية'
                  }
                  className={`w-full h-full transform hover:scale-105 transition-transform duration-700 ${
                    activeVisual === 'emblem'
                      ? 'object-contain p-4 sm:p-6 bg-slate-950'
                      : 'object-cover object-center'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Gradient overlay for photos only */}
                {activeVisual !== 'emblem' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent pointer-events-none" />
                )}

                {/* Overlaid Badge with Official School Emblem */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl shadow-md border border-white/50 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-xs shrink-0">
                    <img
                      src={schoolOfficialEmblemImg}
                      alt="شعار مدارس اليمن النموذجية"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-slate-900 dark:text-white leading-tight">
                      مدارس اليمن النموذجية
                    </p>
                    <p className="text-[10px] text-blue-700 dark:text-blue-400 font-bold">
                      {activeVisual === 'emblem'
                        ? 'معاً نحو مستقبل أفضل'
                        : activeVisual === 'facade'
                        ? 'الواجهة واللافتة الرسمية'
                        : 'صنعاء — الجمهورية اليمنية'}
                    </p>
                  </div>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-blue-950/85 backdrop-blur-md border border-white/10 text-right">
                  <p className="text-xs font-bold text-amber-300 mb-0.5">
                    {activeVisual === 'emblem'
                      ? '⭐ الشعار الرسمي الأساسي — معاً نحو مستقبل أفضل'
                      : activeVisual === 'facade'
                      ? '🏛️ الواجهة المعمارية واللافتة المعتمدة'
                      : '🏫 الصرح التعليمي الحديث'}
                  </p>
                  <p className="text-[11px] text-slate-200 line-clamp-2 leading-relaxed">
                    {activeVisual === 'emblem'
                      ? 'الشعار الرسمي المعتمد لمدارس اليمن النموذجية، حاملاً رؤية الريادة: معاً نحو مستقبل أفضل.'
                      : activeVisual === 'facade'
                      ? 'بوابة تعليمية متميزة ولافتة رسمية تعكس عراقة وهوية مدارس اليمن النموذجية بصنعاء.'
                      : 'بيئة تربوية وأكاديمية متكاملة تضم معامل علمية، قاعات تقنية، ملاعب رياضية وساحات آمنة.'}
                  </p>
                </div>
              </div>

              {/* Floating Geometric Balance Badge with Amber Icon Box */}
              <div className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 flex gap-3.5 items-center z-20">
                <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-white shadow-inner shrink-0">
                  <Award className="w-6 h-6 text-blue-950" />
                </div>
                <div className="text-right">
                  <div className="text-slate-900 dark:text-white font-black text-sm">اعتماد رسمي معترف به</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs font-medium">من وزارة التربية والتعليم</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official School Signboard Banner (لافتة وبانر مدارس اليمن النموذجية) */}
        <div className="mt-10 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white shadow-xl border-2 border-amber-400/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-right w-full md:w-auto">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 shrink-0 shadow-md">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={schoolOfficialEmblemImg}
                  alt="شعار مدارس اليمن النموذجية"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-black">
                  اللافتة والشعار الرسمي
                </span>
                <span className="text-[11px] text-blue-200 font-medium">صنعاء — الجمهورية اليمنية</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white leading-snug mt-0.5">
                مَدَارِسُ اليَمَن النَّمُوذَجِيَّة — مَعاً نَحْوَ مُسْتَقْبَلٍ أَفْضَل
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
            <button
              onClick={onOpenRegistration}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-xs transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>التسجيل متاح الآن</span>
            </button>
          </div>
        </div>

        {/* Geometric Balance Statistics Bar */}
        <div className="mt-14 sm:mt-20 bg-white dark:bg-slate-900 px-6 sm:px-10 py-6 sm:py-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1.5 md:border-l md:border-slate-200/80 md:dark:border-slate-800 md:last:border-l-0 md:pl-6 text-right group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform mb-1">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-900 dark:text-blue-400 tracking-tight" dir="ltr">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
