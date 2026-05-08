import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

import proj1 from '../assets/project-1.png';
import proj2 from '../assets/project-2.png';
import proj3 from '../assets/project-3.png';
import proj4 from '../assets/project-4.png';
import ideationImg from '../assets/product-ideation.png';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 0,
      title: "Product Ideation Tool",
      category: "Portfolio Team",
      desc: "Data-driven product selection tool for early-stage opportunity identification.",
      image: ideationImg,
      fullDesc: "Transforming product selection to launch at Dr.reddy’s by data-driven decision-making early in the process. Empowering teams to identify high-potential opportunities faster and with greater clarity\n\nReduced cognitive load by optimising information architecture and applying user research, journey mapping, and task flows to simplify complex, data‐heavy content.\n\nImproved adoption and scalability by minimising clicks through data‐driven design decisions and expanding personas to Market and BD teams for faster opportunity identification.",
      role: "Lead Product Designer",
      timeline: "6 Months"
    },
    {
      id: 1,
      title: "Elevate UI Kit",
      category: "UI/UX Design",
      desc: "A comprehensive design system and UI kit built for scale.",
      image: proj2,
      fullDesc: "Elevate UI Kit is a robust design system built to accelerate the product development lifecycle. It includes over 200 components, a complete typography scale, and a sophisticated color system that supports both light and dark modes.",
      role: "Lead Product Designer",
      timeline: "3 Months"
    },
    {
      id: 2,
      title: "Lumina Pavilion",
      category: "Architecture",
      desc: "A conceptual exhibition space blending light and structure.",
      image: proj4,
      fullDesc: "Lumina Pavilion explores the interplay between natural light and raw concrete forms. Designed as a temporary exhibition space, it guides visitors through a carefully choreographed sequence of spatial compressions and expansions.",
      role: "Architectural Designer",
      timeline: "6 Months"
    },
    {
      id: 3,
      title: "Aura Brand Identity",
      category: "Visual Design",
      desc: "Dynamic visual identity for a modern tech startup.",
      image: proj3,
      fullDesc: "Aura needed a brand identity that felt both deeply technical and vibrantly human. We developed a visual language anchored by dynamic geometric patterns and a bold typography system that scales beautifully from app icons to billboards.",
      role: "Visual Designer",
      timeline: "2 Months"
    },
    {
      id: 4,
      title: "Zenith Residence",
      category: "Architecture",
      desc: "Minimalist residential design focused on natural flow.",
      image: proj1,
      fullDesc: "Zenith Residence is a study in restraint. By stripping away the unnecessary, we created a home where the materials—warm wood, polished concrete, and expansive glass—become the true focus, fostering a deep connection with the surrounding landscape.",
      role: "Lead Architect",
      timeline: "1 Year"
    }
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Selected <span className="text-primary">Work.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              A curated selection of projects spanning digital interfaces, physical spaces, and visual systems.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-border flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md rounded-full text-foreground hover:bg-muted z-10"
                data-testid="button-close-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const p = projects.find(x => x.id === selectedProject);
                if (!p) return null;
                return (
                  <>
                    <div className="md:w-1/2 h-64 md:h-auto">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold w-fit mb-4">
                        {p.category}
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-6 font-serif">{p.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                        {p.fullDesc}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 mb-8 border-t border-border pt-6">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-bold">Role</p>
                          <p className="text-foreground font-medium">{p.role}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-bold">Timeline</p>
                          <p className="text-foreground font-medium">{p.timeline}</p>
                        </div>
                      </div>

                      <Button className="w-full sm:w-auto self-start rounded-full">
                        View Full Case Study <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}