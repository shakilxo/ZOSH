
import React, { useState } from 'react';
import { Language } from '../types';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

interface Props {
  lang: Language;
}

const ContactFormSection: React.FC<Props> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We have received your inquiry and will contact you within 24 hours.`);
    setFormData({ name: '', email: '', phone: '', eventType: '', eventDate: '', guests: '', message: '' });
  };

  const businessHours = [
    { dayEn: 'Sunday - Thursday', dayBn: 'রবিবার - বৃহস্পতিবার', time: '9:00 AM - 6:00 PM' },
    { dayEn: 'Friday', dayBn: 'শুক্রবার', time: '9:00 AM - 1:00 PM' },
    { dayEn: 'Saturday', dayBn: 'শনিবার', time: 'Emergency Events Only' },
    { dayEn: '24/7 Support', dayBn: '২৪/৭ সাপোর্ট', time: 'For Ongoing Events' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Column */}
          <div className="flex flex-col">
            <h2 className="text-5xl font-bebas text-black mb-8 leading-tight">
              {lang === 'EN' ? "Let's Create Something Amazing Together" : "আসুন একসাথে অসাধারণ কিছু তৈরি করি"}
            </h2>
            <p className="text-[#2d2d2d] text-lg mb-12 font-sans leading-relaxed">
              {lang === 'EN' 
                ? "Whether you're planning a corporate event, wedding, concert, or any special occasion, our team is ready to help you every step of the way."
                : "আপনি কর্পোরেট ইভেন্ট, বিয়ে, কনসার্ট বা যেকোনো বিশেষ অনুষ্ঠানের পরিকল্পনা করছেন না কেন, আমাদের টিম আপনাকে প্রতিটি পদক্ষেপে সাহায্য করতে প্রস্তুত।"}
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-[#e63946]/10 rounded-full flex items-center justify-center shrink-0 text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bebas text-2xl text-black tracking-wide">{lang === 'EN' ? 'Our Office' : 'আমাদের অফিস'}</h4>
                  <p className="text-[#2d2d2d] font-sans">123 Event Street, Banani<br />Dhaka 1213, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-[#e63946]/10 rounded-full flex items-center justify-center shrink-0 text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bebas text-2xl text-black tracking-wide">{lang === 'EN' ? 'Phone Number' : 'ফোন নম্বর'}</h4>
                  <p className="text-[#2d2d2d] font-sans">
                    <a href="tel:+8801773327997" className="hover:text-[#e63946] transition-colors">+880 1773-327997</a><br />
                    <a href="tel:+8801812345679" className="hover:text-[#e63946] transition-colors">+880 1812 345679</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-[#e63946]/10 rounded-full flex items-center justify-center shrink-0 text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bebas text-2xl text-black tracking-wide">{lang === 'EN' ? 'Email Address' : 'ইমেইল অ্যাড্রেস'}</h4>
                  <p className="text-[#2d2d2d] font-sans">
                    <a href="mailto:info@zoshcommunications.com" className="hover:text-[#e63946] transition-colors">info@zoshcommunications.com</a><br />
                    <a href="mailto:events@zoshcommunications.com" className="hover:text-[#e63946] transition-colors">events@zoshcommunications.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-[#e63946]/10 rounded-full flex items-center justify-center shrink-0 text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-bebas text-2xl text-black tracking-wide">WhatsApp</h4>
                  <p className="text-[#2d2d2d] font-sans">
                    <a href="https://wa.me/8801773327997" target="_blank" className="hover:text-[#25D366] transition-colors font-bold">+880 1773-327997</a><br />
                    {lang === 'EN' ? 'Quick response within 30 minutes' : '৩০ মিনিটের মধ্যে দ্রুত উত্তর'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-lightGray">
              <h3 className="text-2xl font-bebas text-black mb-6 uppercase tracking-wider">{lang === 'EN' ? 'Business Hours' : 'কার্যকাল'}</h3>
              <ul className="space-y-4">
                {businessHours.map((h, i) => (
                  <li key={i} className="flex justify-between items-center py-2 border-b border-lightGray last:border-none">
                    <span className="font-sans font-semibold text-black">{lang === 'EN' ? h.dayEn : h.dayBn}</span>
                    <span className="font-sans text-[#2d2d2d]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-lightGray">
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2d2d2d] uppercase tracking-wide">{lang === 'EN' ? 'Full Name *' : 'পূর্ণ নাম *'}</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-[#f8f9fa] border border-lightGray rounded-lg p-4 focus:ring-2 focus:ring-[#e63946] outline-none transition-all"
                  placeholder={lang === 'EN' ? "Enter your full name" : "আপনার পূর্ণ নাম লিখুন"}
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2d2d2d] uppercase tracking-wide">{lang === 'EN' ? 'Email Address *' : 'ইমেইল অ্যাড্রেস *'}</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-[#f8f9fa] border border-lightGray rounded-lg p-4 focus:ring-2 focus:ring-[#e63946] outline-none transition-all"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2d2d2d] uppercase tracking-wide">{lang === 'EN' ? 'Phone Number *' : 'ফোন নম্বর *'}</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full bg-[#f8f9fa] border border-lightGray rounded-lg p-4 focus:ring-2 focus:ring-[#e63946] outline-none transition-all"
                    placeholder="01XXX-XXXXXX"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2d2d2d] uppercase tracking-wide">{lang === 'EN' ? 'Event Type *' : 'ইভেন্টের ধরন *'}</label>
                <select 
                  required 
                  className="w-full bg-[#f8f9fa] border border-lightGray rounded-lg p-4 focus:ring-2 focus:ring-[#e63946] outline-none transition-all appearance-none cursor-pointer"
                  value={formData.eventType}
                  onChange={e => setFormData({...formData, eventType: e.target.value})}
                >
                  <option value="" disabled>{lang === 'EN' ? 'Select event type' : 'ইভেন্টের ধরন নির্বাচন করুন'}</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="concert">Concert/Show</option>
                  <option value="festival">Festival</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2d2d2d] uppercase tracking-wide">{lang === 'EN' ? 'Event Date (Optional)' : 'ইভেন্টের তারিখ (ঐচ্ছিক)'}</label>
                  <input 
                    type="date" 
                    className="w-full bg-[#f8f9fa] border border-lightGray rounded-lg p-4 focus:ring-2 focus:ring-[#e63946] outline-none transition-all"
                    value={formData.eventDate}
                    onChange={e => setFormData({...formData, eventDate: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2d2d2d] uppercase tracking-wide">{lang === 'EN' ? 'Guests (Optional)' : 'অতিথি সংখ্যা (ঐচ্ছিক)'}</label>
                  <input 
                    type="number" 
                    className="w-full bg-[#f8f9fa] border border-lightGray rounded-lg p-4 focus:ring-2 focus:ring-[#e63946] outline-none transition-all"
                    placeholder="e.g., 100"
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2d2d2d] uppercase tracking-wide">{lang === 'EN' ? 'Message *' : 'বার্তা *'}</label>
                <textarea 
                  required 
                  rows={5} 
                  className="w-full bg-[#f8f9fa] border border-lightGray rounded-lg p-4 focus:ring-2 focus:ring-[#e63946] outline-none transition-all"
                  placeholder={lang === 'EN' ? "Tell us about your event requirements, budget, and any specific details..." : "আপনার ইভেন্টের প্রয়োজনীয়তা, বাজেট এবং যেকোনো সুনির্দিষ্ট তথ্য আমাদের জানান..."}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#e63946] text-white py-5 rounded-lg font-bebas text-2xl uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-[#c1121f] transition-all shadow-xl shadow-[#e63946]/20 active:scale-[0.98] transform hover:-translate-y-1"
              >
                <span>{lang === 'EN' ? 'Send Message' : 'বার্তা পাঠান'}</span>
                <Send className="w-6 h-6" />
              </button>

              <a 
                href="https://wa.me/8801773327997" 
                target="_blank" 
                className="w-full bg-[#25D366] text-white py-5 rounded-lg font-bebas text-2xl uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-[#128C7E] transition-all shadow-xl shadow-[#25D366]/20 mt-4 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{lang === 'EN' ? 'Chat on WhatsApp' : 'হোয়াটসঅ্যাপে চ্যাট করুন'}</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
