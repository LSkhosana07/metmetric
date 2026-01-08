import React from 'react';
import Logo from "../../assets/Logo.svg";
// import Facebook from "../../assets/Facebook.svg";
import  LinkedIn  from "../../assets/LinkedIn.svg";
import WhatsApp from "../../assets/WhatsApp.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a1935] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar - Logo */}
        <div className="mb-8 pb-8 border-b border-white/20">
          <img 
            src={Logo} 
            alt="MetMetric Logo" 
            className="h-24 w-7xl"

          />
        </div>

        {/* Middle Bar - Contact and Links */}
        <div className="mb-8 pb-8 border-b border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
            {/* Left Column - Contact Us */}
            <div>
              <h3 className="text-blue-500 text-sm font-semibold mb-3">Contact Us</h3>
              <div className="space-y-1.5">
                <p className="text-white text-sm"> +27 11 662 1569</p>
                <p className="text-white text-sm">info@metmetric.co.za</p>
                <p className="text-white text-sm">plot 104, cnr r28 &, Hendrik Potgieter Rd,<br /> Muldersdrift, 1739</p>
              </div>
            </div>

            {/* Right Column - Additional Links */}
            <div>
              <h3 className="text-blue-500 text-sm font-semibold mb-3">Additional Links</h3>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-white/70 hover:text-blue-500 text-sm transition-colors">
                  About Us
                </a>
                <a href="#services" className="text-white/70 hover:text-blue-500 text-sm transition-colors">
                  Our Services
                </a>
                <a href="#projects" className="text-white/70 hover:text-blue-500 text-sm transition-colors">
                  Unique Projects
                </a>
                <a href="#careers" className="text-white/70 hover:text-blue-500 text-sm transition-colors">
                  Careers
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons - Below both columns */}
          <div className="flex gap-3">
         <a 
              href="#Facebook" 
              className="w-9 h-9 rounded flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              {/* <img className="w-8 h-8" src={Facebook} alt="Facebook" /> */}
            </a>
            <a 
              href="#linkedin" 
              className="w-9 h-9 rounded flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <img className="w-8 h-8" src={LinkedIn} alt="LinkedIn" />
            </a>
            <a 
              href="#whatsapp" 
              className="w-9 h-9 rounded flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <img className="w-8 h-8" src={WhatsApp} alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <p>©metmetric2024. All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="#terms" className="hover:text-blue-400 transition-colors">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;