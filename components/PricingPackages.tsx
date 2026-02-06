
import React from 'react';
import { Language } from '../types';
import { Check, X, Star, Crown, Gem } from 'lucide-react';

interface Props {
  lang: Language;
}

const PricingPackages: React.FC<Props> = ({ lang }) => {
  const packages = [
    {
      icon: Star,
      nameEn: 'Basic Package',
      nameBn: 'বেসিক প্যাকেজ',
      priceEn: '৳ 50,000',
      priceBn: '৫০,০০০ টাকা',
      featuresEn: [
        { label: 'Event Consultation', included: true },
        { label: 'Venue Selection (3 options)', included: true },
        { label: 'Basic Decor Setup', included: true },
        { label: 'Catering Coordination', included: true },
        { label: 'On-site Event Manager', included: true },
        { label: 'Entertainment Booking', included: false },
        { label: 'Photography Package', included: false },
      ],
      popular: false
    },
    {
      icon: Crown,
      nameEn: 'Premium Package',
      nameBn: 'প্রিমিয়াম প্যাকেজ',
      priceEn: '৳ 1,20,000',
      priceBn: '১,২০,০০০ টাকা',
      featuresEn: [
        { label: 'Complete Event Planning', included: true },
        { label: 'Venue Selection & Booking', included: true },
        { label: 'Custom Theme & Decor', included: true },
        { label: 'Premium Catering Management', included: true },
        { label: 'Entertainment Coordination', included: true },
        { label: 'Professional Photography', included: true },
        { label: 'Guest Management', included: true },
      ],
      popular: true
    },
    {
      icon: Gem,
      nameEn: 'Luxury Package',
      nameBn: 'লাক্সারি প্যাকেজ',
      priceEn: '৳ 2,50,000',
      priceBn: '২,৫০,০০০ টাকা',
      featuresEn: [
        { label: 'Full-Service Management', included: true },
        { label: 'Luxury Venue Selection', included: true },
        { label: 'Custom Styling', included: true },
        { label: 'Gourmet Catering', included: true },
        { label: 'Premium Entertainment', included: true },
        { label: 'Photo & Video Package', included: true },
        { label: 'Post-Event Services', included: true },
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl md:text-7xl font-bebas mb-4">
            {lang === 'EN' ? 'Service Packages' : 'সার্ভিস প্যাকেজসমূহ'}
          </h2>
          <p className="text-darkGray font-sans">
            {lang === 'EN' ? 'Flexible options designed to meet different needs and budgets.' : 'বিভিন্ন প্রয়োজন এবং বাজেট মেটাতে ডিজাইন করা নমনীয় অপশন।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-10 rounded-xl border transition-all duration-400 flex flex-col ${
                pkg.popular 
                  ? 'border-primary shadow-2xl scale-105 z-10' 
                  : 'border-lightGray shadow-lg hover:border-primary/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-bl-lg tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
                <pkg.icon className="w-8 h-8" />
              </div>

              <h3 className="text-black text-3xl font-bebas mb-2 uppercase">
                {lang === 'EN' ? pkg.nameEn : pkg.nameBn}
              </h3>
              <div className="flex items-baseline space-x-2 mb-8 border-b border-lightGray pb-6">
                <span className="text-4xl font-bold text-primary font-sans">{lang === 'EN' ? pkg.priceEn : pkg.priceBn}</span>
                <span className="text-mediumGray font-sans text-xs">/ event</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {pkg.featuresEn.map((f, i) => (
                  <li key={i} className={`flex items-start space-x-3 text-sm font-sans ${f.included ? 'text-darkGray' : 'text-mediumGray'}`}>
                    {f.included ? (
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-mediumGray shrink-0 mt-0.5" />
                    )}
                    <span className={!f.included ? 'line-through' : ''}>{f.label}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded font-sans font-bold uppercase tracking-widest transition-all ${
                pkg.popular 
                  ? 'bg-primary text-white hover:bg-darkRed' 
                  : 'bg-primary/5 text-primary border-2 border-primary/10 hover:bg-primary hover:text-white'
              }`}>
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
