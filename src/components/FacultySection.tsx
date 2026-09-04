import React from 'react';
import {
  Users,
  GraduationCap,
  Award,
  UserCheck,
  Smile,
  FlaskConical,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { INITIAL_FACULTY } from '../data/schoolData';

export const FacultySection: React.FC = () => {
  const getAvatarIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return UserCheck;
      case 'GraduationCap':
        return GraduationCap;
      case 'Smile':
        return Smile;
      case 'FlaskConical':
        return FlaskConical;
      case 'Sparkles':
        return Sparkles;
      case 'Trophy':
        return Trophy;
      default:
        return Users;
    }
  };

  return (
    <section
      id="faculty"
      className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-900 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-2xs">
            <Users className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
            <span>فَرِيقُ العَمَلِ وَالقِيَادَة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            الإِدَارَةُ <span className="text-blue-700 dark:text-blue-400">وَالهَيْئَةُ التَّعْلِيمِيَّة</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            يقود مدارس اليمن النموذجية نخبة من الكوادر التربوية المؤهلة والإداريين المخلصين الذين يكرسون خبراتهم لبناء أجيال متفوقة.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_FACULTY.map((member) => {
            const Icon = getAvatarIcon(member.avatarIcon);
            return (
              <div
                key={member.id}
                className="rounded-3xl p-6 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-700 dark:hover:border-blue-500 hover:shadow-xl transition-all text-right group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-700 dark:text-blue-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>{member.experience}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faculty Statement Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-950 text-white text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-800/70 shadow-2xl">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold">
              تطوير الأداء منهج كل إداري ومعلم وموظف في منظومة العمل
            </h4>
            <p className="text-xs text-slate-300">
              دورات تدريبية مستمرة لرفع كفاءة المعلمين وتطبيق أحدث استراتيجيات التعلم النشط.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-4 py-2 rounded-xl shrink-0 border border-white/10">
            <Award className="w-4 h-4 text-amber-300" />
            <span>كادر يمني متميز 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
