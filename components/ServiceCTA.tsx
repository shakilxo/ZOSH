
import React from 'react';
import { Language } from '../types';
import { Phone, Calendar } from 'lucide-react';

interface Props {
  lang: Language;
}

const ServiceCTA: React.FC<Props> = ({ lang }) => {
  return (
    <section className="relative py-32 overflow-hidden bg-secondary">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-white text-5xl md:text-7xl font-bebas mb-8 tracking-tight">
          {lang === 'EN' ? 'Ready to Plan Your Event?' : 'ইভেন্ট পরিকল্পনা করতে প্রস্তুত?'}
        </h2>
        <p className="text-white/60 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12">
          {lang === 'EN' 
            ? 'Contact us today for a free consultation. Our team is ready to help you create an unforgettable experience tailored to your vision.'
            : 'ফ্রি পরামর্শের জন্য আজই আমাদের সাথে যোগাযোগ করুন। আপনার স্বপ্ন বাস্তবায়নে আমাদের টিম প্রস্তুত।'}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bebas text-2xl tracking-widest flex items-center justify-center space-x-3 hover:scale-105 transition-transform shadow-2xl shadow-primary/30">
            <Calendar className="w-6 h-6" />
            <span>Get Free Consultation</span>
          </button>
          <a href="tel:+8801773327997" className="w-full md:w-auto bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bebas text-2xl tracking-widest flex items-center justify-center space-x-3 backdrop-blur-md hover:bg-white/20 transition-all">
            <Phone className="w-6 h-6" />
            <span>Call Now: +880 1773-327997</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
