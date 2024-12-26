import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Arjun A
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          BTEC Computer Science Student
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Passionate about software development and technology. Currently studying BTEC Computer Science
          and building projects that make a difference.
        </p>
        <div className="flex justify-center space-x-4">
          <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="mailto:john@example.com" icon={<Mail />} label="Email" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;