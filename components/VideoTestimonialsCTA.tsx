
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const VideoTestimonialsCTA: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-white text-center overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-2xl border border-white/20 p-16 md:p-24 rounded-[3rem] shadow-2xl">
          <h2 className="text-5xl md:text-8xl font-bebas text-secondary mb-8 leading-none tracking-tighter">
            {lang === 'EN' ? 'Ready to Be Our Next Success Story?' : 'আপনি কি আমাদের পরবর্তী সাফল্যের গল্প হতে প্রস্তুত?'}
          </h2>
          <p className="text-charcoal/70 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
            {lang === 'EN' 
              ? 'Join hundreds of satisfied clients who have trusted Zosh Communications with their most important events. Let’s create an unforgettable experience together.'
              : 'জোশ কমিউনিকেশনসকে তাদের সবচেয়ে গুরুত্বপূর্ণ ইভেন্টের জন্য বিশ্বাস করা শত শত সন্তুষ্ট ক্লায়েন্টদের সাথে যোগ দিন। আসুন একসাথে একটি অবিস্মরণীয় অভিজ্ঞতা তৈরি করি।'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-bebas text-2xl tracking-widest hover:bg-darkRed transition-all shadow-2xl shadow-primary/20 hover:-translate-y-1">
              {lang === 'EN' ? 'START YOUR PROJECT' : 'প্রজেক্ট শুরু করুন'}
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary px-12 py-5 rounded-2xl font-bebas text-2xl tracking-widest hover:bg-primary hover:text-white transition-all">
              {lang === 'EN' ? 'VIEW PORTFOLIO' : 'পোর্টফোলিও দেখুন'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsCTA;
