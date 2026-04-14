import { useEffect, useState } from "react";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setSuccess(false);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users`,
        formData
      );
      setResponseMsg(res.data.message);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMsg(error.response?.data?.message || "Something went wrong");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <FiPhone />, label: "Phone", value: "(+92) 315-393-3660", color: "from-green-500 to-emerald-500" },
    { icon: <FiMail />, label: "Email", value: "asif.ali.deve@gmail.com", color: "from-blue-500 to-cyan-500" },
    { icon: <FiMapPin />, label: "Location", value: "Karachi, Pakistan", color: "from-purple-500 to-pink-500" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com", color: "hover:bg-gray-800" },
    { icon: <FiLinkedin />, href: "https://linkedin.com", color: "hover:bg-blue-600" },
    { icon: <FiTwitter />, href: "https://twitter.com", color: "hover:bg-sky-500" },
  ];

  return (
    <section id="contact" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            Get In Touch
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, projects, or just to say hello.
            I'm always excited to connect with new people!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="p-8 rounded-3xl bg-slate-800/50 border border-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="p-8 rounded-3xl bg-slate-800/50 border border-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-sky-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : success ? (
                    <>
                      <FiCheckCircle />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>

                {responseMsg && (
                  <p className={`text-center text-sm ${success ? 'text-green-400' : 'text-red-400'}`}>
                    {responseMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;