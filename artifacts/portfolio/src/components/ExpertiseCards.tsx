import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Zap } from 'lucide-react';

export default function ExpertiseCards() {
  const brings = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Thinking",
      desc: "Aligning user needs with business goals to create meaningful impact."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Cross-disciplinary Insights",
      desc: "Solve complex problems through a multi-domain lens"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Prototyping",
      desc: "Moving quickly from abstract ideas to testable, tangible solutions."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "End-to-End Execution",
      desc: "Taking ownership from initial research all the way to shipping."
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            I don't just design how things <span className="text-primary">look,</span> I design how they <span className="text-primary">work,</span> how they <span className="text-primary">feel,</span> and why they <span className="text-primary">exist.</span>
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
                <h4 className="font-bold text-zinc-900 mb-2 text-lg leading-tight">{item.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
