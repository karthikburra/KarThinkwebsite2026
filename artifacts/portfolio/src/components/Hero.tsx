import { motion } from 'framer-motion';
import heroIllustration from '../assets/hero-illustration.png';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white pt-20">
      <motion.div
        className="w-full relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={heroIllustration}
          alt="Karthik Burra — Product Designer Who Ships"
          className="w-full h-auto block"
          data-testid="hero-illustration"
        />
      </motion.div>
    </section>
  );
}
