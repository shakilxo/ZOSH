
import React from 'react';
import { Language } from '../types';
import { Target, Eye, Handshake } from 'lucide-react';

interface Props {
  lang: Language;
}

const MissionVision: React.FC<Props> = ({ lang }) => {
  const cards = [
    {
      icon: Target,
      titleEn: 'Our Mission',
      titleBn: 'আমাদের লক্ষ্য',
      descEn: 'To create exceptional event experiences through innovative planning, meticulous execution, and personalized service that exceeds client expectations.',
      descBn: 'উদ্ভাবনী পরিকল্পনা, নিখুঁত বাস্তবায়ন এবং ব্যক্তিগত সেবার মাধ্যমে অসাধারণ ইভেন্ট অভিজ্ঞতা তৈরি করা যা ক্লায়েন্টের প্রত্যাশা ছাড়িয়ে যায়।'
    },
    {
      icon: Eye,
      titleEn: 'Our Vision',
      titleBn: 'আমাদের ভিশন',
      descEn: "To be Bangladesh's leading event management company, recognized nationally and internationally for creativity, reliability, and transforming visions into realities.",
      descBn: "বাংলাদেশের শীর্ষস্থানীয় ইভেন্ট ম্যানেজমেন্ট কোম্পানি হওয়া, যা জাতীয় ও আন্তর্জাতিকভাবে সৃজনশীলতা, নির্ভরযোগ্যতা এবং ভিশনকে বাস্তবে রূপান্তরের জন্য স্বীকৃত।"
    },
    {
      icon: Handshake,
      titleEn: 'Our Values',
      titleBn: 'আমাদের মূল্যবোধ',
      descEn: 'Integrity, creativity, excellence, client-centric approach, teamwork, and continuous innovation guide every decision and action at Zosh Communications.',
      descBn: 'সততা, সৃজনশীলতা, শ্রেষ্ঠত্ব, ক্লায়েন্ট-কেন্দ্রিক দৃষ্টিভঙ্গি, টিমওয়ার্ক এবং ক্রমাগত উদ্ভাবন জোশ কমিউনিকেশনসের প্রতিটি সিদ্ধান্ত ও পদক্ষেপকে পরিচালিত করে।'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bebas text-5xl md:text-6xl text-secondary mb-16 tracking-tight uppercase">
          {lang === 'EN' ? 'Our Mission & Vision' : 'আমাদের লক্ষ্য ও ভিশন'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-12 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 text-center border border-primary/5 group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <card.icon className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bebas text-secondary mb-6 uppercase tracking-wide">
                {lang === 'EN' ? card.titleEn : card.titleBn}
              </h3>
              <p className="text-charcoal/70 font-sans leading-relaxed">
                {lang === 'EN' ? card.descEn : card.descBn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
