import { Calendar, Award, Coffee, Zap, Heart, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-24 bg-dark-light overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get To Know Me</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Info Card */}
          <div className={`relative ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Background decorative card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-3xl blur-xl" />
              
              <div className="relative glass rounded-3xl p-8 space-y-6">
                {/* Profile image placeholder */}
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl shadow-2xl shadow-primary/20">
                  👨‍💻
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-white">Hafizur Rahman</h3>
                  <p className="text-primary font-medium">Senior Laravel Fullstack Developer</p>
                  <p className="text-slate-400 text-sm">Based in Bangladesh 🇧🇩</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Calendar, label: 'Experience', value: '8+ Years', color: 'text-primary' },
                    { icon: Award, label: 'Projects', value: '150+ Done', color: 'text-accent' },
                    { icon: Coffee, label: 'Cups of Coffee', value: '∞', color: 'text-yellow-400' },
                    { icon: Heart, label: 'Happy Clients', value: '100+', color: 'text-pink-400' },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="bg-dark/50 rounded-xl p-4 text-center hover:bg-dark transition-colors duration-300">
                      <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
                      <p className="text-white font-bold text-sm">{value}</p>
                      <p className="text-slate-500 text-xs mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Passionate About Building Great Software
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm a dedicated fullstack developer with <span className="text-primary font-semibold">8+ years</span> of 
                hands-on experience in building robust, scalable, and user-friendly web applications. 
                My core expertise lies in the <span className="text-primary font-semibold">Laravel ecosystem</span>, 
                complemented by modern JavaScript frameworks.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in building complete web solutions from database architecture to pixel-perfect 
                frontends. Whether it's a complex SaaS platform, e-commerce system, or a RESTful API — 
                I bring the same level of dedication and craftsmanship to every project.
              </p>
            </div>

            {/* What I do highlights */}
            <div className="space-y-3">
              {[
                { icon: Globe, text: 'Building scalable SaaS applications with Laravel & modern JS frameworks' },
                { icon: Zap, text: 'Designing clean RESTful APIs and microservice architectures' },
                { icon: Heart, text: 'Creating beautiful UIs with React, Vue.js, and Tailwind CSS' },
                { icon: Award, text: 'Implementing CI/CD pipelines and deployment strategies' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 group">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 mt-4"
            >
              Let's Work Together
              <span className="text-lg">🚀</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
