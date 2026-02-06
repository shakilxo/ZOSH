
import React from 'react';
import { Language } from '../types';
import { FileText, Download } from 'lucide-react';

interface Props {
  lang: Language;
}

const PressReleases: React.FC<Props> = ({ lang }) => {
  const releases = [
    {
      title: 'Zosh Communications Partners with International Event Tech Company',
      date: 'December 1, 2023',
      desc: 'Zosh Communications announces strategic partnership with EventTech Global to bring cutting-edge event technology solutions to Bangladesh.'
    },
    {
      title: 'New Sustainability Initiative for Events',
      date: 'November 20, 2023',
      desc: 'We\'re launching "Green Events Initiative" to promote sustainable event practices including digital invitations and waste reduction strategies.'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center text-5xl md:text-7xl font-bebas text-secondary mb-16 tracking-tighter uppercase">
          {lang === 'EN' ? 'Latest Press Releases' : 'সাম্প্রতিক প্রেস রিলিজ'}
        </h2>
        
        <div className="space-y-8">
          {releases.map((r, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-[32px] p-10 shadow-2xl transition-all duration-300 hover:shadow-primary/5 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h3 className="text-3xl font-bebas text-secondary leading-tight">{r.title}</h3>
                <span className="bg-primary/10 text-primary text-xs font-bold uppercase px-4 py-2 rounded-xl whitespace-nowrap">
                  {r.date}
                </span>
              </div>
              <p className="text-charcoal/70 text-lg mb-10 font-sans leading-relaxed">
                {r.desc}
              </p>
              <button className="flex items-center gap-3 bg-secondary text-white px-8 py-3 rounded-xl font-bebas text-xl tracking-widest hover:bg-primary transition-all">
                <Download className="w-5 h-5" />
                <span>DOWNLOAD PDF</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressReleases;
