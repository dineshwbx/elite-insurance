import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { motion } from "framer-motion";

const Enquiry = () => {
  const brandBlue = "#0091d1";
  const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  };

  // Common Class for Input Boxes - added better border and shadows
  const inputStyle = "w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#0091d1]/10 focus:border-[#0091d1] transition-all font-medium text-slate-900 placeholder:text-slate-400 shadow-sm";

  return (
    <section className="pt-44 pb-20 bg-slate-50" style={arialFont}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-48">
            <h2 className="text-[28px] md:text-[54px] font-black text-slate-900 tracking-tighter uppercase italic leading-tight mb-4">
              Enquire <span style={{ color: brandBlue }}>With Us.</span>
            </h2>
            <p className="text-slate-500 text-[18px] font-medium mb-6">
              Get full support for your financial and insurance needs.
            </p>
            <div className="w-20 h-1 rounded-full" style={{ backgroundColor: brandBlue }}></div>
          </div>

          {/* RIGHT SIDE: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2 bg-white p-8 md:p-10 rounded-[32px] shadow-2xl shadow-slate-300/40 border border-slate-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div className="relative group">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#0091d1] transition-colors z-10" />
                <input 
                  type="text" name="name" required placeholder="Full Name"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#0091d1] transition-colors z-10" />
                  <input 
                    type="email" name="email" required placeholder="Email Address"
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative group">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#0091d1] transition-colors z-10" />
                  <input 
                    type="tel" name="phone" required placeholder="Phone Number"
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <MessageSquare size={18} className="absolute left-4 top-6 text-slate-500 group-focus-within:text-[#0091d1] transition-colors z-10" />
                <textarea 
                  name="message" rows="4" placeholder="How can we help you?"
                  className={`${inputStyle} resize-none`}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 rounded-2xl text-white font-black uppercase italic tracking-widest flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: brandBlue }}
              >
                Submit <Send size={20} />
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;