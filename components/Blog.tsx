
import React from 'react';
import { Language } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface Props {
  lang: Language;
}

const Blog: React.FC<Props> = ({ lang }) => {
  const posts = [
    {
      titleEn: 'Monsoon Wedding Tips in Dhaka',
      titleBn: 'ঢাকায় বর্ষায় বিয়ের টিপস',
      excerptEn: 'How to handle the rain while keeping your aesthetic alive.',
      excerptBn: 'আপনার সৌন্দর্য বজায় রেখে বৃষ্টি কীভাবে সামলাবেন।',
      date: 'Oct 12, 2024',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800'
    },
    {
      titleEn: 'Corporate Event Trends 2024',
      titleBn: 'কর্পোরেট ইভেন্ট ট্রেন্ড ২০২৪',
      excerptEn: 'The rise of hybrid events in the Bangladesh tech scene.',
      excerptBn: 'বাংলাদেশ টেক সিনে হাইব্রিড ইভেন্টের উত্থান।',
      date: 'Sep 28, 2024',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-[#eee3e3]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-[#4A148C] mb-4">
              {lang === 'EN' ? 'The Event Journal' : 'ইভেন্ট জার্নাল'}
            </h3>
            <p className="text-[#dc143c] font-bold uppercase tracking-widest text-sm">Insider Insights & Tips</p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-[#4A148C] font-bold group">
            <span>{lang === 'EN' ? 'All Posts' : 'সব পোস্ট'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-[32px] h-72 mb-6">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
              </div>
              <div className="flex items-center space-x-4 mb-3 text-xs font-bold text-[#666] uppercase tracking-widest">
                <span className="flex items-center space-x-1"><Calendar className="w-3 h-3 text-[#dc143c]" /> <span>{post.date}</span></span>
                <span className="flex items-center space-x-1"><User className="w-3 h-3 text-[#dc143c]" /> <span>By Admin</span></span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#333] mb-4 group-hover:text-[#dc143c] transition-colors">
                {lang === 'EN' ? post.titleEn : post.titleBn}
              </h4>
              <p className="text-[#666] leading-relaxed mb-6">
                {lang === 'EN' ? post.excerptEn : post.excerptBn}
              </p>
              <div className="w-8 h-1 bg-[#dc143c] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
