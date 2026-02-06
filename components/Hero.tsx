
import React, { useState, useRef } from 'react';
import { Language } from '../types';
import { Clock, MapPin, Award, Users, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  lang: Language;
  navigateTo: (page: 'home' | 'services' | 'portfolio' | 'video' | 'about' | 'terms' | 'refund' | 'privacy' | 'contact' | 'gallery' | 'news' | 'ceo') => void;
}

const Hero: React.FC<HeroProps> = ({ lang, navigateTo }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      const newMutedStatus = !videoRef.current.muted;
      videoRef.current.muted = newMutedStatus;
      setIsMuted(newMutedStatus);
    }
  };

  const stats = [
    {
      icon: Clock,
      value: '2015 AD',
      label: lang === 'EN' ? 'ESTABLISHED' : 'প্রতিষ্ঠিত',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: MapPin,
      value: 'Dhaka',
      label: lang === 'EN' ? 'LOCATION' : 'অবস্থান',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Award,
      value: '500+',
      label: lang === 'EN' ? 'EVENTS DONE' : 'ইভেন্ট সম্পন্ন',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: Users,
      value: '200+',
      label: lang === 'EN' ? 'HAPPY CLIENTS' : 'খুশি গ্রাহক',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source 
            src="https://res.cloudinary.com/ddbgubknr/video/upload/v1770353163/Events_Company_Video_Teaser_w2n2x7.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Darkened Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content Area - Removed captions and buttons as requested */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center flex-1">
        {/* Captions and Buttons Removed */}
      </div>

      {/* Simplified Sound Toggle */}
      <button 
        onClick={toggleSound}
        className="absolute bottom-52 right-8 md:right-12 z-30 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white transition-all shadow-xl group"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform text-green-400" />
        )}
      </button>

      {/* Floating Stats Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-5xl px-4">
        <div className="bg-white rounded-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 border border-white">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center space-x-6 w-full md:w-auto px-4">
                <div className={`${stat.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-inner`}>
                  <stat.icon className={`${stat.iconColor} w-7 h-7 md:w-8 md:h-8`} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl md:text-4xl font-bebas font-normal text-secondary leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 font-sans">
                    {stat.label}
                  </span>
                </div>
              </div>
              {idx < stats.length - 1 && (
                <div className="hidden lg:block h-12 w-px bg-gray-100 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
