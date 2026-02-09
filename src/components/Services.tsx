import { Server, Layout, Database, Cloud, ShieldCheck, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Server,
    title: 'Laravel Development',
    description: 'Custom web applications built with Laravel, featuring clean architecture, robust APIs, and scalable backend systems.',
    features: ['Custom CMS', 'SaaS Platforms', 'Multi-tenant Apps', 'Queue Systems'],
    color: 'from-red-500 to-orange-500',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Beautiful, responsive interfaces using React, Vue.js, Next.js with pixel-perfect designs and smooth interactions.',
    features: ['React & Next.js', 'Vue.js & Nuxt', 'Inertia.js SPAs', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Database,
    title: 'API Development',
    description: 'RESTful API design and development with proper authentication, rate limiting, versioning, and comprehensive documentation.',
    features: ['REST APIs', 'GraphQL', 'API Auth', 'Documentation'],
    color: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Application deployment, server management, CI/CD pipelines, and cloud infrastructure setup on AWS and VPS.',
    features: ['AWS Setup', 'Docker', 'CI/CD Pipelines', 'Server Config'],
    color: 'from-purple-500 to-violet-500',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: ShieldCheck,
    title: 'Code Audit & Optimization',
    description: 'Performance optimization, security audits, code reviews, and refactoring of existing Laravel applications.',
    features: ['Performance Tuning', 'Security Audit', 'Code Review', 'Refactoring'],
    color: 'from-yellow-500 to-amber-500',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Rocket,
    title: 'Technical Consulting',
    description: 'Architecture planning, technology selection, team mentoring, and project management for web development projects.',
    features: ['Architecture', 'Tech Stack', 'Team Training', 'Project Planning'],
    color: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="relative py-24 bg-dark-light overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">What I Offer</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Comprehensive web development services tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-hover group glass rounded-2xl p-7 space-y-5 relative overflow-hidden ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
