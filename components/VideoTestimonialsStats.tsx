
import React from 'react';
import { Language } from '../types';
import { PlayCircle, Eye, ThumbsUp, Share2 } from 'lucide-react';

interface Props {
  lang: Language;
}

const VideoTestimonialsStats: React.FC<Props> = ({ lang }) => {
  const stats = [
    { icon: PlayCircle, value: '150+', labelEn: 'Video Testimonials', labelBn: 'ভিডিও টেস্টিমোনিয়ালস' },
    { icon: Eye, value: '250K+', labelEn: 'Total Views', labelBn: 'মোট ভিউ' },
    { icon: ThumbsUp, value: '98%', labelEn: 'Client Satisfaction', labelBn: 'ক্লায়েন্ট সন্তুষ্টি' },
    { icon: Share2, value: '50K+', labelEn: 'Social Shares', labelBn: 'সোশ্যাল শেয়ার' },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas text-secondary mb-4 uppercase tracking-tighter">
            {lang === 'EN' ? 'By The Numbers' : 'পরিসংখ্যানে আমরা'}
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-charcoal font-montserrat max-w-2xl mx-auto opacity-70">
            {lang === 'EN' ? 'Our video testimonials reflect the trust and satisfaction of our valued clients.' : 'আমাদের ভিডিও টেস্টিমোনিয়াল আমাদের মূল্যবান ক্লায়েন্টদের বিশ্বাস এবং সন্তুষ্টি প্রতিফলিত করে।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group bg-white/40 backdrop-blur-xl border border-white/20 rounded-[2rem] p-12 text-center shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-darkRed rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-10 h-10" />
              </div>
              <div className="text-6xl font-bebas text-primary mb-2 leading-none">{stat.value}</div>
              <div className="text-secondary font-bold uppercase tracking-[0.2em] text-sm opacity-60">
                {lang === 'EN' ? stat.labelEn : stat.labelBn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsStats;
