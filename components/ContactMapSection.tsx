
import React from 'react';
import { Language } from '../types';
import { MapPin, ParkingCircle, Users, Wifi } from 'lucide-react';

interface Props {
  lang: Language;
}

const ContactMapSection: React.FC<Props> = ({ lang }) => {
  const features = [
    { icon: ParkingCircle, titleEn: 'Parking Available', titleBn: 'পার্কিং সুবিধা', descEn: 'Secure parking for clients', descBn: 'ক্লায়েন্টদের জন্য নিরাপদ পার্কিং' },
    { icon: Users, titleEn: 'Meeting Rooms', titleBn: 'মিটিং রুম', descEn: 'Private consultation spaces', descBn: 'ব্যক্তিগত পরামর্শের জায়গা' },
    { icon: Users, titleEn: 'Wheelchair Access', titleBn: 'হুইলচেয়ার সুবিধা', descEn: 'Fully accessible facility', descBn: 'সম্পূর্ণরূপে অ্যাক্সেসযোগ্য সুবিধা' },
    { icon: Wifi, titleEn: 'Free WiFi', titleBn: 'ফ্রি ওয়াইফাই', descEn: 'High-speed internet access', descBn: 'উচ্চ গতির ইন্টারনেট সুবিধা' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bebas text-5xl mb-16 text-black tracking-wider uppercase">
          {lang === 'EN' ? 'Our Location' : 'আমাদের অবস্থান'}
        </h2>
        
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group border border-lightGray">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10 pointer-events-none" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1126300181585!2d90.375276!3d23.784407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzAzLjkiTiA5MMKwMjInMzEuMCJF!5e0!3m2!1sen!2sbd!4v1614123456789!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            className="filter grayscale hover:grayscale-0 transition-all duration-1000"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 bg-black/60 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
            <h3 className="text-white text-4xl font-bebas mb-6 tracking-widest">{lang === 'EN' ? 'Visit Our Office' : 'আমাদের অফিসে আসুন'}</h3>
            <p className="text-white/80 max-w-lg mb-8 font-sans text-lg">
              {lang === 'EN' 
                ? "Our office is located in the heart of Dhaka, easily accessible from all parts of the city. Feel free to visit us for a face-to-face consultation."
                : "আমাদের অফিস ঢাকার প্রাণকেন্দ্রে অবস্থিত, শহরের সব অংশ থেকে সহজেই আসা যায়। সামনাসামনি পরামর্শের জন্য নির্দ্বিধায় আমাদের অফিসে চলে আসুন।"}
            </p>
            <a 
              href="https://maps.google.com/?q=1021+East+Shewrapara,+Dhaka,+Bangladesh" 
              target="_blank" 
              className="bg-[#e63946] text-white px-10 py-4 rounded-lg font-bebas text-2xl uppercase tracking-widest shadow-2xl pointer-events-auto hover:bg-[#c1121f] transition-all flex items-center space-x-3"
            >
              <MapPin className="w-6 h-6" />
              <span>{lang === 'EN' ? 'Open in Google Maps' : 'গুগল ম্যাপে দেখুন'}</span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {features.map((f, i) => (
            <div key={i} className="text-center group p-6 rounded-2xl hover:bg-[#f8f9fa] transition-all">
              <div className="mb-4 flex justify-center">
                <f.icon className="w-10 h-10 text-[#e63946] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bebas text-black mb-2 tracking-wide uppercase">
                {lang === 'EN' ? f.titleEn : f.titleBn}
              </h4>
              <p className="text-[#2d2d2d] text-sm font-sans">
                {lang === 'EN' ? f.descEn : f.descBn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
