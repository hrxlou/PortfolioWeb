import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import PortfolioGrid from './components/PortfolioGrid';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Layout from './components/Layout';
import { TranslationProvider, useTranslation } from './i18n';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingControls from './components/FloatingControls';
import { motion } from 'framer-motion';
import ProjectModal from './components/ProjectModal';
import { portfolioData } from './data/portfolioData';

type Project = typeof portfolioData.projects[0];

function MainContent({ theme, toggleTheme }: { theme: 'dark' | 'light', toggleTheme: () => void }) {
  const { language } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <ScrollProgressBar />
      <CustomCursor theme={theme} />
      <FloatingControls theme={theme} toggleTheme={toggleTheme} />
      <Layout 
        theme={theme} 
        onNavClick={() => {}}
      >
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Hero />
          <div id="featured">
            <FeaturedProject onOpenProject={handleOpenProject} />
          </div>
          <Skills />
          <PortfolioGrid onOpenProject={handleOpenProject} />
          <Contact />
        </motion.div>

        <ProjectModal 
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Layout>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    document.documentElement.setAttribute('data-theme', theme);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <TranslationProvider>
      <MainContent theme={theme} toggleTheme={toggleTheme} />
    </TranslationProvider>
  );
}

export default App;
