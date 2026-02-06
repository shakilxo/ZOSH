
import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Menu, X, Globe, Phone, ChevronDown } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  navigateTo: (page: 'home' | 'services' | 'portfolio' | 'video' | 'about' | 'terms' | 'refund' | 'privacy' | 'contact' | 'gallery' | 'news' | 'ceo') => void;
  currentPage: 'home' | 'services' | 'portfolio' | 'video' | 'about' | 'terms' | 'refund' | 'privacy' | 'contact' | 'gallery' | 'news' | 'ceo';
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, navigateTo, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const t = (key: string) => TRANSLATIONS[key] ? TRANSLATIONS[key][lang] : key;

  // Grouped Navigation Structure
  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'services', label: 'services' },
    { id: 'portfolio', label: 'portfolio' },
    { 
      id: 'about-parent', 
      label: lang === 'EN' ? 'About' : 'সম্পর্কে',
      children: [
        { id: 'about', label: lang === 'EN' ? 'About Us' : 'আমাদের সম্পর্কে' },
        { id: 'video', label: lang === 'EN' ? 'Video Testimonials' : 'ভিডিও টেস্টিমোনিয়ালস' },
        { id: 'ceo', label: lang === 'EN' ? 'CEO Message' : 'সিইও বার্তা' },
        { id: 'news', label: lang === 'EN' ? 'News & Media' : 'নিউজ ও মিডিয়া' },
        { id: 'gallery', label: lang === 'EN' ? 'Gallery' : 'গ্যালারি' },
      ]
    },
    { id: 'contact', label: 'contact' },
  ];

  const handleNavClick = (id: any) => {
    navigateTo(id);
    setIsOpen(false);
    setIsAboutOpen(false);
    setIsMobileAboutOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isChildActive = (item: any) => {
    if (!item.children) return currentPage === item.id;
    return item.children.some((child: any) => child.id === currentPage);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-[#eee3e3]/95 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo Section - Keeping Brand Name Text Only */}
        <div className="flex items-center">
          <button onClick={() => navigateTo('home')} className="flex items-center group text-left py-2">
            <div className="flex items-baseline">
              <span className="text-4xl font-bebas font-normal text-secondary leading-none tracking-tight group-hover:text-primary transition-colors">
                ZOSH
              </span>
              <span className="text-4xl font-bebas font-normal text-primary ml-1 tracking-tight">
                COMMUNICATIONS
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            item.children ? (
              <div 
                key={item.id} 
                className="relative group"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
                ref={dropdownRef}
              >
                <button
                  className={`flex items-center space-x-1 font-bebas text-lg uppercase tracking-[0.1em] transition-colors relative pb-1 ${
                    isChildActive(item) ? 'text-primary' : 'text-charcoal hover:text-primary'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 w-56 bg-white shadow-2xl rounded-xl border border-primary/5 py-3 transition-all duration-300 origin-top-left ${
                    isAboutOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => handleNavClick(child.id)}
                      className={`w-full text-left px-6 py-3 font-bebas text-lg tracking-wider uppercase transition-colors hover:bg-primary/5 ${
                        currentPage === child.id ? 'text-primary bg-primary/5' : 'text-charcoal hover:text-primary'
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as any)}
                className={`font-bebas text-lg uppercase tracking-[0.1em] transition-colors relative pb-1 ${
                  currentPage === item.id
                    ? 'text-primary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-charcoal hover:text-primary'
                }`}
              >
                {t(item.label)}
              </button>
            )
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center space-x-6">
          <button
            onClick={() => setLang(lang === 'EN' ? 'BN' : 'EN')}
            className="flex items-center space-x-1 text-charcoal hover:text-primary transition-colors font-bebas text-lg tracking-wider"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'EN' ? 'BN' : 'EN'}</span>
          </button>
          <a
            href="tel:01773-327997"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bebas text-lg uppercase tracking-widest transition-all hover:scale-105 hover:shadow-lg shadow-primary/20 flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>01773-327997</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-primary/10 py-8 px-6 absolute w-full animate-fade-in shadow-2xl max-h-[90vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.id} className="flex flex-col">
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className={`flex items-center justify-between text-3xl font-bebas transition-colors uppercase tracking-wider text-left ${
                      isChildActive(item) ? 'text-primary' : 'text-charcoal'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-6 h-6 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileAboutOpen && (
                    <div className="flex flex-col mt-2 ml-4 space-y-3 border-l-2 border-primary/20 pl-4">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleNavClick(child.id)}
                          className={`text-2xl font-bebas uppercase tracking-wide text-left ${
                            currentPage === child.id ? 'text-primary' : 'text-charcoal/70'
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-3xl font-bebas transition-colors uppercase tracking-wider text-left ${
                    currentPage === item.id ? 'text-primary' : 'text-charcoal hover:text-primary'
                  }`}
                >
                  {t(item.label)}
                </button>
              )
            ))}
            <div className="pt-6 flex items-center justify-between border-t border-primary/10">
              <button 
                onClick={() => setLang(lang === 'EN' ? 'BN' : 'EN')}
                className="flex items-center space-x-2 text-charcoal font-bebas text-xl"
              >
                <Globe className="w-5 h-5 text-primary" />
                <span>{lang === 'EN' ? 'Bengali' : 'English'}</span>
              </button>
              <a href="tel:01773-327997" className="text-primary bg-white p-3 rounded-full shadow-md">
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <a
              href="#contact"
              className="bg-primary text-white py-4 rounded-xl text-center font-bebas text-2xl uppercase tracking-widest shadow-xl"
              onClick={() => { handleNavClick('contact'); }}
            >
              {t('quote')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
