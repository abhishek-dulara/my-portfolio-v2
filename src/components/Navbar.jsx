import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Insights', href: '#insights' }, // Added between Skills and Certificates
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-[16px] py-[20px] flex justify-center">
      {/* Navbar Outline Container */}
      <div className="max-w-[1100px] w-full flex justify-between items-center px-[24px] py-[10px] rounded-full border border-blue-500/20 bg-[#020617]/70 backdrop-blur-lg shadow-2xl">
        <a href="#hero" className="flex items-center justify-center w-[80px] h-[45px] rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white font-[900] text-[20px]">
          DA
        </a>

        <div className="hidden md:flex gap-[25px] items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[20px] font-[700] uppercase tracking-[2px] text-slate-400 hover:text-blue-400 transition-all">
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="px-[18px] py-[8px] rounded-full bg-blue-600 text-white text-[15px] font-[800] uppercase tracking-[2px] hover:bg-blue-500 transition-all">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;