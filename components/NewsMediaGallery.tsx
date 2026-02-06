
import React from 'react';
import { Language } from '../types';
import { Expand } from 'lucide-react';

interface Props {
  lang: Language;
}

const NewsMediaGallery: React.FC<Props> = ({ lang }) => {
  const photos = [
    { title: 'International Conference', attendees: '500+', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1350&q=80' },
    { title: 'Luxury Wedding', info: 'Custom theme design', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1350&q=80' },
    { title: 'Music Concert', info: '10,000+ audience', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1350&q=80' },
    { title: 'Product Launch', info: 'Media coverage event', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl md:text-7xl font-bebas text-secondary mb-16 tracking-tighter uppercase">
          {lang === 'EN' ? 'Event Gallery' : 'ইভেন্ট গ্যালারি'}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((p, i) => (
            <div key={i} className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
              <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-bebas mb-2 leading-none">{p.title}</h4>
                <p className="text-white/70 font-sans text-xs mb-4 uppercase tracking-widest">{p.attendees || p.info}</p>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Expand className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsMediaGallery;
