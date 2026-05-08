import React from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Project <span className="text-primary">Deep Dive.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A visual walkthrough of the systems and processes in action.
            </p>
          </div>

          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-card">
            <iframe
              src="https://drive.google.com/file/d/1cuNCBC2fjjJ9LZwK1iR3ZctOTbn_BsUU/preview"
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
