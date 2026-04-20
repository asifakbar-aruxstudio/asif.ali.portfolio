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
  }, []);

  return (
    <div className="py-8">
      <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            What I Offer
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
