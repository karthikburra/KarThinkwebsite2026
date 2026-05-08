import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

// Assets
import collage2 from '../assets/collage-2.jpg';
import collage6 from '../assets/collage-6.png';
import collage7 from '../assets/Collage-7.png';
import info2 from '../assets/info-2.png';
import info3 from '../assets/info-3.png';
import info4 from '../assets/info-4.png';
import info5 from '../assets/info-5.png';
import Frame1 from '../assets/Frame-1.png';
import Frame2 from '../assets/Frame-2.png';
import Frame3 from '../assets/Frame-3.png';
import Frame4 from '../assets/Frame-4.png';



interface Project {
  id: number;
  images: string[];
  title: string;
  category: string;
  description?: string;
}

// MAPPING SECTION: Control your project content here
const projects: Project[] = [
  {
    id: 1,
    images: [collage2],
    title: " Residential building ",
    category: "Architecture",
    description: "A series of minimalist residential designs focusing on geometry, materiality, and the interplay of natural light."
  },
  {
    id: 2,
    images: [info2, collage6],
    title: "AI Assisted Product Selection",
    category: "Visual Systems",
    description: "Reshaping product selection process by data driven decision transform making early in the process."
  },
  {
    id: 3,
    images: [info3, collage2],
    title: "Design System Framework",
    category: "Design Systems",
    description: "Design flows in loop not lines. Creating cohesive visual languages for complex digital ecosystems."
  },
  {
    id: 4,
    images: [collage6],
    title: "Corporate Workspaces",
    category: "Corporate Interior",
    description: "Modern office interiors designed for collaboration, emphasizing Dr. Reddy's brand identity and employee well-being."
  },
  {
    id: 5,
    images: [info4],
    title: "Terrace Garden: Biodiversity Response",
    category: "Research",
    description: "Documenting biodiversity responses to small scale urban gardening practices through meticulous data collection."
  },
  {
    id: 6,
    images: [info5],
    title: "Finance Dashboards",
    category: "Visual Systems",
    description: "Comprehensive Overview As-is Journey. Translating complex financial data into intuitive visual interfaces."
  },
  {
    id: 7,
    images: [collage7],
    title: "Digital Banking Ecosystem",
    category: "UI/UX Design",
    description: "A comprehensive mobile banking solution focusing on user-centric financial management and seamless verification flows."
  },
  {
    id: 8,
    images: [Frame1, Frame2, Frame3, Frame4],
    title: "CPHI- Booth design",
    category: "Space design",
    description: "A comprehensive mobile banking solution focusing on user-centric financial management and seamless verification flows."
  }
];

function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <motion.div
      className="relative group break-inside-avoid bg-white rounded-3xl overflow-hidden border border-border/50 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        {/* Only show the first image on the tile, no auto-change */}
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle indicator for multiple images */}
        {project.images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Layers className="w-4 h-4" />
          </div>
        )}

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-foreground shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
            {project.images.length > 1 ? "Explore Gallery" : "View Project"}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 bg-white border-t border-border/30">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">
          {project.category}
        </span>
        <h4 className="text-lg md:text-xl font-bold text-foreground leading-tight mb-2">
          {project.title}
        </h4>
        {project.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function SelectedProjects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  // Auto-slideshow in the modal every 6 seconds
  useEffect(() => {
    if (!activeProject || activeProject.images.length <= 1) return;

    const interval = setInterval(() => {
      setModalIndex((prev) => (prev + 1) % activeProject.images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeProject]);

  const nextImage = () => {
    if (!activeProject) return;
    setModalIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevImage = () => {
    if (!activeProject) return;
    setModalIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Selected <span className="text-primary">Projects.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A dynamic showcase of multi-disciplinary work. Click a project to explore its full high-fidelity gallery.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-0">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => {
                setActiveProject(project);
                setModalIndex(0);
              }}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/98 backdrop-blur-3xl"
            onClick={() => setActiveProject(null)}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-4 bg-muted hover:bg-primary hover:text-white rounded-full transition-all duration-300 z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            {activeProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-6 p-4 bg-white/5 hover:bg-primary hover:text-white rounded-full text-foreground transition-all z-[110]"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-6 p-4 bg-white/5 hover:bg-primary hover:text-white rounded-full text-foreground transition-all z-[110]"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-7xl flex flex-col items-center justify-center p-6 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-1 flex items-center justify-center mb-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject.images[modalIndex]}
                    src={activeProject.images[modalIndex]}
                    alt={activeProject.title}
                    className="max-w-full max-h-full object-contain shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] rounded-xl"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </div>

              <div className="w-full text-center max-w-4xl overflow-y-auto max-h-[40vh] px-4">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
                  {activeProject.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                  {activeProject.title}
                </h3>
                {activeProject.description && (
                  <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                    {activeProject.description}
                  </p>
                )}

                {activeProject.images.length > 1 && (
                  <div className="flex justify-center gap-4 pb-4">
                    {activeProject.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setModalIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${i === modalIndex ? "bg-primary w-12" : "bg-border hover:bg-primary/30"
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
