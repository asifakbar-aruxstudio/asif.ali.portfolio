import { useEffect, useState } from "react";
import { FiDownload, FiMessageCircle, FiAward, FiCode, FiTarget } from "react-icons/fi";

const About = () => {
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

  const stats = [
    { icon: <FiAward />, value: "15+", label: "Projects Completed", color: "from-amber-500 to-orange-500" },
    { icon: <FiCode />, value: "1+", label: "Years Experience", color: "from-purple-500 to-sky-500" },
    { icon: <FiTarget />, value: "100%", label: "Success Rate", color: "from-green-500 to-teal-500" },
    { icon: <FiAward />, value: "MERN", label: "Tech Stack", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-mesh"></div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-sky-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-800/50 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img src="./blue.png" alt="Asif Akbar" className="w-full h-full object-cover" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-slate-800 border border-gray-700 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <span className="text-3xl">🚀</span>
                  <p className="text-xs text-gray-400 mt-1">Ready to<br/>Serve</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-r from-purple-500 to-sky-500 flex items-center justify-center shadow-xl animate-float">
                <span className="text-3xl text-white">💻</span>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              <FiAward className="text-purple-400" />
              About Me
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Building Modern Web
              <span className="block gradient-text">Applications</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                I'm <span className="text-purple-400 font-semibold">Asif Akbar</span>, 
                a dedicated <span className="text-white font-medium">MERN Stack Developer</span> focused on building 
                scalable, high-performance web applications with clean architecture and modern UI.
              </p>
              <p>
                I've successfully delivered projects for NGOs, portfolios, and full-stack applications, 
                ensuring responsive user experiences and maintainable codebases. I value clarity, 
                performance, and long-term scalability in every solution I build.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="fade-up group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Asif Akbar.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <FiDownload />
                Download CV
              </a>

              <a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FiMessageCircle />
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;