
import React from 'react';
import { Language } from '../types';
import { MessageSquare, ClipboardList, Activity, CheckCircle } from 'lucide-react';

interface Props {
  lang: Language;
}

const Process: React.FC<Props> = ({ lang }) => {
  const steps = [
    { 
      icon: MessageSquare,
      titleEn: 'Consultation', 
      titleBn: 'পরামর্শ', 
      descEn: 'Understanding your vision and budget.', 
      descBn: 'আপনার ভিশন এবং বাজেট বোঝা।' 
    },
    { 
      icon: ClipboardList,
      titleEn: 'Planning', 
      titleBn: 'পরিকল্পনা', 
      descEn: 'Creating timelines and strategies.', 
      descBn: 'টাইমলাইন এবং কৌশল তৈরি করা।' 
    },
    { 
      icon: Activity,
      titleEn: 'Execution', 
      titleBn: 'সম্পাদন', 
      descEn: 'Implementing the plan with precision.', 
      descBn: 'সঠিকভাবে পরিকল্পনা বাস্তবায়ন করা।' 
    },
    { 
      icon: CheckCircle,
      titleEn: 'Delivery', 
      titleBn: 'ডেলিভারি', 
      descEn: 'Ensuring total client satisfaction.', 
      descBn: 'গ্রাহকের সম্পূর্ণ সন্তুষ্টি নিশ্চিত করা।' 
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-7xl font-bebas font-normal mb-4 tracking-tight bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] uppercase">
            {lang === 'EN' ? 'Our Work Process' : 'আমাদের কাজের প্রক্রিয়া'}
          </h2>
          <div className="w-20 h-1.5 bg-primary/20 mx-auto mb-6 rounded-full" />
          <p className="text-charcoal font-montserrat max-w-2xl mx-auto opacity-70">
            {lang === 'EN' ? 'Step-by-step approach to ensure perfect execution' : 'নিখুঁত সম্পাদন নিশ্চিত করতে ধাপে ধাপে পদ্ধতি'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group bg-lightGray p-10 rounded-3xl text-center shadow-sm border border-transparent hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              {/* Subtle Step Number in background */}
              <div className="absolute -top-4 -right-2 text-9xl font-bebas text-charcoal/5 group-hover:text-primary/10 transition-colors duration-500 select-none">
                {idx + 1}
              </div>

              {/* Icon Container */}
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bebas text-secondary mb-4 uppercase tracking-wide group-hover:text-primary transition-colors">
                  {lang === 'EN' ? step.titleEn : step.titleBn}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed font-montserrat">
                  {lang === 'EN' ? step.descEn : step.descBn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
