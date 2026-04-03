import React from 'react';

const Skills = () => {
  const skills = [
    { label: "System", name: "Embedded Systems" },
    { label: "Network", name: "MQTT, WebSocket" },
    { label: "Practicals", name: "Prototyping & Testing" }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-[100px] px-[24px] bg-slate-950/20">
      <div className="max-w-[1200px] mx-auto w-full text-left">
        <h2 className="text-[30px] font-[800] uppercase tracking-[4px] text-blue-500 mb-[16px]">Skills & Tools</h2>

        <p className="text-[25px] text-slate-400 max-w-[600px] mb-[48px]">
          A snapshot of the tools and disciplines I use regularly across hardware, firmware, and cloud.
        </p>
        <div className="flex flex-wrap gap-[24px]">
          {skills.map((s, i) => (
            <div key={i} className="p-[32px] rounded-[24px] border border-slate-800 bg-slate-900/50 flex flex-col items-center min-w-[200px]">
              <div className="w-[100px] h-[60px] rounded-[20px] bg-blue-600 flex items-center justify-center text-[14px] font-[900] text-white mb-[16px] shadow-[0_0_20px_rgba(37,99,235,0.3)]">{s.label}</div>
              <span className="text-[14px] font-[700] text-white text-center">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;