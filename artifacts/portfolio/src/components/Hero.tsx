import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png';
import { Layout, PenTool, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-background pt-16">

      {/* Full-width hero image */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <img
          src={heroImage}
          alt="Karthik — Product Designer"
          className="w-full h-auto block"
          data-testid="img-hero-avatar"
        />

        {/* Discipline chips — overlaid at bottom of image */}
        <motion.div
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {[
            { icon: <Layout size={13} />, label: 'UI/UX Design' },
            { icon: <Home size={13} />, label: 'Architecture' },
            { icon: <PenTool size={13} />, label: 'Visual Design' },
          ].map((chip, i) => (
            <motion.button
              key={chip.label}
              className="flex items-center gap-1.5 bg-white/80 dark:bg-card/80 backdrop-blur-md border border-border rounded-full px-3 py-1.5 text-xs font-semibold text-foreground shadow-md cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              data-testid={`chip-discipline-${i}`}
            >
              <span className="text-primary">{chip.icon}</span>
              {chip.label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA row below the image */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Button
          size="lg"
          className="w-full sm:w-auto px-8 text-base rounded-full"
          onClick={scrollToWork}
          data-testid="button-view-work"
        >
          View My Work <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto px-8 text-base rounded-full"
          onClick={scrollToContact}
          data-testid="button-get-in-touch"
        >
          Get In Touch
        </Button>
      </motion.div>

    </section>
  );
}
