import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hi, I'm Girish Kumar Yadav
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Aspiring Software Engineer | Tech Enthusiast | Open Source Contributor
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1630710478039-9c680b99f800?fit=crop&w=800&q=80"
                  alt="Madara Uchiha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;