import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExpertiseBanner from '@/components/ExpertiseBanner';
import ExpertiseCards from '@/components/ExpertiseCards';
import SelectedProjects from '@/components/SelectedProjects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <ExpertiseBanner />
          <ExpertiseCards />
          <SelectedProjects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}

export default App;