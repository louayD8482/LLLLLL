import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Building,
  Navigation,
} from 'lucide-react';
import { ContactInfo } from '../types';

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'استفسار عام عن التسجيل',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    // Save inquiry to localStorage for school admin review
    const inquiries = JSON.parse(localStorage.getItem('yms_inquiries') || '[]');
    inquiries.unshift({
      ...formData,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('ar-YE'),
    });
    localStorage.setItem('yms_inquiries', JSON.stringify(inquiries));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        subject: 'استفسار عام عن التسجيل',
        message: '',
      });
    }, 4000);
  };

  const whatsappClean = contactInfo.whatsapp.replace(/[^0-9]/g, '');

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-900 text-blue-800 dark:text-blue-300 text-xs font-bold shadow-2xs">
            <Phone className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
            <span>قَنَوَاتُ التَّوَاصُلِ المُبَاشِر</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            تَوَاصَلْ مَعَ إِدَارَةِ <span className="text-blue-700 dark:text-blue-400">مَدَارِسِ اليَمَنِ النَّمُوذَجِيَّة</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            يسعدنا استقبال استفساراتكم وزياراتكم الكريمة لمقر المدارس أو التواصل عبر الأرقام وخدمة الواتساب المباشرة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Map Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  أرقام الهواتف الرسمية
                </h3>
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300" dir="ltr">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="block font-bold hover:text-blue-700 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`tel:${contactInfo.secondaryPhone.replace(/\s+/g, '')}`}
                    className="block font-bold hover:text-blue-700 transition-colors"
                  >
                    {contactInfo.secondaryPhone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  خدمة الواتساب الفورية
                </h3>
                <p className="text-xs text-slate-500">
                  للاستفسارات السريعة وخدمة أولياء الأمور
                </p>
                <a
                  href={`https://wa.me/${whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline pt-1"
                  dir="ltr"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{contactInfo.whatsapp}</span>
                </a>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  البريد الإلكتروني
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline"
                  dir="ltr"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  ساعات الدوام واستقبال الزوار
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {contactInfo.workingHours}
                </p>
              </div>
            </div>

            {/* School Address & Interactive Map Card */}
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>عنوان ومقر المدارس</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {contactInfo.address}
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Sanaa+Yemen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>فتح في الخرائط</span>
                </a>
              </div>

              {/* Visual Stylized Map of Sana'a Yemen */}
              <div className="relative h-60 bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 p-4 flex items-center justify-center text-center overflow-hidden">
                {/* Abstract grid */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Pulsing Pin Marker */}
                <div className="relative z-10 space-y-3">
                  <div className="relative inline-flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-amber-400 opacity-75" />
                    <div className="relative w-12 h-12 rounded-full bg-blue-900 border-2 border-white flex items-center justify-center text-white shadow-xl">
                      <Building className="w-6 h-6 text-amber-300" />
                    </div>
                  </div>

                  <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-blue-400/30 text-white inline-block shadow-lg">
                    <p className="text-xs font-black">مَدَارِسُ اليَمَنِ النَّمُوذَجِيَّة</p>
                    <p className="text-[11px] text-amber-300">صنعاء — الجمهورية اليمنية</p>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 text-[10px] text-slate-400">
                  خريطة موقع المدرسة التوضيحية
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Message Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl text-right">
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900">
                  <Send className="w-3.5 h-3.5" />
                  <span>راسلنا الآن</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  أرسل رسالة أو استفسار لإدارة المدرسة
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  سيقوم مسؤول شؤون الطلاب والقبول بالرد والتواصل معكم في أقرب وقت.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    تم إرسال رسالتكم بنجاح!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    شكراً لتواصلكم مع مدارس اليمن النموذجية. سيتواصل معكم فريق الاستقبال قريباً.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      الاسم الكامل / اسم ولي الأمر *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: أحمد محمد الحكيمي"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      رقم الهاتف / الواتساب *
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="+967 777 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      موضوع الاستفسار
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                    >
                      <option value="استفسار عام عن التسجيل">استفسار عام عن التسجيل والرسوم</option>
                      <option value="حجز موعد زيارة للمدرسة">حجز موعد زيارة لمقر المدرسة</option>
                      <option value="استفسار عن اختبارات القبول">اختبارات القبول وتحديد المستوى</option>
                      <option value="خدمات النقل والمواصلات">خدمات النقل والمواصلات</option>
                      <option value="أخرى">موضوع آخر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      نص الرسالة أو الاستفسار *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="اكتب استفسارك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm shadow-md shadow-blue-900/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الاستفسار لإدارة المدرسة</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
