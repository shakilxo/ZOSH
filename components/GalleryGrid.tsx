
import React, { useState } from 'react';
import { Language } from '../types';
// Fixed: Replaced non-existent 'Ring' icon from lucide-react with 'Heart'
import { LayoutGrid, Briefcase, Heart, Music, Cake, Sparkles, X, Expand, Calendar, Users, MapPin, Clock, CalendarPlus } from 'lucide-react';

interface Props {
  lang: Language;
}

const GalleryGrid: React.FC<Props> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filters = [
    { id: 'all', label: { EN: 'All Events', BN: 'সব ইভেন্ট' }, icon: LayoutGrid },
    { id: 'corporate', label: { EN: 'Corporate', BN: 'কর্পোরেট' }, icon: Briefcase },
    // Fixed: Replaced 'Ring' with 'Heart'
    { id: 'wedding', label: { EN: 'Wedding', BN: 'ওয়েডিং' }, icon: Heart },
    { id: 'concert', label: { EN: 'Concert', BN: 'কনসার্ট' }, icon: Music },
    { id: 'birthday', label: { EN: 'Birthday', BN: 'জন্মদিন' }, icon: Cake },
    { id: 'festival', label: { EN: 'Festival', BN: 'ফেস্টিভাল' }, icon: Sparkles },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'corporate',
      title: "Global Tech Summit 2023",
      image: "https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "International technology conference with 2000+ attendees.",
      fullDesc: "The Global Tech Summit 2023 brought together technology enthusiasts, industry experts, and business leaders from across the globe. Our team managed everything from venue setup to speaker coordination.",
      date: "March 15-17, 2023",
      attendees: "2000+",
      location: "ICCD, Dhaka",
      duration: "3 Days"
    },
    {
      id: 2,
      category: 'corporate',
      title: "XYZ Product Launch",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "Exclusive product unveiling event with media coverage.",
      fullDesc: "An immersive brand experience designed to launch XYZ's new flagship product. We provided state-of-the-art lighting and sound production.",
      date: "June 10, 2023",
      attendees: "500",
      location: "Grand Ballroom, Pan Pacific",
      duration: "1 Day"
    },
    {
      id: 3,
      category: 'wedding',
      title: "Sarah & John's Wedding",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "Beachfront wedding ceremony with custom decor.",
      fullDesc: "A breathtaking beachfront celebration that merged traditional and modern aesthetics. Complete planning from catering to florist services.",
      date: "Feb 14, 2023",
      attendees: "300",
      location: "Cox's Bazar",
      duration: "2 Days"
    },
    {
      id: 4,
      category: 'concert',
      title: "Summer Sounds Festival",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "2-day outdoor music festival with 15,000 attendees.",
      fullDesc: "One of the largest music festivals in Dhaka, featuring local and international rock stars. High-voltage energy and flawless security management.",
      date: "July 28-29, 2023",
      attendees: "15,000",
      location: "Army Stadium, Dhaka",
      duration: "2 Days"
    },
    {
      id: 5,
      category: 'birthday',
      title: "Surprise 30th Birthday",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "Elegant surprise birthday party with custom theme.",
      fullDesc: "A secret celebration executed with absolute discretion and creative flair. Custom black and gold theme with live jazz ensemble.",
      date: "May 5, 2023",
      attendees: "150",
      location: "Gulshan Villa",
      duration: "1 Day"
    },
    {
      id: 6,
      category: 'festival',
      title: "International Food Festival",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "Food festival with international cuisine stalls.",
      fullDesc: "A culinary journey showcasing 40+ countries. We managed stall logistics, visitor flow, and live cooking stage production.",
      date: "Nov 20-22, 2023",
      attendees: "8000+",
      location: "Hatirjheel Park",
      duration: "3 Days"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Glassmorphism Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg ${
                activeFilter === f.id 
                  ? 'bg-gradient-to-r from-primary to-darkRed text-white scale-105' 
                  : 'bg-white/10 text-darkGray hover:bg-white/30'
              }`}
            >
              <f.icon className="w-4 h-4" />
              <span>{lang === 'EN' ? f.label.EN : f.label.BN}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <span className="bg-primary text-white text-[10px] font-bold uppercase px-4 py-1 rounded-full w-fit mb-4 tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-white text-3xl font-bebas mb-2 leading-none">{item.title}</h3>
                <p className="text-white/80 font-sans text-sm mb-6 leading-relaxed line-clamp-2">{item.desc}</p>
                <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-white hover:text-primary transition-all self-start">
                  <Expand className="w-3 h-3" />
                  <span>VIEW DETAILS</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden w-full max-w-6xl max-h-[90vh] shadow-2xl animate-fadeInUp relative flex flex-col lg:flex-row">
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 bg-black/20 hover:bg-primary text-white p-3 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full lg:w-3/5 h-[300px] lg:h-auto overflow-hidden">
                <img src={selectedItem.image} className="w-full h-full object-cover" alt={selectedItem.title} />
              </div>

              <div className="w-full lg:w-2/5 p-8 md:p-12 overflow-y-auto">
                <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase px-4 py-1.5 rounded-full tracking-widest mb-6 inline-block">
                  {selectedItem.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bebas text-secondary mb-6 leading-tight">
                  {selectedItem.title}
                </h2>
                <p className="text-charcoal/80 text-lg mb-8 font-sans leading-relaxed">
                  {selectedItem.fullDesc}
                </p>

                <div className="grid grid-cols-2 gap-6 p-6 bg-primary/5 rounded-2xl border border-primary/10 mb-10">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase">Date</p>
                      <p className="text-sm font-bold text-secondary font-sans">{selectedItem.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase">Attendees</p>
                      <p className="text-sm font-bold text-secondary font-sans">{selectedItem.attendees}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase">Location</p>
                      <p className="text-sm font-bold text-secondary font-sans">{selectedItem.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase">Duration</p>
                      <p className="text-sm font-bold text-secondary font-sans">{selectedItem.duration}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bebas text-2xl tracking-widest flex items-center justify-center space-x-3 hover:bg-darkRed transition-all shadow-xl shadow-primary/20">
                  <CalendarPlus className="w-6 h-6" />
                  <span>PLAN SIMILAR EVENT</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
