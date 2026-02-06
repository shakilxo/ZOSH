
import React, { useState } from 'react';
import { Language } from '../types';
import { Play, Film, X } from 'lucide-react';

interface Props {
  lang: Language;
}

const VideoHighlights: React.FC<Props> = ({ lang }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'v1',
      title: "Tech Summit 2023 Highlights",
      image: "https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "Watch the highlights from our biggest technology conference of the year."
    },
    {
      id: 'v2',
      title: "Wedding Event Showcase",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "Beautiful moments from one of our most elegant wedding celebrations."
    },
    {
      id: 'v3',
      title: "Concert Night Experience",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      desc: "Experience the energy from our most successful concert event."
    }
  ];

  return (
    <section className="py-24 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl md:text-7xl font-bebas text-secondary mb-16 tracking-tighter uppercase">
          {lang === 'EN' ? 'Event Highlights' : 'ইভেন্ট হাইলাইটস'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((vid) => (
            <div 
              key={vid.id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-3 group"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img 
                  src={vid.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  alt={vid.title} 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                <button 
                  onClick={() => setActiveVideo(vid.id)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-primary to-darkRed rounded-full flex items-center justify-center text-white shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 text-primary font-bold text-xs tracking-widest uppercase">
                  <Film className="w-4 h-4" />
                  <span>Cinematic Showreel</span>
                </div>
                <h3 className="text-2xl font-bebas text-secondary mb-3">{vid.title}</h3>
                <p className="text-charcoal/70 font-sans text-sm leading-relaxed mb-6">{vid.desc}</p>
                <button 
                  onClick={() => setActiveVideo(vid.id)}
                  className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-darkRed transition-all"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>WATCH NOW</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal Overlay */}
        {activeVideo && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <div className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative border border-white/10">
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full h-full flex flex-col items-center justify-center text-white p-12 text-center">
                <Play className="w-20 h-20 text-primary mb-8 animate-pulse" />
                <h3 className="text-4xl font-bebas mb-4">Video Player Placeholder</h3>
                <p className="text-white/60 font-sans max-w-md italic">
                  In the live implementation, a cinematic mp4 or YouTube embed for "{videos.find(v => v.id === activeVideo)?.title}" would play here.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoHighlights;
