
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const NewsHero: React.FC<Props> = ({ lang }) => {
  return (
    <section className="relative pt-[180px] pb-[80px] text-center overflow-hidden">
      {/* Shine Animation Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[shine_3s_infinite_linear]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <span className="dancing-font text-3xl md:text-4xl text-primary mb-4 block animate-fadeInUp">
          {lang === 'EN' ? 'Latest Updates' : 'সর্বশেষ আপডেট'}
        </span>
        <h1 className="text-6xl md:text-8xl font-bebas leading-none tracking-widest mb-6 animate-fadeInUp bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]" style={{ animationDelay: '0.2s' }}>
          {lang === 'EN' ? 'News & Media Center' : 'নিউজ ও মিডিয়া সেন্টার'}
        </h1>
        <div className="bg-white/70 backdrop-blur-md border border-white/20 px-8 py-5 rounded-[20px] shadow-xl inline-block max-w-2xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-darkGray text-lg md:text-xl font-sans leading-relaxed">
            {lang === 'EN' 
              ? 'Stay updated with our latest events, media coverage, press releases, and industry insights.'
              : 'আমাদের সর্বশেষ ইভেন্ট, মিডিয়া কভারেজ, প্রেস রিলিজ এবং ইন্ডাস্ট্রি ইনসাইট সম্পর্কে আপডেট থাকুন।'}
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

export default NewsHero;
