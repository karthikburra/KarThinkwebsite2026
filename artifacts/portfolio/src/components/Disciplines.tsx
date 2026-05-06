import { motion } from 'framer-motion';
import { Layout, Home, PenTool, ArrowRight } from 'lucide-react';

export default function Disciplines() {
  const disciplines = [
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: <Layout className="w-8 h-8" />,
      desc: "Crafting intuitive digital experiences that balance user needs with business objectives.",
      skills: ["Wireframing", "Prototyping", "Design Systems", "User Research"]
    },
    {
      id: "architecture",
      title: "Architecture",
      icon: <Home className="w-8 h-8" />,
      desc: "Designing spatial experiences that harmonize form, function, and human flow.",
      skills: ["Spatial Planning", "3D Modeling", "Concept Design", "Drafting"]
    },
    {
      id: "visual",
      title: "Visual Design",
      icon: <PenTool className="w-8 h-8" />,
      desc: "Creating compelling visual narratives through typography, color, and composition.",
      skills: ["Brand Identity", "Typography", "Illustration", "Motion Graphics"]
    }
  ];

  return (
    <section id="disciplines" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Three disciplines.<br/>
            <span className="text-primary">One cohesive approach.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            I leverage principles from different fields to solve problems creatively. The medium changes, but the goal is always impact.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover Background Accent */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {d.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{d.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 group-hover:line-clamp-none transition-all">{d.desc}</p>
                
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground/60">Core Capabilities</p>
                  <ul className="space-y-2">
                    {d.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-foreground gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}