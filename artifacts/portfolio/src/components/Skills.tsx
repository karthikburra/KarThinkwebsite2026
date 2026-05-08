import { motion } from 'framer-motion';
import { Film, PenTool, ImageIcon, Bot, Code2 } from 'lucide-react';
import { SiFigma, SiSketch, SiFramer, SiAutodesk } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';

export default function Skills() {
  const toolGroups = [
    {
      title: "UI/UX Design",
      tools: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Sketch", icon: <SiSketch /> },
        { name: "Adobe XD", icon: <PenTool size={24} /> },
        { name: "Framer", icon: <SiFramer /> }
      ]
    },
    {
      title: "Architecture",
      tools: [
        { name: "AutoCAD", icon: <SiAutodesk /> },
        { name: "Revit", icon: <SiAutodesk /> }, // Using generic autodesk for Revit
        { name: "SketchUp", icon: <SiSketch /> } // Placeholder for sketchup
      ]
    },
    {
      title: "Visual Design",
      tools: [
        { name: "Illustrator", icon: <PenTool size={24} /> },
        { name: "Photoshop", icon: <ImageIcon size={24} /> },
        { name: "After Effects", icon: <Film size={24} /> }
      ]
    },
    {
      title: "Dev & AI",
      tools: [
        { name: "HTML", icon: <FaHtml5 size={24} /> },
        { name: "CSS", icon: <FaCss3Alt size={24} /> },
        { name: "GitHub", icon: <FaGithub size={24} /> },
        { name: "AI Tools", icon: <Bot size={24} /> },
        { name: "Vibecoding", icon: <Code2 size={24} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
          >
            Tools of the <span className="text-primary">trade.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-8 text-center">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {group.tools.map((tool, j) => (
                  <div 
                    key={tool.name}
                    className="flex flex-col items-center justify-center gap-3 w-24 h-24 rounded-2xl hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-700"
                  >
                    <div className="text-4xl text-white drop-shadow-sm">{tool.icon}</div>
                    <span className="text-xs font-semibold text-zinc-400">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}