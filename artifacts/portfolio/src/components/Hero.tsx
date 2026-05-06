import { motion } from 'framer-motion';
import heroImage from "@assets/Gemini_Generated_Image_u7jbtuu7jbtuu7jb_1778082853055.png";
import { ArrowRight, Layout, PenTool, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            I'm Karthik,<br />
            <span className="text-primary">Product Designer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            A doer, thinker, and maker. Creating impact across disciplines through thoughtful UI/UX, Architecture, and Visual Design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full" onClick={scrollToWork} data-testid="button-view-work">
              View My Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full" onClick={scrollToContact} data-testid="button-get-in-touch">
              Get In Touch
            </Button>
          </div>
        </motion.div>

        {/* Image & Floating Cards */}
        <motion.div 
          className="flex-1 relative max-w-lg mx-auto w-full aspect-square md:aspect-[4/3] lg:aspect-square mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main Image */}
          <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-tr from-primary/20 to-orange-100 dark:from-primary/10 dark:to-orange-900/20 p-2 shadow-2xl">
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <img 
              src={heroImage} 
              alt="Karthik Illustration" 
              className="w-full h-full object-cover object-center rounded-[1.5rem] md:rounded-[2.5rem]"
              data-testid="img-hero-avatar"
            />
          </div>

          {/* Floating Card 1: UI/UX */}
          <motion.div 
            className="absolute top-[10%] -left-[5%] md:-left-[10%] bg-card p-3 md:p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer z-20 group"
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ opacity: { delay: 0.5 }, x: { delay: 0.5 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Layout size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Discipline</p>
              <p className="text-sm font-bold text-foreground">UI/UX Design</p>
            </div>
          </motion.div>

          {/* Floating Card 2: 5 Years */}
          <motion.div 
            className="absolute top-[50%] -right-[5%] md:-right-[15%] bg-card p-3 md:p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{ opacity: { delay: 0.7 }, x: { delay: 0.7 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-card text-[10px]">⭐</div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">5 Years</p>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Architecture */}
          <motion.div 
            className="absolute bottom-[10%] -left-[2%] md:left-[5%] bg-card p-3 rounded-2xl shadow-xl border border-border flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer z-20 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: 0.9 }, y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 } }}
          >
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Home size={20} />
            </div>
            <div className="pr-2">
              <p className="text-sm font-bold text-foreground">Architecture</p>
            </div>
          </motion.div>
          
          {/* Floating Card 4: Visual Design */}
          <motion.div 
            className="absolute bottom-[20%] right-[0%] md:right-[5%] bg-card p-3 rounded-2xl shadow-xl border border-border flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer z-20 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ opacity: { delay: 1.1 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2 } }}
          >
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <PenTool size={20} />
            </div>
            <div className="pr-2">
              <p className="text-sm font-bold text-foreground">Visual Design</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}