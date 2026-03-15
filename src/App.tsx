import { useState, useEffect, lazy, Suspense } from 'react';
import Hero from './components/Hero';
import Layout from './components/Layout';
import { TranslationProvider, useTranslation } from './i18n';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingControls from './components/FloatingControls';
import { motion } from 'framer-motion';
import { portfolioData } from './data/portfolioData';
import Skeleton from './components/Skeleton';

// Lazy loaded components
const FeaturedProject = lazy(() => import('./components/FeaturedProject'));
const PortfolioGrid = lazy(() => import('./components/PortfolioGrid'));
const Contact = lazy(() => import('./components/Contact'));
const Skills = lazy(() => import('./components/Skills'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));

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
          initial={false} // 초기 렌더링 시에는 애니메이션 생략 (깜빡임 방지)
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Hero />
          <Suspense fallback={<div className="container" style={{ padding: '100px 0' }}><Skeleton height="400px" borderRadius="24px" /></div>}>
            <div id="featured">
              <FeaturedProject onOpenProject={handleOpenProject} />
            </div>
            <Skills />
            <PortfolioGrid onOpenProject={handleOpenProject} />
            <Contact />
          </Suspense>
        </motion.div>

        <Suspense fallback={null}>
          <ProjectModal 
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
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
    // Scroll to top only on initial mount (refresh)
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
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
