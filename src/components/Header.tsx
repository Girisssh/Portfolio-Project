import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-dark/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Girish Kumar Yadav</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a>
            <a href="#certificates" className="text-gray-300 hover:text-primary transition-colors">Certificates</a>
            <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Girisssh" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/girishkumarcs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:girish.kumar.yadav.cs@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dark-light border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-primary">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-primary">About</a>
            <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-primary">Skills</a>
            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-primary">Projects</a>
            <a href="#certificates" className="block px-3 py-2 text-gray-300 hover:text-primary">Certificates</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-primary">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;