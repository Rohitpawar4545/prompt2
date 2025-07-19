import React, { useState } from 'react';
import { ExternalLink, Github, Code, Brain, Pocket as Docker, Terminal, MessageCircle, Mail, Smartphone, Twitter, Instagram, Linkedin, AlertTriangle, Settings, FileText } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'docker-menu',
      title: 'Docker Menu-Based App',
      description: 'CLI DevOps tool powered by Docker for container management and automation',
      longDescription: 'A comprehensive command-line interface tool that simplifies Docker operations. Features automated container deployment, monitoring, and management capabilities with an intuitive menu system.',
      technologies: ['Docker', 'Bash', 'Linux', 'CLI'],
      icons: [Docker, Terminal, Code],
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Rohitpawar4545',
      demo: '#'
    },
    {
      id: 'ai-docker',
      title: 'AI-Based Docker Project Using Gradio',
      description: 'AI model interface inside Docker container using Gradio for seamless deployment',
      longDescription: 'Advanced AI application containerized with Docker and deployed using Gradio. Provides a user-friendly web interface for AI model interaction with scalable deployment capabilities.',
      technologies: ['Python', 'Docker', 'Gradio', 'AI/ML'],
      icons: [Brain, Docker, Code],
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/Rohitpawar4545',
      demo: '#'
    },
    // Summer Internship Projects
    {
      id: 'readme-docs',
      title: 'Project Documentation',
      description: 'Part of my Summer Internship project - Comprehensive project documentation',
      longDescription: 'Detailed documentation and README files for the summer internship project, providing comprehensive overview, setup instructions, and usage guidelines for all automation tools.',
      technologies: ['Markdown', 'Documentation', 'README', 'Project Setup'],
      icons: [FileText, Code, Settings],
      color: 'from-gray-500 to-gray-700',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/README.md',
      demo: '#'
    },
    {
      id: 'emergency-alert',
      title: 'Emergency Alert System',
      description: 'Part of my Summer Internship project - Emergency notification system',
      longDescription: 'Advanced emergency alert system that provides real-time notifications and crisis management capabilities. Features automated alert distribution and response coordination.',
      technologies: ['Python', 'Alert System', 'Real-time', 'Notifications'],
      icons: [AlertTriangle, Code, MessageCircle],
      color: 'from-red-500 to-orange-500',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/emergency_alert.py',
      demo: '#'
    },
    {
      id: 'instagram-automation',
      title: 'Instagram Automation',
      description: 'Part of my Summer Internship project - Instagram automation tools',
      longDescription: 'Automated Instagram management system for content scheduling, engagement tracking, and social media optimization.',
      technologies: ['Python', 'Instagram API', 'Automation', 'Social Media'],
      icons: [Instagram, Code, Settings],
      color: 'from-pink-500 to-purple-500',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/insta.py',
      demo: '#'
    },
    {
      id: 'linkedin-automation',
      title: 'LinkedIn Automation',
      description: 'Part of my Summer Internship project - LinkedIn automation tools',
      longDescription: 'Professional networking automation system for LinkedIn profile management, connection building, and content distribution.',
      technologies: ['Python', 'LinkedIn API', 'Automation', 'Networking'],
      icons: [Linkedin, Code, Settings],
      color: 'from-blue-600 to-blue-800',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/linkdin.py',
      demo: '#'
    },
    {
      id: 'email-automation',
      title: 'Email Automation System',
      description: 'Part of my Summer Internship project - Email automation tools',
      longDescription: 'Automated email management system for bulk email sending, template management, and email campaign tracking.',
      technologies: ['Python', 'SMTP', 'Email', 'Automation'],
      icons: [Mail, Code, Settings],
      color: 'from-green-500 to-teal-500',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/mail.py',
      demo: '#'
    },
    {
      id: 'menu-base',
      title: 'Menu Base System',
      description: 'Part of my Summer Internship project - Core menu system',
      longDescription: 'Comprehensive menu-based application framework providing modular functionality and user-friendly interface management.',
      technologies: ['Python', 'CLI', 'Menu System', 'Framework'],
      icons: [Terminal, Code, Settings],
      color: 'from-gray-600 to-gray-800',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/menu_base.py',
      demo: '#'
    },
    {
      id: 'menu-python',
      title: 'Python Menu System',
      description: 'Part of my Summer Internship project - Python menu implementation',
      longDescription: 'Specialized Python menu system with enhanced functionality and improved user experience for command-line applications.',
      technologies: ['Python', 'CLI', 'Menu System', 'User Interface'],
      icons: [Terminal, Code, Settings],
      color: 'from-yellow-500 to-orange-500',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/menu_python.py',
      demo: '#'
    },
    {
      id: 'sms-automation',
      title: 'SMS Automation System',
      description: 'Part of my Summer Internship project - SMS automation tools',
      longDescription: 'Automated SMS messaging system for bulk text messaging, notification services, and communication management.',
      technologies: ['Python', 'SMS API', 'Automation', 'Communication'],
      icons: [Smartphone, Code, MessageCircle],
      color: 'from-indigo-500 to-purple-500',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/sms.py',
      demo: '#'
    },
    {
      id: 'twitter-automation',
      title: 'Twitter Automation',
      description: 'Part of my Summer Internship project - Twitter automation tools',
      longDescription: 'Automated Twitter management system for content posting, engagement tracking, and social media optimization.',
      technologies: ['Python', 'Twitter API', 'Automation', 'Social Media'],
      icons: [Twitter, Code, Settings],
      color: 'from-blue-400 to-blue-600',
      github: 'https://github.com/Rohitpawar4545/summer_internship/blob/main/twitter.py',
      demo: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-slideInLeft">
          What I've Built
        </h2>
        <p className="text-xl text-gray-300 animate-slideInRight">
          Projects that showcase my skills and passion
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="perspective-1000"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`project-card rounded-xl bg-gradient-to-r ${project.color} p-1 animate-slideInUp`}
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-full h-full rounded-xl bg-gray-900 glass-effect relative overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-white">{project.title}</h3>
                    <div className="flex space-x-1">
                      {project.icons.map((Icon, iconIndex) => (
                        <Icon key={iconIndex} className="w-4 h-4 text-gray-400 animate-pulse3d" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 bg-gray-800 text-cyan-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={project.demo}
                      className="flex items-center space-x-1 px-2 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-colors text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
                
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse3d">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm">Click to explore</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* GitHub Icon Below Card */}
            <div className="mt-2 flex justify-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="group p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-scale">
          <Github className="w-5 h-5 text-cyan-400" />
          <span className="text-gray-300">More projects on GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;