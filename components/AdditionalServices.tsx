
import React from 'react';
import { Language } from '../types';
import { Utensils, Video, Palette } from 'lucide-react';

interface Props {
  lang: Language;
}

const AdditionalServices: React.FC<Props> = ({ lang }) => {
  const extras = [
    {
      icon: Utensils,
      titleEn: 'Catering Services',
      titleBn: 'ক্যাটারিং সেবা',
      descEn: 'Premium menu options for any event size. We work with top chefs to delight your guests.',
      descBn: 'যেকোনো সাইজের ইভেন্টের জন্য প্রিমিয়াম মেনু। আপনার অতিথিদের মুগ্ধ করতে আমরা সেরা শেফদের সাথে কাজ করি।'
    },
    {
      icon: Video,
      titleEn: 'Virtual Events',
      titleBn: 'ভার্চুয়াল ইভেন্ট',
      descEn: 'Live streaming and hybrid solutions for global audiences, ensuring seamless connectivity.',
      descBn: 'বৈশ্বিক দর্শকদের জন্য লাইভ স্ট্রিমিং এবং হাইব্রিড সমাধান, বিরামহীন সংযোগ নিশ্চিত করে।'
    },
    {
      icon: Palette,
      titleEn: 'Event Design & Decor',
      titleBn: 'ইভেন্ট ডিজাইন ও ডেকোর',
      descEn: 'Creative themes, lighting, and floral arrangements that transform venues into art.',
      descBn: 'সৃজনশীল থিম, লাইটিং এবং ফুলের সজ্জা যা ভেন্যুগুলোকে শিল্পে রূপান্তরিত করে।'
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl md:text-7xl font-bebas mb-4">
            {lang === 'EN' ? 'Additional Services' : 'অতিরিক্ত সেবা'}
          </h2>
          <p className="text-darkGray font-sans max-w-xl mx-auto text-lg">
            {lang === 'EN' ? 'Specialized solutions to meet all your unique event needs.' : 'আপনার সব অনন্য ইভেন্টের প্রয়োজন মেটাতে বিশেষায়িত সমাধান।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {extras.map((extra, idx) => (
            <div key={idx} className="bg-white p-10 rounded-xl border border-lightGray hover:border-primary hover:shadow-2xl transition-all group text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <extra.icon className="w-10 h-10" />
              </div>
              <h3 className="text-black text-3xl font-bebas mb-4 uppercase">
                {lang === 'EN' ? extra.titleEn : extra.titleBn}
              </h3>
              <p className="text-darkGray font-sans leading-relaxed text-sm">
                {lang === 'EN' ? extra.descEn : extra.descBn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
