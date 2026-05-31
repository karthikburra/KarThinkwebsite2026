import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExpertiseCards from '@/components/ExpertiseCards';
import About from '@/components/About';
import SelectedProjects from '@/components/SelectedProjects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <ExpertiseCards />
          <About />
          <SelectedProjects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;