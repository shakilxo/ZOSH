
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const CEOHero: React.FC<Props> = ({ lang }) => {
  return (
    <section className="relative pt-[180px] pb-[80px] text-center overflow-hidden">
      {/* Background with Shine Effect and Light Gradient matching the site aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#fdfbfb] to-[#ebedee]/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[shine_5s_infinite_linear]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Tagline using the requested Dancing Font */}
        <span className="dancing-font text-3xl md:text-4xl text-primary mb-4 block animate-fadeInUp drop-shadow-sm">
          {lang === 'EN' ? 'Leadership & Vision' : 'নেতৃত্ব ও ভিশন'}
        </span>
        
        {/* Heading with the signature Crimson Gradient */}
        <h1 className="text-6xl md:text-8xl font-bebas leading-none tracking-widest mb-6 animate-fadeInUp bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]" style={{ animationDelay: '0.2s' }}>
          {lang === 'EN' ? 'Message from CEO' : 'সিইও-র বার্তা'}
        </h1>
        
        {/* Description in a rounded glass container matching the requested high-end aesthetic */}
        <div className="bg-white/80 backdrop-blur-md border border-white/40 px-10 py-8 rounded-[25px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] inline-block max-w-3xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-charcoal text-lg md:text-xl font-sans leading-relaxed opacity-90">
            {lang === 'EN' 
              ? "Meet the visionary behind Zosh Communications and learn about our mission, vision, and achievements."
              : "জোশ কমিউনিকেশনসের পেছনের স্বপ্নদ্রষ্টার সাথে পরিচিত হন এবং আমাদের লক্ষ্য, ভিশন ও অর্জন সম্পর্কে জানুন।"}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
      `}</style>
    </section>
  );
};

export default CEOHero;
