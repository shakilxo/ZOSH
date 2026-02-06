
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const MediaCoverage: React.FC<Props> = ({ lang }) => {
  const outlets = [
    { name: 'Daily Star', feature: 'Business Feature', desc: '"Innovating Event Management"' },
    { name: 'Prothom Alo', feature: 'Cover Story', desc: '"Redefining Corporate Events"' },
    { name: 'Business Today', feature: 'TV Feature', desc: 'CEO Interview Segment' },
    { name: 'Dhaka Tribune', feature: 'Event Review', desc: '"Tech Summit Success"' },
  ];

  return (
    <section className="py-24 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl md:text-7xl font-bebas text-secondary mb-16 tracking-tighter uppercase">
          {lang === 'EN' ? 'Featured In' : 'মিডিয়া কভারেজ'}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outlets.map((o, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/20 p-10 rounded-[32px] text-center shadow-xl hover:shadow-primary/10 transition-all group">
              <div className="h-16 flex items-center justify-center mb-6">
                <span className="text-4xl font-bebas font-bold text-primary group-hover:scale-110 transition-transform duration-500">
                  {o.name}
                </span>
              </div>
              <h4 className="text-xl font-bebas text-secondary mb-2 tracking-wide uppercase">{o.feature}</h4>
              <p className="text-charcoal/60 text-sm font-sans italic">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
