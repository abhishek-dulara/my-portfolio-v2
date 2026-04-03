import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-[60px] px-[24px] border-t border-slate-800/60 bg-[#020617]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-[24px]">
        
        <div className="flex flex-col items-center md:items-start gap-[8px]">
          <div className="text-[14px] font-[900] text-white tracking-widest uppercase">Dulara Abhishek</div>
          <p className="text-[11px] text-slate-500 uppercase tracking-[2px]">© {year} All Rights Reserved</p>
        </div>

        <div className="flex gap-[32px]">
          <a href="https://linkedin.com/in/dulara-abhishek-405365137" target="_blank" rel="noreferrer" className="text-[11px] font-[700] text-slate-400 hover:text-blue-500 uppercase tracking-[2px] transition-colors">LinkedIn</a>
          <a href="https://github.com/abhishek-dulara" target="_blank" rel="noreferrer" className="text-[11px] font-[700] text-slate-400 hover:text-blue-500 uppercase tracking-[2px] transition-colors">GitHub</a>
          <a href="#hero" className="text-[11px] font-[700] text-slate-400 hover:text-blue-500 uppercase tracking-[2px] transition-colors">Back to Top ↑</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;