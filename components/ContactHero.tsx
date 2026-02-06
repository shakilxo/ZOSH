
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const ContactHero: React.FC<Props> = ({ lang }) => {
  return (
    <section className="relative pt-[180px] pb-[80px] text-center overflow-hidden">
      {/* Background with Shine Effect and Light Gradient matching the site aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#fdfbfb] to-[#ebedee]/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[shine_5s_infinite_linear]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Tagline using the requested Dancing Font */}
        <span className="dancing-font text-3xl md:text-4xl text-primary mb-4 block animate-fadeInUp drop-shadow-sm">
          {lang === 'EN' ? 'Get In Touch' : 'যোগাযোগ করুন'}
        </span>
        
        {/* Heading with the signature Crimson Gradient */}
        <h1 className="text-6xl md:text-8xl font-bebas leading-none tracking-widest mb-6 animate-fadeInUp bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]" style={{ animationDelay: '0.2s' }}>
          {lang === 'EN' ? 'Contact Us' : 'যোগাযোগ'}
        </h1>
        
        {/* Description in a rounded glass container matching the requested high-end aesthetic */}
        <div className="bg-white/80 backdrop-blur-md border border-white/40 px-10 py-8 rounded-[25px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] inline-block max-w-3xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-charcoal text-lg md:text-xl font-sans leading-relaxed opacity-90">
            {lang === 'EN' 
              ? "Ready to plan your next unforgettable event? Reach out to our team for a free consultation. We're here to answer your questions and help bring your vision to life."
              : "আপনার পরবর্তী অবিস্মরণীয় ইভেন্টের পরিকল্পনা করতে প্রস্তুত? বিনামূল্যে পরামর্শের জন্য আমাদের টিমের সাথে যোগাযোগ করুন। আপনার স্বপ্ন বাস্তবায়নে আমরা এখানে আছি।"}
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

export default ContactHero;
