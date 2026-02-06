
import React from 'react';
import { Language } from '../types';
import { Check } from 'lucide-react';

interface Props {
  lang: Language;
}

const DetailedServices: React.FC<Props> = ({ lang }) => {
  const sections = [
    {
      id: 'corporate',
      titleEn: 'Corporate Events',
      titleBn: 'কর্পোরেট ইভেন্ট',
      descEn: 'Professional gatherings that reflect your brand excellence. From intimate meetings to large conferences, we align with your business objectives.',
      descBn: 'পেশাদার সমাবেশ যা আপনার ব্র্যান্ডের শ্রেষ্ঠত্ব প্রতিফলিত করে। ছোট মিটিং থেকে বড় কনফারেন্স, সব আমরা সামলাই।',
      featuresEn: ['Conferences & Seminars', 'Product Launches', 'Team Building', 'Award Ceremonies', 'Exhibitions', 'Annual Meetings'],
      featuresBn: ['কনফারেন্স ও সেমিনার', 'প্রোডাক্ট লঞ্চ', 'টিম বিল্ডিং', 'পুরস্কার বিতরণী', 'প্রদর্শনী', 'বার্ষিক সভা'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
      reversed: false
    },
    {
      id: 'wedding',
      titleEn: 'Wedding Planning',
      titleBn: 'ওয়েডিং প্ল্যানিং',
      descEn: 'Transform your dream wedding into reality. We handle every detail from venue selection to thematic decor, ensuring a stress-free celebration.',
      descBn: 'আপনার স্বপ্নের বিয়ে বাস্তবে রূপান্তর করুন। ভেন্যু নির্বাচন থেকে শুরু করে থিমেটিক ডেকোর পর্যন্ত আমরা সব সামলাই।',
      featuresEn: ['Venue Selection', 'Decor & Theme Design', 'Catering Management', 'Photography & Video', 'Guest Management', 'Budgeting'],
      featuresBn: ['ভেন্যু নির্বাচন', 'ডেকোর ও থিম ডিজাইন', 'ক্যাটারিং ম্যানেজমেন্ট', 'ফটোগ্রাফি ও ভিডিও', 'গেস্ট ম্যানেজমেন্ট', 'বাজেটিং'],
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
      reversed: true
    },
    {
      id: 'concerts',
      titleEn: 'Concerts & Live Shows',
      titleBn: 'কনসার্ট ও লাইভ শো',
      descEn: 'Production and management of high-energy entertainment events. We bring creative vision to life with world-class technical expertise.',
      descBn: 'উচ্চ-শক্তির বিনোদন ইভেন্ট উৎপাদন এবং পরিচালনা। আমরা বিশ্বমানের কারিগরি দক্ষতার সাথে সৃজনশীল ভিশনকে প্রাণবন্ত করি।',
      featuresEn: ['Concert Production', 'Stage Design', 'Sound & Lighting', 'Talent Booking', 'Crowd Management', 'Live Streaming'],
      featuresBn: ['কনসার্ট প্রোডাকশন', 'স্টেজ ডিজাইন', 'সাউন্ড ও লাইটিং', 'ট্যালেন্ট বুকিং', 'ক্রাউড ম্যানেজমেন্ট', 'লাইভ স্ট্রিমিং'],
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000',
      reversed: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 space-y-32">
        {sections.map((section) => (
          <div 
            key={section.id}
            id={section.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${section.reversed ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Text Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-primary text-2xl font-serif italic mb-2">
                {lang === 'EN' ? 'Service Detail' : 'সেবার বিবরণ'}
              </h3>
              <h2 className="text-secondary text-5xl md:text-6xl font-bebas mb-6">
                {lang === 'EN' ? section.titleEn : section.titleBn}
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-10 font-sans">
                {lang === 'EN' ? section.descEn : section.descBn}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(lang === 'EN' ? section.featuresEn : section.featuresBn).map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 text-secondary group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-bebas text-xl tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-12 bg-primary text-white px-8 py-4 rounded-full font-bebas text-xl tracking-widest hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                {lang === 'EN' ? 'Inquire Now' : 'এখনই জিজ্ঞাসা করুন'}
              </button>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-[40px] -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              <img 
                src={section.image} 
                className="relative z-10 w-full h-[500px] object-cover rounded-[40px] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                alt={section.titleEn}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedServices;
