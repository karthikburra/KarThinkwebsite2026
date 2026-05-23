import { motion } from 'framer-motion';
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
                Let's <span className="text-primary">connect.</span>
              </h2>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-foreground mb-3">What I Bring to the Team</h3>
                <p className="text-muted-foreground mb-4">
                  I combine product thinking, AI-powered workflows, and rapid execution to design, build, and deploy products in hours-not weeks.
                </p>
                <p className="text-muted-foreground">
                  Unlike traditional designers, I don’t stop at mockups. I iterate continuously, manage deployments seamlessly, and create user-centric experiences backed by technology and real-world validation.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <a href="mailto:karthikburra2211@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors w-fit group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">karthikburra2211@gmail.com</span>
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Connect</p>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/karthik-burra-75a326a1/" },
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
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                const originalText = submitBtn.innerHTML;

                try {
                  submitBtn.innerHTML = 'Sending...';
                  submitBtn.disabled = true;

                  const formData = new FormData(form);
                  const data = Object.fromEntries(formData.entries());

                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                  });

                  if (!response.ok) {
                    const result = await response.json();
                    throw new Error(result.error || 'Failed to send message');
                  }

                  submitBtn.innerHTML = 'Sent Successfully ✓';
                  submitBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                  form.reset();

                  setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                  }, 3000);

                } catch (error: any) {
                  console.error(error);
                  submitBtn.innerHTML = 'Failed to Send ✕';
                  submitBtn.classList.add('bg-red-600', 'hover:bg-red-700');

                  setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
                  }, 3000);
                }
              }}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" name="name" placeholder="Rahul Sharma" className="bg-background/50 h-12 rounded-xl border-border" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" name="email" type="email" placeholder="rahul@example.com" className="bg-background/50 h-12 rounded-xl border-border" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." className="bg-background/50 min-h-[120px] rounded-xl border-border resize-none" required />
                </div>
                <Button type="submit" className="w-full h-12 rounded-xl text-base transition-colors duration-300" data-testid="button-submit-contact">
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