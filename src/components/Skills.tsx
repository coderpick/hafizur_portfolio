import { useState } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Backend
  { name: 'Laravel', level: 98, icon: '🔴', color: 'from-red-500 to-red-600', category: 'Backend' },
  { name: 'PHP', level: 95, icon: '🐘', color: 'from-indigo-500 to-indigo-600', category: 'Backend' },
  { name: 'MySQL', level: 92, icon: '🗄️', color: 'from-blue-500 to-blue-600', category: 'Backend' },
  { name: 'PostgreSQL', level: 85, icon: '🐘', color: 'from-sky-500 to-sky-600', category: 'Backend' },
  { name: 'Redis', level: 88, icon: '⚡', color: 'from-red-400 to-red-500', category: 'Backend' },
  { name: 'REST API', level: 96, icon: '🔗', color: 'from-green-500 to-green-600', category: 'Backend' },
  
  // Frontend
  { name: 'JavaScript', level: 93, icon: '💛', color: 'from-yellow-400 to-yellow-500', category: 'Frontend' },
  { name: 'React.js', level: 90, icon: '⚛️', color: 'from-cyan-400 to-cyan-500', category: 'Frontend' },
  { name: 'Next.js', level: 88, icon: '▲', color: 'from-gray-400 to-gray-600', category: 'Frontend' },
  { name: 'Vue.js', level: 92, icon: '💚', color: 'from-emerald-400 to-emerald-500', category: 'Frontend' },
  { name: 'Inertia.js', level: 94, icon: '🔮', color: 'from-purple-400 to-purple-500', category: 'Frontend' },
  { name: 'TypeScript', level: 87, icon: '💙', color: 'from-blue-400 to-blue-500', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, icon: '🎨', color: 'from-teal-400 to-teal-500', category: 'Frontend' },
  
  // Tools
  { name: 'Docker', level: 82, icon: '🐳', color: 'from-blue-400 to-blue-600', category: 'DevOps & Tools' },
  { name: 'Git', level: 94, icon: '📦', color: 'from-orange-400 to-orange-500', category: 'DevOps & Tools' },
  { name: 'AWS / VPS', level: 80, icon: '☁️', color: 'from-amber-400 to-amber-500', category: 'DevOps & Tools' },
  { name: 'CI/CD', level: 78, icon: '🔄', color: 'from-lime-400 to-lime-500', category: 'DevOps & Tools' },
  { name: 'Linux Server', level: 85, icon: '🐧', color: 'from-slate-400 to-slate-500', category: 'DevOps & Tools' },
];

const categories = ['All', 'Backend', 'Frontend', 'DevOps & Tools'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isInView } = useInView();

  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">My Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies I work with daily to build scalable, modern web applications
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                  : 'glass text-slate-400 hover:text-white hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, index) => (
            <div
              key={skill.name}
              className={`card-hover glass rounded-2xl p-5 group cursor-default ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm">{skill.name}</h3>
                    <p className="text-slate-500 text-xs">{skill.category}</p>
                  </div>
                </div>
                <span className="text-primary font-black text-lg">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full skill-bar transition-all duration-1000`}
                  style={{ width: isInView ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
