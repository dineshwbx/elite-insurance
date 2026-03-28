import { Circle, Headphones, Globe2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import aboutImg from '../assets/about-img.png'; 

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const brandBlue = "#0091d1";

  // Animation helper - fixed delay logic
  const fadeIn = (delay) => `transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  return (
    <section ref={ref} className="bg-slate-50 py-20 md:py-32 overflow-hidden" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main 2x2 Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* GRID 1: THE CIRCLE IMAGE (Top Left) */}
          <div className={`flex justify-center md:justify-end items-center ${fadeIn()}`} style={{ transitionDelay: '100ms' }}>
            <div className="relative group">
              <div style={{ backgroundColor: `${brandBlue}20` }} className="absolute -top-5 -left-5 w-24 h-24 rounded-full blur-3xl"></div>
              <div 
                style={{ boxShadow: `0 25px 50px -12px ${brandBlue}30` }}
                className="relative z-10 border-[8px] md:border-[12px] border-white rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px]"
              >
                <img src={aboutImg} alt="Elite Insurance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>

          {/* GRID 2: HEADING & INTRO (Top Right) */}
          <div className={`flex flex-col justify-center text-center md:text-left ${fadeIn()}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Circle style={{ color: brandBlue, fill: brandBlue }} size={8} />
              <span style={{ color: brandBlue }} className="font-bold text-xs uppercase tracking-widest">About Our Service</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase italic mb-6">
              Comprehensive <br />
              <span style={{ color: brandBlue }}>Protection</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto md:mx-0">
              Unmatched insurance expertise tailored for every aspect of your life and business.
            </p>
          </div>

          {/* GRID 3: 24/7 SUPPORT (Bottom Left) */}
          <div className={`flex flex-col md:items-end text-center md:text-right space-y-4 ${fadeIn()}`} style={{ transitionDelay: '500ms' }}>
            <div className="max-w-md">
              <div className="flex items-center justify-center md:justify-end gap-3 mb-3 text-gray-900">
                <h4 className="font-bold text-xl lg:text-2xl uppercase tracking-tighter italic">24/7 Dedicated Support</h4>
                <Headphones size={28} style={{ color: brandBlue }} />
              </div>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Our elite response team is active around the clock. Whether it's an emergency claim or a simple query, we ensure expert guidance is always just a heartbeat away.
              </p>
              <div className="mt-4 h-1 w-12 bg-gray-200 inline-block"></div>
            </div>
          </div>

          {/* GRID 4: GLOBAL PARTNERS & WIDE RANGE (Bottom Right) */}
          <div className={`flex flex-col text-center md:text-left space-y-4 ${fadeIn()}`} style={{ transitionDelay: '700ms' }}>
            <div className="max-w-md">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3 text-gray-900">
                <Globe2 size={28} style={{ color: brandBlue }} />
                <h4 className="font-bold text-xl lg:text-2xl uppercase tracking-tighter italic">Wide Network of Partners</h4>
              </div>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                We collaborate with a vast array of top-tier insurance partners. This wide-range network allows us to provide the best-in-market rates and zero-gap coverage for all types of insurance.
              </p>
              <div style={{ backgroundColor: brandBlue }} className="mt-4 h-1 w-20 inline-block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;