import React from 'react';
import { LucideIcon } from 'lucide-react';
import SkillCard from './SkillCard';

interface SkillGroupProps {
  title: string;
  icon: LucideIcon;
  skills: Array<{
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    icon: LucideIcon;
  }>;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;