import React, { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';
// 1. Warning එක අයින් කරන අලුත් import එක
import { createImageUrlBuilder } from '@sanity/image-url'; 

// 2. Client එක මුලින්ම define කරන්න ඕනේ
const client = createClient({
  projectId: 'u99bn3to', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

// 3. Builder එක define කරන්නේ Client එකට පස්සේ
const builder = createImageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Insights = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "post"] | order(publishedAt desc)';
    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section id="insights" className="min-h-screen py-[100px] px-[24px] bg-slate-950/40">
      <div className="max-w-[1200px] mx-auto w-full">
        <h2 className="text-[12px] font-[800] uppercase tracking-[4px] text-blue-500 mb-[16px]">Insights</h2>
        <h3 className="text-[32px] font-[700] text-white mb-[48px]">Recent LinkedIn Updates</h3>
        
        <div className="grid md:grid-cols-2 gap-[24px]">
          {posts.map((post) => (
            /* 4. Key එකට post._id දාලා අර රතු පාට error එක අයින් කළා */
            <div 
              key={post._id} 
              className="group p-[32px] rounded-[32px] border border-slate-800 bg-slate-900/20 backdrop-blur-sm 
                         hover:border-blue-500/50 hover:bg-slate-900/40 transition-all duration-300 cursor-pointer"
              onClick={() => post.linkedinUrl && window.open(post.linkedinUrl, '_blank')}
            >
              {post.mainImage && (
                <div className="mb-[24px] overflow-hidden rounded-[16px]">
                  <img 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <h4 className="text-[20px] font-[700] text-white mb-[16px] group-hover:text-blue-400 transition-colors">
                {post.title}
              </h4>
              
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-[24px]">
                Check out my latest LinkedIn update regarding {post.title}.
              </p>

              <a 
                href={post.linkedinUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block text-blue-500 font-[700] uppercase tracking-[2px] text-[12px] 
                           hover:text-blue-400 cursor-pointer transition-colors duration-300"
                onClick={(e) => e.stopPropagation()} 
              >
                Read Full Post →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;