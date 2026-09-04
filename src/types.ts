export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'إعلانات' | 'أنشطة' | 'أكاديمي' | 'أولياء الأمور' | 'عاجل';
  summary: string;
  content: string;
  imageUrl?: string;
  isImportant?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'المرافق' | 'الفصول والمعامل' | 'الأنشطة والرياضة' | 'المناسبات والتكريم' | 'الهوية والشعار';
  imageUrl: string;
  description?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  stage?: string;
  experience: string;
  avatarIcon: string;
}

export interface StageInfo {
  id: string;
  title: string;
  subtitle: string;
  grades: string;
  description: string;
  features: string[];
  iconName: string;
  color: string;
}

export interface RegistrationApplication {
  id: string;
  studentName: string;
  stage: string;
  guardianName: string;
  phone: string;
  notes?: string;
  submittedAt: string;
}

export interface ContactInfo {
  phone: string;
  secondaryPhone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  workingHours: string;
}
