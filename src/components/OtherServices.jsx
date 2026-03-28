import {
  Presentation,
  TrendingUp,
  BarChart4,
  ArrowUpRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OtherServices = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check window size safely for Live/Production
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const otherServices = [
    {
      title: "Financial Advising",
      desc: "Elite-level fiscal consulting to optimize your wealth growth and tax efficiency.",
      icon: <Presentation size={32} />,
    },
    {
      title: "SIP & Mutual Funds",
      desc: "Precision-driven investment frameworks engineered for consistent wealth growth.",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Trade & Equity Shield",
      desc: "Risk management for portfolios engineered to mitigate capital loss.",
      icon: <BarChart4 size={32} />,
    },
  ];

  return (
    <section id="other-services" className="py-20 md:py-24 bg-slate-50 overflow-hidden" style={arialFont}>
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandBlue }}></div>
            <span className="uppercase tracking-[0.3em] font-bold text-[10px] md:text-[12px]" style={{ color: brandBlue }}>
              Extended Solutions
            </span>
          </div>
          <h2 className="text-[28px] md:text-[52px] font-black text-slate-900 tracking-tighter uppercase italic leading-tight">
            Strategic <span style={{ color: brandBlue }}>Wealth</span> Management.
          </h2>
        </div>

        {/* FULL WIDTH LIST */}
        <div className="flex flex-col border-t border-slate-200">
          {otherServices.map((service, index) => {
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                onClick={() => setIsMobile(prev => prev && setActiveCard(isActive ? null : index))}
                onMouseEnter={() => !isMobile && setActiveCard(index)}
                onMouseLeave={() => !isMobile && setActiveCard(null)}
                className="group relative border-b border-slate-200 py-6 md:py-12 cursor-pointer transition-all duration-300"
              >
                {/* Side Accent Line */}
                <div 
                  className={`absolute left-0 top-0 h-full transition-all duration-500 ${isActive ? 'w-1.5' : 'w-0'}`}
                  style={{ backgroundColor: brandBlue }}
                ></div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative z-10 px-2 md:px-6">
                  
                  <div className="flex items-center justify-between w-full md:w-auto">
                    {/* Icon */}
                    <div className="shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ color: brandBlue }}>
                      {service.icon}
                    </div>
                    {/* Mobile Indicator */}
                    <div className={`md:hidden transition-transform duration-300 ${isActive ? 'rotate-45' : 'rotate-0'}`} style={{ color: brandBlue }}>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className={`text-[20px] md:text-[32px] font-black tracking-tight uppercase italic transition-all duration-500 
                      ${isActive ? 'text-[#0091d1] translate-x-3' : 'text-slate-900'}`}>
                      {service.title}
                    </h3>
                    
                    {/* Description - Logic fixed for Mobile/Desktop */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-slate-500 text-[15px] md:text-[18px] font-medium max-w-2xl">
                            {service.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Desktop Arrow */}
                  <div className={`hidden md:flex w-12 h-12 rounded-full border items-center justify-center transition-all duration-500 
                    ${isActive ? 'border-[#0091d1] text-[#0091d1] rotate-45' : 'border-slate-200 text-slate-400'}`}>
                    <ArrowUpRight size={24} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;