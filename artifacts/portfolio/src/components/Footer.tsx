import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-serif tracking-tight inline-flex items-center gap-1.5">
          <Brain size={20} className="text-primary" strokeWidth={2.5} />
          <span className="font-normal text-foreground">kar</span><span className="font-bold text-primary">THINK</span>
        </a>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Karthik. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          {['About', 'Work', 'Contact'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}