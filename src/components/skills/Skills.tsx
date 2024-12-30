import React from 'react';
import {
  Code2, Database, Palette, 
  FileCode, Github, 
  BrainCircuit, Globe, Layout
} from 'lucide-react';
import SkillGroup from './SkillGroup';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Java', level: 'intermediate', icon: FileCode },
        { name: 'Python', level: 'intermediate', icon: FileCode },
        { name: 'C', level: 'intermediate', icon: FileCode },
        { name: 'HTML/CSS', level: 'advanced', icon: Layout },
        { name: 'SQL', level: 'intermediate', icon: Database },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Github,
      skills: [
        { name: 'GitHub', level: 'intermediate', icon: Github },
        { name: 'Springboard', level: 'beginner', icon: BrainCircuit },
      ],
    },
    {
      title: 'Areas of Expertise',
      icon: Globe,
      skills: [
        { name: 'Web Development', level: 'intermediate', icon: Globe },
        { name: 'UI/UX Design', level: 'intermediate', icon: Palette },
        { name: 'DSA', level: 'intermediate', icon: BrainCircuit },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Skills & Expertise</h2>
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.title}
            title={group.title}
            icon={group.icon}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;