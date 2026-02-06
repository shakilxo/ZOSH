
import React from 'react';
import { Language } from '../types';
import { FileSignature, ConciergeBell, CalendarCheck, CreditCard, Ban, Scale, ShieldCheck, RefreshCw, Mail, Phone, Clock, ChevronRight } from 'lucide-react';

interface Props {
  lang: Language;
}

const TermsContent: React.FC<Props> = ({ lang }) => {
  const navItems = [
    { id: 'agreement', label: 'Agreement', icon: FileSignature },
    { id: 'services', label: 'Services', icon: ConciergeBell },
    { id: 'booking', label: 'Booking', icon: CalendarCheck },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'cancellation', label: 'Cancellation', icon: Ban },
    { id: 'liability', label: 'Liability', icon: Scale },
    { id: 'privacy', label: 'Privacy', icon: ShieldCheck },
    { id: 'changes', label: 'Changes', icon: RefreshCw },
  ];

  const sections = [
    {
      id: 'agreement',
      num: '1.',
      icon: FileSignature,
      title: 'Agreement to Terms',
      content: (
        <>
          <p>By accessing or using the services provided by Zosh Communications, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
          <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl">
            <p className="m-0 text-darkGray font-semibold">Important: These terms constitute a legally binding agreement between you and Zosh Communications regarding your use of our event management services.</p>
          </div>
          <p>Our services are available only to individuals who are at least 18 years old. By using our services, you represent and warrant that you are of legal age to form a binding contract with Zosh Communications.</p>
        </>
      )
    },
    {
      id: 'services',
      num: '2.',
      icon: ConciergeBell,
      title: 'Event Management Services',
      content: (
        <>
          <p>Zosh Communications provides professional event management services including but not limited to:</p>
          <ul className="list-none pl-6 my-6 space-y-3">
            {['Conference and seminar organization', 'Wedding planning and coordination', 'Corporate event management', 'Concert and entertainment event production', 'Brand activation and product launches', 'Exhibition and trade show management', 'Virtual and hybrid event planning'].map((item, i) => (
              <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
            ))}
          </ul>
          <p>All services are provided on an "as is" and "as available" basis. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.</p>
        </>
      )
    },
    {
      id: 'booking',
      num: '3.',
      icon: CalendarCheck,
      title: 'Booking and Reservations',
      content: (
        <>
          <p>To book our services, clients must provide accurate and complete information including event details, dates, venues, and contact information.</p>
          <p className="font-bold mt-6 text-black">Booking Process:</p>
          <ul className="list-none pl-6 my-4 space-y-3">
            {['Initial consultation and quotation', 'Signing of service agreement', 'Payment of booking deposit (minimum 50%)', 'Confirmation of all event details', 'Final payment before event date'].map((item, i) => (
              <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
            ))}
          </ul>
          <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl">
            <p className="m-0 text-darkGray font-semibold">Event Changes: Any changes to the event details after confirmation may incur additional charges and must be communicated at least 7 days before the event date.</p>
          </div>
        </>
      )
    },
    {
        id: 'payment',
        num: '4.',
        icon: CreditCard,
        title: 'Payment Terms',
        content: (
          <>
            <p>All prices are quoted in Bangladeshi Taka (BDT) and are exclusive of VAT unless otherwise specified.</p>
            <p className="font-bold mt-6 text-black">Payment Schedule:</p>
            <ul className="list-none pl-6 my-4 space-y-3">
              {['50% deposit upon booking confirmation', '40% payment 14 days before event date', '10% final payment 3 days before event date'].map((item, i) => (
                <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
              ))}
            </ul>
            <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl">
              <p className="m-0 text-darkGray font-semibold">Late Payments: Payments not received by the due date may result in cancellation of services. A late fee of 2% per month will be applied to overdue amounts.</p>
            </div>
          </>
        )
      },
      {
        id: 'cancellation',
        num: '5.',
        icon: Ban,
        title: 'Cancellation and Refund Policy',
        content: (
          <>
            <p>Cancellations must be made in writing and sent to our official email address: zoshcommunications@gmail.com</p>
            <p className="font-bold mt-6 text-black">Cancellation Charges:</p>
            <ul className="list-none pl-6 my-4 space-y-3">
              {['Cancellation 30+ days before event: 25% of total fee', 'Cancellation 15-29 days before event: 50% of total fee', 'Cancellation 8-14 days before event: 75% of total fee', 'Cancellation 0-7 days before event: 100% of total fee'].map((item, i) => (
                <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
              ))}
            </ul>
            <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl">
              <p className="m-0 text-darkGray font-semibold">Force Majeure: In case of cancellation due to circumstances beyond our control (natural disasters, etc.), we will work with you to reschedule.</p>
            </div>
          </>
        )
      }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/20 rounded-[32px] shadow-2xl overflow-hidden relative p-12">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-darkRed" />
          
          <div className="text-center mb-12 pb-8 border-b border-primary/10">
            <h2 className="text-4xl md:text-5xl font-bebas text-black mb-4">Terms of Service</h2>
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-sans text-darkGray border border-white/30">
              <Clock className="w-4 h-4 text-primary" />
              <span>Last Updated: December 1, 2023</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 shadow-inner">
            <h3 className="text-2xl font-bebas text-black mb-6">Quick Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/20 hover:bg-primary/10 hover:text-primary transition-all group text-left font-sans text-sm font-semibold"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32 pb-12 border-b border-primary/5 last:border-0">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-darkRed rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-primary font-bold text-lg">{section.num}</span>
                    <h3 className="text-3xl font-bebas text-black">{section.title}</h3>
                  </div>
                </div>
                <div className="text-darkGray font-sans leading-relaxed space-y-4">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact Point */}
            <div className="bg-white/30 backdrop-blur-md border border-white/20 p-10 rounded-[32px] text-center shadow-xl">
              <h4 className="text-3xl font-bebas text-black mb-4">Questions About Our Terms?</h4>
              <p className="text-darkGray font-sans mb-8">If you have any questions about these Terms and Conditions, please contact us:</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center space-x-3 text-darkGray">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-semibold">zoshcommunications@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-darkGray">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-semibold">01773-327997</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
