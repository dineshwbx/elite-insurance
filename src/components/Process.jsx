import React from 'react';
import { Ruler, ClipboardCheck, Headset, FileEdit } from 'lucide-react';
import { motion } from "framer-motion";

const Process = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  const steps = [
    {
      id: "01",
      title: "Plan Selection",
      desc: "We compare plans from all top companies to find the most flexible and best fit for your budget.",
      icon: <Ruler size={22} />,
    },
    {
      id: "02",
      title: "Quick Setup",
      desc: "Zero tension. We handle all the paperwork and get your policy active in the shortest time possible.",
      icon: <ClipboardCheck size={22} />,
    },
     {
      id: "03",
      title: "Claims & Renewal",
      desc: "From smooth renewals to fast claim settlements, we stand by you to make sure you get paid on time.",
      icon: <FileEdit size={22} />,
    },
    {
      id: "04",
      title: "Active Support",
      desc: "Got a doubt? We are just a call away. We provide 24/7 help to manage your policy whenever you need it.",
      icon: <Headset size={22} />,
    }   
  ];

  return (
    <section className="py-20 md:py-28 bg-white" style={arialFont}>
      <div className="max-w-[850px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px]" style={{ backgroundColor: brandBlue }}></div>
            <span className="uppercase tracking-[0.3em] font-bold text-[11px] md:text-[13px]" style={{ color: brandBlue }}>
              How it works
            </span>
          </div>
          <h2 className="text-[34px] md:text-[54px] font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9] mb-4">
            Easy Steps to <span style={{ color: brandBlue }}>Stay Safe.</span>
          </h2>
          <p className="text-slate-500 text-[16px] md:text-[18px] font-medium max-w-lg">
            We handle everything from choosing the right plan to settling your claims.
          </p>
        </div>

        {/* Connected Flow Container */}
        <div className="relative">
          {/* Main Vertical Connector Line */}
          <div 
            className="absolute left-[23px] top-6 bottom-6 w-[2px] opacity-15" 
            style={{ backgroundColor: brandBlue }}
          ></div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex gap-8 pb-14 last:pb-0"
              >
                {/* Visual Connector Node */}
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border-2 transition-all duration-500 group-hover:rotate-12 group-hover:shadow-xl shadow-sm"
                    style={{ borderColor: brandBlue, color: brandBlue }}
                  >
                    {step.icon}
                  </div>
                  
                  {/* Animated Active Line Segment (Hover Effect) */}
                  <div 
                    className="absolute left-[23px] top-12 w-[2px] h-0 group-hover:h-full transition-all duration-500 z-0 opacity-100"
                    style={{ backgroundColor: brandBlue }}
                  ></div>
                </div>

                {/* Content Section */}
                <div className="pt-1 flex-grow border-b border-slate-100 pb-10 group-last:border-none">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span 
                      className="text-[13px] font-black tracking-widest opacity-40 uppercase" 
                      style={{ color: brandBlue }}
                    >
                      Step {step.id}
                    </span>
                    <h3 className="text-[22px] md:text-[28px] font-black text-slate-900 uppercase italic transition-colors group-hover:text-[#0091d1]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-[15px] md:text-[17px] leading-relaxed max-w-2xl font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;