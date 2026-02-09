import { ArrowDown, Github, Linkedin, Twitter, Mail, MapPin, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'Laravel Fullstack Developer',
  'React & Next.js Expert',
  'Vue.js & Inertia Specialist',
  'API Architecture Designer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium">
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              Available for freelance work
            </div>

            <div className="space-y-4">
              <h2 className="text-slate-400 text-lg sm:text-xl font-medium flex items-center gap-2">
                <span className="text-2xl">👋</span> Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                Hafizur
                <br />
                <span className="text-gradient">Rahman</span>
              </h1>
              <div className="flex items-center gap-2 h-10">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-xl sm:text-2xl text-slate-300 font-medium">
                  {displayed}
                  <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
              With <span className="text-primary font-bold">8+ years</span> of experience building 
              scalable web applications, crafting elegant APIs, and delivering exceptional 
              digital experiences using modern technologies.
            </p>

            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bangladesh</span>
              </div>
              <div className="w-1 h-1 bg-slate-600 rounded-full" />
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary" />
                <span>hafizur.dev@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-slate-600 text-white font-bold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-slate-500">Follow me</span>
              <div className="w-12 h-px bg-slate-700" />
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Avatar / Code Block */}
          <div className="relative flex justify-center animate-slide-in-right">
            {/* Orbiting tech icons */}
            <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border border-slate-800/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-dark-light border border-slate-700 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚛️</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 rounded-xl bg-dark-light border border-slate-700 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🟢</span>
                </div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 rounded-xl bg-dark-light border border-slate-700 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🔺</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 animate-pulse" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 rounded-xl bg-dark-light border border-slate-700 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-black text-blue-400">TS</span>
                </div>
              </div>
            </div>

            {/* Center Profile Card */}
            <div className="relative w-72 sm:w-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-purple rounded-3xl blur-2xl opacity-20 animate-pulse-glow" />
              <div className="relative glass rounded-3xl p-6 space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 pb-3 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-500 ml-2 font-mono">~/hafizur/portfolio</span>
                </div>
                
                {/* Code Content */}
                <div className="font-mono text-sm space-y-2">
                  <p className="text-slate-500">{'// developer.config.ts'}</p>
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">dev</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-amber-300">"Hafizur"</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">exp</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-primary">8</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">stack</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-amber-300">"Laravel"</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">passion</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-amber-300">"∞"</span>
                  </p>
                  <p><span className="text-yellow-400">{'}'}</span></p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-700/50">
                  <div className="text-center">
                    <p className="text-2xl font-black text-primary">8+</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-accent">150+</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-accent-green">100+</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-primary" />
        </div>
      </div>
    </section>
  );
}
