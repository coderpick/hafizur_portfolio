import { Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  company: string;
  period: string;
  description: string;
  tech?: string[];
  current?: boolean;
}

const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Senior Fullstack Developer',
    company: 'Tech Innovators Ltd.',
    period: '2022 - Present',
    description: 'Leading development of enterprise SaaS applications, mentoring junior developers, architecting scalable solutions, and managing deployment pipelines.',
    tech: ['Laravel', 'React', 'Inertia.js', 'AWS', 'Docker'],
    current: true,
  },
  {
    type: 'work',
    title: 'Laravel Fullstack Developer',
    company: 'Digital Solutions Inc.',
    period: '2019 - 2022',
    description: 'Built and maintained multiple client projects including e-commerce platforms, CRM systems, and custom business applications.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Tailwind'],
  },
  {
    type: 'work',
    title: 'Web Developer',
    company: 'Creative Agency',
    period: '2017 - 2019',
    description: 'Developed responsive websites and web applications. Migrated legacy codebases to modern Laravel architecture.',
    tech: ['Laravel', 'jQuery', 'Bootstrap', 'PHP', 'MySQL'],
  },
  {
    type: 'education',
    title: 'BSc in Computer Science',
    company: 'University of Technology',
    period: '2013 - 2017',
    description: 'Graduated with honors. Focused on software engineering, database systems, and web technologies. Active member of coding club.',
  },
];

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="relative py-24 bg-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">My Journey</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent-purple to-primary/20" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Center Dot */}
              <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  item.current
                    ? 'bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 animate-pulse-glow'
                    : item.type === 'work'
                      ? 'bg-dark-light border-2 border-primary'
                      : 'bg-dark-light border-2 border-accent-purple'
                }`}>
                  {item.type === 'work' 
                    ? <Briefcase className="w-4 h-4 text-white" />
                    : <GraduationCap className="w-4 h-4 text-white" />
                  }
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-20 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                <div className="card-hover glass rounded-2xl p-6 space-y-3 hover:border-primary/30">
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Current
                    </span>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-primary font-medium text-sm">{item.company}</p>
                    <p className="text-slate-500 text-xs mt-1">{item.period}</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  {item.tech && (
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      {item.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-dark/80 text-slate-400 text-xs rounded-md border border-slate-700/50">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
