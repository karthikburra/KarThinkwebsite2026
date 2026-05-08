import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-serif tracking-tight inline-flex items-center gap-1.5">
          <Heart size={24} className="text-primary fill-primary" strokeWidth={0} />
          <span style={{ fontFamily: 'Poppins, sans-serif' }}><span className="font-normal text-foreground">kar</span><span className="font-bold text-primary">think</span></span>
        </a>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Karthik. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          {['About', 'Contact'].map((link) => (
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