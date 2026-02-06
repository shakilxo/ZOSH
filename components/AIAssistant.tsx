
import React, { useState } from 'react';
import { Sparkles, X, Send, Loader2, Bot } from 'lucide-react';
import { getEventAdvice } from '../services/geminiService';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const AIAssistant: React.FC<Props> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getEventAdvice(userMsg, lang);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || '' }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button - Updated to Primary Crimson */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-[55] bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center border-2 border-white/20 active:scale-95"
        aria-label="AI Assistant"
      >
        <Sparkles className="w-8 h-8 text-gold" />
      </button>

      {/* Chat Window - Updated with Glassmorphism and site background */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 w-[90vw] md:w-[400px] h-[550px] bg-white rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-[70] overflow-hidden flex flex-col border border-primary/10 animate-fadeInUp font-sans">
          {/* Header - Updated with Gradient and Dancing Font */}
          <div className="bg-gradient-to-r from-[#4b0c19] via-[#831127] to-primary p-6 flex justify-between items-center text-white relative">
            <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="flex items-center space-x-3 relative z-10">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md border border-white/20">
                <Bot className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-bebas font-normal text-2xl leading-none tracking-wide">Zosh AI Consultant</h4>
                <p className="dancing-font text-gold text-lg mt-0.5 leading-none">{lang === 'EN' ? 'Experimental AI' : 'পরীক্ষামূলক এআই'}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors relative z-10">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages - Updated Background Color */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#eee3e3]/40">
            {messages.length === 0 && (
              <div className="text-center mt-12 animate-fadeInUp">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                </div>
                <p className="text-charcoal/70 italic font-medium font-sans">
                  {lang === 'EN' 
                    ? "Hi! I'm Zosh AI. How can I help you plan your dream event in Dhaka today?" 
                    : "হাই! আমি জোশ এআই। আজ আমি আপনাকে ঢাকায় আপনার স্বপ্নের ইভেন্ট পরিকল্পনা করতে কীভাবে সাহায্য করতে পারি?"}
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
                style={{ animationDelay: '0.1s' }}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed font-sans ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20'
                      : 'bg-white text-charcoal shadow-md rounded-tl-none border border-primary/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md">
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input - Updated Border and Background */}
          <div className="p-4 border-t border-primary/10 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'EN' ? "Ask about theme ideas..." : "থিম সম্পর্কে জিজ্ঞাসা করুন..."}
                className="flex-1 bg-[#eee3e3]/30 border border-transparent rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:bg-white outline-none font-sans transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-white p-3 rounded-xl disabled:opacity-50 hover:bg-darkRed transition-all shadow-lg shadow-primary/10 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
