import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Send, Github, Twitter, Linkedin, Mail, MapPin, CheckCircle2, Instagram } from 'lucide-react';

const socials = [
  { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/jeevanesan0303', color: '#F1F5F9' },
  { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://www.instagram.com/iamjeeva_jk', color: '#00D1A0' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeevanesan-kulasingam-37559b35a', color: '#FFD166' },
  { icon: <Mail size={20} />, label: 'Email', href: 'mailto:[jeevanesanjj@gmail.com]', color: '#FF6B6B' },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit form straight to your email via Web3Forms API
    const formData = new FormData();
    formData.append("access_key", "a70014f8-2745-4861-83c4-42870877ce2f");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject || "New Message from Portfolio");
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your internet connection.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: '#0F1115' }}
    >
      {/* BG blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0,209,160,0.06) 0%, transparent 70%)',
          top: '-5%', left: '-5%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(255,209,102,0.05) 0%, transparent 70%)',
          bottom: '0%', right: '5%',
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
            style={{ color: '#FF6B6B', fontFamily: 'DM Sans', letterSpacing: '0.2em' }}
          >
            Get in Touch
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
            Let's Build Together
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{ color: 'rgba(226,232,240,0.45)', fontFamily: 'DM Sans', fontSize: '0.95rem' }}
          >
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 items-start">
          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Contact info cards */}
            {[
              { icon: <Mail size={18} />, label: 'Email', value: 'jeevanesanjj@gmail.com', color: '#00D1A0' },
              { icon: <MapPin size={18} />, label: 'Location', value: 'Jaffna,Srilanka', color: '#FFD166' },
            ].map(item => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${item.color}20`,
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: 'rgba(226,232,240,0.35)', fontFamily: 'DM Sans' }}>
                    {item.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#F1F5F9', fontFamily: 'DM Sans' }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Availability */}
            <div
              className="p-4 rounded-2xl"
              style={{
                background: 'rgba(0,209,160,0.05)',
                border: '1px solid rgba(0,209,160,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#00D1A0', boxShadow: '0 0 8px rgba(0,209,160,0.8)', animation: 'pulseGlow 2s infinite' }}
                />
                <span className="text-sm font-medium" style={{ color: '#00D1A0', fontFamily: 'DM Sans' }}>
                  Available for new projects
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(226,232,240,0.4)', fontFamily: 'DM Sans' }}>
                Currently taking on freelance and contract work. Typical response time is within 24 hours.
              </p>
            </div>

            {/* Social icons */}
            <div>
              <div className="text-xs mb-3 uppercase tracking-widest" style={{ color: 'rgba(226,232,240,0.3)', fontFamily: 'DM Sans' }}>
                Find me on
              </div>
              <div className="flex gap-3">
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ scale: 1.12, boxShadow: `0 0 20px ${s.color}30` }}
                    whileTap={{ scale: 0.95 }}
                    title={s.label}
                    className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(226,232,240,0.5)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.borderColor = s.color + '40';
                      (e.currentTarget as HTMLElement).style.background = s.color + '12';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(226,232,240,0.5)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 60px rgba(0,209,160,0.06)',
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div style={{ color: '#00D1A0' }}>
                    <CheckCircle2 size={52} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: 'Space Grotesk', color: '#F1F5F9' }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: 'rgba(226,232,240,0.5)', fontFamily: 'DM Sans', fontSize: '0.9rem' }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs" style={{ color: 'rgba(226,232,240,0.4)', fontFamily: 'DM Sans' }}>
                        Name *
                      </label>
                      <input
                        required
                        className="glass-input"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs" style={{ color: 'rgba(226,232,240,0.4)', fontFamily: 'DM Sans' }}>
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        className="glass-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs" style={{ color: 'rgba(226,232,240,0.4)', fontFamily: 'DM Sans' }}>
                      Subject
                    </label>
                    <input
                      className="glass-input"
                      placeholder="Project collaboration, hiring, etc."
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs" style={{ color: 'rgba(226,232,240,0.4)', fontFamily: 'DM Sans' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="glass-input resize-none"
                      placeholder="Tell me about your project, timeline, and budget..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,209,160,0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-sm btn-shimmer transition-all duration-300"
                    style={{ color: '#0F1115', fontFamily: 'DM Sans' }}
                  >
                    <Send size={16} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
