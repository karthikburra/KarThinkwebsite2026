import { Heart } from 'lucide-react';
import logo from '../assets/tree-logo-final.png';

export default function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-serif tracking-tight inline-flex items-center gap-1.5">
          <img src={logo} alt="DC Architects Logo" className="h-10 w-auto object-contain" />
          <span style={{ fontFamily: 'Poppins, sans-serif' }}><span className="font-bold text-foreground">DC</span><span className="font-normal text-foreground ml-1">Architects</span></span>
        </a>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DC Architects. All rights reserved.
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