
import React from 'react';
import { Language } from '../types';
import { FileText, HelpCircle, DollarSign, Ban, Clock, ShieldCheck, Mail, Phone, ChevronRight, AlertCircle } from 'lucide-react';

interface Props {
  lang: Language;
}

const RefundContent: React.FC<Props> = ({ lang }) => {
  const navItems = [
    { id: 'eligibility', label: 'Eligibility', icon: ShieldCheck },
    { id: 'process', label: 'Refund Process', icon: RefreshCw },
    { id: 'cancellation', label: 'Cancellation Fees', icon: Ban },
    { id: 'non-refundable', label: 'Non-Refundable', icon: AlertCircle },
    { id: 'force-majeure', label: 'Force Majeure', icon: HelpCircle },
    { id: 'contact', label: 'Contact Us', icon: Mail },
  ];

  const sections = [
    {
      id: 'eligibility',
      num: '1.',
      icon: ShieldCheck,
      title: 'Eligibility for Refund',
      content: (
        <>
          <p>Refunds are considered on a case-by-case basis depending on the timing of the cancellation and the services already rendered or booked. To be eligible for a refund, the cancellation must be made in writing.</p>
          <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl font-sans">
            <p className="m-0 text-darkGray font-semibold italic">"We value our client relationships and strive to be fair in all our financial dealings."</p>
          </div>
          <p>The 50% initial booking deposit is generally non-refundable as it secures the date and initiates the planning process, though exceptions may be made in extreme circumstances at our sole discretion.</p>
        </>
      )
    },
    {
      id: 'process',
      num: '2.',
      icon: DollarSign,
      title: 'Refund Process',
      content: (
        <>
          <p>Once a refund request is approved, the processing follows a standard protocol to ensure transparency and security.</p>
          <ul className="list-none pl-6 my-6 space-y-3 font-sans">
            {[
              'Step 1: Formal written request sent to our accounts department.',
              'Step 2: Review of expenses incurred (vendor bookings, planning hours).',
              'Step 3: Approval notification within 7 business days.',
              'Step 4: Fund disbursement within 15 business days of approval.',
            ].map((item, i) => (
              <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
            ))}
          </ul>
          <p>Refunds will be issued via the original payment method unless otherwise agreed upon in writing.</p>
        </>
      )
    },
    {
      id: 'cancellation',
      num: '3.',
      icon: Ban,
      title: 'Cancellation Charges',
      content: (
        <>
          <p>As per our standard service agreement, the following charges apply based on the proximity to the event date:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {[
              { label: '30+ Days Before', value: '25% of Total Fee' },
              { label: '15-29 Days Before', value: '50% of Total Fee' },
              { label: '8-14 Days Before', value: '75% of Total Fee' },
              { label: '0-7 Days Before', value: '100% of Total Fee' },
            ].map((item, i) => (
              <div key={i} className="bg-white/50 backdrop-blur-sm border border-white/40 p-4 rounded-xl flex justify-between items-center shadow-sm">
                <span className="font-sans text-darkGray font-bold">{item.label}</span>
                <span className="font-bebas text-xl text-primary">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl">
            <p className="m-0 text-darkGray font-semibold">Note: Any third-party vendor cancellation fees (venue, catering, artist) will be deducted from the refundable amount in addition to the above charges.</p>
          </div>
        </>
      )
    },
    {
      id: 'non-refundable',
      num: '4.',
      icon: AlertCircle,
      title: 'Non-Refundable Items',
      content: (
        <>
          <p>Certain items and services are strictly non-refundable once the commitment is made:</p>
          <ul className="list-none pl-6 my-4 space-y-3 font-sans">
            {[
              'Custom-made decor or branding materials.',
              'Artist or celebrity non-refundable appearance fees.',
              'Venue rental deposits if the venue policy forbids refunds.',
              'Digital asset creation (videos, graphics, website for event).',
              'Rush service fees for last-minute event organization.'
            ].map((item, i) => (
              <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
            ))}
          </ul>
        </>
      )
    },
    {
      id: 'force-majeure',
      num: '5.',
      icon: HelpCircle,
      title: 'Force Majeure',
      content: (
        <>
          <p>In cases of cancellation due to "Acts of God" or events beyond our reasonable control (natural disasters, government lockdowns, political unrest), Zosh Communications will prioritize rescheduling the event.</p>
          <p>If rescheduling is not possible, we will negotiate a fair settlement that covers our incurred costs and vendor commitments while returning any excess funds to the client.</p>
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
            <h2 className="text-4xl md:text-5xl font-bebas text-black mb-4">Refund Policy</h2>
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-sans text-darkGray border border-white/30">
              <Clock className="w-4 h-4 text-primary" />
              <span>Version 2.1 | December 2023</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 shadow-inner">
            <h3 className="text-2xl font-bebas text-black mb-6">Policy Sections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            <div id="contact" className="bg-white/30 backdrop-blur-md border border-white/20 p-10 rounded-[32px] text-center shadow-xl">
              <h4 className="text-3xl font-bebas text-black mb-4 uppercase tracking-wider">Refund Inquiries</h4>
              <p className="text-darkGray font-sans mb-8">For any questions regarding refunds or to submit a formal cancellation request, please contact our financial department:</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center space-x-3 text-darkGray bg-white/40 px-6 py-3 rounded-2xl border border-white/20">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-semibold font-sans">billing@zoshcom.com</span>
                </div>
                <div className="flex items-center space-x-3 text-darkGray bg-white/40 px-6 py-3 rounded-2xl border border-white/20">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-semibold font-sans">01773-327997</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RefreshCw = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
);

export default RefundContent;
