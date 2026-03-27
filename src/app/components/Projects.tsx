import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Eye } from 'lucide-react';

// ✅ IMPORT IMAGES
import uniImg from '../../assets/projects/unimanage.png';
import hospitalImg from '../../assets/projects/hospital.png';
import iotImg from '../../assets/projects/smartpark.png';

const PROJ_IMGS = {
  dashboard: uniImg,
  hospital: hospitalImg,
  iot: iotImg,
};

const projects = [
  {
    id: 1,
    title: 'UniManage System',
    subtitle: 'University Management Platform',
    description:
      'A complete university management system handling students, courses, admin workflows, and authentication.',
    image: PROJ_IMGS.dashboard,
    tags: ['ASP.NET', 'MVC', 'C#', 'SQL'],
    accentColor: '#00D1A0',
    category: 'Web App',
    year: '2025',
  },
  {
    id: 2,
    title: 'Smart Park',
    subtitle: 'IoT Parking System',
    description:
      'Smart parking solution using ultrasonic sensors with real-time slot detection and monitoring.',
    image: PROJ_IMGS.iot,
    tags: ['IoT', 'Arduino', 'Sensors'],
    accentColor: '#FF6B6B',
    category: 'IoT',
    year: '2025',
  },
  {
    id: 3,
    title: 'ABC Virtual Hospital',
    subtitle: 'Healthcare Management System',
    description:
      'Web-based hospital system for doctor registration, appointments, and admin management.',
    image: PROJ_IMGS.hospital,
    tags: ['HTML', 'CSS', 'ASP.NET'],
    accentColor: '#FFD166',
    category: 'Web App',
    year: '2024',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${hovered ? project.accentColor + '30' : 'rgba(255,255,255,0.07)'}`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
        />

        {/* Overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}40 0%, rgba(15,17,21,0.7) 100%)`,
              }}
            >
              <div
                className="px-5 py-2 rounded-xl text-sm font-semibold"
                style={{ background: project.accentColor, color: '#000' }}
              >
                <Eye size={14} /> View
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs mb-1" style={{ color: project.accentColor }}>
          {project.subtitle}
        </div>

        <h3 className="text-lg font-bold text-white">{project.title}</h3>

        <p className="text-sm text-gray-400 mt-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full border">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-28 bg-[#0F1115]">
      <div ref={ref} className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-3xl text-white mb-10"
        >
          Featured Projects
        </motion.h2>

        {/* Top 3 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">Other Projects:</p>
          <p className="text-gray-400 mt-2 text-sm">
            Cake Bliss App • Restaurant Billing System • Flight Booking System • Sales Data Analysis • EaseShop E-commerce • Island Sales • Green Life Organic
          </p>
        </div>

      </div>
    </section>
  );
}