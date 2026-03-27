import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, Code2, Heart, ArrowUp, Instagram } from 'lucide-react';

const socials = [
  { icon: <Github size={17} />, href: 'https://github.com/jeevanesan0303', label: 'GitHub' },
  { icon: <Instagram size={17} />, href: 'https://www.instagram.com/iamjeeva_jk', label: 'Instagram' },
  { icon: <Linkedin size={17} />, href: 'https://www.linkedin.com/in/jeevanesan-kulasingam-37559b35a', label: 'LinkedIn' },
  { icon: <Mail size={17} />, href: 'mailto:[jeevanesanjj@gmail.com]', label: 'Email' },
];

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative border-t py-14 overflow-hidden"
      style={{
        background: '#0A0C0F',
        borderColor: 'rgba(255,255,255,0.05)',
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 400, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(0,209,160,0.4), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center rounded-xl w-8 h-8"
                style={{
                  background: 'linear-gradient(135deg, #00D1A0, #00A882)',
                  boxShadow: '0 0 16px rgba(0,209,160,0.35)',
                }}
              >
                <Code2 size={15} color="#0F1115" strokeWidth={2.5} />
              </div>
              <span
                className="font-bold"
                style={{ fontFamily: 'Space Grotesk', color: '#E2E8F0' }}
              >
                Jeevanesan<span style={{ color: '#00D1A0' }}>.dev</span>
              </span>
            </div>
            <p
              className="text-xs text-center md:text-left"
              style={{ color: 'rgba(226,232,240,0.3)', fontFamily: 'DM Sans', maxWidth: 200 }}
            >
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs transition-colors duration-200"
                style={{ color: 'rgba(226,232,240,0.35)', fontFamily: 'DM Sans' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00D1A0')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,232,240,0.35)')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                title={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(226,232,240,0.4)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#00D1A0';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,209,160,0.3)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,209,160,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(226,232,240,0.4)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-10 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: 'rgba(226,232,240,0.25)', fontFamily: 'DM Sans' }}
          >
            © 2026 Jeevanesan.

          </p>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(0,209,160,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs transition-all duration-200"
            style={{
              background: 'rgba(0,209,160,0.08)',
              border: '1px solid rgba(0,209,160,0.2)',
              color: '#00D1A0',
              fontFamily: 'DM Sans',
            }}
          >
            Back to top
            <ArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
