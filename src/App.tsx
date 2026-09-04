import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ObjectivesAndPrinciplesSection } from './components/ObjectivesAndPrinciplesSection';
import { StagesSection } from './components/StagesSection';
import { FacultySection } from './components/FacultySection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { SectionSEOManager } from './components/SectionSEOManager';
import {
  INITIAL_NEWS,
  INITIAL_GALLERY,
  INITIAL_CONTACT_INFO,
} from './data/schoolData';
import { ContactInfo, GalleryItem, NewsItem } from './types';

export default function App() {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('yms_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  // News, Gallery, and Contact dynamic state
  const [newsList, setNewsList] = useState<NewsItem[]>(() => {
    const saved = localStorage.getItem('yms_news_data');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('yms_gallery_data');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('yms_contact_data');
    return saved ? JSON.parse(saved) : INITIAL_CONTACT_INFO;
  });

  // Modals state
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('yms_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-900 selection:text-amber-300 ${darkMode ? 'dark' : ''}`}>
      {/* Sticky Navbar with RTL and Vertical School Logo */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenRegistration={() => setIsRegistrationOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      <main className="flex-grow">
        {/* 3. Hero Section with School Branding, Photo & Stats */}
        <Hero onOpenRegistration={() => setIsRegistrationOpen(true)} />

        {/* 4. About the School & Educational Philosophy */}
        <AboutSection />

        {/* 5. Vision & Mission (الرؤية والرسالة verbatim from brochure) */}
        <VisionMissionSection />

        {/* 6. Strategic Objectives & Dealing Principles (الأهداف وأسس التعامل verbatim) */}
        <ObjectivesAndPrinciplesSection />

        {/* 7. Educational Stages (KG, Basic, Secondary) */}
        <StagesSection onOpenRegistration={() => setIsRegistrationOpen(true)} />

        {/* 8. Faculty & Administration */}
        <FacultySection />

        {/* 9. News & Official Announcements with Reader */}
        <NewsSection
          newsList={newsList}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 10. School Photo Gallery with Lightbox */}
        <GallerySection
          galleryItems={galleryItems}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 11. Contact Details & Interactive Location Map */}
        <ContactSection contactInfo={contactInfo} />
      </main>

      {/* 12. School Footer & Back-to-Top */}
      <Footer
        contactInfo={contactInfo}
        onOpenRegistration={() => setIsRegistrationOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* 13. Online Student Admission / Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />

      {/* 14. Administrative Control Panel Modal */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        newsList={newsList}
        onUpdateNews={setNewsList}
        galleryItems={galleryItems}
        onUpdateGallery={setGalleryItems}
        contactInfo={contactInfo}
        onUpdateContact={setContactInfo}
      />

      {/* 15. Dynamic Section Meta Tags & Internal Links Schema Manager */}
      <SectionSEOManager />
    </div>
  );
}
