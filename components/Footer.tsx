
import React from 'react';
import { Language } from '../types';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

interface Props {
  lang: Language;
  navigateTo?: (page: any) => void;
}

const Footer: React.FC<Props> = ({ lang, navigateTo }) => {
  const handleLegalClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (navigateTo) navigateTo(page as any);
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#121212] to-[#1a1a1a] text-white pt-24 pb-12 font-sans overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-darkRed to-primary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col">
            <button onClick={() => navigateTo?.('home')} className="flex items-baseline mb-6 group text-left">
              <h2 className="text-4xl font-bebas font-normal text-white leading-none tracking-tight group-hover:text-primary transition-colors">
                ZOSH
              </h2>
              <span className="text-4xl font-bebas font-normal text-primary ml-1 tracking-tight">
                COMMUNICATIONS
              </span>
            </button>
            <p className="text-gray-400 leading-relaxed text-lg mb-8 font-sans">
              Professional event management services in Bangladesh. Creating memorable experiences through innovative planning and flawless execution since 2015.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: '#1877F2' },
                { icon: Instagram, color: '#E4405F' },
                { icon: Linkedin, color: '#0A66C2' },
                { icon: Youtube, color: '#FF0000' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary hover:-rotate-6 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/20"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-2xl font-bebas mb-8 uppercase tracking-widest relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-400 font-sans mt-2">
              {['home', 'services', 'portfolio', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => navigateTo?.(item as any)}
                    className="flex items-center group hover:text-primary transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="capitalize">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Policy */}
          <div>
            <h4 className="text-2xl font-bebas mb-8 uppercase tracking-widest relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Legal Pages
            </h4>
            <ul className="space-y-4 text-gray-400 font-sans mt-2">
              <li>
                <button onClick={(e) => handleLegalClick(e, 'terms')} className="flex items-center group hover:text-primary transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLegalClick(e, 'refund')} className="flex items-center group hover:text-primary transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Refund Policy</span>
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLegalClick(e, 'privacy')} className="flex items-center group hover:text-primary transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Privacy Policy</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-2xl font-bebas mb-8 uppercase tracking-widest relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Contact Info
            </h4>
            <div className="space-y-6 text-gray-400 font-sans mt-2">
              <div className="flex items-start space-x-4 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="leading-tight group-hover:text-white transition-colors">1021, East Shewrapara, Kafrul, Mirpur, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">01773-327997</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors lowercase">zoshcommunications@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <Clock className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Sun-Thu: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500 font-sans text-center lg:text-left">
            <p>© 2023 Zosh Communications. All rights reserved.</p>
            <div className="mt-2 flex justify-center lg:justify-start space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
              <a href="#" className="hover:text-primary transition-colors">Careers</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>

          {/* Liquid Glass Effect Credit Link */}
          <div className="flex items-center">
            <a 
              href="http://shakil-dev.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative px-8 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center space-x-3 group hover:bg-primary/10 hover:border-primary/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              {/* Liquid Shine Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <div className="relative flex items-center space-x-2">
                <span className="text-gray-400 font-montserrat text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                  Design By
                </span>
                <span className="font-bebas text-2xl text-primary tracking-widest group-hover:scale-110 group-hover:text-white transition-all duration-500 flex items-center gap-2">
                  MSH
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
