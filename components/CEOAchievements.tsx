
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const CEOAchievements: React.FC<Props> = ({ lang }) => {
  const stats = [
    { num: '250+', titleEn: 'Events Managed', titleBn: 'পরিচালিত ইভেন্ট', descEn: 'Successfully organized events of all scales', descBn: 'সব স্কেলের ইভেন্ট সফলভাবে সম্পন্ন' },
    { num: '50+', titleEn: 'Happy Clients', titleBn: 'খুশি ক্লায়েন্ট', descEn: 'Corporate and individual clients served', descBn: 'কর্পোরেট এবং ব্যক্তিগত ক্লায়েন্ট' },
    { num: '15+', titleEn: 'Awards Won', titleBn: 'পুরস্কার অর্জন', descEn: 'Industry recognition and awards', descBn: 'ইন্ডাস্ট্রি স্বীকৃতি ও অ্যাওয়ার্ড' },
    { num: '8+', titleEn: 'Years Experience', titleBn: 'বছরের অভিজ্ঞতা', descEn: 'Since our establishment in 2015', descBn: '২০১৫ সাল থেকে যাত্রা শুরু' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bebas text-5xl md:text-6xl text-secondary mb-16 tracking-tight uppercase">
          {lang === 'EN' ? 'Our Achievements' : 'আমাদের অর্জনসমূহ'}
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-10 rounded-2xl bg-background border border-primary/10 text-center hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-6xl font-bebas text-primary mb-4 leading-none">{stat.num}</div>
              <h4 className="text-2xl font-bebas text-secondary mb-3 tracking-wide">{lang === 'EN' ? stat.titleEn : stat.titleBn}</h4>
              <p className="text-charcoal/60 text-sm font-sans">{lang === 'EN' ? stat.descEn : stat.descBn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CEOAchievements;
