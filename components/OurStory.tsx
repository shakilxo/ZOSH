
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const OurStory: React.FC<Props> = ({ lang }) => {
  const milestones = [
    { year: '2015', titleEn: 'Foundation', titleBn: 'প্রতিষ্ঠা', descEn: 'Zosh Communications was founded with a team of 3 passionate individuals.', descBn: '৩ জন উত্সাহী ব্যক্তির একটি দল নিয়ে জোশ কমিউনিকেশনস প্রতিষ্ঠিত হয়েছিল।' },
    { year: '2016', titleEn: 'First Major Success', titleBn: 'প্রথম বড় সাফল্য', descEn: 'Organized first large-scale corporate event for a multinational company.', descBn: 'একটি বহুজাতিক কোম্পানির জন্য প্রথম বড় আকারের কর্পোরেট ইভেন্ট আয়োজন করা হয়।' },
    { year: '2018', titleEn: 'Expansion', titleBn: 'সম্প্রসারণ', descEn: 'Expanded team to 15 members and moved to a larger office.', descBn: 'দলকে ১৫ জন সদস্যে উন্নীত করা হয় এবং একটি বড় অফিসে স্থানান্তরিত করা হয়।' },
    { year: '2020', titleEn: 'Digital Transformation', titleBn: 'ডিজিটাল রূপান্তর', descEn: 'Pioneered virtual and hybrid event solutions in response to the pandemic.', descBn: 'প্যান্ডেমিকের প্রতিক্রিয়ায় ভার্চুয়াল এবং হাইব্রিড ইভেন্ট সমাধানে অগ্রণী ভূমিকা পালন করা হয়।' },
    { year: '2022', titleEn: 'International Recognition', titleBn: 'আন্তর্জাতিক স্বীকৃতি', descEn: 'Received the "Best Event Management Company" award.', descBn: '"সেরা ইভেন্ট ম্যানেজমেন্ট কোম্পানি" পুরস্কার অর্জন।' },
    { year: '2023', titleEn: 'Present Day', titleBn: 'বর্তমান', descEn: 'Team of 30+ professionals managing over 50 events annually.', descBn: '৩০+ পেশাদারের দল নিয়ে বার্ষিক ৫০টিরও বেশি ইভেন্ট পরিচালনা করছি।' },
  ];

  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bebas text-black mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            {lang === 'EN' ? 'Our Journey' : 'আমাদের যাত্রা'}
          </h2>
          <p className="text-darkGray text-lg max-w-2xl mx-auto mt-8 font-sans">
            {lang === 'EN' ? 'Milestones that shaped our growth and success over the years.' : 'বছরের পর বছর ধরে আমাদের বৃদ্ধি এবং সাফল্যকে রূপ দেওয়া মাইলফলকগুলি।'}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Box */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
                  <div className={`bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary relative animate-fadeInUp ${i % 2 !== 0 ? 'md:border-l-0 md:border-r-4' : ''}`}>
                    <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-4">{m.year}</span>
                    <h3 className="text-2xl font-bebas text-black mb-3">{lang === 'EN' ? m.titleEn : m.titleBn}</h3>
                    <p className="text-darkGray text-sm font-sans leading-relaxed">{lang === 'EN' ? m.descEn : m.descBn}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary border-4 border-white rounded-full shadow-md hidden md:block" />

                {/* Spacer */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
