import { Car, HeartPulse, ShieldCheck, Briefcase, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Services = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  const services = [
    { title: "Motor Insurance", desc: "Drive with peace of mind knowing your vehicle is fully covered.", icon: <Car size={32} /> },
    { title: "Health Insurance", desc: "Comprehensive coverage for your medical expenses and family wellness.", icon: <HeartPulse size={32} /> },
    { title: "Life Insurance", desc: "Secure your family's financial future with our flexible life plans.", icon: <ShieldCheck size={32} /> },
    { title: "Business Insurance", desc: "Protect your enterprise and employees with custom risk solutions.", icon: <Briefcase size={32} /> },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    // Only apply Scroll Logic for Mobile & Tablet (Width < 1024px)
    const isMobileOrTab = window.innerWidth < 1024;
    
    if (isMobileOrTab) {
      const observerOptions = {
        threshold: 0.6,
        rootMargin: "0px 0px -10% 0px"
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
          } else {
            entry.target.classList.remove('is-active');
          }
        });
      }, observerOptions);

      cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden" style={arialFont}>
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandBlue }}></div>
            <span className="uppercase tracking-[0.3em] font-bold text-[12px]" style={{ color: brandBlue }}>
              Our Excellence
            </span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Unmatched <span style={{ color: brandBlue }}>Protection</span> Strategies.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="service-card group relative bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 lg:hover:-translate-y-2 overflow-hidden flex flex-col h-full cursor-pointer"
            >
              {/* --- OVAL HOVER FILL --- */}
              <div 
                className="hover-bg absolute inset-0 w-full h-full translate-y-full transition-transform duration-500 ease-out z-0"
                style={{ 
                  backgroundColor: brandBlue,
                  borderRadius: '100% 100% 0 0',
                  transform: 'scaleY(2) translateY(100%)' 
                }}
              ></div>
              
              <div className="hover-overlay absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 z-0" style={{ backgroundColor: brandBlue }}></div>

              {/* Icon Circle */}
              <div className="icon-box w-[64px] h-[64px] rounded-full flex items-center justify-center mb-8 shadow-lg z-10 transition-all duration-500 bg-[#0091d1] text-white">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="title-text text-[22px] font-black mb-4 tracking-tight uppercase italic z-10 transition-colors duration-500 text-slate-900">
                {service.title}
              </h3>
              <p className="desc-text text-slate-500 text-[15px] leading-relaxed mb-8 flex-grow font-medium z-10 transition-colors duration-500">
                {service.desc}
              </p>

              {/* Footer Link */}
              <div className="footer-border pt-6 border-t border-slate-100 flex items-center justify-between z-10 transition-colors duration-500">
                <span className="footer-text text-[14px] font-black uppercase tracking-widest text-slate-900">
                  Learn More
                </span>
                <div className="arrow-box w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 bg-[#0091d1] text-white">
                  <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* COMMON ACTIVE/HOVER STATE LOGIC */
        .service-card.is-active .hover-bg, 
        .lg-hover-state .hover-bg { transform: scaleY(1) translateY(0) !important; border-radius: 0; }
        
        .service-card.is-active .hover-overlay, 
        .lg-hover-state .hover-overlay { opacity: 1; }
        
        .service-card.is-active .icon-box, 
        .lg-hover-state .icon-box { background: white !important; color: ${brandBlue} !important; }
        
        .service-card.is-active .title-text, .service-card.is-active .desc-text, .service-card.is-active .footer-text,
        .lg-hover-state .title-text, .lg-hover-state .desc-text, .lg-hover-state .footer-text { color: white !important; }
        
        .service-card.is-active .footer-border, 
        .lg-hover-state .footer-border { border-color: rgba(255,255,255,0.2) !important; }
        
        .service-card.is-active .arrow-box, 
        .lg-hover-state .arrow-box { background: white !important; color: ${brandBlue} !important; }

        /* DESKTOP SPECIFIC HOVER */
        @media (min-width: 1024px) {
          .service-card:hover .hover-bg { transform: scaleY(1) translateY(0) !important; border-radius: 0; }
          .service-card:hover .hover-overlay { opacity: 1; }
          .service-card:hover .icon-box { background: white !important; color: ${brandBlue} !important; }
          .service-card:hover .title-text, .service-card:hover .desc-text, .service-card:hover .footer-text { color: white !important; }
          .service-card:hover .footer-border { border-color: rgba(255,255,255,0.2) !important; }
          .service-card:hover .arrow-box { background: white !important; color: ${brandBlue} !important; transform: rotate(45deg); }
        }
      `}} />
    </section>
  );
};

export default Services;