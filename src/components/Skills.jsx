import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiJavascript } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "from-[#E34F26] to-[#F16529]", level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, color: "from-[#1572B6] to-[#2965F1]", level: 90 },
  { name: "JavaScript", icon: <FaJsSquare />, color: "from-[#F7DF1E] to-[#FFD700]", level: 92 },
  { name: "React.js", icon: <FaReact />, color: "from-[#61DAFB] to-[#0DCAF0]", level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, color: "from-[#339933] to-[#6CC24A]", level: 85 },
  { name: "Express.js", icon: <SiExpress />, color: "from-gray-500 to-gray-400", level: 88 },
  { name: "MongoDB", icon: <SiMongodb />, color: "from-[#4DB33D] to-[#70C24A]", level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-[#38BDF8] to-[#0EA5E9]", level: 92 },
  { name: "RESTful APIs", icon: <SiJavascript />, color: "from-purple-500 to-violet-500", level: 90 },
  { name: "JWT Auth", icon: <FaGitAlt />, color: "from-pink-500 to-rose-500", level: 85 },
  { name: "Postman", icon: <SiPostman />, color: "from-orange-500 to-amber-500", level: 88 },
  { name: "Git & GitHub", icon: <FaGitAlt />, color: "from-red-500 to-red-400", level: 90 },
];

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="py-8">
      <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            My Expertise
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of modern technologies I use to build scalable, 
            high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`group relative p-4 rounded-xl bg-slate-800/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 card-hover overflow-hidden ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{skill.level}%</span>
                </div>
                
                <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: mounted ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;