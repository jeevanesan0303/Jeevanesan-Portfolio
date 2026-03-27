import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer (Academic Projects)',
    company: 'Self / Campus',
    location: 'Sri Lanka',
    duration: '2024 – Present',
    description:
      'Developing full-stack web applications including a University Management System (UniManage) with authentication, dashboards, and CRUD operations. Focused on building scalable and user-friendly systems using ASP.NET MVC and modern frontend design.',
    skills: ['ASP.NET MVC', 'C#', 'SQL', 'HTML', 'CSS'],
    accentColor: '#00D1A0',
    side: 'right',
  },
  {
    role: 'IoT System Developer',
    company: 'Smart Park Project',
    location: 'Sri Lanka',
    duration: '2025 – Present',
    description:
      'Working on an IoT-based smart parking system using ultrasonic sensors and Arduino for real-time parking slot detection. Integrating hardware with software to create smart city solutions.',
    skills: ['IoT', 'Arduino', 'Sensors', 'Embedded Systems'],
    accentColor: '#FFD166',
    side: 'left',
  },
  {
    role: 'Software Developer (Java Projects)',
    company: 'Academic Projects',
    location: 'Sri Lanka',
    duration: '2024',
    description:
      'Built multiple Java-based systems including a Restaurant Billing System and Flight Booking System with features like order processing, booking management, validation, and reporting.',
    skills: ['Java', 'OOP', 'System Design'],
    accentColor: '#FF6B6B',
    side: 'right',
  },
  {
    role: 'Data Analysis Developer',
    company: 'Sales Analysis Project',
    location: 'Sri Lanka',
    duration: '2024',
    description:
      'Developed a Python-based sales data analysis tool to identify trends, best-selling products, and customer behavior using pandas and data visualization techniques.',
    skills: ['Python', 'Pandas', 'Data Analysis'],
    accentColor: '#00D1A0',
    side: 'left',
  },
];
function TimelineItem({
  exp,
  index,
  total,
}: {
  exp: typeof experiences[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isLeft = exp.side === 'left';

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-8">
      {/* Left content (desktop) */}
      <div className={`hidden md:flex flex-col ${isLeft ? 'items-end text-right' : ''}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        )}
      </div>

      {/* Center node */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1, type: 'spring' }}
          className="relative z-10 rounded-full flex items-center justify-center"
          style={{
            width: 44, height: 44,
            background: `${exp.accentColor}15`,
            border: `2px solid ${exp.accentColor}`,
            boxShadow: `0 0 0 6px ${exp.accentColor}15, 0 0 30px ${exp.accentColor}40`,
            color: exp.accentColor,
          }}
        >
          <Briefcase size={16} />
        </motion.div>
        {index < total - 1 && (
          <div className="flex-1 w-px mt-2" style={{ background: `linear-gradient(180deg, ${exp.accentColor}40, rgba(255,255,255,0.05))` }} />
        )}
      </div>

      {/* Right content (desktop) */}
      <div className="hidden md:flex flex-col">
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        )}
      </div>

      {/* Mobile layout */}
      <motion.div
        className="flex md:hidden gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Node column */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              width: 36, height: 36,
              background: `${exp.accentColor}15`,
              border: `2px solid ${exp.accentColor}`,
              boxShadow: `0 0 20px ${exp.accentColor}40`,
              color: exp.accentColor,
            }}
          >
            <Briefcase size={14} />
          </div>
          {index < total - 1 && (
            <div className="flex-1 w-px mt-2" style={{ background: `linear-gradient(180deg, ${exp.accentColor}40, rgba(255,255,255,0.05))` }} />
          )}
        </div>
        <div className="flex-1 pb-4">
          <ExperienceCard exp={exp} />
        </div>
      </motion.div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div
      className="p-5 rounded-2xl w-full"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(16px)',
        border: `1px solid ${exp.accentColor}18`,
        boxShadow: `0 0 30px ${exp.accentColor}08`,
      }}
    >
      {/* Role & company */}
      <div className="mb-3">
        <h3
          className="font-bold mb-0.5"
          style={{ fontFamily: 'Space Grotesk', color: '#F1F5F9', fontSize: '1rem' }}
        >
          {exp.role}
        </h3>
        <div
          className="font-semibold text-sm"
          style={{ color: exp.accentColor, fontFamily: 'DM Sans' }}
        >
          @ {exp.company}
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
        <div className="flex items-center gap-1 text-xs" style={{ color: 'rgba(226,232,240,0.4)', fontFamily: 'DM Sans' }}>
          <Calendar size={11} />
          {exp.duration}
        </div>
        <div className="flex items-center gap-1 text-xs" style={{ color: 'rgba(226,232,240,0.4)', fontFamily: 'DM Sans' }}>
          <MapPin size={11} />
          {exp.location}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(226,232,240,0.55)', fontFamily: 'DM Sans' }}>
        {exp.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {exp.skills.map(sk => (
          <span
            key={sk}
            className="px-2.5 py-0.5 rounded-full text-xs"
            style={{
              background: `${exp.accentColor}10`,
              border: `1px solid ${exp.accentColor}25`,
              color: exp.accentColor,
              fontFamily: 'DM Sans',
            }}
          >
            {sk}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111418 0%, #0F1115 100%)' }}
    >
      {/* BG accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(0,209,160,0.04) 0%, transparent 70%)',
          top: '20%', left: '30%',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: '#00D1A0', fontFamily: 'DM Sans', letterSpacing: '0.2em' }}
          >
            Career Path
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
            Work Experience
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ color: 'rgba(226,232,240,0.45)', fontFamily: 'DM Sans', fontSize: '0.95rem' }}
          >
            A journey of continuous growth across world-class companies and challenging projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} total={experiences.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
