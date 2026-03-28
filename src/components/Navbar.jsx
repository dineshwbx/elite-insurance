import { ShieldCheck, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const brandBlue = "#0091d1";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section-ku scroll panna indha function
  const handleScrollTo = (sectionId) => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

const services = [
  { name: 'Insurance', section: 'insurance-section' },
  { name: 'Financial Support', section: 'otherservice-section' },
  { name: 'SIP & Mutual Funds', section: 'otherservice-section' },
  { name: 'Trade Shield', section: 'otherservice-section' }
];

  return (
    <header className="fixed top-0 w-full z-100 px-4 py-4 md:px-6 transition-all duration-700">
      <nav 
        className={`max-w-7xl mx-auto transition-all duration-700 border-none shadow-xl bg-white outline-none ${
          isScrolled ? 'py-3 px-6 scale-[0.98] rounded-4xl' : 'py-5 px-8 rounded-3xl'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})} 
            className="flex items-center gap-4 no-underline outline-none focus:ring-0"
          >
            <ShieldCheck style={{ color: brandBlue }} className="w-8 h-8" />
            <span className="text-xl font-black tracking-widest text-slate-900 uppercase">
              ELITE <span className="ml-2" style={{ color: brandBlue }}>INSURANCE</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex gap-10 text-[11px] font-extrabold uppercase tracking-[0.15em] text-black items-center">
            
            {/* SERVICES DROPDOWN */}
            <div 
              className="relative group cursor-pointer py-2 outline-none"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 group-hover:opacity-60 transition-all outline-none">
                SERVICES <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl p-4 border border-slate-100 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                {services.map((s) => (
                  <button 
                    key={s.name} 
                    onClick={() => handleScrollTo(s.section)}
                    className="w-full text-left block py-3 px-4 hover:bg-slate-50 rounded-xl no-underline text-slate-700 hover:text-[#0091d1] transition-colors lowercase first-letter:uppercase font-bold tracking-normal border-none outline-none focus:ring-0"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => handleScrollTo('about')} className="hover:opacity-60 transition-all uppercase tracking-[0.15em] border-none outline-none focus:ring-0">About Us</button>
            <button onClick={() => handleScrollTo('contact')} className="hover:opacity-60 transition-all uppercase tracking-[0.15em] border-none outline-none focus:ring-0">Contact</button>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            <Link 
              to="/enquiry" 
              style={{ backgroundColor: brandBlue }}
              className="hidden lg:flex items-center gap-2 px-7 py-3 rounded-xl font-black text-[11px] uppercase text-white no-underline shadow-lg outline-none hover:brightness-110 transition-all"
            >
              Enquire <ArrowRight size={14} />
            </Link>

            <button className="lg:hidden outline-none border-none focus:ring-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-white ${isMenuOpen ? 'max-h-150 mt-6 pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-6 pt-6 border-t border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Our Services</p>
            <div className="grid grid-cols-1 gap-4">
              {services.map(s => (
                <button 
                  key={s.name} 
                  onClick={() => handleScrollTo(s.section)} 
                  className="text-lg font-bold text-slate-800 text-left border-none outline-none focus:ring-0"
                >
                  {s.name}
                </button>
              ))}
            </div>
            <div className="h-px bg-slate-100 w-full my-2"></div>
            <button onClick={() => handleScrollTo('about')} className="text-xl font-black uppercase text-left border-none outline-none focus:ring-0">About Us</button>
            <button onClick={() => handleScrollTo('contact')} className="text-xl font-black uppercase text-left border-none outline-none focus:ring-0">Contact</button>
            <Link 
              to="/enquiry" 
              onClick={() => setIsMenuOpen(false)}
              style={{ backgroundColor: brandBlue }} 
              className="w-full text-white py-4 rounded-2xl font-black uppercase text-center no-underline outline-none"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;