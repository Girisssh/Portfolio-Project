import React from 'react';
import { Code2, Cpu, Globe2 } from 'lucide-react';

const HighlightCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-dark-light p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors">
    <Icon className="w-8 h-8 text-primary mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1630710478039-9c680b99f800?fit=crop&w=800&q=80"
              alt="Workspace"
              className="rounded-2xl shadow-lg border border-gray-800"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-gray-400 mb-6">
              I'm a second-year B.Tech Computer Science student at IILM University, 
              passionate about exploring and creating innovative technology solutions. 
              My journey in tech is driven by curiosity and a desire to make a meaningful impact.
            </p>
            <p className="text-gray-400 mb-8">
              Currently focused on building my expertise in software development and 
              contributing to open-source projects, I'm particularly interested in IoT 
              and smart systems that can shape the future of technology.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <HighlightCard
            icon={Code2}
            title="Open Source"
            description="Active contributor to open-source projects, believing in collaborative development and knowledge sharing."
          />
          <HighlightCard
            icon={Cpu}
            title="IoT & Smart Systems"
            description="Passionate about creating intelligent solutions that bridge the physical and digital worlds."
          />
          <HighlightCard
            icon={Globe2}
            title="Innovation"
            description="Committed to developing creative solutions that address real-world challenges."
          />
        </div>
      </div>
    </section>
  );
};

export default About;