import React, { useState, useEffect } from 'react';
import {
  Image as ImageIcon,
  ZoomIn,
  X,
  ChevronRight,
  ChevronLeft,
  PlusCircle,
  Sparkles,
} from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
  onOpenAdmin: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  galleryItems,
  onOpenAdmin,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    'الكل',
    'الهوية والشعار',
    'المرافق',
    'الفصول والمعامل',
    'الأنشطة والرياضة',
    'المناسبات والتكريم',
  ];

  const filteredItems =
    selectedCategory === 'الكل'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleNext = () => {
    if (activeImageIndex === null || filteredItems.length === 0) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null || filteredItems.length === 0) return;
    setActiveImageIndex(
      (activeImageIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  // Keyboard navigation for desktop/laptop
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        handlePrev(); // In RTL, right is previous
      } else if (e.key === 'ArrowLeft') {
        handleNext(); // In RTL, left is next
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-right space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-900 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-2xs">
              <ImageIcon className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
              <span>البُومُ الذِّكْرَيَاتِ وَالمَعَالِم</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
              مَعْرِضُ صُوَرِ المَدْرَسَةِ <span className="text-blue-700 dark:text-blue-400">وَالأَنْشِطَة</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              لقطات حية توثق مرافق مدارس اليمن النموذجية وفصولها ومعاملها العلمية وفعاليات أبنائنا الطلاب.
            </p>
          </div>

          <button
            onClick={onOpenAdmin}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-blue-900 dark:text-blue-300 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <PlusCircle className="w-4 h-4 text-blue-700 dark:text-blue-400" />
            <span>إضافة صور جديدة للمعرض</span>
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
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 aspect-video shadow-md hover:shadow-2xl border-2 border-slate-200 dark:border-slate-800 transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-95 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 inset-x-3 text-right">
                <h3 className="text-sm font-bold text-white mb-0.5 line-clamp-1">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-[11px] text-slate-300 line-clamp-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && filteredItems[activeImageIndex] && (
          <div
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200 select-none"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(null);
              }}
              className="absolute top-4 left-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              aria-label="إغلاق معاينة الصورة"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="الصورة السابقة"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="الصورة التالية"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image & Caption Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] max-h-[85dvh] flex flex-col items-center safe-pb"
            >
              <img
                src={filteredItems[activeImageIndex].imageUrl}
                alt={filteredItems[activeImageIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] sm:max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-3 text-center text-white space-y-1 px-4">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-900 text-white mb-1">
                  {filteredItems[activeImageIndex].category}
                </div>
                <h3 className="text-base sm:text-lg font-bold">
                  {filteredItems[activeImageIndex].title}
                </h3>
                {filteredItems[activeImageIndex].description && (
                  <p className="text-xs text-slate-300 max-w-lg mx-auto">
                    {filteredItems[activeImageIndex].description}
                  </p>
                )}
                <p className="text-[11px] text-slate-400 pt-0.5">
                  صورة {activeImageIndex + 1} من {filteredItems.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
