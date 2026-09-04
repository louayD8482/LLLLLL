import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  PlusCircle,
  Trash2,
  Newspaper,
  Image as ImageIcon,
  Users,
  Settings,
  Mail,
  CheckCircle2,
  AlertCircle,
  Save,
  Phone,
} from 'lucide-react';
import { ContactInfo, GalleryItem, NewsItem } from '../types';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  newsList: NewsItem[];
  onUpdateNews: (news: NewsItem[]) => void;
  galleryItems: GalleryItem[];
  onUpdateGallery: (items: GalleryItem[]) => void;
  contactInfo: ContactInfo;
  onUpdateContact: (contact: ContactInfo) => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  newsList,
  onUpdateNews,
  galleryItems,
  onUpdateGallery,
  contactInfo,
  onUpdateContact,
}) => {
  const [activeTab, setActiveTab] = useState<'news' | 'gallery' | 'registrations' | 'inquiries' | 'settings'>('news');
  const [successMsg, setSuccessMsg] = useState<string>('');

  // News form state
  const [newArticle, setNewArticle] = useState({
    title: '',
    category: 'إعلانات' as NewsItem['category'],
    summary: '',
    content: '',
    imageUrl: '',
    isImportant: false,
  });

  // Gallery form state
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    category: 'المرافق' as GalleryItem['category'],
    imageUrl: '',
    description: '',
  });

  // Contact form state
  const [contactState, setContactState] = useState<ContactInfo>(contactInfo);

  // Stored registrations & inquiries
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      const reg = JSON.parse(localStorage.getItem('yms_registrations') || '[]');
      const inq = JSON.parse(localStorage.getItem('yms_inquiries') || '[]');
      setRegistrations(reg);
      setInquiries(inq);
      setContactState(contactInfo);
    }
  }, [isOpen, contactInfo]);

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticle.title || !newArticle.summary) return;

    const article: NewsItem = {
      id: 'news-' + Date.now(),
      title: newArticle.title,
      category: newArticle.category,
      date: new Date().toISOString().split('T')[0],
      summary: newArticle.summary,
      content: newArticle.content || newArticle.summary,
      imageUrl: newArticle.imageUrl || galleryItems[0]?.imageUrl || '',
      isImportant: newArticle.isImportant,
    };

    const updated = [article, ...newsList];
    onUpdateNews(updated);
    localStorage.setItem('yms_news_data', JSON.stringify(updated));
    setNewArticle({
      title: '',
      category: 'إعلانات',
      summary: '',
      content: '',
      imageUrl: '',
      isImportant: false,
    });
    showNotification('تم نشر الخبر الجديد بنجاح في الموقع!');
  };

  const handleDeleteNews = (id: string) => {
    const updated = newsList.filter((n) => n.id !== id);
    onUpdateNews(updated);
    localStorage.setItem('yms_news_data', JSON.stringify(updated));
    showNotification('تم حذف الخبر بنجاح.');
  };

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.title || !newPhoto.imageUrl) return;

    const photo: GalleryItem = {
      id: 'gal-' + Date.now(),
      title: newPhoto.title,
      category: newPhoto.category,
      imageUrl: newPhoto.imageUrl,
      description: newPhoto.description,
    };

    const updated = [photo, ...galleryItems];
    onUpdateGallery(updated);
    localStorage.setItem('yms_gallery_data', JSON.stringify(updated));
    setNewPhoto({
      title: '',
      category: 'المرافق',
      imageUrl: '',
      description: '',
    });
    showNotification('تمت إضافة الصورة إلى معرض صور المدرسة بنجاح!');
  };

  const handleDeletePhoto = (id: string) => {
    const updated = galleryItems.filter((g) => g.id !== id);
    onUpdateGallery(updated);
    localStorage.setItem('yms_gallery_data', JSON.stringify(updated));
    showNotification('تم حذف الصورة من المعرض.');
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateContact(contactState);
    localStorage.setItem('yms_contact_data', JSON.stringify(contactState));
    showNotification('تم حفظ وتحديث بيانات التواصل في الموقع بنجاح!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] max-h-[92dvh] overflow-hidden flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 text-right safe-pb">
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-black leading-tight">
                لوحة تحكم إدارة مدارس اليمن النموذجية
              </h3>
              <p className="text-[10px] sm:text-xs text-blue-200 line-clamp-1">
                إدارة الأخبار، معرض الصور، مراجعة طلبات التسجيل، وبيانات الاتصال
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white cursor-pointer shrink-0"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success Alert Banner */}
        {successMsg && (
          <div className="bg-emerald-500 text-white px-6 py-2 text-xs font-bold flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{successMsg}</span>
            </div>
          </div>
        )}

        {/* Tab Selector - Scrollable on mobile without wrapping into multiple rows */}
        <div className="bg-slate-100 dark:bg-slate-800/80 px-3 sm:px-4 py-2.5 flex items-center overflow-x-auto no-scrollbar gap-2 border-b border-slate-200 dark:border-slate-700 shrink-0">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'news'
                ? 'bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>إدارة الأخبار ({newsList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'gallery'
                ? 'bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>معرض الصور ({galleryItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('registrations')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'registrations'
                ? 'bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>طلبات التسجيل ({registrations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'inquiries'
                ? 'bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>رسائل أولياء الأمور ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-white dark:bg-slate-900 text-blue-800 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>بيانات التواصل والدوام</span>
          </button>
        </div>

        {/* Tab Content Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* TAB 1: NEWS MANAGEMENT */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              {/* Add form */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <PlusCircle className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span>إضافة خبر أو إعلان جديد</span>
                </h4>

                <form onSubmit={handleAddNews} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                        عنوان الخبر *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: موعد تسليم النتائج الفصلية"
                        value={newArticle.title}
                        onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                        التصنيف
                      </label>
                      <select
                        value={newArticle.category}
                        onChange={(e) =>
                          setNewArticle({
                            ...newArticle,
                            category: e.target.value as NewsItem['category'],
                          })
                        }
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                      >
                        <option value="إعلانات">إعلانات</option>
                        <option value="أكاديمي">أكاديمي</option>
                        <option value="أنشطة">أنشطة</option>
                        <option value="أولياء الأمور">أولياء الأمور</option>
                        <option value="عاجل">عاجل</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                      رابط صورة الخبر (اختياري)
                    </label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/... أو اتركها للصورة الافتراضية"
                      value={newArticle.imageUrl}
                      onChange={(e) => setNewArticle({ ...newArticle, imageUrl: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                      الملخص المختصر *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="موجز سريع يظهر في واجهة البطاقة..."
                      value={newArticle.summary}
                      onChange={(e) => setNewArticle({ ...newArticle, summary: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                      تفاصيل الخبر الكاملة
                    </label>
                    <textarea
                      rows={3}
                      placeholder="نص الخبر بالتفصيل..."
                      value={newArticle.content}
                      onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newArticle.isImportant}
                        onChange={(e) =>
                          setNewArticle({ ...newArticle, isImportant: e.target.checked })
                        }
                        className="rounded text-blue-900"
                      />
                      <span>تمييز الخبر كـ (إعلان هام / عاجل)</span>
                    </label>

                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold cursor-pointer"
                    >
                      نشر الخبر فوراً
                    </button>
                  </div>
                </form>
              </div>

              {/* Current News List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500">الأخبار المنشورة حالياً:</h4>
                {newsList.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold text-[10px]">
                          {item.category}
                        </span>
                        <span className="text-slate-400 text-[11px]">{item.date}</span>
                      </div>
                      <p className="font-bold text-slate-900 dark:text-white">{item.title}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteNews(item.id)}
                      className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
                      title="حذف هذا الخبر"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: GALLERY MANAGEMENT */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <PlusCircle className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span>إضافة صورة جديدة لمعرض المدرسة</span>
                </h4>

                <form onSubmit={handleAddPhoto} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                        عنوان الصورة / الفعالية *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: حفل تكريم أوائل الطلاب"
                        value={newPhoto.title}
                        onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                        قسم المعرض
                      </label>
                      <select
                        value={newPhoto.category}
                        onChange={(e) =>
                          setNewPhoto({
                            ...newPhoto,
                            category: e.target.value as GalleryItem['category'],
                          })
                        }
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                      >
                        <option value="المرافق">المرافق</option>
                        <option value="الفصول والمعامل">الفصول والمعامل</option>
                        <option value="الأنشطة والرياضة">الأنشطة والرياضة</option>
                        <option value="المناسبات والتكريم">المناسبات والتكريم</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                      رابط الصورة (URL) *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://images.unsplash.com/... أو رابط الصورة المباشر"
                      value={newPhoto.imageUrl}
                      onChange={(e) => setNewPhoto({ ...newPhoto, imageUrl: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1 text-slate-700 dark:text-slate-300">
                      وصف موجز للصورة (اختياري)
                    </label>
                    <input
                      type="text"
                      placeholder="وصف تفصيلي يظهر عند تكبير الصورة..."
                      value={newPhoto.description}
                      onChange={(e) => setNewPhoto({ ...newPhoto, description: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold cursor-pointer"
                    >
                      إضافة للصورة الحالية
                    </button>
                  </div>
                </form>
              </div>

              {/* Gallery Grid items */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-28 object-cover"
                    />
                    <div className="p-2 text-right">
                      <p className="font-bold text-[11px] truncate text-slate-800 dark:text-slate-200">
                        {item.title}
                      </p>
                      <span className="text-[10px] text-blue-700 dark:text-blue-400 font-bold">{item.category}</span>
                    </div>
                    <button
                      onClick={() => handleDeletePhoto(item.id)}
                      className="absolute top-1.5 left-1.5 p-1 rounded bg-rose-600 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      title="حذف الصورة"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: REGISTRATIONS LIST */}
          {activeTab === 'registrations' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-slate-900 dark:text-white">
                  طلبات التسجيل الواردة عبر الموقع الإلكتروني ({registrations.length})
                </h4>
                {registrations.length > 0 && (
                  <button
                    onClick={() => {
                      localStorage.removeItem('yms_registrations');
                      setRegistrations([]);
                      showNotification('تم مسح سجل الطلبات.');
                    }}
                    className="text-xs text-rose-500 hover:underline cursor-pointer"
                  >
                    تفريغ السجل
                  </button>
                )}
              </div>

              {registrations.length === 0 ? (
                <div className="text-center py-10 bg-slate-50 dark:bg-slate-800/40 rounded-2xl">
                  <Users className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">لا توجد طلبات تسجيل واردة حتى الآن.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {registrations.map((app, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-sm text-blue-900 dark:text-blue-400">
                          {app.studentName}
                        </span>
                        <span className="text-slate-400">{app.date}</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-600 dark:text-slate-300">
                        <div>
                          <span className="text-slate-400">ولي الأمر:</span> {app.guardianName}
                        </div>
                        <div>
                          <span className="text-slate-400">المرحلة:</span> {app.stage}
                        </div>
                        <div>
                          <span className="text-slate-400">الصف:</span> {app.grade}
                        </div>
                        <div dir="ltr" className="text-right">
                          <span className="text-slate-400">الهاتف:</span> {app.phone}
                        </div>
                      </div>
                      {app.notes && (
                        <p className="text-[11px] text-slate-500 bg-white dark:bg-slate-900 p-2 rounded">
                          ملاحظات: {app.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-slate-900 dark:text-white">
                  رسائل واستفسارات أولياء الأمور ({inquiries.length})
                </h4>
                {inquiries.length > 0 && (
                  <button
                    onClick={() => {
                      localStorage.removeItem('yms_inquiries');
                      setInquiries([]);
                      showNotification('تم مسح سجل الرسائل.');
                    }}
                    className="text-xs text-rose-500 hover:underline cursor-pointer"
                  >
                    تفريغ السجل
                  </button>
                )}
              </div>

              {inquiries.length === 0 ? (
                <div className="text-center py-10 bg-slate-50 dark:bg-slate-800/40 rounded-2xl">
                  <Mail className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">لا توجد رسائل جديدة.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white">
                          {inq.name} ({inq.subject})
                        </span>
                        <span className="text-slate-400">{inq.date}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        {inq.message}
                      </p>
                      <div className="text-slate-400" dir="ltr">
                        رقم الهاتف: {inq.phone}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: CONTACT SETTINGS */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSaveContact} className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-blue-900 dark:text-blue-200">
                تعديل وتحديث معلومات التواصل وأوقات الدوام الرسمية لمدارس اليمن النموذجية في الموقع.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                    رقم الهاتف الرئيسي
                  </label>
                  <input
                    type="text"
                    value={contactState.phone}
                    onChange={(e) =>
                      setContactState({ ...contactState, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                    رقم الهاتف الثانوي
                  </label>
                  <input
                    type="text"
                    value={contactState.secondaryPhone}
                    onChange={(e) =>
                      setContactState({ ...contactState, secondaryPhone: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                    رقم الواتساب الرسمي
                  </label>
                  <input
                    type="text"
                    value={contactState.whatsapp}
                    onChange={(e) =>
                      setContactState({ ...contactState, whatsapp: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={contactState.email}
                    onChange={(e) =>
                      setContactState({ ...contactState, email: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                  العنوان بالتفصيل
                </label>
                <input
                  type="text"
                  value={contactState.address}
                  onChange={(e) =>
                    setContactState({ ...contactState, address: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-slate-700 dark:text-slate-300">
                  ساعات وأيام الدوام الرسمي
                </label>
                <input
                  type="text"
                  value={contactState.workingHours}
                  onChange={(e) =>
                    setContactState({ ...contactState, workingHours: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs cursor-pointer transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>حفظ التعديلات في الموقع</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
