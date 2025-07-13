import React, { useState, useEffect } from 'react';
import { Mail, Download } from 'lucide-react';

const Header = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = "Hi, I'm Rohit Pawar — DevOps & Cloud Enthusiast | Future-ready Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center z-10 relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4">
      <div className="flex-1 order-2 lg:order-1">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 animate-glow bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent animate-slideInLeft">
            Rohit Pawar
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-cyan-300 font-light animate-slideInRight">
              {typingText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
        
        <div className="space-y-4 animate-slideInUp">
          <p className="text-lg md:text-xl text-gray-300">
            B.Sc (Hons) Computer Science | MGM University, Aurangabad, Maharashtra
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-scale">
              <Mail className="w-5 h-5 text-cyan-400 animate-pulse3d" />
              <span className="text-gray-300">rohitpawar92006@gmail.com</span>
            </div>
            
            <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-6 py-3 hover-scale neon-border">
              <Download className="w-5 h-5" />
              <span className="font-semibold">Download Resume</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Photo Section - Now responsive */}
      <div className="order-1 lg:order-2 mb-8 lg:mb-0 lg:ml-12 animate-slideInRight">
        <div className="relative group perspective-1000">
          {/* Profile Image Container */}
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 p-1 hover-scale shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-900 glass-effect flex items-center justify-center relative overflow-hidden">
              {/* Profile Photo */}
              <img 
                src="/WhatsApp Image 2025-03-02 at 16.44.43_2e32d5fc.jpg" 
                alt="Rohit Pawar - DevOps Engineer" 
                className="w-full h-full object-cover rounded-full transform transition-all duration-500 group-hover:scale-110 shadow-lg"
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                }}
              />
              
              {/* Enhanced Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full flex items-end justify-center pb-6">
                <div className="text-center">
                  <span className="text-white font-bold text-lg md:text-xl block">Rohit Pawar</span>
                  <span className="text-cyan-300 text-sm md:text-base">DevOps Engineer</span>
                </div>
              </div>
              
              {/* Professional badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-3 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                Available
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            </div>
          </div>
          
          {/* Floating elements for enhanced visual appeal */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;