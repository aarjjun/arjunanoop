import React from 'react';
import { Code, Database, Globe, Terminal } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            icon={<Code />}
            title="Programming Languages"
            skills={['Python', 'JavaScript', 'Java', 'HTML/CSS']}
          />
          <SkillCard
            icon={<Globe />}
            title="Web Development"
            skills={['React.js', 'Node.js', 'Tailwind CSS', 'REST APIs']}
          />
          <SkillCard
            icon={<Database />}
            title="Databases"
            skills={['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite']}
          />
          <SkillCard
            icon={<Terminal />}
            title="Tools & Others"
            skills={['Git', 'VS Code', 'Linux', 'Agile']}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  icon, 
  title, 
  skills 
}: { 
  icon: React.ReactNode; 
  title: string; 
  skills: string[] 
}) => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="text-indigo-600 w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;