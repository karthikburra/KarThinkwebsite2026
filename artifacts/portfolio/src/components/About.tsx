import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-4">
              Principal Architect
            </h2>
            <h3 className="text-2xl font-bold text-primary mb-2">Ar. Dolly Chandrawanshi</h3>
            <p className="text-lg text-zinc-500 font-medium">
              DC Architects, Bamboo Made <br />
              Architect | Landscape Designer | Artist
            </p>
          </motion.div>

          <div className="space-y-8 text-lg text-zinc-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Dolly is an architect with a deep passion for traditional and sustainable design. Her childhood village home, made of mud, bamboo & timber, Inspired her to explore the potential of local materials and techniques, to achieve eco-friendly design.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Graduated with honors with a Bachelor of Architecture from NIT Raipur, Dolly also worked on government projects like Vidhan Sabha and other public buildings as well as housing projects of Raipur as an Architect and landscape designer.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="mb-4">
                She worked with the artisans of Bastar, honing her skills in bamboo and timber products. Attending workshops on bamboo building from DBBB (Designing Better Bamboo Buildings) Australia, and Base Bahay Foundation, Singapore, gave her a deeper understanding of the technical aspects of building with bamboo. Her past work as a Mentor includes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-zinc-700 font-medium bg-zinc-50 p-8 rounded-2xl border border-zinc-100 shadow-sm">
                <li>ICFAI School of Architecture, Hyderabad</li>
                <li>Community Training at Sirpur, Chhattisgarh</li>
                <li>Volunteer at the International Bamboo Festival, Kuala Lumpur, Malaysia</li>
                <li>03 days Workshop at MANIT, Bhopal</li>
                <li>05-day bond with the bamboo workshop at the School of Planning and Architecture, Delhi</li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl font-medium text-zinc-900 border-l-4 border-primary pl-6 py-2 bg-zinc-50/50"
            >
              She founded DC Architects, the firm committed to creating architecture that is not only aesthetically pleasing but also has a positive impact on the environment and the communities it serves.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
