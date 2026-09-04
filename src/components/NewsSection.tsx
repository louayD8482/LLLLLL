import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  Tag,
  ChevronLeft,
  X,
  Share2,
  Bookmark,
  Bell,
  Sparkles,
} from 'lucide-react';
import { NewsItem } from '../types';

interface NewsSectionProps {
  newsList: NewsItem[];
  onOpenAdmin: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ newsList, onOpenAdmin }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const categories = ['الكل', 'إعلانات', 'أكاديمي', 'أنشطة', 'أولياء الأمور'];

  const filteredNews =
    selectedCategory === 'الكل'
      ? newsList
      : newsList.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="news"
      className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-right space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-900 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-2xs">
              <Newspaper className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
              <span>المَرْكَزُ الإِعْلَامِيّ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
              الأَخْبَارُ <span className="text-blue-700 dark:text-blue-400">وَالإِعْلَانَاتُ المَدْرَسِيَّة</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              تابع أحدث المستجدات، الفعاليات، القرارات التربوية، وجداول الاختبارات والأنشطة الخاصة بطلابنا وأولياء الأمور.
            </p>
          </div>

          {/* Quick Admin Add Shortcut */}
          <button
            onClick={onOpenAdmin}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-blue-900 dark:text-blue-300 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>إضافة خبر أو إعلان جديد (لوحة الإدارة)</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-blue-700 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between text-right cursor-pointer group"
            >
              <div>
                {/* Image Cover */}
                {item.imageUrl && (
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-900 text-white shadow-md">
                        {item.category}
                      </span>
                      {item.isImportant && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-blue-950 flex items-center gap-1 shadow-md">
                          <Bell className="w-3 h-3 text-blue-950" />
                          مهم
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-blue-900 dark:text-blue-400 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                <span>قراءة التفاصيل كاملة</span>
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Newspaper className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 dark:text-slate-300 font-bold">
              لا توجد أخبار في هذا التصنيف حالياً
            </p>
          </div>
        )}

        {/* Full Article Reader Modal */}
        {activeArticle && (
          <div
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] max-h-[90dvh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 text-right safe-pb"
            >
              {/* Modal Header Bar */}
              <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeArticle.date}
                  </span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="إغلاق المقال"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {activeArticle.imageUrl && (
                  <div className="rounded-2xl overflow-hidden max-h-72 w-full bg-slate-100 dark:bg-slate-800">
                    <img
                      src={activeArticle.imageUrl}
                      alt={activeArticle.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                  {activeArticle.title}
                </h3>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {activeArticle.summary}
                </div>

                <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
                  {activeArticle.content}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-5 sm:px-6 py-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>إدارة مدارس اليمن النموذجية</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
