import { Ruler, ClipboardCheck, Headset, FileEdit } from 'lucide-react';

const Process = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  const steps = [
    {
      id: "01",
      title: "Expert Assessment",
      desc: "Our experts craft a personalized insurance plan that fits your lifestyle perfectly.",
      icon: <Ruler size={32} />,
    },
    {
      id: "02",
      title: "Easy Enrollment",
      desc: "We guide you through the simple, hassle-free process of securing your coverage.",
      icon: <ClipboardCheck size={32} />,
    },
    {
      id: "03",
      title: "Ongoing Support",
      desc: "Enjoy peace of mind with our 24/7 support and assistance whenever you need it.",
      icon: <Headset size={32} />,
    },
    {
      id: "04",
      title: "Renwal & Claims",
      desc: "Quick, efficient claims handling and flexible policy adjustments to ensure safety.",
      icon: <FileEdit size={32} />,
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" style={arialFont}>
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandBlue }}></div>
            <span className="uppercase tracking-[0.3em] font-bold text-[12px]" style={{ color: brandBlue }}>
              How It Works
            </span>
          </div>
          <h2 className="text-[28px] md:text-[48px] font-black text-slate-900 tracking-tighter uppercase italic leading-tight">
            Our insurance process <span style={{ color: brandBlue }}>easy steps</span> to <br className="hidden md:block"/> get covered
          </h2>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              /* Desktop (lg): Zig-zag (Alternate margins)
                 Tablet (md): Clean 2x2 Grid (No margins)
                 Mobile: Single Column
              */
              className={`relative flex flex-col items-center lg:items-start ${
                index % 2 !== 0 ? 'lg:mt-20' : 'lg:mb-20'
              }`}
            >
              {/* Step Number Badge - Mobile-la card-ku mela center-la irukkum */}
              <div 
                style={{ backgroundColor: brandBlue }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 w-12 h-12 rounded-full text-white flex items-center justify-center font-black text-lg shadow-lg border-4 border-white z-20"
              >
                {step.id}
              </div>

              {/* Card Content */}
              <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/60 border border-slate-100 w-full hover:shadow-2xl transition-all duration-500 group relative z-10">
                
                {/* Icon */}
                <div className="mb-6 transition-transform group-hover:scale-110 duration-500" style={{ color: brandBlue }}>
                  {step.icon}
                </div>

                {/* Title & Desc */}
                <h3 className="text-[20px] font-black text-slate-900 mb-4 uppercase italic">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Connecting Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;