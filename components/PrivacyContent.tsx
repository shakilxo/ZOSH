
import React from 'react';
import { Language } from '../types';
import { Info, Database, Settings, Shield, Share2, UserCheck, Cookie, RefreshCcw, Mail, Phone, MapPin, Clock, ChevronRight, User, Calendar, CreditCard, MessageSquare, Eye, Edit, Trash2, Pause, FileOutput, Ban } from 'lucide-react';

interface Props {
  lang: Language;
}

const PrivacyContent: React.FC<Props> = ({ lang }) => {
  const navItems = [
    { id: 'introduction', label: 'Introduction', icon: Info },
    { id: 'collection', label: 'Data Collection', icon: Database },
    { id: 'usage', label: 'Data Usage', icon: Settings },
    { id: 'protection', label: 'Data Protection', icon: Shield },
    { id: 'sharing', label: 'Data Sharing', icon: Share2 },
    { id: 'rights', label: 'Your Rights', icon: UserCheck },
    { id: 'cookies', label: 'Cookies', icon: Cookie },
    { id: 'changes', label: 'Policy Changes', icon: RefreshCcw },
  ];

  const sections = [
    {
      id: 'introduction',
      num: '1.',
      icon: Info,
      title: 'Introduction',
      content: (
        <>
          <p>Welcome to Zosh Communications' Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our services.</p>
          <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl">
            <p className="m-0 text-darkGray font-semibold">Purpose: This policy explains our data practices, your privacy rights, and how the law protects you. It applies to all users of our website and services.</p>
          </div>
          <p>By using our services, you agree to the collection and use of information in accordance with this policy. We collect several different types of information for various purposes to provide and improve our event management services.</p>
        </>
      )
    },
    {
      id: 'collection',
      num: '2.',
      icon: Database,
      title: 'Information We Collect',
      content: (
        <>
          <p>We collect several types of information to provide and improve our services to you. This includes:</p>
          
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl my-8 border border-white/20 shadow-inner">
            <h4 className="text-xl font-bebas text-black mb-6 text-center">Types of Data We Collect</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: User, label: 'Personal Information' },
                { icon: Calendar, label: 'Event Details' },
                { icon: CreditCard, label: 'Payment Info' },
                { icon: MessageSquare, label: 'Communication Data' }
              ].map((cat, i) => (
                <div key={i} className="bg-white/40 p-4 rounded-xl text-center border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-darkRed rounded-lg flex items-center justify-center mx-auto mb-3 text-white shadow-md">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-darkGray m-0">{cat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p><strong>Personal Data:</strong> While using our services, we may ask you to provide us with personally identifiable information, including:</p>
          <ul className="list-none pl-6 my-6 space-y-3">
            {['Full name and title', 'Email address and phone number', 'Company name and position', 'Mailing address', 'Event preferences', 'Guest list information'].map((item, i) => (
              <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
            ))}
          </ul>
        </>
      )
    },
    {
      id: 'usage',
      num: '3.',
      icon: Settings,
      title: 'How We Use Your Information',
      content: (
        <>
          <p>Zosh Communications uses the collected data for various purposes:</p>
          <ul className="list-none pl-6 my-6 space-y-3">
            {[
              'To provide and maintain our services: Managing your event and coordinating with vendors.',
              'To notify you about changes to our services or event details.',
              'To provide customer support and respond to your inquiries.',
              'To monitor usage and detect technical issues.',
              'To process payments and manage billing.'
            ].map((item, i) => (
              <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
            ))}
          </ul>
        </>
      )
    },
    {
      id: 'protection',
      num: '4.',
      icon: Shield,
      title: 'Data Security and Protection',
      content: (
        <>
          <p>The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information.</p>
          <ul className="list-none pl-6 my-6 space-y-3">
            {['Encryption of sensitive data', 'Secure servers and firewalls', 'Regular security assessments', 'Access controls and authentication'].map((item, i) => (
              <li key={i} className="relative before:content-['•'] before:text-primary before:absolute before:-left-5 before:font-bold text-darkGray">{item}</li>
            ))}
          </ul>
          <div className="bg-primary/5 border-l-4 border-primary p-6 my-6 rounded-r-xl">
            <p className="m-0 text-darkGray font-semibold italic">While we strive to use commercially acceptable means to protect your information, no method is 100% secure.</p>
          </div>
        </>
      )
    },
    {
      id: 'rights',
      num: '6.',
      icon: UserCheck,
      title: 'Your Data Protection Rights',
      content: (
        <>
          <p>You have certain data protection rights regarding your personal information:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
            {[
              { icon: Eye, title: 'Right to Access', desc: 'Request copies of your personal data.' },
              { icon: Edit, title: 'Right to Rectification', desc: 'Request correction of inaccurate info.' },
              { icon: Trash2, title: 'Right to Erasure', desc: 'Request deletion of your data.' },
              { icon: Pause, title: 'Right to Restrict', desc: 'Request restriction of processing.' },
              { icon: FileOutput, title: 'Right to Portability', desc: 'Request transfer of your data.' },
              { icon: Ban, title: 'Right to Object', desc: 'Object to our processing of data.' }
            ].map((right, i) => (
              <div key={i} className="bg-white/30 backdrop-blur-sm border border-white/20 p-5 rounded-xl hover:bg-primary/5 transition-all text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-darkRed rounded-lg flex items-center justify-center mx-auto mb-4 text-white shadow-md group-hover:scale-110 transition-transform">
                  <right.icon className="w-6 h-6" />
                </div>
                <h5 className="text-sm font-bold text-black mb-2">{right.title}</h5>
                <p className="text-xs text-darkGray m-0 leading-relaxed">{right.desc}</p>
              </div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bebas text-black mb-4 uppercase tracking-wider">Privacy Policy</h2>
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-sans text-darkGray border border-white/30">
              <Clock className="w-4 h-4 text-primary" />
              <span>Last Updated: December 1, 2023</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 shadow-inner">
            <h3 className="text-2xl font-bebas text-black mb-6 uppercase tracking-wider">Quick Navigation</h3>
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
                    <h3 className="text-3xl font-bebas text-black uppercase tracking-wider">{section.title}</h3>
                  </div>
                </div>
                <div className="text-darkGray font-sans leading-relaxed space-y-4">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact Point */}
            <div className="bg-white/30 backdrop-blur-md border border-white/20 p-10 rounded-[32px] text-center shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-darkRed rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                <Mail className="w-10 h-10" />
              </div>
              <h4 className="text-3xl font-bebas text-black mb-4 uppercase tracking-wider">Contact Us About Privacy</h4>
              <p className="text-darkGray font-sans mb-8">If you have any questions or concerns about our Privacy Policy or your personal information, please don't hesitate to contact us.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Mail, label: 'Email', value: 'zoshcommunications@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '01773-327997' },
                  { icon: MapPin, label: 'Address', value: '1021, East Shewrapara, Dhaka' },
                  { icon: Clock, label: 'Hours', value: 'Sun-Thu, 9AM-6PM' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/40 p-4 rounded-xl border border-white/20 text-center">
                    <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-[10px] font-bold uppercase text-primary/60 mb-1">{item.label}</p>
                    <p className="text-[10px] font-bold text-black break-words">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
