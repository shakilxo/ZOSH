
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const CaseStudies: React.FC<Props> = ({ lang }) => {
  const cases = [
    {
      id: 1,
      category: 'Corporate Event',
      title: 'Global Tech Summit 2023',
      desc: 'Organizing a 3-day international technology conference for 2000+ attendees presented unique challenges in logistics and attendee experience management.',
      stats: [
        { label: 'Attendees', val: '2,000+' },
        { label: 'Countries', val: '50+' },
        { label: 'Satisfaction', val: '98%' }
      ],
      image: 'https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?auto=format&fit=crop&q=80&w=1200',
      reversed: false
    },
    {
      id: 2,
      category: 'Wedding Event',
      title: 'Luxury Beachfront Wedding',
      desc: "Sarah and John's dream wedding required transforming a beachfront property into an elegant venue while managing unpredictable weather conditions.",
      stats: [
        { label: 'Guests', val: '500' },
        { label: 'Countries', val: '15' },
        { label: 'Days', val: '3' }
      ],
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
      reversed: true
    }
  ];

  return (
    <section className="py-20 bg-lightGray/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bebas text-black mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            {lang === 'EN' ? 'Featured Case Studies' : 'সেরা কেস স্টাডিজ'}
          </h2>
          <p className="text-darkGray text-lg max-w-2xl mx-auto mt-8 font-sans">
            {lang === 'EN' ? 'In-depth look at some of our most successful and challenging events.' : 'আমাদের সবচেয়ে সফল এবং চ্যালেঞ্জিং ইভেন্টগুলির বিস্তারিত বর্ণনা।'}
          </p>
        </div>

        <div className="space-y-24">
          {cases.map((c) => (
            <div key={c.id} className={`flex flex-col lg:flex-row items-center gap-12 ${c.reversed ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img src={c.image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={c.title} />
              </div>
              
              <div className="w-full lg:w-1/2">
                <span className="inline-block bg-primary/10 text-primary text-sm font-bold uppercase px-5 py-2 rounded-full tracking-widest mb-6">
                  {c.category}
                </span>
                <h3 className="text-black text-4xl font-bebas mb-6 leading-tight">
                  {c.title}
                </h3>
                <p className="text-darkGray font-sans text-lg mb-10 leading-relaxed">
                  {c.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {c.stats.map((s, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg text-center shadow-md">
                      <div className="text-3xl font-bold text-primary mb-1">{s.val}</div>
                      <div className="text-sm font-semibold text-darkGray font-sans">{s.label}</div>
                    </div>
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

export default CaseStudies;
