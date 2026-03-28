import { Circle, Headphones, Globe2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import aboutImg from '../assets/about-img.png'; 

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const brandBlue = "#0091d1";

  // Fixed animation helper
  const fadeIn = "transition-all duration-1000 ease-out";
  const visible = "opacity-100 translate-y-0";
  const hidden = "opacity-0 translate-y-10";

  return (
    <section ref={ref} className="bg-slate-50 py-16 md:py-24 lg:py-32 overflow-hidden" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main 2x2 Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-16 lg:gap-y-20 items-center">
          
          {/* GRID 1: THE CIRCLE IMAGE (Top Left) */}
          <div className={`${fadeIn} ${inView ? visible : hidden} flex justify-center md:justify-end`} style={{ transitionDelay: '100ms' }}>
            <div className="relative group">
              <div style={{ backgroundColor: `${brandBlue}20` }} className="absolute -top-5 -left-5 w-20 h-20 rounded-full blur-3xl"></div>
              <div 
                style={{ boxShadow: `0 25px 50px -12px ${brandBlue}30` }}
                className="relative z-10 border-[6px] md:border-[10px] border-white rounded-full overflow-hidden w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]"
              >
                <img src={aboutImg} alt="Elite Insurance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>

          {/* GRID 2: HEADING & INTRO (Top Right) */}
          <div className={`${fadeIn} ${inView ? visible : hidden} flex flex-col justify-center text-center md:text-left`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Circle style={{ color: brandBlue, fill: brandBlue }} size={6} />
              <span style={{ color: brandBlue }} className="font-bold text-[10px] md:text-xs uppercase tracking-widest">About Our Service</span>
            </div>
            {/* Font size reduced for Tablet (md:text-4xl) to prevent overlap */}
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 leading-tight uppercase italic mb-4 lg:mb-6">
              Comprehensive <br />
              <span style={{ color: brandBlue }}>Protection</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg lg:text-xl font-medium max-w-xs md:max-w-sm lg:max-w-md mx-auto md:mx-0">
              Unmatched insurance expertise tailored for every aspect of your life and business.
            </p>
          </div>

          {/* GRID 3: 24/7 SUPPORT (Bottom Left) */}
          <div className={`${fadeIn} ${inView ? visible : hidden} flex flex-col md:items-end text-center md:text-right space-y-3`} style={{ transitionDelay: '500ms' }}>
            <div className="max-w-xs md:max-w-sm lg:max-w-md">
              <div className="flex items-center justify-center md:justify-end gap-2 lg:gap-3 mb-2 text-gray-900">
                <h4 className="font-bold text-lg lg:text-2xl uppercase tracking-tighter italic">24/7 Support</h4>
                <Headphones size={24} className="lg:w-7 lg:h-7" style={{ color: brandBlue }} />
              </div>
              <p className="text-gray-600 text-sm lg:text-lg leading-relaxed">
                Our elite response team is active around the clock. Whether it's an emergency claim or a query, expert guidance is just a heartbeat away.
              </p>
              <div className="mt-3 h-1 w-10 bg-gray-200 inline-block"></div>
            </div>
          </div>

          {/* GRID 4: GLOBAL PARTNERS (Bottom Right) */}
          <div className={`${fadeIn} ${inView ? visible : hidden} flex flex-col text-center md:text-left space-y-3`} style={{ transitionDelay: '700ms' }}>
            <div className="max-w-xs md:max-w-sm lg:max-w-md">
              <div className="flex items-center justify-center md:justify-start gap-2 lg:gap-3 mb-2 text-gray-900">
                <Globe2 size={24} className="lg:w-7 lg:h-7" style={{ color: brandBlue }} />
                <h4 className="font-bold text-lg lg:text-2xl uppercase tracking-tighter italic">Wide Network</h4>
              </div>
              <p className="text-gray-600 text-sm lg:text-lg leading-relaxed">
                We collaborate with top-tier insurance partners globally to provide best-in-market rates and zero-gap coverage for all needs.
              </p>
              <div style={{ backgroundColor: brandBlue }} className="mt-3 h-1 w-16 inline-block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;