import { motion } from 'framer-motion';
import { Search, Compass, PenTool, Layers, CheckCircle2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Research",
      icon: <Search className="w-6 h-6" />,
      desc: "Deep diving into the problem space, user needs, and business goals."
    },
    {
      id: "02",
      title: "Define",
      icon: <Compass className="w-6 h-6" />,
      desc: "Synthesizing findings into clear constraints and design principles."
    },
    {
      id: "03",
      title: "Ideate",
      icon: <PenTool className="w-6 h-6" />,
      desc: "Exploring multiple conceptual directions without premature judgment."
    },
    {
      id: "04",
      title: "Prototype",
      icon: <Layers className="w-6 h-6" />,
      desc: "Building tangible artifacts to test assumptions quickly."
    },
    {
      id: "05",
      title: "Test",
      icon: <CheckCircle2 className="w-6 h-6" />,
      desc: "Validating solutions with real users and iterating based on feedback."
    },
    {
      id: "06",
      title: "Ship",
      icon: <Rocket className="w-6 h-6" />,
      desc: "Delivering polished, production-ready assets and ensuring quality."
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6"
          >
            How I <span className="text-primary">work.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A non-linear, highly iterative process adaptable to any discipline.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Badge */}
                <div className="text-[10px] font-bold text-muted-foreground mb-4 tracking-widest">{step.id}</div>
                
                {/* Icon Node */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center text-foreground mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300 shadow-sm">
                  {step.icon}
                  {/* Active state dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(255,107,53,0.5)]" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}