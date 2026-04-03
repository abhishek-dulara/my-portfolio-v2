import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-[24px] py-[20px] flex justify-center">
      <div className="max-w-[1200px] w-full flex justify-between items-center px-[24px] py-[12px] rounded-full border border-slate-800/50 bg-[#020617]/80 backdrop-blur-md shadow-2xl">
        
        {/* DA Logo Button */}
        <a href="#hero" className="flex items-center justify-center w-[100px] h-[40px] rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white font-[900] text-[20px] tracking-tighter hover:scale-110 transition-transform active:scale-95 shadow-lg shadow-blue-500/20">
          DA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-[32px]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[20px] font-[700] uppercase tracking-[2px] text-slate-400 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Let's Talk Button */}
        <a href="#contact" className="px-[20px] py-[8px] rounded-full bg-blue-600 text-white text-[20px] font-[700] uppercase tracking-[2px] hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;