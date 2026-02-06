
import { Translation, Service, PortfolioItem } from './types';

export const TRANSLATIONS: Translation = {
  home: { EN: 'Home', BN: 'হোম' },
  services: { EN: 'Services', BN: 'সেবা' },
  portfolio: { EN: 'Portfolio', BN: 'পোর্টফোলিও' },
  process: { EN: 'Process', BN: 'প্রক্রিয়া' },
  blog: { EN: 'Blog', BN: 'ব্লগ' },
  contact: { EN: 'Contact', BN: 'যোগাযোগ' },
  quote: { EN: 'Get Free Quote', BN: 'ফ্রি কোট পান' },
  tagline: { EN: 'Creating Moments That Last Forever', BN: 'চিরস্থায়ী মুহূর্ত তৈরি করছি' },
  heroMain: { EN: 'We Craft Unforgettable Experiences', BN: 'আমরা অবিস্মরণীয় অভিজ্ঞতা তৈরি করি' },
  heroSub: { EN: 'Corporate | Entertainment | Personal Events', BN: 'কর্পোরেট | বিনোদন | ব্যক্তিগত ইভেন্ট' },
  heroCta: { EN: 'Start Planning Your Event', BN: 'আপনার ইভেন্ট পরিকল্পনা শুরু করুন' },
  heroSecondary: { EN: 'Watch Showreel', BN: 'শোরিল দেখুন' },
  whyTitle: { EN: 'Why Choose Zosh?', BN: 'কেন জোশ বেছে নেবেন?' },
};

export const SERVICES: Service[] = [
  {
    id: 'corporate',
    titleEn: 'Corporate Events',
    titleBn: 'কর্পোরেট ইভেন্ট',
    descriptionEn: 'Professional gatherings that reflect your brand excellence.',
    descriptionBn: 'পেশাদার সমাবেশ যা আপনার ব্র্যান্ডের শ্রেষ্ঠত্ব প্রতিফলিত করে।',
    icon: 'Briefcase',
    color: '#4A148C',
    subServicesEn: ['Conferences', 'Product Launches', 'Team Building', 'Award Ceremonies'],
    subServicesBn: ['কনফারেন্স', 'পণ্য লঞ্চ', 'টিম বিল্ডিং', 'পুরস্কার বিতরণী'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'entertainment',
    titleEn: 'Entertainment',
    titleBn: 'বিনোদন ইভেন্ট',
    descriptionEn: 'Spectacular shows and concerts that captivate the audience.',
    descriptionBn: 'অপূর্ব শো এবং কনসার্ট যা দর্শকদের মুগ্ধ করে।',
    icon: 'Music',
    color: '#FFD700',
    subServicesEn: ['Music Concerts', 'Stage Shows', 'Artist Management', 'Festivals'],
    subServicesBn: ['মিউজিক কনসার্ট', 'স্টেজ শো', 'আর্টিস্ট ম্যানেজমেন্ট', 'উৎসব'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'personal',
    titleEn: 'Personal Events',
    titleBn: 'ব্যক্তিগত ইভেন্ট',
    descriptionEn: 'Intimate celebrations and dream weddings.',
    descriptionBn: 'অন্তরঙ্গ উদযাপন এবং স্বপ্নের বিয়ে।',
    icon: 'Heart',
    color: '#dc143c',
    subServicesEn: ['Weddings', 'Birthdays', 'Anniversaries', 'Theme Parties'],
    subServicesBn: ['বিয়ে', 'জন্মদিন', 'বিবাহ বার্ষিকী', 'থিম পার্টি'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, titleEn: 'Grameenphone Corporate Gala', titleBn: 'গ্রামীণফোন কর্পোরেট গালা', category: 'Corporate', image: 'https://images.unsplash.com/photo-1540575861501-7c0011e7a48f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, titleEn: 'Rock Night Dhaka', titleBn: 'রক নাইট ঢাকা', category: 'Concerts', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800' },
  { id: 3, titleEn: 'A Regal Wedding at Radisson', titleBn: 'র‍্যাডিশনে একটি রাজকীয় বিবাহ', category: 'Weddings', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800' },
  { id: 4, titleEn: 'Tech Summit 2024', titleBn: 'টেক সামিট ২০২৪', category: 'Corporate', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800' },
  { id: 5, titleEn: 'Tropical Beach Wedding', titleBn: 'ট্রপিক্যাল বিচ ওয়েডিং', category: 'Weddings', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
  { id: 6, titleEn: 'Jazz in the Park', titleBn: 'পার্কে জ্যাজ', category: 'Concerts', image: 'https://images.unsplash.com/photo-1514525253342-b0bb4d722967?auto=format&fit=crop&q=80&w=800' },
];
