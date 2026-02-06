
import React, { useState } from 'react';
import { Language } from '../types';
import { ArrowRight } from 'lucide-react';

interface Props {
  lang: Language;
}

const PortfolioGallery: React.FC<Props> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', labelEn: 'All Events', labelBn: 'সব ইভেন্ট' },
    { id: 'corporate', labelEn: 'Corporate', labelBn: 'কর্পোরেট' },
    { id: 'wedding', labelEn: 'Wedding', labelBn: 'ওয়েডিং' },
    { id: 'concert', labelEn: 'Concerts', labelBn: 'কনসার্ট' },
    { id: 'festival', labelEn: 'Festivals', labelBn: 'ফেস্টিভাল' },
    { id: 'social', labelEn: 'Social', labelBn: 'সোশ্যাল' },
  ];

  const items = [
    {
      id: 1,
      category: 'corporate',
      titleEn: 'Global Tech Summit 2023',
      descEn: '3-day international technology conference with 2000+ attendees.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      category: 'corporate',
      titleEn: 'XYZ Corp Product Launch',
      descEn: 'Exclusive product unveiling event with media coverage.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      category: 'wedding',
      titleEn: "Sarah & John's Luxury Wedding",
      descEn: 'Beachfront ceremony with custom thematic decor.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      category: 'wedding',
      titleEn: 'Traditional Bengali Wedding',
      descEn: 'Multi-day celebration with cultural rituals and festivities.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      category: 'concert',
      titleEn: 'Summer Sounds Festival',
      descEn: '2-day outdoor music festival with 15,000 attendees.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      category: 'concert',
      titleEn: 'Rock Revolution Live',
      descEn: 'Indoor rock concert with state-of-the-art lighting.',
      image: 'https://images.unsplash.com/photo-1501281667305-0d4e0ab4b8b8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 7,
      category: 'festival',
      titleEn: 'Dhaka Cultural Festival',
      descEn: 'Week-long festival showcasing traditional arts and food.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 8,
      category: 'social',
      titleEn: '25th Anniversary Gala',
      descEn: 'Golden anniversary celebration with nostalgic themes.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 9,
      category: 'social',
      titleEn: 'Surprise 40th Birthday',
      descEn: 'Elegant surprise party with custom decorations.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(i => i.category === activeFilter);

  return (
    <section className="py-12 bg-lightGray/30">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-8 py-2.5 rounded-full font-sans font-semibold text-base transition-all duration-300 border-2 ${
                activeFilter === f.id 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-white border-lightGray text-darkGray hover:bg-primary hover:border-primary hover:text-white'
              }`}
            >
              {lang === 'EN' ? f.labelEn : f.labelBn}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="relative h-[350px] rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={item.image} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={item.titleEn}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 p-8 flex flex-col justify-end">
                <span className="inline-block bg-primary text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full tracking-widest mb-3 self-start">
                  {item.category}
                </span>
                <h3 className="text-white text-3xl font-bebas mb-2 leading-none">
                  {lang === 'EN' ? item.titleEn : item.titleEn /* Placeholder for BN titles */}
                </h3>
                <p className="text-white/80 font-sans text-sm mb-4 leading-relaxed line-clamp-2">
                  {item.descEn}
                </p>
                <div className="flex items-center space-x-2 text-white font-bold text-sm group/link hover:text-primary transition-colors cursor-pointer">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
