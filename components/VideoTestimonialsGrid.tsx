
import React, { useState } from 'react';
import { Language } from '../types';
import { Play, X, Eye, Clock, Calendar, MessageCircle } from 'lucide-react';

interface Props {
  lang: Language;
}

const VideoTestimonialsGrid: React.FC<Props> = ({ lang }) => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const videos = [
    {
      id: 'video1',
      title: '"Our Annual Conference Was Flawless!"',
      client: 'Rajib Ahmed',
      position: 'Marketing Director, TechCorp',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      views: '1.2K',
      duration: '2:30',
      date: 'Mar 2023',
      description: 'Zosh Communications managed our annual corporate conference for 500+ attendees. Their attention to detail and flawless execution made it our most successful conference yet.'
    },
    {
      id: 'video2',
      title: '"Our Dream Wedding Came True"',
      client: 'Farhana Islam',
      position: 'Wedding Client',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      views: '2.5K',
      duration: '3:15',
      date: 'Feb 2023',
      description: 'From venue selection to the final dance, Zosh made our wedding day absolutely perfect. They handled everything so we could focus on enjoying our special day.'
    },
    {
      id: 'video3',
      title: '"Spectacular Music Festival Production"',
      client: 'David Chen',
      position: 'Event Director, MusicFest',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      views: '1.8K',
      duration: '4:20',
      date: 'Jan 2023',
      description: 'The 3-day music festival with 15,000 attendees was managed flawlessly by Zosh Communications. Their production quality and crowd management were exceptional.'
    },
    {
      id: 'video4',
      title: '"Product Launch That Created Buzz"',
      client: 'Michael Tan',
      position: 'Product Manager, InnovateTech',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      views: '1.1K',
      duration: '2:45',
      date: 'Dec 2022',
      description: 'Our new product launch event generated incredible media coverage and industry buzz. Zosh handled everything from venue setup to media coordination perfectly.'
    },
    {
      id: 'video5',
      title: '"International Exhibition Success"',
      client: 'Sarah Johnson',
      position: 'CEO, TechExpo International',
      avatar: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      views: '2.3K',
      duration: '3:30',
      date: 'Nov 2022',
      description: 'Managing an international exhibition with exhibitors from 15 countries was a complex task that Zosh Communications handled with professional excellence.'
    },
    {
      id: 'video6',
      title: '"Brand Activation That Went Viral"',
      client: 'Alex Morgan',
      position: 'Brand Manager, Global Brands',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      views: '3.1K',
      duration: '2:55',
      date: 'Oct 2022',
      description: 'Our brand activation campaign reached over 1 million people online thanks to Zosh\'s creative execution and strategic planning.'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas text-secondary mb-4 uppercase tracking-tighter">
            {lang === 'EN' ? 'Client Success Stories' : 'ক্লায়েন্ট সাফল্যের গল্প'}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-charcoal font-montserrat max-w-2xl mx-auto opacity-70">
            {lang === 'EN' ? 'Experience our events through the eyes of our satisfied clients. Each video tells a unique story of success.' : 'আমাদের সন্তুষ্ট ক্লায়েন্টদের চোখের মাধ্যমে আমাদের ইভেন্টগুলি অনুভব করুন। প্রতিটি ভিডিও সাফল্যের একটি অনন্য গল্প বলে।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div 
              key={vid.id}
              className="group relative rounded-[2rem] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-500 hover:-translate-y-3 cursor-pointer h-0 pb-[125%]"
              onClick={() => setSelectedVideo(vid)}
            >
              <div className="absolute inset-0">
                <img src={vid.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={vid.title} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-darkRed flex items-center justify-center text-white shadow-2xl border-4 border-white/20 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={vid.avatar} className="w-12 h-12 rounded-full border-2 border-primary" alt={vid.client} />
                    <div>
                      <h4 className="text-white font-bold text-lg leading-none mb-1">{vid.client}</h4>
                      <p className="text-white/60 text-xs font-medium uppercase tracking-wider">{vid.position}</p>
                    </div>
                  </div>
                  <h3 className="text-white font-bebas text-2xl mb-3 tracking-wide leading-tight">{vid.title}</h3>
                  <div className="flex items-center space-x-4 text-white/70 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {vid.views} views</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {vid.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-2xl">
            <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden w-full max-w-6xl shadow-2xl animate-fadeInUp border border-white/20 relative">
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-50 bg-black/30 hover:bg-primary text-white p-3 rounded-full transition-all hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 aspect-video bg-black">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                
                <div className="lg:w-1/3 p-8 md:p-12 flex flex-col">
                  <div className="flex items-center space-x-4 mb-8">
                    <img src={selectedVideo.avatar} className="w-16 h-16 rounded-full border-3 border-primary" alt={selectedVideo.client} />
                    <div>
                      <h3 className="text-white font-bebas text-3xl leading-none mb-1">{selectedVideo.client}</h3>
                      <p className="text-primary font-bold text-sm uppercase tracking-widest">{selectedVideo.position}</p>
                    </div>
                  </div>
                  
                  <h2 className="text-white text-3xl font-bebas mb-6 leading-tight tracking-wide">{selectedVideo.title}</h2>
                  <p className="text-white/70 font-sans leading-relaxed mb-8 flex-1">
                    {selectedVideo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-white/50 text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Eye className="w-4 h-4 text-primary" /> {selectedVideo.views} Views</span>
                    <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Clock className="w-4 h-4 text-primary" /> {selectedVideo.duration}</span>
                    <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Calendar className="w-4 h-4 text-primary" /> {selectedVideo.date}</span>
                  </div>

                  <button className="w-full bg-primary text-white py-5 rounded-2xl font-bebas text-2xl tracking-widest flex items-center justify-center space-x-3 hover:bg-darkRed transition-all shadow-2xl shadow-primary/20">
                    <MessageCircle className="w-6 h-6" />
                    <span>START YOUR SUCCESS STORY</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonialsGrid;
