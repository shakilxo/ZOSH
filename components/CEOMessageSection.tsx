
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const CEOMessageSection: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              alt="Mr. Rahman Khan, CEO"
            />
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-5xl font-bebas text-secondary mb-8 leading-tight">
              {lang === 'EN' ? 'Leading with Passion & Purpose' : 'প্যাশন ও উদ্দেশ্য নিয়ে নেতৃত্ব'}
            </h2>
            <div className="dancing-font text-3xl text-primary mb-8 border-l-4 border-primary pl-8 italic leading-relaxed">
              {lang === 'EN' 
                ? '"Creating unforgettable experiences is not just our business, it\'s our passion."'
                : '"অবিস্মরণীয় অভিজ্ঞতা তৈরি করা কেবল আমাদের ব্যবসা নয়, এটি আমাদের প্যাশন।"'}
            </div>
            
            <div className="space-y-6 text-charcoal/80 text-lg font-sans leading-relaxed">
              <p>
                {lang === 'EN' 
                  ? "Welcome to Zosh Communications, where we transform ordinary events into extraordinary memories. As the founder and CEO, I've dedicated my career to building a company that doesn't just organize events, but creates experiences that last a lifetime."
                  : "জোশ কমিউনিকেশনসে আপনাকে স্বাগতম, যেখানে আমরা সাধারণ ইভেন্টগুলোকে অসাধারণ স্মৃতিতে রূপান্তর করি। প্রতিষ্ঠাতা ও সিইও হিসেবে, আমি এমন একটি কোম্পানি গড়ে তুলতে আমার ক্যারিয়ার উৎসর্গ করেছি যা কেবল ইভেন্ট আয়োজন করে না, বরং আজীবন থেকে যাওয়ার মতো অভিজ্ঞতা তৈরি করে।"}
              </p>
              <p>
                {lang === 'EN'
                  ? "Our success is built on three pillars: innovation in design, precision in execution, and unwavering commitment to client satisfaction. We're not just event planners; we're partners in bringing your vision to life."
                  : "আমাদের সাফল্য তিনটি স্তম্ভের ওপর দাঁড়িয়ে: ডিজাইনে উদ্ভাবন, বাস্তবায়নে নিখুঁততা এবং ক্লায়েন্ট সন্তুষ্টির প্রতি অটল প্রতিশ্রুতি। আমরা কেবল ইভেন্ট প্ল্যানার নই; আমরা আপনার ভিশনকে প্রাণবন্ত করার অংশীদার।"}
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-lightGray flex flex-col">
              <span className="text-2xl font-bold text-secondary font-sans">{lang === 'EN' ? 'Mr. Rahman Khan' : 'জনাব রহমান খান'}</span>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm mt-1">{lang === 'EN' ? 'Founder & CEO, Zosh Communications' : 'প্রতিষ্ঠাতা ও সিইও, জোশ কমিউনিকেশনস'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessageSection;
