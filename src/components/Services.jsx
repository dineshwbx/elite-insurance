import { Car, HeartPulse, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Services = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };
  
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    { 
      title: "Motor Insurance", 
      desc: "Specialized risk management for high-value vehicles, ensuring comprehensive asset protection beyond standard policies.", 
      icon: <Car size={32} /> 
    },
    { 
      title: "Life Insurance", 
      desc: "Architecting financial legacies through precision-engineered life insurance strategies for long-term family stability.", 
      icon: <ShieldCheck size={32} /> 
    },
    { 
      title: "Healt Insurance", 
      desc: "Expert-led health coverage frameworks designed to provide elite access to global healthcare standards.", 
      icon: <HeartPulse size={32} /> 
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const width = window.innerWidth;
    const isMobile = width < 768;

    if (isMobile) {
      const observerOptions = { threshold: 0.7 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
          } else {
            entry.target.classList.remove('is-active');
          }
        });
      }, observerOptions);

      cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
      return () => observer.disconnect();
    }
  }, []);

  const handleCardClick = (index) => {
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    if (isTablet) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden" style={arialFont}>
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Updated Specialist Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandBlue }}></div>
            <span className="uppercase tracking-[0.3em] font-bold text-[12px]" style={{ color: brandBlue }}>
              Domain Expertise
            </span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Specialized in <span style={{ color: brandBlue }}>Signature</span> Protection.
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-xl mx-auto uppercase text-sm tracking-wide">
            We don't just offer insurance; we provide domain-specific mastery in these key sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => handleCardClick(index)}
              className={`service-card group relative bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 lg:hover:-translate-y-2 overflow-hidden flex flex-col h-full cursor-pointer 
                ${activeCard === index ? 'is-active' : ''}`}
            >
              <div 
                className="hover-bg absolute inset-0 w-full h-full translate-y-full transition-transform duration-500 ease-out z-0"
                style={{ 
                  backgroundColor: brandBlue,
                  borderRadius: '100% 100% 0 0',
                  transform: 'scaleY(2) translateY(100%)' 
                }}
              ></div>
              <div className="hover-overlay absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 z-0" style={{ backgroundColor: brandBlue }}></div>

              <div className="icon-box w-[64px] h-[64px] rounded-full flex items-center justify-center mb-8 shadow-lg z-10 transition-all duration-500 bg-[#0091d1] text-white">
                {service.icon}
              </div>

              <h3 className="title-text text-[22px] font-black mb-4 tracking-tight uppercase italic z-10 transition-colors duration-500 text-slate-900">
                {service.title}
              </h3>
              <p className="desc-text text-slate-500 text-[15px] leading-relaxed mb-8 flex-grow font-medium z-10 transition-colors duration-500">
                {service.desc}
              </p>

              <div className="footer-border pt-6 border-t border-slate-100 flex items-center justify-between z-10 transition-colors duration-500">
                <span className="footer-text text-[14px] font-black tracking-widest text-slate-900">
                  Learn more
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
        .service-card.is-active .hover-bg { transform: scaleY(1) translateY(0) !important; border-radius: 0; }
        .service-card.is-active .hover-overlay { opacity: 1; }
        .service-card.is-active .icon-box { background: white !important; color: ${brandBlue} !important; }
        .service-card.is-active .title-text, .service-card.is-active .desc-text, .service-card.is-active .footer-text { color: white !important; }
        .service-card.is-active .footer-border { border-color: rgba(255,255,255,0.2) !important; }
        .service-card.is-active .arrow-box { background: white !important; color: ${brandBlue} !important; }

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