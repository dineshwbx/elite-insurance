import heroBg from '../assets/hero-bg.png'; 
import { HeartPulse } from 'lucide-react';

const Hero = () => {
  const brandBlue = "#0091d1"; 
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-white overflow-hidden" style={arialFont}>
      
      {/* 1. IMAGE SECTION */}
      <div className="relative w-full grow overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-position-[55%_center] lg:bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </div>

      {/* 2. CURVY TRANSITION - Fixed with bottom overlap */}
      <div className="relative w-full z-20">
        {/* bottom-[-1px] ensures it cuts into the blue box slightly to hide gaps */}
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-0">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            /* scale-x-110 and scale-y-125 completely removes any ghost lines on mobile/tablet */
            className="relative block w-full h-15 md:h-30 scale-x-110 scale-y-125 origin-bottom"
          >
            <path 
              d="M0,120V40C200,100,400,100,600,100s400-60,600-60v80H0Z" 
              fill={brandBlue}
            ></path>
          </svg>
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div 
        style={{ backgroundColor: brandBlue }} 
        className="relative z-10 w-full pb-8 md:pb-12 mt-auto"
      >
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <div className="flex flex-col items-center justify-center gap-1.5 md:gap-2">
            
            {/* Row 1: Elite Insurance + White Heart */}
            <div className="flex items-center justify-center gap-3 whitespace-nowrap">
              <HeartPulse className="text-white w-6 h-6 md:w-9 md:h-9 animate-pulse shrink-0" strokeWidth={2} />
              <h1 className="text-xl md:text-3xl font-bold text-white tracking-tighter uppercase italic leading-none">
                Elite Insurance
              </h1>
            </div>
            
            {/* Row 2: Quotes */}
            <div className="text-center">
              <p className="text-base md:text-2xl font-bold text-white tracking-tight uppercase italic leading-tight">
                <span className="block sm:inline opacity-90">Dissolve Your Burdens.</span>
                <span className="sm:ml-4 block sm:inline border-b-2 border-white pb-0.5">
                  heal your future.
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;