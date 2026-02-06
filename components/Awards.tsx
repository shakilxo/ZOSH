
import React from 'react';
import { Language } from '../types';
import { Trophy, Award as AwardIcon, Medal, Star } from 'lucide-react';

interface Props {
  lang: Language;
}

const Awards: React.FC<Props> = ({ lang }) => {
  const awards = [
    { icon: Trophy, titleEn: 'Best Event Management 2022', descEn: 'Bangladesh Event Excellence Awards' },
    { icon: AwardIcon, titleEn: 'Excellence in Wedding Planning', descEn: 'South Asian Wedding Awards 2021' },
    { icon: Medal, titleEn: 'Innovation in Virtual Events', descEn: 'Digital Transformation Awards 2020' },
    { icon: Star, titleEn: 'Client Satisfaction Award', descEn: 'Business Excellence Forum 2019' },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?auto=format&fit=crop&w=2000" 
          className="w-full h-full object-cover opacity-20 grayscale" 
          alt="Awards backdrop" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bebas text-white mb-4">
            {lang === 'EN' ? 'Awards & Recognition' : 'পুরস্কার এবং স্বীকৃতি'}
          </h2>
          <p className="text-lightGray/60 font-sans italic">
            {lang === 'EN' ? 'Our commitment to excellence has been recognized by industry leaders.' : 'আমাদের শ্রেষ্ঠত্বের প্রতিশ্রুতি ইন্ডাস্ট্রি লিডারদের দ্বারা স্বীকৃত।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((a, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 group">
              <div className="text-primary mb-6 flex justify-center">
                <a.icon className="w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bebas text-white mb-2 tracking-wide uppercase">{a.titleEn}</h3>
              <p className="text-lightGray/60 text-sm font-sans">{a.descEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
