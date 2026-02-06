
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
  navigateTo: (page: 'home' | 'services' | 'portfolio' | 'video' | 'about' | 'terms' | 'refund' | 'privacy' | 'contact' | 'gallery' | 'news' | 'ceo') => void;
}

const AboutCTA: React.FC<Props> = ({ lang, navigateTo }) => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-5xl font-bebas mb-6 leading-tight">
          {lang === 'EN' ? 'Ready to Work With Us?' : 'আমাদের সাথে কাজ করতে প্রস্তুত?'}
        </h2>
        <p className="text-darkGray text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          {lang === 'EN' 
            ? "Join hundreds of satisfied clients who have trusted us with their most important events. Let's create something amazing together."
            : "শত শত সন্তুষ্ট ক্লায়েন্টদের সাথে যোগ দিন যারা তাদের সবচেয়ে গুরুত্বপূর্ণ ইভেন্টগুলোর জন্য আমাদের ওপর আস্থা রেখেছেন।"}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => navigateTo('contact')}
            className="w-full sm:w-auto bg-primary border-2 border-primary text-white px-10 py-4 rounded font-sans font-bold uppercase tracking-wider hover:bg-darkRed hover:border-darkRed transition-all shadow-xl shadow-primary/20 active:scale-95"
          >
            Start Planning Your Event
          </button>
          <button 
            onClick={() => navigateTo('portfolio')}
            className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary px-10 py-4 rounded font-sans font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
