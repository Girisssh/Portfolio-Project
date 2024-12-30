import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}

const SocialLinks = () => {
  const links: SocialLink[] = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:girish.kumar.yadav.cs@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Girisssh'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/girishkumarcs'
    }
  ];

  return (
    <div className="space-y-4">
      {links.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="flex items-center gap-3 p-4 rounded-lg border border-gray-800 hover:border-primary/50 bg-dark-light hover:bg-dark-light/80 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="w-5 h-5 text-primary" />
          <span className="font-medium text-white">{label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;