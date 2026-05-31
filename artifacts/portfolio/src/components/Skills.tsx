import { motion } from 'framer-motion';
import { Monitor, Image as ImageIcon } from 'lucide-react';
import { SiAutodesk, SiSketch } from 'react-icons/si';

export default function Skills() {
  const tools = [
    { name: "AutoCAD", icon: <SiAutodesk size={40} /> },
    { name: "SketchUp", icon: <SiSketch size={40} /> },
    { name: "Lumion", icon: <Monitor size={40} /> },
    { name: "Revit", icon: <SiAutodesk size={40} /> },
    { name: "Photoshop", icon: <ImageIcon size={40} /> }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0A1F13] relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
          >
            Tools of the <span className="text-green-400">trade.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {tools.map((tool) => (
              <div 
                key={tool.name}
                className="flex flex-col items-center justify-center gap-4 w-32 h-32 rounded-2xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20 shadow-lg"
              >
                <div className="text-white drop-shadow-sm">{tool.icon}</div>
                <span className="text-sm font-semibold text-zinc-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}