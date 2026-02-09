import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'E-Commerce SaaS Platform',
    description: 'Multi-tenant e-commerce platform with real-time inventory, payment processing, analytics dashboard, and multi-vendor support built with Laravel & React.',
    image: '🛒',
    tech: ['Laravel', 'React', 'MySQL', 'Redis', 'Stripe', 'Tailwind'],
    category: 'Fullstack',
    featured: true,
  },
  {
    title: 'Project Management Tool',
    description: 'Agile project management tool with Kanban boards, sprint tracking, team collaboration, and automated reporting using Vue.js & Inertia.',
    image: '📊',
    tech: ['Laravel', 'Vue.js', 'Inertia.js', 'PostgreSQL', 'Pusher'],
    category: 'Fullstack',
    featured: true,
  },
  {
    title: 'Healthcare API System',
    description: 'HIPAA-compliant REST API for healthcare data management with appointment scheduling, patient records, and telemedicine integration.',
    image: '🏥',
    tech: ['Laravel', 'REST API', 'MySQL', 'Docker', 'AWS'],
    category: 'Backend',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search, map integration, virtual tours, mortgage calculator, and agent management system.',
    image: '🏠',
    tech: ['Next.js', 'Laravel API', 'PostgreSQL', 'MapBox', 'S3'],
    category: 'Fullstack',
    featured: true,
  },
  {
    title: 'Learning Management System',
    description: 'Online learning platform with course management, video streaming, quiz engine, certificates, and student progress tracking.',
    image: '📚',
    tech: ['Laravel', 'React', 'Inertia.js', 'FFmpeg', 'Redis'],
    category: 'Fullstack',
  },
  {
    title: 'Restaurant POS System',
    description: 'Point-of-sale system with order management, kitchen display, table management, inventory tracking, and daily reporting.',
    image: '🍽️',
    tech: ['Laravel', 'Vue.js', 'WebSocket', 'MySQL', 'Electron'],
    category: 'Fullstack',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Unified social media management tool with post scheduling, analytics aggregation, audience insights, and automated content suggestions.',
    image: '📱',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'Frontend',
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Custom payment processing microservice supporting multiple payment providers with fraud detection and transaction reconciliation.',
    image: '💳',
    tech: ['Laravel', 'REST API', 'Redis', 'Queue', 'Webhook'],
    category: 'Backend',
  },
];

const categories = ['All', 'Fullstack', 'Backend', 'Frontend'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { ref, isInView } = useInView();

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-dark-light overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">My Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building full-stack web applications
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.title}
              className={`card-hover group relative glass rounded-2xl overflow-hidden ${isInView ? 'animate-slide-up' : 'opacity-0'} ${
                project.featured ? 'ring-1 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full">
                  ⭐ Featured
                </div>
              )}

              {/* Project Image/Icon Area */}
              <div className="relative h-48 bg-gradient-to-br from-dark to-dark-lighter flex items-center justify-center overflow-hidden">
                <span className="text-7xl transition-transform duration-500 group-hover:scale-125">{project.image}</span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-light/80" />
                
                {/* Overlay buttons */}
                <div className={`absolute inset-0 bg-dark/60 flex items-center justify-center gap-3 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:scale-110 transition-transform backdrop-blur">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:scale-110 transition-transform backdrop-blur">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-dark/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                      {t}
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
}
