
import React, { useState } from 'react';
import { Language } from '../types';
import { PORTFOLIO } from '../constants';

interface PortfolioProps {
  lang: Language;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'All' | 'Corporate' | 'Concerts' | 'Weddings'>('All');

  const categories = ['All', 'Corporate', 'Concerts', 'Weddings'] as const;

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-[#4A148C] mb-4">
              {lang === 'EN' ? 'Recent Masterpieces' : 'সাম্প্রতিক মাস্টারপিস'}
            </h3>
            <p className="text-[#dc143c] font-bold uppercase tracking-widest text-sm">
              {lang === 'EN' ? 'Our Event Diary' : 'আমাদের ইভেন্ট ডায়েরি'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === cat 
                    ? 'bg-[#dc143c] text-white' 
                    : 'bg-[#eee3e3] text-[#333] hover:bg-[#dc143c]/10'
                }`}
              >
                {lang === 'EN' ? cat : (cat === 'All' ? 'সব' : cat === 'Corporate' ? 'কর্পোরেট' : cat === 'Concerts' ? 'কনসার্ট' : 'বিয়ে')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-3xl h-80 cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.titleEn} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A148C] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-2 block">
                  {item.category}
                </span>
                <h4 className="text-white text-xl font-serif font-bold">
                  {lang === 'EN' ? item.titleEn : item.titleBn}
                </h4>
                <div className="mt-4 w-10 h-1 bg-[#dc143c]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-[#4A148C] text-[#4A148C] px-12 py-4 rounded-full font-bold uppercase hover:bg-[#4A148C] hover:text-white transition-all">
            {lang === 'EN' ? 'View Full Gallery' : 'পুরো গ্যালারি দেখুন'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
