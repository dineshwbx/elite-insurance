import {
  Presentation,
  TrendingUp,
  BarChart4,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const OtherServices = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

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
    <section 
      id="otherservice-section" 
      className="py-12 md:py-24 bg-slate-50 overflow-hidden" 
      style={arialFont}
    >
      <div className="max-w-275 mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandBlue }}></div>
            <span className="uppercase tracking-[0.2em] font-bold text-[10px] md:text-[12px]" style={{ color: brandBlue }}>
              Extended Solutions
            </span>
          </div>
          <h2 className="text-[24px] md:text-[52px] font-black text-slate-900 tracking-tighter uppercase italic leading-tight">
            Strategic <span style={{ color: brandBlue }}>Wealth</span> Management.
          </h2>
        </motion.div>

        {/* LIST CONTAINER */}
        <div className="flex flex-col border-t border-slate-200">
          {otherServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                x: typeof window !== 'undefined' && window.innerWidth > 768 ? 12 : 0, 
                backgroundColor: "rgba(255,255,255,0.7)" 
              }}
              whileTap={{ 
                scale: 0.98, 
                backgroundColor: "rgba(255,255,255,1)" 
              }}
              className="group relative border-b border-slate-200 py-7 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 transition-all duration-300 cursor-pointer px-4 md:px-0 outline-none"
            >
              {/* Left Accent Line */}
              <div 
                className="absolute left-0 top-0 h-full w-0 group-hover:w-1.5 group-active:w-2 transition-all duration-300"
                style={{ backgroundColor: brandBlue }}
              ></div>

              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="shrink-0 transition-transform duration-500 group-hover:scale-110 ml-5" style={{ color: brandBlue }}>
                  {service.icon}
                </div>
                <div className="md:hidden opacity-40 group-hover:opacity-100 transition-all" style={{ color: brandBlue }}>
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </div>
              </div>

              <div className="grow">
                <h3 className="text-[19px] md:text-[32px] font-black tracking-tight uppercase italic text-slate-900 group-hover:text-[#0091d1] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-1 md:mt-2 text-slate-500 text-[14px] md:text-[18px] font-medium max-w-2xl leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="hidden md:flex w-12 h-12 rounded-full border border-slate-200 items-center justify-center transition-all duration-500 group-hover:border-[#0091d1] group-hover:text-[#0091d1] group-hover:rotate-45">
                <ArrowUpRight size={24} strokeWidth={2.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;