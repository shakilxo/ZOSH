
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const PortfolioTestimonials: React.FC<Props> = ({ lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      name: 'Michael Johnson',
      role: 'CEO, TechVision Corporation',
      text: "Zosh Communications transformed our corporate annual meeting into an unforgettable experience. Their attention to detail, professionalism, and creative solutions exceeded all our expectations.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Sarah Williams',
      role: 'Bride, Luxury Wedding Client',
      text: "Our wedding was everything we dreamed of and more, thanks to the incredible team at Zosh Communications. They handled every detail with care and creativity.",
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'David Chen',
      role: 'Event Director, MusicFest Int.',
      text: "The music festival we organized with Zosh Communications was a massive success. Their expertise in crowd management and logistics made what seemed impossible, perfectly executed.",
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2000" className="w-full h-full object-cover opacity-20" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-bebas mb-4">
            {lang === 'EN' ? 'Client Testimonials' : 'ক্লায়েন্টদের কথা'}
          </h2>
          <p className="text-lightGray/60 font-sans italic">
            {lang === 'EN' ? 'What our clients say about working with us.' : 'আমাদের সাথে কাজ করার অভিজ্ঞতা কেমন ছিল'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px]">
            {reviews.map((rev, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-800 flex flex-col items-center text-center ${
                  idx === currentSlide ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-8">
                  <p className="text-white text-lg md:text-xl font-sans italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={rev.image} className="w-16 h-16 rounded-full border-3 border-primary" alt={rev.name} />
                  <div className="text-left">
                    <h4 className="text-white font-bebas text-2xl tracking-wide">{rev.name}</h4>
                    <p className="text-lightGray/60 text-sm font-sans">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-3 mt-12">
            {reviews.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-primary scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTestimonials;
