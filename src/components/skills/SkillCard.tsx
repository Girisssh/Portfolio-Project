import React from 'react';
import { LucideIcon } from 'lucide-react';

type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: ProficiencyLevel;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, level }) => {
  const proficiencyWidth = {
    beginner: 'w-1/3',
    intermediate: 'w-2/3',
    advanced: 'w-full',
  }[level];

  return (
    <div className="bg-dark-light p-4 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-5 h-5 text-primary" />
        <span className="font-medium text-white">{name}</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full">
        <div className={`h-full ${proficiencyWidth} bg-primary rounded-full`} />
      </div>
      <span className="text-sm text-gray-400 mt-2 capitalize block">{level}</span>
    </div>
  );
}

export default SkillCard;