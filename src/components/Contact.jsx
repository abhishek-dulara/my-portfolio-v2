import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-[100px] px-[24px]">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-[80px]">
          <div>
            <h2 className="text-[12px] font-[800] uppercase tracking-[4px] text-blue-500 mb-[16px]">Contact</h2>
            <p className="text-[16px] text-slate-400 leading-[1.8]">
              Reach out using any of the channels below. I'm happy to talk about opportunities where 
              thoughtful IoT design can make a real impact.
            </p>
          </div>
          <div className="space-y-[12px]">
            {["GITHUB", "LINKEDIN", "WHATSAPP", "EMAIL"].map(link => (
              <div key={link} className="p-[16px] rounded-[16px] border border-slate-800 bg-slate-900/50 flex justify-between items-center hover:border-blue-500 transition-colors">
                <span className="text-[11px] font-[800] text-slate-500">{link}</span>
                <span className="text-[13px] text-white font-[600]">→ View Detail</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;