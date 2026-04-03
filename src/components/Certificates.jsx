import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="min-h-screen flex items-center py-[100px] px-[24px]">
      <div className="max-w-[1200px] mx-auto w-full">
        <h2 className="text-[30px] font-[800] uppercase tracking-[4px] text-blue-500 mb-[48px]">Qualifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {["Legacy JavaScript Algorithms and Data Structures", "Responsive Web Design"].map((c, i) => (
            <div key={i} className="p-[24px] rounded-[24px] bg-slate-900 border border-slate-800 flex justify-between items-center group hover:bg-slate-800 transition-colors">
              <span className="text-[25px] font-[600] text-white">{c}</span>
              <div className="p-[8px] bg-blue-600 rounded-full text-white">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;