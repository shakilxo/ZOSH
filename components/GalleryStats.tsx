
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const GalleryStats: React.FC<Props> = ({ lang }) => {
  const stats = [
    { num: '250+', label: { EN: 'Events Managed', BN: 'পরিচালিত ইভেন্ট' } },
    { num: '5000+', label: { EN: 'Photos Captured', BN: 'সংগৃহীত ছবি' } },
    { num: '50+', label: { EN: 'Happy Clients', BN: 'খুশি গ্রাহক' } },
    { num: '15+', label: { EN: 'Event Categories', BN: 'ইভেন্ট ক্যাটাগরি' } },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-12 md:p-20 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((s, i) => (
              <div key={i} className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="text-6xl md:text-7xl font-bebas bg-gradient-to-r from-primary to-darkRed bg-clip-text text-transparent mb-4">
                  {s.num}
                </div>
                <div className="text-darkGray font-sans font-bold uppercase tracking-[0.2em] text-sm group-hover:text-primary transition-colors">
                  {lang === 'EN' ? s.label.EN : s.label.BN}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryStats;
