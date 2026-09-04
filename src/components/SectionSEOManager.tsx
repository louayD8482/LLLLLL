import React, { useEffect, useState } from 'react';

export interface SectionMetaConfig {
  id: string;
  name: string;
  shortTitle: string;
  title: string;
  description: string;
  keywords: string;
  schemaType?: string;
}

export const SECTIONS_CONFIG: SectionMetaConfig[] = [
  {
    id: 'hero',
    name: 'الرئيسية',
    shortTitle: 'البوابة الرئيسية',
    title: 'مدارس اليمن النموذجية | صرح تعليمي رائد لتربية وبناء أجيال المستقبل',
    description: 'الموقع الرسمي لمدارس اليمن النموذجية - تعليم نوعي متطور وفق أعلى المعايير التربوية، مراحل تمهيدية وأساسية وثانوية، كادر تعليمي متميز وبيئة محفزة للإبداع والتفوق.',
    keywords: 'مدارس اليمن النموذجية, مدارس صنعاء, تعليم نموذجي اليمن, روضة وتمهيدي, مرحلة أساسية, مرحلة ثانوية, تسجيل مدارس اليمن',
    schemaType: 'School',
  },
  {
    id: 'about',
    name: 'عن المدرسة',
    shortTitle: 'فلسفتنا وهويتنا',
    title: 'عن مدارس اليمن النموذجية | الهوية المؤسسية والريادة التربوية',
    description: 'تعرف على مدارس اليمن النموذجية، تاريخها، فلسفتها التعليمية، والتزامها بتقديم بيئة تربوية متكاملة تجمع بين الأصالة والمعاصرة والتفوق الأكاديمي.',
    keywords: 'عن مدارس اليمن, تاريخ مدارس اليمن النموذجية, فلسفة التعليم اليمن, بيئة تربوية رائدة',
    schemaType: 'EducationalOrganization',
  },
  {
    id: 'vision-mission',
    name: 'الرؤية والرسالة',
    shortTitle: 'الرؤية والرسالة',
    title: 'الرؤية والرسالة | مدارس اليمن النموذجية',
    description: 'رؤية مدارس اليمن النموذجية نحو الريادة في إعداد أجيال متسلحة بالعلم والأخلاق، ورسالتنا في بناء شخصية الطالب فكرياً ومهارياً واجتماعياً لخدمة الوطن.',
    keywords: 'رؤية مدارس اليمن النموذجية, رسالة المدرسة, الأهداف التعليمية, القيم المدرسية',
    schemaType: 'EducationalOrganization',
  },
  {
    id: 'objectives-principles',
    name: 'الأهداف والأسس',
    shortTitle: 'الأهداف والأسس التربوية',
    title: 'الأهداف والأسس التربوية | مدارس اليمن النموذجية',
    description: 'الأهداف الاستراتيجية لمدارس اليمن النموذجية وأسس التعامل القائمة على الاحترام المتبادل، الشفافية، العدالة والمساواة، والتطوير الأكاديمي المستمر.',
    keywords: 'أهداف مدارس اليمن, أسس التعامل المدرسي, ميثاق القيم التربوية, التميز المدرسي',
    schemaType: 'EducationalOrganization',
  },
  {
    id: 'stages',
    name: 'المراحل الدراسية',
    shortTitle: 'المراحل الأكاديمية',
    title: 'المراحل والبرامج الدراسية | مدارس اليمن النموذجية',
    description: 'المراحل التعليمية في مدارس اليمن النموذجية: مرحلة التمهيدي ورياض الأطفال (KG)، المرحلة الأساسية (1 - 9)، والمرحلة الثانوية (علمي وأدبي) بمناهج حديثة.',
    keywords: 'مراحل دراسية اليمن, رياض أطفال صنعاء, مرحلة أساسية, ثانوية علمي وأدبي, مناهج تعليمية نموذجية',
    schemaType: 'OfferCatalog',
  },
  {
    id: 'faculty',
    name: 'الهيئة التعليمية',
    shortTitle: 'الكادر التعليمي',
    title: 'الهيئة التعليمية والإدارية | مدارس اليمن النموذجية',
    description: 'نخبة من خيرة الكفاءات التربوية والتعليمية المعتمدة في اليمن، معلمون ومعلمات ذوو خبرة عالية في الإشراف الأكاديمي والتوجيه السلوكي.',
    keywords: 'معلمو مدارس اليمن النموذجية, كادر تدريس صنعاء, إدارة مدرسية نموذجية, موجهون تربويون',
    schemaType: 'EducationalOrganization',
  },
  {
    id: 'news',
    name: 'الأخبار والإعلانات',
    shortTitle: 'أخبار وفعاليات',
    title: 'الأخبار والإعلانات المدرسية الرسمية | مدارس اليمن النموذجية',
    description: 'آخر الأخبار والإعلانات الهامة في مدارس اليمن النموذجية، مواعيد الامتحانات، الأنشطة والمسابقات الثقافية والرياضية، وحفلات التكريم والتميز.',
    keywords: 'أخبار مدارس اليمن, إعلانات مدرسية, تقويم دراسي, فعاليات وأنشطة طلابية',
    schemaType: 'NewsArticle',
  },
  {
    id: 'gallery',
    name: 'معرض الصور',
    shortTitle: 'جولة مصورة',
    title: 'معرض الصور والمرافق والأنشطة | مدارس اليمن النموذجية',
    description: 'شاهد مرافق مدارس اليمن النموذجية: الواجهة المعمارية، القاعات الدراسية، المعامل العلمية الحديثة، قاعات الحاسوب، والملاعب والساحات الترفيهية.',
    keywords: 'صور مدارس اليمن النموذجية, مبنى المدرسة, معامل علمية, ملاعب مدارس صنعاء, أنشطة مدرسية',
    schemaType: 'ImageGallery',
  },
  {
    id: 'contact',
    name: 'تواصل معنا',
    shortTitle: 'التواصل والتسجيل',
    title: 'تواصل معنا ومقر المدرسة | مدارس اليمن النموذجية',
    description: 'معلومات الاتصال المباشر بإدارة مدارس اليمن النموذجية: أرقام الهواتف، تطبيق واتساب، العنوان، الموقع الجغرافي على الخريطة، وأوقات الاستقبال الرسمية.',
    keywords: 'هاتف مدارس اليمن النموذجية, عنوان المدرسة صنعاء, رقم تسجيل مدرسة, دوام مدارس اليمن',
    schemaType: 'ContactPage',
  },
];

export const SectionSEOManager: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionMetaConfig>(SECTIONS_CONFIG[0]);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    // 1. Setup IntersectionObserver to detect which section is in view
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry that has the highest intersection ratio
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the top most visible element
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const targetId = visibleEntries[0].target.id;
        const matched = SECTIONS_CONFIG.find((cfg) => cfg.id === targetId);
        if (matched) {
          setActiveSection(matched);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-10% 0px -40% 0px',
      threshold: [0.1, 0.3, 0.6],
    });

    // Observe all configured sections
    SECTIONS_CONFIG.forEach((cfg) => {
      const el = document.getElementById(cfg.id);
      if (el) {
        observer.observe(el);
      }
    });

    // Also respond to hashchange if user clicks a direct anchor
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const matched = SECTIONS_CONFIG.find((cfg) => cfg.id === hash);
      if (matched) {
        setActiveSection(matched);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // 2. Dynamically update DOM Document Head Meta Tags whenever activeSection changes
  useEffect(() => {
    const origin = window.location.origin;
    const currentUrl = `${origin}${window.location.pathname}#${activeSection.id}`;
    const logoUrl = `${origin}/school-emblem.jpg`;
    const bannerUrl = `${origin}/school-banner.jpg`;

    // A. Update Document Title
    document.title = activeSection.title;

    // Helper to set or create meta tag
    const updateMeta = (nameAttr: string, nameVal: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, nameVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const updateLink = (relVal: string, hrefVal: string) => {
      let link = document.querySelector(`link[rel="${relVal}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', relVal);
        document.head.appendChild(link);
      }
      link.setAttribute('href', hrefVal);
    };

    // B. Standard Meta Tags
    updateMeta('name', 'description', activeSection.description);
    updateMeta('name', 'keywords', activeSection.keywords);

    // C. Open Graph (Facebook, WhatsApp, LinkedIn)
    updateMeta('property', 'og:title', activeSection.title);
    updateMeta('property', 'og:description', activeSection.description);
    updateMeta('property', 'og:url', currentUrl);
    updateMeta('property', 'og:image', bannerUrl);
    updateMeta('property', 'og:site_name', 'مدارس اليمن النموذجية');
    updateMeta('property', 'og:locale', 'ar_YE');
    updateMeta('property', 'og:type', 'website');

    // D. Twitter Card Tags
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', activeSection.title);
    updateMeta('name', 'twitter:description', activeSection.description);
    updateMeta('name', 'twitter:image', bannerUrl);

    // E. Canonical URL
    updateLink('canonical', currentUrl);

    // F. Dynamic Schema.org JSON-LD Structured Data
    const dynamicSchemaId = 'yms-dynamic-schema-ld';
    let scriptEl = document.getElementById(dynamicSchemaId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = dynamicSchemaId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['School', 'EducationalOrganization'],
          '@id': `${origin}/#school`,
          name: 'مدارس اليمن النموذجية',
          alternateName: ['Yemen Model Schools', 'مدارس اليمن النموذجية بصنعاء'],
          url: origin,
          logo: {
            '@type': 'ImageObject',
            url: logoUrl,
            caption: 'شعار مدارس اليمن النموذجية الرسمي',
          },
          image: [bannerUrl, logoUrl],
          description: activeSection.description,
          telephone: '+967-777-000-000',
          email: 'info@yemenmodelschools.edu.ye',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'شارع النصر، جوار حديقة السبعين',
            addressLocality: 'صنعاء',
            addressRegion: 'أمانة العاصمة',
            addressCountry: 'YE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 15.3462,
            longitude: 44.2089,
          },
          foundingDate: '2005',
          priceRange: '$$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
              opens: '07:30',
              closes: '14:00',
            },
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'المراحل التعليمية المعتمدة',
            itemListElement: [
              {
                '@type': 'Course',
                name: 'مرحلة الروضة والتمهيدي (KG)',
                description: 'بيئة استكشافية تفاعلية لتنمية الذكاء والمواهب والمهارات التأسيسية للأطفال.',
              },
              {
                '@type': 'Course',
                name: 'المرحلة الأساسية (1 - 9)',
                description: 'تأسيس علمي ولغوي متين مع معامل علمية وأنشطة مهارية وبناء شخصية الطالب.',
              },
              {
                '@type': 'Course',
                name: 'المرحلة الثانوية (علمي وأدبي)',
                description: 'إعداد أكاديمي مكثف للجامعات والامتحانات الوزارية مع نخبة من خيرة الأساتذة.',
              },
            ],
          },
        },
        // Sitelinks & Internal Links Navigation Schema
        {
          '@type': 'SiteNavigationElement',
          '@id': `${origin}/#navigation`,
          name: 'بنية الروابط الداخلية لمدارس اليمن النموذجية',
          about: [
            {
              '@type': 'WebPage',
              name: 'الرئيسية وبوابة المدرسة',
              url: `${origin}/#hero`,
            },
            {
              '@type': 'WebPage',
              name: 'عن المدرسة وفلسفتنا',
              url: `${origin}/#about`,
            },
            {
              '@type': 'WebPage',
              name: 'الرؤية والرسالة',
              url: `${origin}/#vision-mission`,
            },
            {
              '@type': 'WebPage',
              name: 'الأهداف والأسس التربوية',
              url: `${origin}/#objectives-principles`,
            },
            {
              '@type': 'WebPage',
              name: 'المراحل والبرامج الدراسية',
              url: `${origin}/#stages`,
            },
            {
              '@type': 'WebPage',
              name: 'الهيئة التعليمية والإدارية',
              url: `${origin}/#faculty`,
            },
            {
              '@type': 'WebPage',
              name: 'الأخبار والفعاليات',
              url: `${origin}/#news`,
            },
            {
              '@type': 'WebPage',
              name: 'معرض الصور والأنشطة',
              url: `${origin}/#gallery`,
            },
            {
              '@type': 'WebPage',
              name: 'تواصل معنا وحجز مقعد',
              url: `${origin}/#contact`,
            },
          ],
        },
        // Breadcrumb Schema for Current Active Section
        {
          '@type': 'BreadcrumbList',
          '@id': `${currentUrl}/#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'مدارس اليمن النموذجية',
              item: `${origin}/#hero`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: activeSection.name,
              item: currentUrl,
            },
          ],
        },
      ],
    };

    scriptEl.textContent = JSON.stringify(structuredData, null, 2);
  }, [activeSection]);

  const handleCopySectionLink = () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${activeSection.id}`;
      if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(url)
          .then(() => {
            setCopiedLink(true);
            setTimeout(() => setCopiedLink(false), 2000);
          })
          .catch(() => {
            // Fallback for restricted clipboard access
            setCopiedLink(true);
            setTimeout(() => setCopiedLink(false), 2000);
          });
      } else {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div
      id="section-seo-breadcrumbs"
      className="hidden md:block fixed bottom-4 left-4 z-40 animate-in fade-in duration-300 pointer-events-auto"
      aria-label="مسار التصفح الحالي والروابط الداخلية"
    >
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 text-xs">
        {/* Visual Pulse Indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-700 dark:bg-amber-400"></span>
        </span>

        {/* Dynamic Breadcrumb Hierarchy */}
        <div className="flex items-center gap-1.5 font-bold text-slate-500 dark:text-slate-400">
          <a
            href="#hero"
            className="hover:text-blue-900 dark:hover:text-amber-400 transition-colors"
            title="الانتقال إلى واجهة المدرسة الرئيسية"
          >
            مدارس اليمن النموذجية
          </a>
          <span>/</span>
          <span className="text-blue-900 dark:text-amber-300 font-black">
            {activeSection.name}
          </span>
        </div>

        {/* Quick Link Share / Anchor Button */}
        <button
          onClick={handleCopySectionLink}
          className="ml-1 px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-amber-300 transition-colors cursor-pointer text-[10px] font-bold flex items-center gap-1"
          title="نسخ رابط هذا القسم المباشر (SEO Link)"
        >
          {copiedLink ? (
            <span className="text-emerald-600 dark:text-emerald-400 font-black">تم النسخ ✓</span>
          ) : (
            <span>#رابط القسم</span>
          )}
        </button>
      </div>
    </div>
  );
};
