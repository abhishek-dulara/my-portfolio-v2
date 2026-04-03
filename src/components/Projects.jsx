import React from 'react';

const Projects = () => {
  // ව්‍යාපෘති පිළිබඳ දත්ත (Project Data)
  const projectList = [
    {
      id: 1,
      title: "E-Commerce Web App",
      description: "React සහ Firebase භාවිතා කර සාදන ලද අන්තර්ජාල වෙළඳසැලකි.",
      technologies: ["React", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "මගේ පෞද්ගලික තොරතුරු ඇතුළත් කර සාදන ලද වෙබ් අඩවිය.",
      technologies: ["React", "Framer Motion"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Management Tool",
      description: "දිනපතා වැඩ කටයුතු කළමනාකරණය කිරීමට සාදන ලද මෘදුකාංගයකි.",
      technologies: ["Node.js", "MongoDB", "React"],
      link: "#"
    }
  ];

  return (
    <section className="py-12 bg-gray-100" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          මගේ නිර්මාණ (My Projects)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md inline-block transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;