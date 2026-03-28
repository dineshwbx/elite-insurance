import {
  Presentation,
  TrendingUp,
  BarChart4,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

const OtherServices = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  const [activeCard, setActiveCard] = useState(null);

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

  const handleToggle = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="other-services" className="py-24 bg-slate-50 overflow-hidden" style={arialFont}>
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandBlue }}></div>
            <span className="uppercase tracking-[0.3em] font-bold text-[12px]" style={{ color: brandBlue }}>
              Extended Solutions
            </span>
          </div>
          <h2 className="text-[32px] md:text-[52px] font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Strategic <span style={{ color: brandBlue }}>Wealth</span> Management.
          </h2>
        </div>

        {/* FULL WIDTH LIST */}
        <div className="flex flex-col border-t border-slate-100">
          {otherServices.map((service, index) => {
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                className="group relative border-b border-slate-100 py-8 md:py-12 cursor-pointer transition-all duration-500"
              >
                {/* Side Accent Line on Hover */}
                <div 
                  className="absolute left-0 top-0 h-full w-0 group-hover:w-1.5 transition-all duration-500"
                  style={{ backgroundColor: brandBlue }}
                ></div>

                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative z-10 px-4">
                  
                  {/* Icon - Always Blue */}
                  <div className="shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ color: brandBlue }}>
                    {service.icon}
                  </div>

                  {/* Title - Slides right on hover */}
                  <div className="flex-grow">
                    <h3 className="text-[24px] md:text-[32px] font-black tracking-tight uppercase italic text-slate-900 transition-all duration-500 group-hover:translate-x-3 group-hover:text-[#0091d1]">
                      {service.title}
                    </h3>
                    
                    {/* Description - Desktop: Always Visible | Mobile: Toggle */}
                    <p className={`mt-2 text-slate-500 text-[16px] md:text-[18px] font-medium transition-all duration-500 max-w-2xl 
                      ${isActive ? 'block opacity-100' : 'hidden md:block opacity-70 group-hover:opacity-100'}`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden md:flex w-12 h-12 rounded-full border border-slate-200 items-center justify-center text-slate-400 group-hover:border-[#0091d1] group-hover:text-[#0091d1] transition-all duration-500 group-hover:rotate-45">
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