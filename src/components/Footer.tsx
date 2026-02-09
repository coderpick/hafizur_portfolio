import { Terminal, Heart, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-dark-light border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">Hafizur</span>
                <span className="text-primary font-bold text-lg">.</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Laravel Fullstack Developer with 8+ years of experience building modern web applications.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Laravel Development', 'React & Vue.js', 'API Development', 'Cloud Deployment', 'Code Review', 'Consulting'].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary/50 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-bold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'React', 'Next.js', 'Vue.js', 'Inertia.js', 'TypeScript', 'MySQL', 'Redis', 'Tailwind', 'Docker', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-dark rounded-lg text-slate-400 text-xs border border-slate-700/50 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Hafizur Rahman. Crafted with{' '}
            <Heart className="w-3.5 h-3.5 text-primary fill-primary" />{' '}
            using Laravel & React
          </p>
          <a
            href="#home"
            className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
