import { useState } from 'react';
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
import PostsAndBlogs from '@/components/PostsAndBlogs';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar onAboutClick={() => setIsChatOpen(true)} />
        <main>
          <Hero />
          <ExpertiseBanner />
          <ExpertiseCards />
          <SelectedProjects />
          <PostsAndBlogs />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      </div>
    </ThemeProvider>
  );
}

export default App;