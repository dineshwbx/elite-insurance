import { Layers, RefreshCcw, LifeBuoy, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FeatureCard = () => {
  const brandBlue = "#0091d1"; 
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    {
      title: "All Top Brands",
      highlight: "Insure from the best",
      desc: "We are tied up with all major insurance companies. Pick the best one for you.",
      icon: <Layers size={40} strokeWidth={1.5} />,
    },
    {
      title: "Instant Renewal",
      highlight: "Quick & Easy",
      desc: "Want to change your insurer or renew? We handle the paperwork with zero gaps.",
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
    },
    {
      title: "Claim Support",
      highlight: "Expert Help",
      desc: "Don't worry about claims. We talk to the company and get your money faster.",
      icon: <LifeBuoy size={40} strokeWidth={1.5} />,
    },
  ];

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" style={arialFont}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED HEADER */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandBlue }}></div>
            <span className="uppercase tracking-[0.3em] font-bold text-[12px]" style={{ color: brandBlue }}>
              Why Choose Us
            </span>
          </div>
          <h2 className="text-[36px] md:text-[56px] font-black text-slate-900 leading-[1.1] tracking-tighter uppercase italic">
            Elite Access. <span style={{ color: brandBlue }}>Total Support.</span>
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((item, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div key={idx} className="group flex flex-col items-center text-center transition-all duration-500">
                
                {/* Icon Circle */}
                <div className={`mb-8 p-6 rounded-full transition-all duration-500 ${isOpen ? 'bg-[#0091d1] text-white shadow-xl scale-110' : 'bg-white text-[#0091d1] shadow-md group-hover:bg-[#0091d1]/10'}`}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="mb-4">
                  <span className="block text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: brandBlue }}>
                    {item.highlight}
                  </span>
                  <h3 className="text-[26px] md:text-[30px] font-black text-slate-900 leading-none uppercase italic tracking-tighter">
                    {item.title}
                  </h3>
                </div>

                {/* TOGGLE CONTENT */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-500 text-[17px] leading-relaxed font-medium max-w-70">
                    {item.desc}
                  </p>
                </div>

                {/* BLUE INK BUTTON */}
                <button 
                  onClick={() => toggleDescription(idx)}
                  className={`mt-4 px-8 py-3 rounded-full font-black uppercase text-[13px] tracking-widest flex items-center gap-2 transition-all duration-300 border-2 
                    ${isOpen 
                      ? 'bg-[#0091d1] text-white border-[#0091d1] shadow-lg shadow-[#0091d1]/30' 
                      : 'bg-transparent text-[#0091d1] border-[#0091d1] hover:bg-[#0091d1] hover:text-white'}`}
                >
                  <span>{isOpen ? "Close" : "View Details"}</span>
                  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} strokeWidth={3} />
                  </div>
                </button>
                
                {/* Decoration Line */}
                <div className={`h-1 mt-8 bg-slate-200 transition-all duration-500 rounded-full ${isOpen ? 'w-32 bg-[#0091d1]' : 'w-8 group-hover:w-16'}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;