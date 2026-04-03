import React from 'react';
import myPhoto from '../assets/myphoto.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-[80px] px-[24px]">
      <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-[48px] items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-[56px] md:text-[80px] font-[900] text-white leading-[1.1] mb-[16px]">
            Dulara <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Abhishek</span>
          </h1>
          <p className="text-[30px] font-[500] text-blue-400 uppercase tracking-[4px] mb-[24px]">
            IoT Engineer | Full Stack Developer
          </p>
          <p className="text-[25px] text-slate-400 leading-[1.6] max-w-[500px] mb-[40px] mx-auto md:mx-0">
            I am an enthusiastic Information Technology 
            undergraduate at Rajarata University of Sri Lanka. 
            I focus on building smart, automated solutions 
            that bridge the gap between hardware and software.

          </p>
          <div className="flex flex-wrap gap-[16px] justify-center md:justify-start">
            <a href="#projects" className="px-[32px] py-[14px] rounded-full bg-blue-600 text-white font-[700] text-[20px] uppercase tracking-[2px] hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1">
              View Projects
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center gap-[24px]">
          <div className="relative group">
            <div className="absolute -inset-[4px] bg-gradient-to-r from-blue-600 to-sky-400 rounded-[32px] blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-[32px] overflow-hidden border border-slate-800 bg-slate-900">
              <img src={myPhoto} alt="Dulara" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          <a href="/Dulara_Abhishek_CV.pdf" download className="group flex items-center gap-[12px] px-[24px] py-[12px] rounded-[16px] bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500 hover:text-white transition-all shadow-xl">
            <span className="text-[18px] font-[700] uppercase tracking-[2px]">Download CV</span>
            <div className="p-[8px] rounded-[8px] bg-blue-600 text-white group-hover:rotate-12 transition-transform">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;