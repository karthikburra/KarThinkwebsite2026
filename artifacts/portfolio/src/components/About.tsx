import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Zap } from 'lucide-react';

export default function About() {
  const brings = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Strategic Thinking",
      desc: "Aligning user needs with business goals to create meaningful impact."
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Cross-disciplinary Insights",
      desc: "Blending architectural principles with digital product design."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Rapid Prototyping",
      desc: "Moving quickly from abstract ideas to testable, tangible solutions."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "End-to-End Execution",
      desc: "Taking ownership from initial research all the way to shipping."
    }
  ];

  return (
    <section id="about" className="pt-10 pb-24 md:pb-32 bg-background relative">
      <div className="container mx-auto px-6">

        {/* Full-width quote above section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-serif font-semibold text-foreground leading-snug">
            I don't just design how things <span className="text-primary">look;</span> I design how they <span className="text-primary">work,</span> how they <span className="text-primary">feel,</span> and why they <span className="text-primary">exist.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              A little about <span className="text-primary">me.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With a foundation in Architecture and a passion for digital experiences, I've spent the last 5 years bridging the gap between physical spaces and digital interfaces. 
              </p>
              <p>
                I believe that good design is invisible—it solves problems quietly and elegantly. Whether I'm designing a complex enterprise dashboard, a striking brand identity, or conceptualizing spatial flows, my approach remains the same: understand the human, define the constraints, and craft the solution.
              </p>
            </div>
          </motion.div>

          {/* What I Bring Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-[2rem] p-8 md:p-10 shadow-lg"
          >
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              What I bring to the table
            </h3>
            
            <div className="grid gap-6">
              {brings.map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex gap-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}