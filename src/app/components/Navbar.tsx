import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(15, 17, 21, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.03 }}
        >
          <div
            className="flex items-center justify-center rounded-xl w-9 h-9"
            style={{
              background: 'linear-gradient(135deg, #00D1A0, #00A882)',
              boxShadow: '0 0 20px rgba(0,209,160,0.4)',
            }}
          >
            <Code2 size={18} color="#0F1115" strokeWidth={2.5} />
          </div>
          <span
            className="font-bold tracking-tight"
            style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', color: '#E2E8F0' }}
          >
            Jeevanesan<span style={{ color: '#00D1A0' }}>.dev</span>
          </span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                style={{
                  color: activeSection === link.href.slice(1) ? '#00D1A0' : 'rgba(226,232,240,0.65)',
                  fontFamily: 'DM Sans',
                }}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-px"
                    style={{ background: 'linear-gradient(90deg, #00D1A0, #FFD166)' }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,209,160,0.5)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNavClick('#contact')}
          className="hidden md:block text-sm px-5 py-2.5 rounded-xl font-medium transition-all duration-200"
          style={{
            background: 'rgba(0, 209, 160, 0.1)',
            border: '1px solid rgba(0, 209, 160, 0.4)',
            color: '#00D1A0',
            fontFamily: 'DM Sans',
          }}
        >
          Hire Me
        </motion.button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          className="md:hidden text-white p-2 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-6 flex flex-col gap-2"
            style={{
              background: 'rgba(15, 17, 21, 0.95)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-xl text-sm transition-all duration-200"
                style={{
                  color: activeSection === link.href.slice(1) ? '#00D1A0' : 'rgba(226,232,240,0.7)',
                  background: activeSection === link.href.slice(1) ? 'rgba(0,209,160,0.08)' : 'transparent',
                  fontFamily: 'DM Sans',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full text-center text-sm px-5 py-3 rounded-xl font-medium"
                style={{
                  background: 'rgba(0, 209, 160, 0.1)',
                  border: '1px solid rgba(0, 209, 160, 0.4)',
                  color: '#00D1A0',
                  fontFamily: 'DM Sans',
                }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
