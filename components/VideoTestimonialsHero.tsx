
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const VideoTestimonialsHero: React.FC<Props> = ({ lang }) => {
  return (
    <section className="relative pt-[180px] pb-[80px] text-center overflow-hidden">
      {/* Background with Shine Effect and Light Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#fdfbfb] to-[#ebedee]/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[shine_5s_infinite_linear]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Tagline matching the image font and color */}
        <span className="dancing-font text-3xl md:text-4xl text-primary mb-4 block animate-fadeInUp drop-shadow-sm">
          {lang === 'EN' ? 'Real Stories, Real Experiences' : 'বাস্তব গল্প, বাস্তব অভিজ্ঞতা'}
        </span>
        
        {/* Heading with requested Gradient and Shadow */}
        <h1 className="text-6xl md:text-9xl font-bebas leading-none tracking-tight mb-8 animate-fadeInUp bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]" style={{ animationDelay: '0.2s' }}>
          {lang === 'EN' ? 'Video Testimonials' : 'ভিডিও টেস্টিমোনিয়ালস'}
        </h1>
        
        {/* Description in a rounded glass container matching the image */}
        <div className="bg-white/80 backdrop-blur-md border border-white/40 px-10 py-8 rounded-[25px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] inline-block max-w-3xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-charcoal text-lg md:text-xl font-sans leading-relaxed opacity-90">
            {lang === 'EN' 
              ? 'Watch real client experiences and see why businesses and individuals trust Zosh Communications for their most important events.'
              : 'বাস্তব ক্লায়েন্ট অভিজ্ঞতা দেখুন এবং জানুন কেন ব্যবসা এবং ব্যক্তিরা তাদের সবচেয়ে গুরুত্বপূর্ণ ইভেন্টের জন্য জোশ কমিউনিকেশনসের উপর আস্থা রাখেন।'}
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

export default VideoTestimonialsHero;
