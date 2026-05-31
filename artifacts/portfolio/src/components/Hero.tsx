import { motion } from 'framer-motion';
import heroGraphic from '../assets/hero-graphic.jpg';
import heroCenter from '../assets/hero-center.png';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Aligned */}
          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight leading-tight w-full">
              We are <span className="whitespace-nowrap"><span className="text-primary">DC Architects</span>.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground w-full">
              Transforming spaces through innovative design, sustainable architecture, and a passion for creating enduring environments.
            </p>
          </motion.div>

          {/* Graphic - Right Side */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <img 
                  src={heroGraphic} 
                  alt="Ecosystem Graphic" 
                  className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
                />
                <motion.img
                  src={heroCenter}
                  alt="Species Data"
                  className="absolute z-10 w-[15%] object-contain mix-blend-screen pointer-events-none"
                  style={{ top: '50%', left: '50%' }}
                  initial={{ x: "-50%", y: "-50%", rotate: 0 }}
                  animate={{ x: "-50%", y: "-50%", rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
