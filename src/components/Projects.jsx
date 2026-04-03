import React, { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const client = createClient({
  projectId: 'u99bn3to',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

const builder = createImageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "project"]';
    client.fetch(query).then((data) => setProjects(data));
  }, []);

  const universityProjects = projects.filter(p => p.category === 'university');
  const additionalProjects = projects.filter(p => p.category === 'additional');

  const ProjectCard = ({ project }) => (
    <div key={project._id} className="bg-slate-900 border border-slate-800 rounded-[24px] overflow-hidden hover:border-blue-500 transition-all">
      {project.image && (
        <img src={urlFor(project.image).url()} alt={project.title} className="w-full h-[200px] object-cover" />
      )}
      <div className="p-[24px]">
        <h3 className="text-white text-[20px] font-[700] mb-[12px]">{project.title}</h3>
        <p className="text-slate-400 text-[14px] mb-[16px]">{project.description}</p>
        <div className="flex flex-wrap gap-[8px] mb-[20px]">
          {project.tags?.map((tag, index) => (
            <span key={index} className="text-[12px] text-blue-400 bg-blue-500/10 px-[10px] py-[4px] rounded-full">{tag}</span>
          ))}
        </div>
        <a href={project.projectUrl} target="_blank" className="inline-block bg-blue-600 text-white px-[20px] py-[10px] rounded-lg text-[14px] font-[600]">View Project</a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-[100px] px-[24px] bg-slate-950">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-white text-[28px] font-[700] mb-[32px] border-l-4 border-blue-500 pl-4 text-left">University Projects</h2>
        <div className="grid md:grid-cols-3 gap-[24px] mb-[64px]">
          {universityProjects.map(project => <ProjectCard key={project._id} project={project} />)}
        </div>

        <h2 className="text-white text-[28px] font-[700] mb-[32px] border-l-4 border-sky-400 pl-4 text-left">Additional Projects</h2>
        <div className="grid md:grid-cols-3 gap-[24px]">
          {additionalProjects.map(project => <ProjectCard key={project._id} project={project} />)}
        </div>
      </div>
    </section>
  );
};

// අන්න අර වැදගත්ම පේළිය මෙතනට දාන්න!
export default Projects;