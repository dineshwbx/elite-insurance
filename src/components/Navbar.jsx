import { ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brandBlue = "#0091d1"; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false); // Menu open-ah irundha close pannidum
  };

  const navLinks = ['Services', 'About Us', 'Contact'];

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-4 md:px-6 transition-all duration-700 ease-in-out">
      <nav 
        className={`max-w-7xl mx-auto transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) border shadow-xl bg-white ${
          isScrolled 
            ? 'py-3 px-6 shadow-2xl scale-[0.98] rounded-[32px] border-slate-200' 
            : 'py-5 px-8 rounded-[24px] border-slate-100'
        } ${isMenuOpen ? 'rounded-[24px] scale-100 py-4 px-6' : ''}`}
      >
        <div className="flex justify-between items-center">
          
          {/* LOGO - Space increased & Scroll to Top added */}
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-4 cursor-pointer group perspective-1000"
          >
            <div className="transition-transform duration-700 preserve-3d group-hover:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)]">
              <ShieldCheck style={{ color: brandBlue }} className="w-8 h-8" />
            </div>
            {/* Added tracking-widest (0.1em) for breathing space between letters */}
            <span className="text-xl font-black tracking-[0.1em] flex text-slate-900 uppercase">
              ELITE <span className="ml-3" style={{ color: brandBlue }}>INSURANCE</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex gap-12 text-sm font-extrabold uppercase tracking-[0.15em] text-black">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="transition-all relative group hover:opacity-60"
              >
                <span>{item}</span>
                <span 
                  style={{ backgroundColor: brandBlue }} 
                  className="absolute -bottom-1.5 left-0 w-0 h-[2px] transition-all duration-500 ease-out group-hover:w-full"
                ></span>
              </a>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            <button 
              style={{ backgroundColor: brandBlue }}
              className={`hidden lg:flex items-center gap-2 px-7 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all duration-500 text-white shadow-lg hover:brightness-110 active:scale-95 ${
                isScrolled ? 'px-6 py-2.5 rounded-lg' : ''
              }`}
            >
              Enquire <ArrowRight size={14} className={isScrolled ? 'translate-x-1 transition-transform' : ''} />
            </button>

            {/* MOBILE & TAB TOGGLE */}
            <button 
              className="lg:hidden p-2 rounded-xl transition-all active:scale-90" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={30} className="text-black transition-transform rotate-90 duration-300" />
              ) : (
                <Menu size={30} className="text-black transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE & TAB DROPDOWN */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out bg-white rounded-2xl ${
            isMenuOpen ? 'max-h-[500px] opacity-100 mt-6 pb-6' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-8 pt-8 border-t border-slate-100 items-center">
            {navLinks.map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 75}ms` }}
                className={`text-2xl font-black uppercase tracking-[0.2em] text-black hover:text-[#0091d1] transition-all transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                {item}
              </a>
            ))}
            
            <button 
              style={{ backgroundColor: brandBlue }}
              className="w-full max-w-[280px] text-white py-4 rounded-2xl font-black uppercase text-xs flex justify-center items-center gap-3 shadow-xl active:scale-95 transition-all"
            >
              Enquire Now <ArrowRight size={20} className="animate-pulse" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;