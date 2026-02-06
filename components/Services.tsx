
import React from 'react';
import { Language } from '../types';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 section-title">
          <h2 className="text-5xl md:text-7xl font-bebas font-normal mb-4 tracking-tight bg-gradient-to-r from-[#4b0c19] via-[#831127] to-[#dc143c] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] uppercase">
            Our Premium Services
          </h2>
          <p className="text-charcoal/70 font-sans max-w-xl mx-auto">
            Experience the pinnacle of event production in Bangladesh with our world-class management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="service-card group rounded-2xl overflow-hidden flex flex-col h-full shadow-sm"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.titleEn} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-gold text-secondary font-bold text-[10px] px-3 py-1 rounded-full tracking-widest uppercase">
                  Premium
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bebas font-normal text-secondary uppercase">
                    {lang === 'EN' ? service.titleEn : service.titleBn}
                  </h3>
                </div>
                <p className="text-charcoal/70 mb-8 font-sans text-sm leading-relaxed flex-1">
                  {lang === 'EN' ? service.descriptionEn : service.descriptionBn}
                </p>

                <div className="mt-auto">
                   <a
                    href="#contact"
                    className="flex items-center space-x-2 text-primary font-bold uppercase text-xs tracking-widest group/link"
                  >
                    <span>Discover More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
