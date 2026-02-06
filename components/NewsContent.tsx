
import React, { useState } from 'react';
import { Language } from '../types';
// Fixed: Replaced non-existent 'Bullhorn' icon with 'Megaphone'
import { Newspaper, Calendar, Megaphone, Tv, Rss, MapPin, Users, ArrowRight } from 'lucide-react';

interface Props {
  lang: Language;
}

const NewsContent: React.FC<Props> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: { EN: 'All News', BN: 'সব খবর' }, icon: Newspaper },
    { id: 'events', label: { EN: 'Events', BN: 'ইভেন্ট' }, icon: Calendar },
    // Fixed: Replaced 'Bullhorn' with 'Megaphone'
    { id: 'press', label: { EN: 'Press Releases', BN: 'প্রেস রিলিজ' }, icon: Megaphone },
    { id: 'media', label: { EN: 'Media Coverage', BN: 'মিডিয়া কভারেজ' }, icon: Tv },
    { id: 'blog', label: { EN: 'Blog', BN: 'ব্লগ' }, icon: Rss },
  ];

  const newsItems = [
    {
      id: 1,
      category: 'events',
      title: 'Annual Corporate Conference 2023 Sets New Standards',
      desc: 'Our team organized a seamless corporate conference for 500+ executives with hybrid participation options.',
      date: 'December 5, 2023',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      category: 'press',
      title: 'Zosh Communications Announces New Office Expansion',
      desc: "We're expanding our operations with a new state-of-the-art office facility to better serve our growing client base.",
      date: 'November 28, 2023',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      category: 'media',
      title: 'CEO Featured on Business News Channel',
      desc: 'Our CEO shared insights on the future of event management in Bangladesh during an exclusive interview.',
      date: 'November 20, 2023',
      image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      category: 'blog',
      title: 'Top 5 Event Management Trends for 2024',
      desc: 'Discover the latest trends shaping the event management industry and how Zosh is leading the way.',
      date: 'November 15, 2023',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      category: 'events',
      title: 'Grand Luxury Wedding Creates Unforgettable Memories',
      desc: 'We planned and executed a magnificent wedding ceremony for 800 guests with custom thematic decor.',
      date: 'November 10, 2023',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      category: 'press',
      title: 'Zosh Wins "Best Event Company 2023" Award',
      desc: 'Recognized for excellence in event management at the Bangladesh Business Excellence Awards.',
      date: 'November 5, 2023',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg ${
                activeCategory === cat.id 
                  ? 'bg-gradient-to-r from-primary to-darkRed text-white scale-105' 
                  : 'bg-white/10 text-darkGray hover:bg-white/30'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{lang === 'EN' ? cat.label.EN : cat.label.BN}</span>
            </button>
          ))}
        </div>

        {/* Featured News */}
        {activeCategory === 'all' && (
          <div className="mb-20 animate-fadeInUp">
            <div className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row group hover:shadow-primary/10 transition-all duration-500">
              <div className="lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Tech Summit"
                />
              </div>
              <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <span className="bg-primary text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full w-fit mb-6 tracking-widest">
                  Featured Event
                </span>
                <h2 className="text-4xl md:text-5xl font-bebas text-secondary mb-6 leading-tight group-hover:text-primary transition-colors">
                  Zosh Communications Successfully Hosts Dhaka Tech Summit 2023
                </h2>
                <p className="text-charcoal/70 text-lg mb-8 font-sans leading-relaxed">
                  We proudly organized Bangladesh's largest technology conference with 2000+ attendees, 50+ speakers, and groundbreaking tech exhibitions.
                </p>
                
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center gap-2 text-darkGray text-sm font-semibold">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Nov 15-17, 2023</span>
                  </div>
                  <div className="flex items-center gap-2 text-darkGray text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>ICCD, Dhaka</span>
                  </div>
                  <div className="flex items-center gap-2 text-darkGray text-sm font-semibold">
                    <Users className="w-4 h-4 text-primary" />
                    <span>2000+ Attendees</span>
                  </div>
                </div>
                
                <button className="bg-primary text-white px-10 py-4 rounded-xl font-bebas text-xl tracking-widest hover:bg-darkRed transition-all shadow-xl shadow-primary/20 self-start group-hover:-translate-y-1">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                  alt={item.title} 
                />
              </div>
              <div className="p-8">
                <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block tracking-widest">
                  {item.category.replace('_', ' ')}
                </span>
                <h3 className="text-2xl font-bebas text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 text-sm font-sans mb-6 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-mediumGray uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{item.date}</span>
                  </div>
                  <button className="text-primary font-bold text-xs flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span>READ MORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsContent;
