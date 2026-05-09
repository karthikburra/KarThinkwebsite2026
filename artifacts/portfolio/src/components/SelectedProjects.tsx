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
import CPHI1 from '../assets/CPHI1.png';
import CPHI2 from '../assets/CPHI_1.png';
import CPHI3 from '../assets/CPHI_2.png';
import CPHI4 from '../assets/CPHI_3.png';
import CPHI5 from '../assets/CPHI_4.png';
import CPHI6 from '../assets/CPHI_IM1.jpg';
import CPHI7 from '../assets/CPHI_IM2.jpg';
import Mind1 from '../assets/Mind_1.png'
import Air1 from '../assets/Air_1.png'
import bank1 from '../assets/Bank_1.png'
import bank2 from '../assets/Bank_2.png'
import bank3 from '../assets/Bank_3.png'
import bank4 from '../assets/Bank_4.png'
import bank5 from '../assets/Bank_5.png'
import Work1 from '../assets/Workshop_1.jpg'
import cog1 from '../assets/Cog_1.png'
import off2 from '../assets/Officein_2.jpg'
import off3 from '../assets/Officein_3.jpg'
import off4 from '../assets/Officein_4.jpg'
import off5 from '../assets/Office_5.png'
import CA1 from '../assets/CA website.jpg'
import DS1 from '../assets/DS (1).png'
import DS2 from '../assets/DS (2).png'
import DS3 from '../assets/DS (3).png'
import DS4 from '../assets/DS (4).png'
import DS5 from '../assets/DS (5).png'
import DS6 from '../assets/DS (6).png'
import DS7 from '../assets/DS (7).png'
import DS8 from '../assets/DS (8).png'








interface Project {
  id: number;
  images: string[];
  videoUrl?: string;
  externalUrl?: string;
  title: string;
  category: string;
  description?: string;
}

// MAPPING SECTION: Control your project content here
const projects: Project[] = [
  {
    id: 1,
    images: [info3, DS1, DS2, DS3, DS4, DS5, DS6, DS7, DS8],
    title: "Design System Framework",
    category: "Design Systems",
    description: "Design flows in loop not lines. Creating cohesive visual languages for complex digital ecosystems."
  },

  {
    id: 2,
    images: [CA1],
    title: "Website for CA firm",
    category: "Design and development",
    description: "Built and delivered in 3hrs",
    externalUrl: "https://sr-jtaxglobal.vercel.app/"
  },
  {
    id: 3,
    images: [Mind1],
    title: "Mindfluential trading",
    category: "UIUX design",
    description: "Owning the project end-to-end from project planning, user research, ideation, information architecture, wireframing, and visual design to managing the development process, timelines, and client requirements to ensure successful delivery."
  },
  {
    id: 4,
    images: [info2, cog1],
    title: "AI Assisted Product Selection",
    category: "Visual Systems, UIUX design",
    description: "Reshaping product selection process by data driven decision transform making early in the process."

  },

  {
    id: 5,
    images: [collage7, bank1, bank2, bank3, bank4, bank5],
    title: "Digital Banking Ecosystem",
    category: "UI/UX Design",
    description: "A comprehensive mobile banking solution focusing on user-centric financial management and seamless verification flows.",
    externalUrl: "https://tpbank.vercel.app/"
  },

  {
    id: 6,
    images: [CPHI4, CPHI2, CPHI3, CPHI5, CPHI1, CPHI6, CPHI7],
    title: "CPHI- Booth design",
    category: "Space design",
    description: "A comprehensive showcase of exhibition design, featuring innovative spatial arrangements and brand-centric environments."
  },





  {
    id: 7,
    images: [Work1],
    title: "Design thinking worksops",
    category: "Workshops",
    description: "A comprehensive mobile banking solution focusing on user-centric financial management and seamless verification flows."
  },


  {
    id: 8,
    images: [collage6, off2, off3, off4, off5],
    title: "Corporate Workspaces",
    category: "Interior design",
    description: "Modern office interiors designed for collaboration, emphasizing Dr. Reddy's brand identity and employee well-being."
  },

  {
    id: 9,
    images: [info5],
    title: "Finance Dashboards",
    category: "Visual Systems",
    description: "Comprehensive Overview As-is Journey. Translating complex financial data into intuitive visual interfaces."
  },


];

function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <motion.div
      className="relative group break-inside-avoid bg-white rounded-3xl overflow-hidden border border-border/50 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => {
        if (project.externalUrl) {
          window.open(project.externalUrl, '_blank');
        } else {
          onClick();
        }
      }}
    >
      <div className="relative overflow-hidden">
        {project.videoUrl ? (
          <div className="w-full aspect-video pointer-events-none">
            <iframe
              src={`${project.videoUrl}&autoplay=1`}
              className="w-full h-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={project.title}
            />
          </div>
        ) : (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Subtle indicator for multiple images */}
        {project.images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Layers className="w-4 h-4" />
          </div>
        )}

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-foreground shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
            {project.externalUrl ? "Visit Website" : (project.images.length > 1 ? "Explore Gallery" : "View Project")}
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
    if (!activeProject) return;
    const totalItems = activeProject.videoUrl ? activeProject.images.length + 1 : activeProject.images.length;
    if (totalItems <= 1) return;

    const interval = setInterval(() => {
      setModalIndex((prev) => (prev + 1) % totalItems);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeProject]);

  const nextImage = () => {
    if (!activeProject) return;
    const totalItems = activeProject.videoUrl ? activeProject.images.length + 1 : activeProject.images.length;
    setModalIndex((prev) => (prev + 1) % totalItems);
  };

  const prevImage = () => {
    if (!activeProject) return;
    const totalItems = activeProject.videoUrl ? activeProject.images.length + 1 : activeProject.images.length;
    setModalIndex((prev) => (prev - 1 + totalItems) % totalItems);
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
            A dynamic showcase of multi-disciplinary work. Click a project to explore its full gallery.
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
                  {modalIndex === 0 && activeProject.videoUrl ? (
                    <motion.div
                      key="video"
                      className="w-full h-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <iframe
                        src={`${activeProject.videoUrl}&autoplay=1`}
                        className="w-full h-full border-0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        title={activeProject.title}
                      />
                    </motion.div>
                  ) : (
                    <motion.img
                      key={activeProject.images[activeProject.videoUrl ? modalIndex - 1 : modalIndex]}
                      src={activeProject.images[activeProject.videoUrl ? modalIndex - 1 : modalIndex]}
                      alt={activeProject.title}
                      className="max-w-full max-h-full object-contain shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] rounded-xl"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  )}
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

                {activeProject.videoUrl || activeProject.images.length > 1 ? (
                  <div className="flex justify-center gap-4 pb-4">
                    {Array.from({ length: activeProject.videoUrl ? activeProject.images.length + 1 : activeProject.images.length }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setModalIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${i === modalIndex ? "bg-primary w-12" : "bg-border hover:bg-primary/30"
                          }`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
