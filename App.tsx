
import React, { useState, useEffect, useCallback } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PopularItems from './components/PopularItems';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIAssistant from './components/AIAssistant';

// Detailed Services Page Components
import ServiceHero from './components/ServiceHero';
import DetailedServices from './components/DetailedServices';
import AdditionalServices from './components/AdditionalServices';
import PricingPackages from './components/PricingPackages';
import ServiceCTA from './components/ServiceCTA';

// Portfolio Page Components
import PortfolioHero from './components/PortfolioHero';
import PortfolioGallery from './components/PortfolioGallery';
import CaseStudies from './components/CaseStudies';
import PortfolioTestimonials from './components/PortfolioTestimonials';
import PortfolioCTA from './components/PortfolioCTA';

// Video Testimonials Components
import VideoTestimonialsHero from './components/VideoTestimonialsHero';
import VideoTestimonialsGrid from './components/VideoTestimonialsGrid';
import VideoTestimonialsStats from './components/VideoTestimonialsStats';
import VideoTestimonialsCTA from './components/VideoTestimonialsCTA';

// Gallery Page Components
import GalleryHero from './components/GalleryHero';
import GalleryGrid from './components/GalleryGrid';
import GalleryStats from './components/GalleryStats';
import VideoHighlights from './components/VideoHighlights';

// CEO Message Page Components
import CEOHero from './components/CEOHero';
import CEOMessageSection from './components/CEOMessageSection';
import MissionVision from './components/MissionVision';
import CEOAchievements from './components/CEOAchievements';

// About Page Components
import AboutHero from './components/AboutHero';
import AboutIntro from './components/AboutIntro';
import OurStory from './components/OurStory';
import OurTeam from './components/OurTeam';
import OurValues from './components/OurValues';
import Awards from './components/Awards';
import AboutCTA from './components/AboutCTA';

// Legal Page Components
import TermsHero from './components/TermsHero';
import TermsContent from './components/TermsContent';
import RefundHero from './components/RefundHero';
import RefundContent from './components/RefundContent';
import PrivacyHero from './components/PrivacyHero';
import PrivacyContent from './components/PrivacyContent';

// Contact Page Components
import ContactHero from './components/ContactHero';
import ContactFormSection from './components/ContactFormSection';
import QuickContact from './components/QuickContact';
import ContactMapSection from './components/ContactMapSection';

// News & Media Page Components
import NewsHero from './components/NewsHero';
import NewsContent from './components/NewsContent';
import NewsMediaGallery from './components/NewsMediaGallery';
import PressReleases from './components/PressReleases';
import MediaCoverage from './components/MediaCoverage';
import Newsletter from './components/Newsletter';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'portfolio' | 'video' | 'about' | 'terms' | 'refund' | 'privacy' | 'contact' | 'gallery' | 'news' | 'ceo'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navigateTo = (page: 'home' | 'services' | 'portfolio' | 'video' | 'about' | 'terms' | 'refund' | 'privacy' | 'contact' | 'gallery' | 'news' | 'ceo') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans bg-background">
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }} />
      
      <Header lang={lang} setLang={setLang} navigateTo={navigateTo} currentPage={currentPage} />
      
      <main className="pt-20">
        {currentPage === 'home' && (
          <>
            <Hero lang={lang} navigateTo={navigateTo} />
            <div className="h-20 md:h-24" />
            <Services lang={lang} />
            <PopularItems lang={lang} />
            <div className="h-10" />
            <Process lang={lang} />
            <Partners lang={lang} />
            <Testimonials lang={lang} />
            <Contact lang={lang} />
          </>
        )}

        {currentPage === 'services' && (
          <>
            <ServiceHero lang={lang} />
            <DetailedServices lang={lang} />
            <AdditionalServices lang={lang} />
            <PricingPackages lang={lang} />
            <ServiceCTA lang={lang} />
          </>
        )}

        {currentPage === 'portfolio' && (
          <>
            <PortfolioHero lang={lang} />
            <PortfolioGallery lang={lang} />
            <CaseStudies lang={lang} />
            <PortfolioTestimonials lang={lang} />
            <PortfolioCTA lang={lang} />
          </>
        )}

        {currentPage === 'video' && (
          <div className="bg-gradient-to-br from-[#ffffff] via-[#fdfbfb] to-[#eee3e3]">
            <VideoTestimonialsHero lang={lang} />
            <VideoTestimonialsGrid lang={lang} />
            <VideoTestimonialsStats lang={lang} />
            <VideoTestimonialsCTA lang={lang} />
          </div>
        )}

        {currentPage === 'gallery' && (
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
            <GalleryHero lang={lang} />
            <GalleryGrid lang={lang} />
            <GalleryStats lang={lang} />
            <VideoHighlights lang={lang} />
          </div>
        )}

        {currentPage === 'news' && (
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
            <NewsHero lang={lang} />
            <NewsContent lang={lang} />
            <NewsMediaGallery lang={lang} />
            <PressReleases lang={lang} />
            <MediaCoverage lang={lang} />
            <Newsletter lang={lang} />
          </div>
        )}

        {currentPage === 'ceo' && (
          <>
            <CEOHero lang={lang} />
            <CEOMessageSection lang={lang} />
            <MissionVision lang={lang} />
            <CEOAchievements lang={lang} />
          </>
        )}

        {currentPage === 'about' && (
          <>
            <AboutHero lang={lang} />
            <AboutIntro lang={lang} />
            <OurStory lang={lang} />
            <OurTeam lang={lang} />
            <OurValues lang={lang} />
            <Awards lang={lang} />
            <AboutCTA lang={lang} navigateTo={navigateTo} />
          </>
        )}

        {currentPage === 'terms' && (
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
            <TermsHero lang={lang} />
            <TermsContent lang={lang} />
          </div>
        )}

        {currentPage === 'refund' && (
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
            <RefundHero lang={lang} />
            <RefundContent lang={lang} />
          </div>
        )}

        {currentPage === 'privacy' && (
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
            <PrivacyHero lang={lang} />
            <PrivacyContent lang={lang} />
          </div>
        )}

        {currentPage === 'contact' && (
          <>
            <ContactHero lang={lang} />
            <ContactFormSection lang={lang} />
            <QuickContact lang={lang} />
            <ContactMapSection lang={lang} />
          </>
        )}
      </main>

      <Footer lang={lang} navigateTo={navigateTo} />
      
      <WhatsAppButton />
      <AIAssistant lang={lang} />
    </div>
  );
};

export default App;
