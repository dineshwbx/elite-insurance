import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  return (
    <footer className="relative mt-32" style={arialFont}    >
      {/* Layered Wave Curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-[99%]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-15 md:h-30"
        >
          <path 
            d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,64L1200,53V120H0Z" 
            fill={brandBlue} 
            opacity="0.3"
          ></path>
          <path 
            d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64L1200,53V120H0Z" 
            fill={brandBlue}
          ></path>
        </svg>
      </div>

      {/* Main Footer Body */}
      <div style={{ backgroundColor: brandBlue }} className="text-white pt-16 pb-8">
        <div className="max-w-300 mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column - Fixed Overlap */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20 w-fit max-w-full">
                <ShieldCheck size={44} className="shrink-0 text-white" strokeWidth={2.5} />
                <span className="text-xl md:text-2xl font-black uppercase italic">
                  Elite <span className="text-slate-900">Insurance</span>
                </span>
              </div>
              <p className="text-white/80 leading-relaxed font-medium max-w-xs pt-2">
                We are committed to providing personalized insurance solutions that protect what matters most to you.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-black uppercase italic mb-8 tracking-widest text-slate-900">Quick Links</h4>
              <ul className="space-y-4 text-white font-medium">
                {['Home', 'About Us', 'Services', 'Contact Us'].map((link) => (
                  <li key={link} className="hover:text-slate-900 cursor-pointer transition-all duration-300 hover:translate-x-2 flex items-center gap-2 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span> {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-black uppercase italic mb-8 tracking-widest text-slate-900">Our Services</h4>
              <ul className="space-y-4 text-white font-medium">
                {['Health Insurance', 'Life Insurance', 'Motor Insurance', 'Financial Advicing'].map((service) => (
                  <li key={service} className="hover:text-slate-900 cursor-pointer transition-all duration-300 hover:translate-x-2 flex items-center gap-2 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span> {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-lg font-black uppercase italic mb-8 tracking-widest text-slate-900">Get In Touch</h4>
              <ul className="space-y-6 text-white font-medium">
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all shrink-0"><Phone size={18} /></div>
                  <span className="group-hover:text-slate-900 transition-colors">+91 8680908590</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all shrink-0"><Mail size={18} /></div>
                  <span className="group-hover:text-slate-900 transition-colors break-all">eliteinsurance@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg mt-1 group-hover:bg-white/20 transition-all shrink-0"><MapPin size={18} /></div>
                  <span className="group-hover:text-slate-900 transition-colors">Erode, Tamilnadu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Mobile Order Fixed */}
          <div className="pt-8 border-t border-white/20 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <p className="text-white/70 font-bold text-sm text-center md:text-left">
              Copyright © 2026 Elite Insurance. All Rights Reserved.
            </p>
            
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-[#0091d1] transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;