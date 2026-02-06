
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const Partners: React.FC<Props> = ({ lang }) => {
  // Extended list to ensure seamless looping
  const partners = [
    'GP', 'Robi', 'SAMSUNG', 'TOYOTA', 'UNICEF', 'bKash', 'Nagad', 'BAT', 
    'GP', 'Robi', 'SAMSUNG', 'TOYOTA', 'UNICEF', 'bKash', 'Nagad', 'BAT'
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-bebas font-normal mb-4 tracking-tight bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] uppercase">
          {lang === 'EN' ? 'Trusted Partners' : 'বিশ্বস্ত অংশীদার'}
        </h2>
        <p className="text-[#666] font-sans font-medium max-w-2xl mx-auto">
          {lang === 'EN' 
            ? 'We collaborate with leading brands and organizations to deliver excellence in every event.' 
            : 'আমরা প্রতিটি ইভেন্টে শ্রেষ্ঠত্ব প্রদানের জন্য শীর্ষস্থানীয় ব্র্যান্ড এবং সংস্থার সাথে কাজ করি।'}
        </p>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap py-4 group-hover:[animation-play-state:paused]">
          {partners.map((p, idx) => (
            <div 
              key={idx} 
              className="mx-8 w-40 h-24 bg-lightGray rounded-2xl flex items-center justify-center border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 flex-shrink-0"
            >
              <span className="text-2xl font-bebas font-bold text-primary tracking-widest">{p}</span>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {partners.map((p, idx) => (
            <div 
              key={`dup-${idx}`} 
              className="mx-8 w-40 h-24 bg-lightGray rounded-2xl flex items-center justify-center border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 flex-shrink-0"
            >
              <span className="text-2xl font-bebas font-bold text-primary tracking-widest">{p}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
