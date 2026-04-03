import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-[100px] px-[24px] bg-[#020617]">
      {/* --- START OF OUTLINE BOX --- */}
      <div className="max-w-[1200px] mx-auto w-full border border-blue-500/30 rounded-[32px] p-[40px] md:p-[60px]">
        
        <h2 className="text-[30px] font-[800] uppercase tracking-[4px] text-blue-500 mb-[16px]">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-[60px] items-center text-left">
          <div>
            <h3 className="text-[30px] font-[700] text-white mb-[24px]">IoT Engineer & Web Developer</h3>
            <p className="text-[25px] text-slate-400 leading-[1.8]">
              I am a 3rd-year IT student specializing in building smart systems. 
              My work focuses on connecting hardware with modern web applications to solve real-world problems.
            </p>
          </div>

          {/* Details Card inside the main outline */}
          <div className="p-[40px] rounded-[32px] border border-slate-800 bg-slate-900/30 backdrop-blur-md">
             <h4 className="text-[25px] font-[800] uppercase tracking-[2px] text-blue-400 mb-[24px]">Details</h4>
             <div className="space-y-[20px]">
                <div className="flex justify-between border-b border-slate-800 pb-[10px]">
                  <span className="text-[20px] text-slate-500">Expertise</span>
                  <span className="text-[20px] text-white">IoT, Robotics, Web Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[20px] text-slate-500">Tech Stack</span>
                  <span className="text-[20px] text-white">ESP32, React, Python</span>
                </div>
             </div>
          </div>
        </div>

      </div>
      {/* --- END OF OUTLINE BOX --- */}
    </section>
  );
};

export default About;