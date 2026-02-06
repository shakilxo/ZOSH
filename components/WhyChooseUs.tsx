
import React from 'react';
import { Language } from '../types';
import { Users, Calendar, Award, Headphones } from 'lucide-react';

interface Props {
  lang: Language;
}

const WhyChooseUs: React.FC<Props> = ({ lang }) => {
  const stats = [
    { icon: Calendar, value: '500+', labelEn: 'Events Executed', labelBn: 'ইভেন্ট সম্পন্ন' },
    { icon: Users, value: '200+', labelEn: 'Happy Clients', labelBn: 'খুশি ক্লায়েন্ট' },
    { icon: Award, value: '15+', labelEn: 'Industry Awards', labelBn: 'ইন্ডাস্ট্রি অ্যাওয়ার্ড' },
    { icon: Headphones, value: '24/7', labelEn: 'Expert Support', labelBn: 'বিশেষজ্ঞ সাপোর্ট' },
  ];

  return (
    <section className="py-24 bg-crimson-dark text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-6xl md:text-8xl font-heading mb-8 leading-none tracking-tighter">
              {lang === 'EN' ? 'Creating Legends, One Event at a Time.' : 'কিংবদন্তি তৈরি করছি, প্রতিবার একেকটি ইভেন্টে।'}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-10 font-sans">
              {lang === 'EN' 
                ? 'With over a decade of experience in the heart of Dhaka, Zosh Communications blends local cultural nuances with global event standards. We don\'t just manage; we orchestrate.'
                : 'ঢাকার হৃদয়ে এক দশকেরও বেশি অভিজ্ঞতার সাথে, জোশ কমিউনিকেশনস বৈশ্বিক ইভেন্ট স্ট্যান্ডার্ডের সাথে স্থানীয় সাংস্কৃতিক সূক্ষ্মতার সমন্বয় ঘটায়। আমরা কেবল পরিচালনা করি না; আমরা ঐকতান করি।'}
            </p>
            <div className="space-y-4">
              {['End-to-End Management', 'Transparent Pricing', 'Creative Storytelling'].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded-full bg-crimson flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <span className="font-bold text-xl font-heading tracking-wide">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-crimson/50 transition-colors text-center group">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-crimson-light group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-6xl font-heading font-bold mb-2 tracking-tight">{stat.value}</div>
                <div className="text-white/60 font-bold uppercase text-xs tracking-[0.2em]">
                  {lang === 'EN' ? stat.labelEn : stat.labelBn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
