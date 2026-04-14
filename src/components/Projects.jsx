import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";

const Projects = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: 'My Portfolio',
      description: 'A modern, responsive portfolio built using React and Tailwind CSS with smooth animations and a professional design.',
      languages: ['React', 'Tailwind CSS', 'Vercel'],
      link: 'https://porto-mu-peach.vercel.app/',
      image: 'blue.png',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Help Human Rights Organization',
      description: 'NGO platform with user-friendly features, donation system, and event management for humanitarian work.',
      languages: ['React', 'Tailwind CSS', 'Vercel'],
      link: 'https://project-wine-omega-21.vercel.app/',
      image: 'help.jpg',
      color: 'from-green-400 to-blue-500',
    },
    {
      title: 'NexousTech',
      description: 'Responsive corporate website built with modern HTML, CSS & JavaScript showcasing tech services.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://software-kappa-two.vercel.app/',
      image: 'nex.PNG',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            My Work
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in building modern, 
            responsive, and high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`fade-up group relative rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                    aria-label={`View ${project.title} live`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  View Project
                  <FiExternalLink className="transition-transform" />
                </a>
              </div>

              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-br-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FiGithub />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;