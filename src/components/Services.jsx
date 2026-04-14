import { useEffect, useState } from "react";
import { FiCode, FiDatabase, FiLayers, FiShield, FiLayout, FiSettings } from "react-icons/fi";

const services = [
  { 
    title: 'Web Design', 
    description: 'Professional and modern web design services with clean, user-friendly interfaces.',
    icon: <FiLayout />,
    color: 'from-purple-500 to-indigo-600',
    features: ['UI/UX Design', 'Responsive Layout', 'Modern Aesthetics']
  },
  { 
    title: 'Full Stack Development', 
    description: 'Robust full-stack applications using MERN stack with scalable architecture.',
    icon: <FiCode />,
    color: 'from-green-500 to-teal-500',
    features: ['React Frontend', 'Node.js Backend', 'RESTful APIs']
  },
  { 
    title: 'MongoDB Development', 
    description: 'Efficient databases for scalable apps with optimized queries and schemas.',
    icon: <FiDatabase />,
    color: 'from-yellow-400 to-orange-500',
    features: ['Schema Design', 'Data Optimization', 'Atlas Integration']
  },
  { 
    title: 'Express.js API Development', 
    description: 'Flexible APIs built with Express.js for robust server-side solutions.',
    icon: <FiSettings />,
    color: 'from-pink-500 to-red-500',
    features: ['REST APIs', 'Middleware', 'Error Handling']
  },
  { 
    title: 'React.js Frontend', 
    description: 'Dynamic, fast, responsive frontends using modern React patterns.',
    icon: <FiLayers />,
    color: 'from-blue-500 to-cyan-500',
    features: ['Component-Based', 'State Management', 'Hooks & Context']
  },
  { 
    title: 'Secure Authentication', 
    description: 'JWT & OAuth based secure authentication for protected routes.',
    icon: <FiShield />,
    color: 'from-violet-500 to-purple-600',
    features: ['JWT Tokens', 'Password Hashing', 'Role Management']
  },
];

const Services = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          el.classList.add('animate-fadeInUp');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            What I Offer
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Services</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to bring your vision to life 
            with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`fade-up group relative p-8 rounded-3xl bg-slate-800/50 border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;