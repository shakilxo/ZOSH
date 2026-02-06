
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const PortfolioCTA: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-5xl font-bebas mb-6 leading-tight">
          {lang === 'EN' ? 'Inspired by Our Work?' : 'আমাদের কাজ দেখে অনুপ্রাণিত?'}
        </h2>
        <p className="text-darkGray text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          {lang === 'EN' 
            ? "Let's create something amazing together. Contact us to start planning your next unforgettable event."
            : "আসুন একসাথে কিছু অসাধারণ তৈরি করি। আপনার পরবর্তী অবিস্মরণীয় ইভেন্টের পরিকল্পনা শুরু করতে আমাদের সাথে যোগাযোগ করুন।"}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-primary border-2 border-primary text-white px-10 py-4 rounded font-sans font-bold uppercase tracking-wider hover:bg-darkRed hover:border-darkRed transition-all">
            Start Your Project
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary px-10 py-4 rounded font-sans font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
