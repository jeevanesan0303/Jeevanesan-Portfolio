import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Globe, Server, Wrench,
  Layers, Database, Terminal,
  GitBranch, Box, Code,
  Wind, Flame, Cpu,
  Cloud, Shield, Figma,
} from 'lucide-react';

type Category = 'All' | 'Frontend' | 'Backend' | 'Tools';

const skills: {
  name: string;
  icon: React.ReactNode;
  category: Exclude<Category, 'All'>;
  level: number;
  color: string;
}[] = [
    // Frontend
    { name: 'React', icon: <Layers size={22} />, category: 'Frontend', level: 95, color: '#00D1A0' },
    { name: 'HTML/CSS', icon: <Code size={22} />, category: 'Frontend', level: 90, color: '#00D1A0' },
    { name: 'Next.js', icon: <Globe size={22} />, category: 'Frontend', level: 88, color: '#00D1A0' },
    // { name: 'Tailwind CSS', icon: <Wind size={22} />, category: 'Frontend', level: 92, color: '#00D1A0' },
    // { name: 'Three.js', icon: <Box size={22} />, category: 'Frontend', level: 72, color: '#00D1A0' },
    // Backend
    { name: 'Node.js', icon: <Server size={22} />, category: 'Backend', level: 87, color: '#FFD166' },
    { name: 'Python', icon: <Terminal size={22} />, category: 'Backend', level: 82, color: '#FFD166' },
    { name: 'PostgreSQL', icon: <Database size={22} />, category: 'Backend', level: 80, color: '#FFD166' },
    { name: 'Java', icon: <Cpu size={22} />, category: 'Backend', level: 75, color: '#FFD166' },
    { name: 'Firebase', icon: <Flame size={22} />, category: 'Backend', level: 78, color: '#FFD166' },
    { name: 'C# (ASP.NET MVC)', icon: <Flame size={22} />, category: 'Backend', level: 78, color: '#FFD166' },
    // Tools
    { name: 'Git / GitHub', icon: <GitBranch size={22} />, category: 'Tools', level: 93, color: '#FF6B6B' },
    { name: 'Flutter', icon: <Cloud size={22} />, category: 'Tools', level: 74, color: '#FF6B6B' },
    { name: 'Figma', icon: <Figma size={22} />, category: 'Tools', level: 85, color: '#FF6B6B' },
    { name: 'VS Code', icon: <Shield size={22} />, category: 'Tools', level: 70, color: '#FF6B6B' },
    { name: 'Maze', icon: <Wrench size={22} />, category: 'Tools', level: 88, color: '#FF6B6B' },
  ];

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Globe size={16} />,
  Backend: <Server size={16} />,
  Tools: <Wrench size={16} />,
};

const categoryColors: Record<string, string> = {
  Frontend: '#00D1A0',
  Backend: '#FFD166',
  Tools: '#FF6B6B',
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F1115 0%, #111418 50%, #0F1115 100%)' }}
    >
      {/* BG accents */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(255,209,102,0.04) 0%, transparent 70%)',
          top: '-10%', left: '30%',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: '#FFD166', fontFamily: 'DM Sans', letterSpacing: '0.2em' }}
          >
            My Arsenal
          </span>
          <h2
            className="mt-2 section-title center"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#F1F5F9',
            }}
          >
            Skills & Expertise
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: 'rgba(226,232,240,0.45)', fontFamily: 'DM Sans', fontSize: '0.95rem' }}
          >
            Technologies and tools I use to turn ideas into polished, high-performance products.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {(['All', 'Frontend', 'Backend', 'Tools'] as Category[]).map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(cat)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: 'DM Sans',
                background: active === cat
                  ? (cat === 'All' ? 'rgba(255,255,255,0.12)' : `${categoryColors[cat]}18`)
                  : 'rgba(255,255,255,0.04)',
                border: active === cat
                  ? `1px solid ${cat === 'All' ? 'rgba(255,255,255,0.25)' : `${categoryColors[cat]}50`}`
                  : '1px solid rgba(255,255,255,0.07)',
                color: active === cat
                  ? (cat === 'All' ? '#F1F5F9' : categoryColors[cat])
                  : 'rgba(226,232,240,0.45)',
                boxShadow: active === cat && cat !== 'All'
                  ? `0 0 20px ${categoryColors[cat]}20`
                  : 'none',
              }}
            >
              {cat !== 'All' && categoryIcons[cat]}
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.06,
                boxShadow: `0 0 35px ${skill.color}30`,
                borderColor: `${skill.color}40`,
              }}
              className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300"
                style={{
                  background: `${skill.color}12`,
                  color: skill.color,
                }}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <span
                className="text-sm font-medium text-center"
                style={{ color: 'rgba(226,232,240,0.8)', fontFamily: 'DM Sans' }}
              >
                {skill.name}
              </span>

              {/* Level bar */}
              <div
                className="w-full rounded-full overflow-hidden"
                style={{ height: 3, background: 'rgba(255,255,255,0.06)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
                />
              </div>

              {/* Category badge */}
              <span
                className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  background: `${categoryColors[skill.category]}15`,
                  color: categoryColors[skill.category],
                  fontFamily: 'DM Sans',
                  fontSize: '0.65rem',
                  border: `1px solid ${categoryColors[skill.category]}25`,
                }}
              >
                {skill.category}
              </span>

              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}08 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
