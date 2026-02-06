
import React from 'react';
import { Language } from '../types';
import { Lightbulb, Handshake, Star, Users } from 'lucide-react';

interface Props {
  lang: Language;
}

const OurValues: React.FC<Props> = ({ lang }) => {
  const values = [
    { icon: Lightbulb, titleEn: 'Innovation', titleBn: 'উদ্ভাবন', descEn: 'Constantly exploring new ideas and approaches to create unique experiences.', descBn: 'অনন্য অভিজ্ঞতা তৈরি করতে ক্রমাগত নতুন ধারণা এবং পদ্ধতি অন্বেষণ করা।' },
    { icon: Handshake, titleEn: 'Client-Centric', titleBn: 'ক্লায়েন্ট-কেন্দ্রিক', descEn: 'Your vision is our priority. We collaborate to bring your ideas to life.', descBn: 'আপনার ভিশন আমাদের অগ্রাধিকার। আমরা আপনার ধারণাকে জীবন্ত করতে সহযোগিতা করি।' },
    { icon: Star, titleEn: 'Excellence', titleBn: 'শ্রেষ্ঠত্ব', descEn: 'We maintain the highest standards of quality in everything we do.', descBn: 'আমরা যা কিছু করি তাতে সর্বোচ্চ মান বজায় রাখি।' },
    { icon: Users, titleEn: 'Collaboration', titleBn: 'সহযোগিতা', descEn: 'We believe in teamwork and strong partnerships to achieve outstanding results.', descBn: 'আমরা অসামান্য ফলাফল অর্জনে টিমওয়ার্ক এবং শক্তিশালী অংশীদারিত্বে বিশ্বাস করি।' },
  ];

  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bebas text-black mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            {lang === 'EN' ? 'Our Core Values' : 'আমাদের মূল মূল্যবোধ'}
          </h2>
          <p className="text-darkGray text-lg max-w-2xl mx-auto mt-8 font-sans">
            {lang === 'EN' ? 'The principles that guide everything we do at Zosh Communications.' : 'জোশ কমিউনিকেশনসে আমরা যা কিছু করি তার নির্দেশক নীতিসমূহ।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-10 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <v.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bebas text-black mb-4 uppercase">{lang === 'EN' ? v.titleEn : v.titleBn}</h3>
              <p className="text-darkGray text-sm font-sans leading-relaxed">{lang === 'EN' ? v.descEn : v.descBn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
