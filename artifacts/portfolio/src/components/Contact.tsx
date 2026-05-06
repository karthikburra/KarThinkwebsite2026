import { motion } from 'framer-motion';
import { SiDribbble, SiBehance } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Let's build something <span className="text-primary">together.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Whether you have a specific project in mind or just want to say hi, I'm always open to discussing new opportunities.
              </p>

              <div className="space-y-6 mb-12">
                <a href="mailto:hello@karthink.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors w-fit group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">hello@karthink.com</span>
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Connect</p>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                    { icon: <SiDribbble className="w-5 h-5" />, href: "#" },
                    { icon: <SiBehance className="w-5 h-5" />, href: "#" },
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                      data-testid={`link-social-${i}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background/50 h-12 rounded-xl border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 h-12 rounded-xl border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="bg-background/50 min-h-[120px] rounded-xl border-border resize-none" />
                </div>
                <Button className="w-full h-12 rounded-xl text-base" data-testid="button-submit-contact">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}