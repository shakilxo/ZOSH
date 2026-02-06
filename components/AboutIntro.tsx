
import React, { useEffect, useState, useRef } from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const AboutIntro: React.FC<Props> = ({ lang }) => {
  const [counts, setCounts] = useState({ events: 0, clients: 0, years: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const targets = { events: 250, clients: 50, years: 8 };
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        events: Math.floor(targets.events * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
      });

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-bebas text-black mb-8 leading-tight">
              {lang === 'EN' ? 'Creating Unforgettable Experiences Since 2015' : '২০১৫ থেকে অবিস্মরণীয় অভিজ্ঞতা তৈরি করছি'}
            </h2>
            <p className="text-darkGray text-lg mb-6 leading-relaxed font-sans">
              {lang === 'EN' 
                ? "Zosh Communications was founded with a simple yet powerful vision: to transform ordinary events into extraordinary experiences. What started as a small team of passionate event enthusiasts has grown into one of Bangladesh's most trusted and innovative event management companies."
                : "জোশ কমিউনিকেশনস একটি সহজ কিন্তু শক্তিশালী ভিশন নিয়ে প্রতিষ্ঠিত হয়েছিল: সাধারণ ইভেন্টগুলিকে অসাধারণ অভিজ্ঞতায় রূপান্তর করা।"}
            </p>
            <p className="text-darkGray text-lg mb-10 leading-relaxed font-sans">
              {lang === 'EN'
                ? "Over the years, we've successfully organized hundreds of events, from intimate gatherings to large-scale international conferences. Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of excellence."
                : "বছরের পর বছর ধরে, আমরা সফলভাবে শত শত ইভেন্ট আয়োজন করেছি। আমাদের যাত্রা ক্রমাগত শিক্ষা, অভিযোজন এবং শ্রেষ্ঠত্বের নিরলস প্রচেষ্টার দ্বারা চিহ্নিত।"}
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2 font-bebas">{counts.events}+</div>
                <div className="text-sm font-semibold text-darkGray font-sans uppercase tracking-wider">{lang === 'EN' ? 'Events Managed' : 'পরিচালিত ইভেন্ট'}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2 font-bebas">{counts.clients}+</div>
                <div className="text-sm font-semibold text-darkGray font-sans uppercase tracking-wider">{lang === 'EN' ? 'Happy Clients' : 'খুশি ক্লায়েন্ট'}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2 font-bebas">{counts.years}</div>
                <div className="text-sm font-semibold text-darkGray font-sans uppercase tracking-wider">{lang === 'EN' ? 'Years Experience' : 'বছরের অভিজ্ঞতা'}</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[500px] rounded-xl overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Team at work"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
