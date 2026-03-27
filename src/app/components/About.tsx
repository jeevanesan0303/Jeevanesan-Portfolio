import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Download, Award, Coffee, Users } from 'lucide-react';
import myProfilePhoto from '../../assets/profile.jpeg';
const PROFILE_IMG = myProfilePhoto;


const TEXT_FONT = 'DM Sans';
const DISPLAY_FONT = 'Space Grotesk';
const TAGS = ['Problem Solver', 'Clean Code', 'Design-Minded', 'Performance First', 'Open Source'];

const stats = [
  { value: '8+', label: ' Campus Projects Completed', icon: <Award size={18} />, color: '#00D1A0' },
  { value: '1+', label: 'Years Experience', icon: <Coffee size={18} />, color: '#FFD166' },
  // { value: '20+', label: 'Happy Clients', icon: <Users size={18} />, color: '#FF6B6B' },
];

const highlights = [
  { label: 'Frontend', value: 'React, Next.js ', color: '#00D1A0' },
  { label: 'Backend', value: 'Node.js, Python, PostgreSQL', color: '#FFD166' },
  { label: 'Location', value: 'Jaffna, Sri Lanka', color: '#FF6B6B' },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ background: '#0F1115' }}
    >
      {/* Subtle bg glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0,209,160,0.05) 0%, transparent 70%)',
          bottom: '-10%', right: '-5%',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: '#00D1A0', fontFamily: TEXT_FONT, letterSpacing: '0.2em' }}
          >
            Get to know me
          </span>
          <h2
            className="mt-2 section-title"
            style={{
              fontFamily: DISPLAY_FONT,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#F1F5F9',
            }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* ── Left: Profile image card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main glass card */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 60px rgba(0,209,160,0.1)',
              }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={PROFILE_IMG}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.9) brightness(0.85)' }}
                />
              </div>

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(15,17,21,0.85) 0%, transparent 60%)',
                }}
              />

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: DISPLAY_FONT }}
                >
                  Kulasingam Jeevanesan
                </div>
                {highlights.map(h => (
                  <div key={h.label} className="flex items-center gap-2 text-sm mt-1">
                    <span className="min-w-[75px]" style={{ color: h.color, fontFamily: TEXT_FONT }}>
                      {h.label}:
                    </span>
                    <span style={{ color: 'rgba(226,232,240,0.6)', fontFamily: TEXT_FONT }}>
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #00D1A0 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
            <div
              className="absolute -top-6 -right-6 w-20 h-20 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #FFD166 1px, transparent 1px)',
                backgroundSize: '10px 10px',
              }}
            />

            {/* Availability badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-2 top-4 md:-right-4 md:top-8 px-4 py-2 rounded-2xl text-[11px] md:text-xs font-medium bg-[rgba(15,17,21,0.9)]"
            >
              <div
                className="flex items-center text-[#00D1A0]"
                style={{
                  fontFamily: TEXT_FONT,
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(0,209,160,0.3)',
                  boxShadow: '0 0 20px rgba(0,209,160,0.2)',
                }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#00D1A0] mr-2" style={{ animation: 'pulseGlow 2s infinite' }} />
                Open to work
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Bio + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Bio text */}
            <div className="flex flex-col gap-4">
              <p
                className="leading-relaxed"
                style={{ color: 'rgba(226,232,240,0.7)', fontFamily: TEXT_FONT, fontSize: '1rem' }}
              >
                I’m a passionate full-stack developer focused on creating modern, scalable web applications.
                While I’m at the early stage of my professional journey, I actively build projects that showcase my skills in both frontend and backend development.
                I’m driven by continuous learning and a desire to turn ideas into real-world solutions.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: 'rgba(226,232,240,0.55)', fontFamily: TEXT_FONT, fontSize: '1rem' }}
              >
                My approach combines deep technical expertise with a keen eye for design —
                resulting in products that not only work flawlessly but feel genuinely luxurious
                to use. I believe the best interfaces are invisible.
              </p>
            </div>

            {/* Key info pills */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(226,232,240,0.55)',
                    fontFamily: TEXT_FONT,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.04, boxShadow: `0 0 30px ${s.color}25` }}
                  className="rounded-2xl cursor-default transition-all duration-300 bg-[rgba(255,255,255,0.04)]"
                >
                  <div
                    className="flex flex-col items-center gap-2 p-4"
                    style={{
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${s.color}20`,
                      borderRadius: '1rem',
                    }}
                  >
                    <div style={{ color: s.color }}>{s.icon}</div>
                    <div
                      className="text-2xl font-bold"
                      style={{ fontFamily: DISPLAY_FONT, color: s.color }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-xs text-center leading-tight"
                      style={{ color: 'rgba(226,232,240,0.45)', fontFamily: TEXT_FONT }}
                    >
                      {s.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,209,160,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="w-fit"
            >
              <a
                href="/resume.pdf"
                download="Jeevanesan_Resume.pdf"
                aria-label="Download resume"
                className="flex items-center justify-center gap-3 px-6 py-3 rounded-2xl text-sm font-medium transition-all bg-[rgba(0,209,160,0.08)] text-[#00D1A0]"
                style={{
                  border: '1px solid rgba(0,209,160,0.3)',
                  fontFamily: TEXT_FONT,
                }}
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
