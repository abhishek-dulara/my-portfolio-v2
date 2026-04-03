import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-[80px] px-[24px] bg-[#020617] border-t border-slate-800/60 text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] mb-[60px]">

          {/* 1. Profile / About Section */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">D</div>
              <span className="text-[20px] font-[800]">Dulara Abhishek</span>
            </div>
            <p className="text-slate-400 text-[14px] leading-[1.8] max-w-[300px]">
              BICT Undergraduate at Rajarata University | Aspiring IoT & Robotic Engineer | Web Developer (React, Tailwind CSS) | Embedded Systems Enthusiast
            </p>
            {/* Social Icons */}
            <div className="flex gap-[16px]">
              
              <a href="https://github.com/abhishek-dulara" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><FaGithub /></a>
              <a href="https://linkedin.com/in/dulara-abhishek-405365137" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors"><FaLinkedinIn /></a>
             
            </div>
          </div>

          {/* 2. Quick Links Section */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-[18px] font-[700]">Navigation</h3>
            <ul className="flex flex-col gap-[12px] text-slate-400 text-[14px]">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Me</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
              <li><a href="#insights" className="hover:text-blue-500 transition-colors">Insights</a></li>
            </ul>
          </div>

          {/* 3. Contact Details Section */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-[18px] font-[700]">Contact</h3>
            <ul className="flex flex-col gap-[12px] text-slate-400 text-[14px]">
              <li className="flex flex-col">
                <span className="text-slate-500 text-[12px] uppercase">Address</span>
                Faculty of Technology, Rajarata University, Sri Lanka
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 text-[12px] uppercase">Email</span>
                dularaabhishek91@email.com
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 text-[12px] uppercase">Web</span>
                https://my-portfolio-v2-phi-pearl.vercel.app/
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bottom */}
        <div className="pt-[40px] border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-slate-500">© Copyright {year} powered by Dulara Abhishek</p>
          <a href="#hero" className="text-[12px] text-slate-400 hover:text-blue-500 uppercase tracking-widest transition-colors">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;