import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A full-stack application for managing student records and courses.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400',
      tech: ['Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application using weather API integration.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=400',
      tech: ['React', 'Node.js', 'OpenWeather API'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Task Manager',
      description: 'A responsive task management application with user authentication.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400',
      tech: ['JavaScript', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tech, 
  github, 
  demo 
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={github}
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 mr-1" />
          Code
        </a>
        <a
          href={demo}
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-5 h-5 mr-1" />
          Demo
        </a>
      </div>
    </div>
  </div>
);

export default Projects;