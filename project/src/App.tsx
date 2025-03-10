import React, { useEffect, useState } from 'react';
import { Cuboid as Cube, Mail, Github, Linkedin, Instagram, Camera, Monitor, Palette } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const nameInLanguages = [
    { text: "Arman Shaikh", language: "English" },
    { text: "अरमान शेख", language: "Hindi" },
    { text: "अरमान शेख", language: "Marathi" },
    { text: "আরমান শেখ", language: "Bengali" },
    { text: "અરમાન શેખ", language: "Gujarati" },
    { text: "ارمان شیخ", language: "Urdu" },
    { text: "アルマン・シェイク", language: "Japanese" },
    { text: "아르만 셰이크", language: "Korean" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => 
        prevIndex === nameInLanguages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change language every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Neo Tokyo 2050",
      description: "Futuristic cityscape with dynamic lighting and atmospheric effects",
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&q=80&w=1200",
      category: "Environment Design",
      stats: { vertices: "2.5M", renderTime: "4h" }
    },
    {
      title: "Project Atlas",
      description: "Next-gen character design with advanced material systems",
      image: "https://images.unsplash.com/photo-1599689018034-48e2ead82951?auto=format&fit=crop&q=80&w=1200",
      category: "Character Design",
      stats: { vertices: "1.8M", renderTime: "6h" }
    },
    {
      title: "Ancient Wonders",
      description: "Photorealistic architectural visualization with volumetric lighting",
      image: "https://images.unsplash.com/photo-1609102026400-3c0ca378e4c5?auto=format&fit=crop&q=80&w=1200",
      category: "Architecture",
      stats: { vertices: "3.2M", renderTime: "8h" }
    }
  ];

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "3D Modeling",
      description: "High-poly and low-poly modeling for games and film",
      videoUrl: "https://www.youtube.com/watch?v=QQvvx32Xbns"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Texturing",
      description: "PBR materials and custom texture creation",
      videoUrl: "https://www.youtube.com/watch?v=6-0nMk9sYBI"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Visualization",
      description: "Photorealistic rendering and art direction",
      videoUrl: "https://www.youtube.com/watch?v=kKljXVVkgS4"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=2000"
            alt="3D Art Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
        </div>
        
        <div className={`relative z-10 text-center px-4 transform ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Cube className="w-20 h-20 mx-auto mb-8 text-blue-400 animate-float" />
          <div className="h-24 mb-4"> {/* Fixed height container to prevent layout shift */}
            <h1 
              className="text-7xl font-bold text-gradient animate-text-slide-up"
              key={currentLanguageIndex} // Force re-render animation
            >
              {nameInLanguages[currentLanguageIndex].text}
            </h1>
            <p className="text-sm text-blue-400 mt-2 animate-fade-in">
              {nameInLanguages[currentLanguageIndex].language}
            </p>
          </div>
          <p className="text-2xl text-gray-300 mb-12 opacity-0 animate-fade-in-up stagger-delay-1">
            3D Artist & Visual Designer
          </p>
          <a 
            href="#work" 
            className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-up stagger-delay-2 inline-block"
          >
            Explore My Work
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <a 
                href={service.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <p className="text-blue-400 mt-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to watch demo →
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl transform rotate-6 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="rounded-2xl shadow-2xl relative z-10 transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient">Pushing Boundaries in 3D Art</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With over 8 years of experience in 3D art and visual design, I specialize in creating immersive environments
              and compelling characters for games and film. My work combines technical expertise with artistic vision
              to bring unique worlds to life.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I've collaborated with leading studios worldwide and have contributed to award-winning projects
              in both the gaming and film industries.
            </p>
            <div className="flex gap-4">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 flex-1">
                <h4 className="font-bold text-blue-400">100+</h4>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 flex-1">
                <h4 className="font-bold text-blue-400">15+</h4>
                <p className="text-sm text-gray-400">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 text-sm">{project.category}</span>
                    <div className="text-xs text-gray-400">
                      <span className="mr-4">Vertices: {project.stats.vertices}</span>
                      <span>Render: {project.stats.renderTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-gray-800/50 backdrop-blur-lg py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Create Together</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate on your next project
            and create something extraordinary.
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <a 
              href="mailto:contact@example.com" 
              className="bg-gray-700/50 p-4 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="bg-gray-700/50 p-4 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="bg-gray-700/50 p-4 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="bg-gray-700/50 p-4 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Arman Shaikh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;