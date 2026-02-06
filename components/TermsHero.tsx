
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const TermsHero: React.FC<Props> = ({ lang }) => {
  return (
    <section className="relative pt-[180px] pb-[80px] overflow-hidden text-center">
      {/* Shine Animation Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[shine_3s_infinite_linear]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <span className="dancing-font text-3xl md:text-4xl text-primary mb-4 block animate-fadeInUp drop-shadow-sm">
          {lang === 'EN' ? 'Legal Information' : 'আইনি তথ্য'}
        </span>
        <h1 className="text-6xl md:text-8xl font-bebas mb-6 animate-fadeInUp bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
          {lang === 'EN' ? 'Terms and Conditions' : 'শর্তাবলী'}
        </h1>
        <div className="bg-white/70 backdrop-blur-md border border-white/20 px-8 py-5 rounded-[20px] shadow-xl inline-block max-w-2xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-darkGray text-lg md:text-xl font-sans leading-relaxed">
            {lang === 'EN' 
              ? 'Please read these terms and conditions carefully before using our event management services.'
              : 'আমাদের ইভেন্ট ম্যানেজমেন্ট সেবা ব্যবহার করার আগে দয়া করে এই শর্তাবলী সাবধানে পড়ুন।'}
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

export default TermsHero;
