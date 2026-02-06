
import React, { useState } from 'react';
import { Language } from '../types';
import { Play, Star, X } from 'lucide-react';

interface Props {
  lang: Language;
}

const Testimonials: React.FC<Props> = ({ lang }) => {
  const [showVideo, setShowVideo] = useState(false);

  const reviews = [
    {
      name: 'Rajib Ahmed',
      role: 'Marketing Director, TechCorp',
      textEn: 'Zosh Communications transformed our corporate event into an unforgettable experience. Their attention to detail was exceptional!',
      textBn: 'জোশ কমিউনিকেশনস আমাদের কর্পোরেট ইভেন্টকে একটি অবিস্মরণীয় অভিজ্ঞতায় রূপান্তর করেছে। তাদের কাজের দক্ষতা অতুলনীয়!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Farhana Islam',
      role: 'Wedding Client',
      textEn: 'Our wedding was absolutely perfect thanks to Zosh Communications. They handled everything seamlessly and beautifully!',
      textBn: 'জোশ কমিউনিকেশনস-কে ধন্যবাদ, আমাদের বিয়েটা একদম নিখুঁত ছিল! সবকিছু খুব সুন্দরভাবে সম্পন্ন হয়েছে।',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 section-title">
          {/* Section Heading with requested Gradient Design */}
          <h2 className="text-5xl md:text-7xl font-bebas font-normal mb-4 tracking-tight bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] uppercase">
            {lang === 'EN' ? 'What Our Clients Say' : 'ক্লায়েন্টরা যা বলেন'}
          </h2>
          <p className="text-charcoal/60 font-sans mt-6 max-w-2xl mx-auto">
            {lang === 'EN' ? 'Real stories from people who trusted our vision to create their most precious moments.' : 'আমাদের ভিশনের ওপর যারা আস্থা রেখেছেন তাদের বাস্তব গল্প।'}
          </p>
        </div>

        {/* Interactive Video Container */}
        <div 
          onClick={() => setShowVideo(true)}
          className="max-w-4xl mx-auto aspect-video bg-charcoal/5 rounded-[40px] flex items-center justify-center relative shadow-2xl overflow-hidden mb-16 border border-charcoal/10 group cursor-pointer transition-transform hover:scale-[1.01]"
        >
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40 z-20 transform transition-transform group-hover:scale-110">
            <Play className="w-10 h-10 fill-white ml-1 text-white" />
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" 
            alt="Showreel Thumbnail"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
          
          {/* Pulse animation for the button */}
          <div className="absolute w-32 h-32 bg-primary/20 rounded-full animate-ping z-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[32px] border border-primary/5 shadow-lg shadow-charcoal/5 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif italic mb-8 text-charcoal/80 leading-snug">
                "{lang === 'EN' ? review.textEn : review.textBn}"
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-charcoal/5">
                <img src={review.image} className="w-14 h-14 rounded-full border-2 border-primary p-0.5" alt={review.name} />
                <div>
                  <h4 className="font-bebas text-2xl tracking-wide text-secondary">{review.name}</h4>
                  <p className="text-[10px] font-bold uppercase text-primary tracking-[0.2em] font-sans">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="w-full max-w-5xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 z-50 bg-black/40 hover:bg-primary text-white p-3 rounded-full transition-all hover:rotate-90"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0" 
              title="Showreel Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
