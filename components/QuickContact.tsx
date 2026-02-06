
import React from 'react';
import { Language } from '../types';
import { Phone, MessageCircle, Mail, Calendar, ArrowRight } from 'lucide-react';

interface Props {
  lang: Language;
}

const QuickContact: React.FC<Props> = ({ lang }) => {
  const options = [
    {
      icon: Phone,
      titleEn: 'Call Us',
      titleBn: 'কল করুন',
      descEn: 'Speak directly with our event consultants for immediate assistance.',
      descBn: 'তাত্ক্ষণিক সহায়তার জন্য সরাসরি আমাদের ইভেন্ট পরামর্শদাতাদের সাথে কথা বলুন।',
      link: 'tel:+8801773327997',
      labelEn: 'Call Now',
      labelBn: 'কল করুন'
    },
    {
      icon: MessageCircle,
      titleEn: 'WhatsApp',
      titleBn: 'হোয়াটসঅ্যাপ',
      descEn: 'Chat with us on WhatsApp for quick responses and file sharing.',
      descBn: 'দ্রুত উত্তর এবং ফাইল শেয়ারিং এর জন্য আমাদের সাথে হোয়াটসঅ্যাপে চ্যাট করুন।',
      link: 'https://wa.me/8801773327997',
      labelEn: 'Start Chat',
      labelBn: 'চ্যাট শুরু করুন'
    },
    {
      icon: Mail,
      titleEn: 'Email Us',
      titleBn: 'ইমেইল করুন',
      descEn: 'Send detailed inquiries and receive comprehensive proposals.',
      descBn: 'বিস্তারিত অনুসন্ধান পাঠান এবং ব্যাপক প্রস্তাব গ্রহণ করুন।',
      link: 'mailto:info@zoshcommunications.com',
      labelEn: 'Send Email',
      labelBn: 'ইমেইল পাঠান'
    },
    {
      icon: Calendar,
      titleEn: 'Book Consultation',
      titleBn: 'পরামর্শ বুক করুন',
      descEn: 'Schedule a free consultation meeting at our office or online.',
      descBn: 'আমাদের অফিস বা অনলাইনে একটি বিনামূল্যে পরামর্শ সভা নির্ধারণ করুন।',
      link: '#contactForm',
      labelEn: 'Book Now',
      labelBn: 'বুক করুন'
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bebas text-5xl mb-16 text-black tracking-wider uppercase">
          {lang === 'EN' ? 'Quick Contact Options' : 'দ্রুত যোগাযোগের বিকল্প'}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((opt, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center transform transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl group border border-lightGray">
              <div className="w-20 h-20 bg-[#e63946]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white transition-all duration-300">
                <opt.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bebas text-black mb-4 uppercase tracking-wide">
                {lang === 'EN' ? opt.titleEn : opt.titleBn}
              </h3>
              <p className="text-[#2d2d2d] font-sans mb-8 text-sm leading-relaxed">
                {lang === 'EN' ? opt.descEn : opt.descBn}
              </p>
              <a 
                href={opt.link} 
                className="inline-flex items-center space-x-2 text-[#e63946] font-sans font-bold group-hover:space-x-4 transition-all"
              >
                <span>{lang === 'EN' ? opt.labelEn : opt.labelBn}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
