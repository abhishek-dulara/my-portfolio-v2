import React from 'react';

const Certificates = () => {
  const certs = ["Legacy JavaScript Algorithms and Data Structures", "Responsive Web Design"];

  return (
    <section id="certificates" className="min-h-screen flex items-center py-[100px] px-[24px]">
      {/* --- START OF OUTLINE BOX --- */}
      <div className="max-w-[1200px] mx-auto w-full border border-blue-500/20 rounded-[32px] p-[40px] md:p-[60px]">
        
        <h2 className="text-[30px] font-[800] uppercase tracking-[4px] text-blue-500 mb-[48px]">Qualifications</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {certs.map((c, i) => (
            <div key={i} className="p-[24px] rounded-[24px] bg-slate-900 border border-slate-800 flex justify-between items-center group hover:bg-slate-800 transition-colors">
              <span className="text-[25px] font-[600] text-white">{c}</span>
              <div className="p-[8px] bg-blue-600 rounded-full text-white">→</div>
            </div>
          ))}
        </div>

      </div>
      {/* --- END OF OUTLINE BOX --- */}
    </section>
  );
};

export default Certificates;