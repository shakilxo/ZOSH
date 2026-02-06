
import React, { useState } from 'react';
import { Language } from '../types';
import { Send } from 'lucide-react';

interface Props {
  lang: Language;
}

const Newsletter: React.FC<Props> = ({ lang }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! ${email} has been subscribed to our newsletter.`);
      setEmail('');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-2xl border border-white/40 p-12 md:p-20 rounded-[48px] text-center shadow-2xl">
          <h2 className="text-5xl md:text-7xl font-bebas text-secondary mb-8 leading-none">
            {lang === 'EN' ? 'Stay Updated' : 'আপডেট থাকুন'}
          </h2>
          <p className="text-charcoal/70 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
            {lang === 'EN' 
              ? 'Subscribe to our newsletter for the latest news, event updates, and industry insights from Zosh Communications.'
              : 'জোশ কমিউনিকেশনস থেকে সর্বশেষ সংবাদ, ইভেন্ট আপডেট এবং ইন্ডাস্ট্রি ইনসাইট পেতে আমাদের নিউজলেটারে সাবস্ক্রাইব করুন।'}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang === 'EN' ? 'Enter your email address' : 'আপনার ইমেইল এড্রেস লিখুন'}
              className="flex-1 bg-white border border-charcoal/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-primary font-sans text-lg transition-all"
            />
            <button 
              type="submit" 
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bebas text-2xl tracking-widest hover:bg-darkRed transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95"
            >
              <span>SUBSCRIBE</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
          
          <p className="text-mediumGray text-xs mt-8 font-sans">
            {lang === 'EN' ? 'We respect your privacy. Unsubscribe at any time.' : 'আমরা আপনার গোপনীয়তাকে সম্মান করি। যে কোনো সময় আনসাবস্ক্রাইব করুন।'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
