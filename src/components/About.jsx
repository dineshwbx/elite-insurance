import { ShieldCheck, MessageCircle, Clock4, Activity, Circle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import aboutImg from '../assets/about-img.png'; 

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const brandBlue = "#0091d1";

  const points = [
    { icon: <ShieldCheck size={20} />, text: 'Customer-Centric Approach' },
    { icon: <MessageCircle size={20} />, text: 'Transparent Communication' },
    { icon: <Clock4 size={20} />, text: '365 / 24x7 Quick Supports' },
    { icon: <Activity size={20} />, text: 'Critical Illness Insurance' },
  ];

  return (
    <section ref={ref} className="bg-slate-50 py-20 md:py-32 overflow-hidden" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE: Image (Always first on mobile) */}
        <div className={`relative transition-all duration-1000 ease-out flex justify-center ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 lg:-translate-x-20'}`}>
          
          <div style={{ backgroundColor: `${brandBlue}20` }} className="absolute -top-5 -left-5 w-24 h-24 rounded-full blur-3xl"></div>
          
          {/* IMAGE Container - Adjusted size for better mobile fit */}
          <div 
            style={{ boxShadow: `0 25px 50px -12px ${brandBlue}30` }}
            className="relative z-10 border-[8px] md:border-[12px] border-white rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto max-w-md"
          >
             <img 
              src={aboutImg} 
              alt="Elite Insurance Family" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge (Hidden on very small screens to avoid overlap, visible from SM up) */}
          <div className="hidden sm:flex absolute top-8 -right-4 z-20 bg-white p-3 md:p-4 rounded-xl shadow-xl items-center gap-3 border border-gray-100">
            <div style={{ backgroundColor: brandBlue }} className="p-2 rounded-lg text-white">
              <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-bold text-gray-400 leading-none">Processing</span>
              <span className="text-xs md:text-sm font-bold text-gray-900 tracking-tight">Fast Claims</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content (Centered on mobile, left-aligned on LG) */}
        <div className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 delay-300 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:translate-y-20'}`}>
          
          <div className="flex items-center gap-2 mb-4">
            <Circle style={{ color: brandBlue, fill: brandBlue }} size={8} />
            <span style={{ color: brandBlue }} className="font-bold text-xs uppercase tracking-widest">About Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            All types of <span style={{ color: brandBlue }}>insurance solutions</span> for every need
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-xl text-base md:text-lg">
            We offer a range of plans tailored to meet your unique needs. Let us help you find the right protection for your future.
          </p>

          {/* Points Grid - Centered items for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 w-full max-w-lg lg:max-w-none">
            {points.map((item, index) => (
              <div key={index} className="flex items-center justify-center lg:justify-start gap-3 text-gray-900 group">
                <div 
                    style={{ backgroundColor: `${brandBlue}15`, color: brandBlue }} 
                    className="p-2 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300 shrink-0"
                >
                  {item.icon}
                </div>
                <span className="font-bold text-sm tracking-tight">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Action Section */}
          <div className="flex flex-col items-center lg:items-start gap-8 border-t border-gray-100 pt-10 w-full">
            <button 
                style={{ backgroundColor: brandBlue, boxShadow: `0 10px 20px -5px ${brandBlue}40` }} 
                className="hover:bg-black hover:text-white text-white px-10 py-4 rounded-md font-bold transition-all uppercase text-xs tracking-widest active:scale-95 w-full sm:w-auto"
            >
              More About Us
            </button>

            {/* Stats Card */}
            <div className="bg-gray-50 p-6 rounded-2xl flex gap-4 sm:gap-8 items-center border border-gray-100 w-full max-w-md justify-around shadow-inner">
              <div className="text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900">100%</h4>
                <p style={{ color: brandBlue }} className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-1">Success Rate</p>
              </div>
              <div style={{ backgroundColor: `${brandBlue}30` }} className="w-[1.5px] h-10 md:h-12"></div>
              <div className="text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900">3256+</h4>
                <p style={{ color: brandBlue }} className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;