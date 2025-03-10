import React from 'react';
import { Play, Cuboid as Cube, Palette, ChevronRight, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img 
            src="https://i.ibb.co/mXxHYQk/onecapture-logo.png"
            alt="OneCapture Logo"
            className="h-12"
          />
          <div className="flex gap-8">
            <a href="#services" className="text-[#283890] hover:text-[#1c2866] font-medium">Services</a>
            <a href="#portfolio" className="text-[#283890] hover:text-[#1c2866] font-medium">Portfolio</a>
            <a href="#contact" className="text-[#283890] hover:text-[#1c2866] font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#283890]/5 to-white/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <img 
            src="https://i.ibb.co/mXxHYQk/onecapture-logo.png"
            alt="OneCapture Logo"
            className="h-32 md:h-40 mx-auto mb-12 drop-shadow-xl"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#283890] leading-tight">
            Transform Your Vision<br />Into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto">
            Where Creativity Meets Technical Excellence in Video, 3D, and Design
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-[#283890] hover:bg-[#1c2866] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all flex items-center mx-auto group"
          >
            Get Started <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20 text-[#283890]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9ff] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all group cursor-pointer border border-[#283890]/10 hover:border-[#283890]/30">
              <div className="bg-[#283890] text-white p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#283890]">Video Editing</h3>
              <p className="text-gray-600">
                Professional video editing services that bring your stories to life with cutting-edge techniques and creative excellence.
              </p>
            </div>
            <div className="bg-[#f8f9ff] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all group cursor-pointer border border-[#283890]/10 hover:border-[#283890]/30">
              <div className="bg-[#283890] text-white p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Cube className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#283890]">3D Works</h3>
              <p className="text-gray-600">
                Stunning 3D modeling, animation, and visualization that transform your ideas into immersive experiences.
              </p>
            </div>
            <div className="bg-[#f8f9ff] p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all group cursor-pointer border border-[#283890]/10 hover:border-[#283890]/30">
              <div className="bg-[#283890] text-white p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#283890]">Graphic Design</h3>
              <p className="text-gray-600">
                Eye-catching graphic design solutions that communicate your brand's message effectively and memorably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-24 bg-[#f8f9ff]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20 text-[#283890]">Featured Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1561883088-039e53143d73?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80"
            ].map((url, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg">
                <img 
                  src={url}
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#283890] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Project Name</h3>
                    <span className="text-white/80">View Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#283890]">Let's Create Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch with us today and let's create something extraordinary.
          </p>
          <button 
            onClick={() => window.location.href = 'mailto:contact@onecapture.com'} 
            className="bg-[#283890] hover:bg-[#1c2866] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all mb-16"
          >
            Contact Us
          </button>
          <div className="flex justify-center gap-8">
            <a href="#" className="bg-[#f8f9ff] p-4 rounded-full text-[#283890] hover:text-white hover:bg-[#283890] transition-all">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="bg-[#f8f9ff] p-4 rounded-full text-[#283890] hover:text-white hover:bg-[#283890] transition-all">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="bg-[#f8f9ff] p-4 rounded-full text-[#283890] hover:text-white hover:bg-[#283890] transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="bg-[#f8f9ff] p-4 rounded-full text-[#283890] hover:text-white hover:bg-[#283890] transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;