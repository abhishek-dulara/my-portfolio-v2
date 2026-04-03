import React from 'react';

const Contact = () => {
  const contactLinks = [
    { name: "GITHUB", url: "https://github.com/abhishek-dulara", label: "View Detail" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/dulara-abhishek-405365137/", label: "View Detail" },
    { name: "WHATSAPP", url: "https://wa.me/94768861019", label: "View Detail" },
    { name: "EMAIL", url: "mailto:dularaabhishek91@gmail.com", label: "View Detail" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-[100px] px-[24px]">
      {/* --- START OF OUTLINE BOX --- */}
      <div className="max-w-[1200px] mx-auto w-full border border-blue-500/30 rounded-[32px] p-[40px] md:p-[60px]">
        
        <div className="grid md:grid-cols-2 gap-[80px]">
          <div>
            <h2 className="text-[30px] font-[800] uppercase tracking-[4px] text-blue-500 mb-[16px]">Contact</h2>
            <p className="text-[25px] text-slate-400 leading-[1.8]">
              Reach out using any of the channels below. I'm happy to talk about opportunities where
              thoughtful IoT design can make a real impact.
            </p>
          </div>

          <div className="space-y-[12px]">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[16px] rounded-[16px] border border-slate-800 bg-slate-900/50 flex justify-between items-center hover:border-blue-500 hover:bg-slate-800 transition-all group"
              >
                <span className="text-[25px] font-[800] text-slate-500 group-hover:text-white transition-colors">
                  {link.name}
                </span>
                <span className="text-[15px] text-white font-[600] flex items-center gap-2">
                  → {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
      {/* --- END OF OUTLINE BOX --- */}
    </section>
  );
};

export default Contact;