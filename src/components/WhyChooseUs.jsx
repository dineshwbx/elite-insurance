import React, { useEffect, useRef, useState } from 'react';
import meetingImg from '../assets/meeting.jpg'; 
import { 
  FaRegClock, FaWallet, FaHeadset, FaFileAlt 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const brandBlue = "#0091d1";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-slate-50" ref={sectionRef}>
      <section className="py-20 px-6 max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
        
        {/* Left Side: Text Content */}
        <div 
          className={`space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase" style={{ color: brandBlue }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brandBlue }}></span>
            Why Choose Us
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#001a2c] leading-tight">
            Why you <span className="underline underline-offset-8" style={{ textDecorationColor: brandBlue }}>should choose</span> our insurance policy's
          </h2>
          
          <p className="text-slate-500 leading-relaxed font-medium">
            Choose our insurance policies for comprehensive coverage, personalized service, and affordable rates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 w-full">
            {[
              { icon: FaFileAlt, title: "Control Over Policy" },
              { icon: FaWallet, title: "Affordable Premiums" },
              { icon: FaRegClock, title: "Fast & Easy Process" },
              { icon: FaHeadset, title: "24/7 Supports" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center lg:justify-start gap-4 group">
                <div 
                  className="p-3 rounded-full text-white shadow-lg transition-transform group-hover:scale-110" 
                  style={{ backgroundColor: brandBlue, boxShadow: `0 10px 15px -3px ${brandBlue}33` }}
                >
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-[#001a2c] whitespace-nowrap">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button 
              className="text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg active:scale-95" 
              style={{ backgroundColor: brandBlue, boxShadow: `0 10px 20px -5px ${brandBlue}66` }}
            >
              Contact Now
            </button>
          </div>
        </div>

        {/* Right Side: Image Content */}
        <div 
          className={`relative p-10 z-10 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          {/* Decorative Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-[6px] border-r-[6px] rounded-tr-[40px] z-0" style={{ borderColor: brandBlue }}></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-[6px] border-l-[6px] rounded-bl-[40px] z-0" style={{ borderColor: brandBlue }}></div>

          {/* Dots Pattern using Inline Style for performance */}
          <div 
            className="absolute w-[120%] h-[120%] opacity-40 -z-10" 
            style={{ 
              backgroundImage: `radial-gradient(${brandBlue} 2.5px, transparent 2.5px)`, 
              backgroundSize: '18px 18px',
              bottom: '-24%', 
              right: '-24%',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }}
          ></div>
          
          <div className="relative z-10 rounded-[40px] border-12 border-white overflow-hidden shadow-2xl bg-white">
            <img 
              src={meetingImg} 
              alt="Insurance Meeting" 
              className="w-full h-full object-cover aspect-4/3 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;