import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Disciplines from '@/components/Disciplines';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-[100dvh] bg-background text-foreground font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Disciplines />
          <Work />
          <Process />
          <Skills />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;