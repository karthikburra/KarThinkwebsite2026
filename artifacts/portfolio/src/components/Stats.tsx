import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Projects Shipped" },
    { value: "3", label: "Disciplines Mastered" },
    { value: "10+", label: "Happy Clients" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <h4 className="text-4xl md:text-5xl font-bold font-serif mb-2">{stat.value}</h4>
              <p className="text-sm md:text-base font-medium opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}