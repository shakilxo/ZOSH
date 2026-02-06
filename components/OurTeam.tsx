
import React from 'react';
import { Language } from '../types';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

interface Props {
  lang: Language;
}

const OurTeam: React.FC<Props> = ({ lang }) => {
  const team = [
    { name: 'Rahman Khan', roleEn: 'Founder & CEO', roleBn: 'প্রতিষ্ঠাতা ও সিইও', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400' },
    { name: 'Nadia Islam', roleEn: 'Creative Director', roleBn: 'ক্রিয়েটিভ ডিরেক্টর', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400' },
    { name: 'Arif Hossain', roleEn: 'Operations Director', roleBn: 'অপারেশনস ডিরেক্টর', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400' },
    { name: 'Sharmin Ahmed', roleEn: 'Client Relations', roleBn: 'ক্লায়েন্ট রিলেশনস', img: 'https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?auto=format&fit=crop&w=400' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bebas text-black mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            {lang === 'EN' ? 'Meet Our Team' : 'আমাদের টিমের সাথে পরিচিত হন'}
          </h2>
          <p className="text-darkGray text-lg max-w-2xl mx-auto mt-8 font-sans">
            {lang === 'EN' ? 'The passionate professionals behind our success. Each member brings unique expertise to every event.' : 'আমাদের সাফল্যের পেছনের প্যাশনেট পেশাদাররা।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-[300px] overflow-hidden">
                <img src={m.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={m.name} />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bebas text-black mb-1">{m.name}</h3>
                <span className="text-primary font-semibold text-sm uppercase tracking-widest block mb-4">{lang === 'EN' ? m.roleEn : m.roleBn}</span>
                <div className="flex justify-center space-x-3 mt-4">
                  {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full bg-lightGray flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
