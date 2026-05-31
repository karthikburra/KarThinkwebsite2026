import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Sprout, Zap } from 'lucide-react';

export default function ExpertiseCards() {
  const brings = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Master Planning",
      desc: "Aligning client vision and regulatory codes with ecological systems to generate long-term project value."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Multidisciplinary Synthesis",
      desc: "Merging fine art, environmental science, and civil engineering to resolve complex spatial challenges."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Immersive Spatial Modeling",
      desc: "Using advanced 3D simulations and virtual walkthroughs to test layout concepts before breaking ground."
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Concept-to-Construction Delivery",
      desc: "Exercising complete project oversight from initial soil testing to final planting and site handover."
    }
  ];

  return (
    <section className="bg-[#0A1F13] py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center max-w-4xl mx-auto leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            We don't just design how outdoor spaces <span className="text-green-400">look,</span> we design how they <span className="text-green-400">work,</span> how they <span className="text-green-400">feel,</span> and why they <span className="text-green-400">thrive.</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brings.map((item, i) => (
              <motion.div 
                key={i}
                className="bg-white border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:scale-[1.02] transition-all duration-300 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-zinc-900 text-lg leading-tight">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
