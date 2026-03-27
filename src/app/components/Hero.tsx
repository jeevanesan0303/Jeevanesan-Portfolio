import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Sparkles, Layers, Zap, Globe } from 'lucide-react';

const AVATAR_IMG = 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwQUklMjByb2JvdCUyMGF2YXRhciUyMHBvcnRyYWl0JTIwZGFya3xlbnwxfHx8fDE3NzQ1ODI1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080';

const floatingBadges = [
  { icon: <Layers size={14} />, label: 'React', color: '#00D1A0', delay: 0 },
  { icon: <Zap size={14} />, label: 'Flutter', color: '#FFD166', delay: 0.4 },
  { icon: <Globe size={14} />, label: 'Next.js', color: '#FF6B6B', delay: 0.8 },
  { icon: <Sparkles size={14} />, label: 'UI/UX', color: '#00D1A0', delay: 1.2 },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated mesh/wave background on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      // Draw mesh grid lines
      const cols = 14;
      const rows = 10;
      ctx.lineWidth = 0.5;

      for (let i = 0; i <= cols; i++) {
        const x = (i / cols) * W;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 209, 160, ${0.04 + 0.02 * Math.sin(t + i * 0.4)})`;
        ctx.moveTo(x, 0);
        for (let j = 0; j <= rows; j++) {
          const y = (j / rows) * H;
          const wave = Math.sin(t * 0.8 + i * 0.5 + j * 0.7) * 6;
          ctx.lineTo(x + wave, y);
        }
        ctx.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        const y = (j / rows) * H;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 209, 102, ${0.03 + 0.015 * Math.sin(t + j * 0.5)})`;
        ctx.moveTo(0, y);
        for (let i = 0; i <= cols; i++) {
          const x = (i / cols) * W;
          const wave = Math.sin(t * 0.6 + j * 0.5 + i * 0.4) * 5;
          ctx.lineTo(x, y + wave);
        }
        ctx.stroke();
      }

      t += 0.01;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0F1115' }}
    >
      {/* Mesh canvas bg */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ display: 'block' }}
      />

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: 500, height: 500,
            background: 'radial-gradient(circle, #00D1A0 0%, transparent 70%)',
            top: '-10%', left: '-5%',
            animation: 'blobMove 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full opacity-15 blur-3xl"
          style={{
            width: 400, height: 400,
            background: 'radial-gradient(circle, #FF6B6B 0%, transparent 70%)',
            bottom: '0%', right: '5%',
            animation: 'blobMove 18s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute rounded-full opacity-12 blur-3xl"
          style={{
            width: 300, height: 300,
            background: 'radial-gradient(circle, #FFD166 0%, transparent 70%)',
            top: '40%', left: '40%',
            animation: 'blobMove 22s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-6">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full text-sm"
            style={{
              background: 'rgba(0, 209, 160, 0.08)',
              border: '1px solid rgba(0, 209, 160, 0.25)',
              color: '#00D1A0',
              fontFamily: 'DM Sans',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00D1A0] pulse-glow" />
            Available for freelance work
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <h1
              className="leading-none tracking-tight"
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#F1F5F9',
              }}
            >
              Building
              <br />
              <span className="gradient-text-hero">Digital</span>
              <br />
              Experiences
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-md text-base leading-relaxed"
            style={{ color: 'rgba(226, 232, 240, 0.55)', fontFamily: 'DM Sans' }}
          >
            Full-stack developer crafting high-performance, pixel-perfect web
            applications that merge elegant design with robust engineering.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(0,209,160,0.55)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('#projects')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold btn-shimmer"
              style={{ color: '#0F1115', fontFamily: 'DM Sans' }}
            >
              View Projects
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,107,107,0.35)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all"
              style={{
                background: 'rgba(255, 107, 107, 0.08)',
                border: '1px solid rgba(255, 107, 107, 0.35)',
                color: '#FF6B6B',
                fontFamily: 'DM Sans',
              }}
            >
              <Mail size={16} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-8 pt-4"
          >
            {[
              { value: '8+', label: 'Campus Projects Completed', color: '#00D1A0' },
              { value: '1+', label: 'Years Exp.', color: '#FFD166' },
              // { value: '20+', label: 'Clients', color: '#FF6B6B' },
            ].map(s => (
              <div key={s.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Space Grotesk', color: s.color }}
                >
                  {s.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(226,232,240,0.4)', fontFamily: 'DM Sans' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Outer glow halo */}
          <div
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: 380, height: 380,
              background: 'radial-gradient(circle, #00D1A0 0%, transparent 65%)',
            }}
          />

          {/* Orbiting ring 1 */}
          <div
            className="absolute rounded-full spin-slow"
            style={{
              width: 360, height: 360,
              border: '1px dashed rgba(0, 209, 160, 0.2)',
            }}
          />

          {/* Orbiting ring 2 with dot */}
          <div
            className="absolute rounded-full spin-reverse"
            style={{
              width: 300, height: 300,
              border: '1px solid rgba(255, 209, 102, 0.15)',
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: 10, height: 10,
                background: '#FFD166',
                top: '50%', left: '-5px',
                boxShadow: '0 0 12px rgba(255,209,102,0.8)',
              }}
            />
          </div>

          {/* Orbiting ring 3 with dot */}
          <div
            className="absolute rounded-full spin-slow"
            style={{
              width: 420, height: 420,
              border: '1px solid rgba(255, 107, 107, 0.1)',
              animationDuration: '20s',
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: 8, height: 8,
                background: '#FF6B6B',
                top: '-4px', left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 10px rgba(255,107,107,0.8)',
              }}
            />
          </div>

          {/* Avatar card */}
          <motion.div
            className="float relative rounded-3xl overflow-hidden"
            style={{
              width: 220, height: 260,
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 0 60px rgba(0,209,160,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            <img
              src={AVATAR_IMG}
              alt="Avatar"
              className="w-full h-full object-cover object-center"
              style={{ filter: 'saturate(1.1) contrast(1.05)' }}
            />
            {/* Glass overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{
                background: 'linear-gradient(to top, rgba(15,17,21,0.9) 0%, transparent 100%)',
              }}
            >
              <div className="text-sm font-semibold text-white" style={{ fontFamily: 'Space Grotesk' }}>
                Kulasingam Jeevanesan
              </div>
              <div className="text-xs" style={{ color: '#00D1A0', fontFamily: 'DM Sans' }}>
                Full-Stack Developer
              </div>
            </div>
          </motion.div>

          {/* Floating badge cards */}
          {floatingBadges.map((badge, i) => {
            const positions = [
              { top: '5%', right: '-5%' },
              { bottom: '25%', right: '-10%' },
              { top: '30%', left: '-10%' },
              { bottom: '5%', left: '0%' },
            ];
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + badge.delay, duration: 0.5, type: 'spring' }}
                className="absolute flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
                style={{
                  ...positions[i],
                  background: 'rgba(15, 17, 21, 0.8)',
                  backdropFilter: 'blur(15px)',
                  border: `1px solid ${badge.color}30`,
                  color: badge.color,
                  fontFamily: 'DM Sans',
                  animation: `float ${5 + i * 1.2}s ease-in-out infinite ${i * 0.5}s`,
                  boxShadow: `0 0 15px ${badge.color}20`,
                }}
              >
                {badge.icon}
                {badge.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection('#about')}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: 'rgba(226,232,240,0.3)', fontFamily: 'DM Sans', letterSpacing: '0.2em' }}
        >
          Scroll
        </span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.15)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: '#00D1A0',
              animation: 'scrollBounce 2s ease-in-out infinite',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
