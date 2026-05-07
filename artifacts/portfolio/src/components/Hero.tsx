import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png';

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

      </motion.div>


    </section>
  );
}
