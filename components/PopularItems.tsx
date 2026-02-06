
import React from 'react';
import { Language } from '../types';
import { Monitor, Cast, Mic2, Zap, Gem, Trophy, Gift, Smile, Camera, Film } from 'lucide-react';

interface Props {
  lang: Language;
}

const PopularItems: React.FC<Props> = ({ lang }) => {
  const items = [
    { icon: Monitor, title: { EN: 'LED Wall Screen', BN: 'এলইডি ওয়াল স্ক্রিন' }, desc: { EN: 'High-resolution displays', BN: 'হাই-রেজোলিউশন ডিসপ্লে' } },
    { icon: Cast, title: { EN: 'Projector Rent', BN: 'প্রজেক্টর ভাড়া' }, desc: { EN: 'HD projectors', BN: 'এইচডি প্রজেক্টর' } },
    { icon: Mic2, title: { EN: 'Sound System', BN: 'সাউন্ড সিস্টেম' }, desc: { EN: 'Professional audio', BN: 'পেশাদার অডিও' } },
    { icon: Zap, title: { EN: 'Lighting System', BN: 'লাইটিং সিস্টেম' }, desc: { EN: 'Stage lighting', BN: 'স্টেজ লাইটিং' } },
    { icon: Gem, title: { EN: 'Palki & Stage', BN: 'পালকি ও স্টেজ' }, desc: { EN: 'Custom setups', BN: 'কাস্টম সেটআপ' } },
    { icon: Trophy, title: { EN: 'Brand Party', BN: 'ব্র্যান্ড পার্টি' }, desc: { EN: 'Brand activation', BN: 'ব্র্যান্ড অ্যাক্টিভেশন' } },
    { icon: Gift, title: { EN: 'Birthday Decoration', BN: 'জন্মদিন সজ্জা' }, desc: { EN: 'Themed setups', BN: 'থিমযুক্ত সেটআপ' } },
    { icon: Smile, title: { EN: 'Mascot Rental', BN: 'মাসকট ভাড়া' }, desc: { EN: 'Character costumes', BN: 'চরিত্রের পোশাক' } },
    { icon: Camera, title: { EN: 'Photography', BN: 'ফটোগ্রাফি' }, desc: { EN: 'Pro event photos', BN: 'প্রো ইভেন্ট ফটো' } },
    { icon: Film, title: { EN: 'Videography', BN: 'ভিডিওগ্রাফি' }, desc: { EN: 'Recording & editing', BN: 'রেকর্ডিং ও এডিটিং' } },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas font-normal mb-4 tracking-tight bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] uppercase">
            {lang === 'EN' ? 'Popular Event Items' : 'আমাদের জনপ্রিয় ইভেন্ট আইটেম'}
          </h2>
          <div className="w-20 h-1.5 bg-primary/20 mx-auto mb-6 rounded-full" />
          <p className="text-charcoal font-montserrat max-w-2xl mx-auto opacity-70">
            {lang === 'EN' ? 'Explore our range of premium equipment and services for your next big event.' : 'আপনার পরবর্তী বড় ইভেন্টের জন্য আমাদের প্রিমিয়াম সরঞ্জাম এবং সেবা এক্সপ্লোর করুন।'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-lightGray p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-secondary">
                {item.title[lang]}
              </h3>
              <p className="text-xs text-charcoal opacity-60 font-medium">
                {item.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
