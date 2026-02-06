
import React from 'react';
import { Language } from '../types';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface Props {
  lang: Language;
}

const Contact: React.FC<Props> = ({ lang }) => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="section-title text-left mb-8">
              <h2 className="text-5xl md:text-7xl font-bebas font-normal mb-4 after:left-0 after:translate-x-0">
                {lang === 'EN' ? 'Ready to Start?' : 'শুরু করতে প্রস্তুত?'}
              </h2>
            </div>
            <p className="text-xl text-charcoal/70 mb-12 leading-relaxed font-sans">
              {lang === 'EN' 
                ? 'Fill out the form below or reach out directly via WhatsApp for a quick consultation. Our office is open for in-person creative sessions.'
                : 'নিচের ফর্মটি পূরণ করুন অথবা দ্রুত পরামর্শের জন্য সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন। আমাদের অফিস ইন-পারসন ক্রিয়েটিভ সেশনের জন্য খোলা আছে।'}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bebas text-2xl text-charcoal tracking-wide">Phone</h5>
                  <p className="text-charcoal/60 font-sans">+880 1773-327997</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bebas text-2xl text-charcoal tracking-wide">Email</h5>
                  <p className="text-charcoal/60 font-sans">hello@zoshcom.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-secondary transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bebas text-2xl text-charcoal tracking-wide">Headquarters</h5>
                  <p className="text-charcoal/60 font-sans">1021 East Shewrapara, Mirpur, Dhaka-1216</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-3xl overflow-hidden h-72 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-background">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1126300181585!2d90.375276!3d23.784407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzAzLjkiTiA5MMKwMjInMzEuMCJF!5e0!3m2!1sen!2sbd!4v1614123456789!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-background p-10 md:p-12 rounded-[48px] shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-3 font-sans">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-charcoal/5 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-3 font-sans">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-charcoal/5 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-3 font-sans">Event Type</label>
                <select className="w-full bg-white border border-charcoal/5 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none font-sans">
                  <option>Wedding</option>
                  <option>Corporate Gala</option>
                  <option>Concert</option>
                  <option>Private Party</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-3 font-sans">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white border border-charcoal/5 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all font-sans"
                  placeholder="Tell us about your dream event..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-5 rounded-2xl font-bebas text-2xl uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-[#b01030] transition-all shadow-xl shadow-primary/20 active:scale-[0.98]"
              >
                <span>Send Inquiry</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
