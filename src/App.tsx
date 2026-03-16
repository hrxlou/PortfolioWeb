import { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import Layout from './components/Layout';
import { TranslationProvider, useTranslation, TranslationContext, getTranslation } from './i18n';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingControls from './components/FloatingControls';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from './data/portfolioData';
import Skeleton from './components/Skeleton';
import BackgroundEffects from './components/BackgroundEffects';

// Lazy loaded components
const FeaturedProject = lazy(() => import('./components/FeaturedProject'));
const PortfolioGrid = lazy(() => import('./components/PortfolioGrid'));
const Contact = lazy(() => import('./components/Contact'));
const Skills = lazy(() => import('./components/Skills'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));

type Project = typeof portfolioData.projects[0];

function LanguageContainer({ language, children }: { language: string, children: React.ReactNode }) {
  const { setLanguage } = useTranslation();
  const frozenT = (path: string) => getTranslation(language as any, path);

  return (
    <TranslationContext.Provider value={{ language: language as any, setLanguage, t: frozenT }}>
      {children}
    </TranslationContext.Provider>
  );
}

function MainContent({ theme, toggleTheme }: { theme: 'dark' | 'light', toggleTheme: () => void }) {
  const { language, t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // URL 파라미터 기반 프로젝트 모달 동기화
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    if (projectId) {
      const project = portfolioData.projects.find(p => p.id === projectId);
      if (project) setSelectedProject(project);
    }

    const handlePopState = () => {
      const newParams = new URLSearchParams(window.location.search);
      const newProjectId = newParams.get('project');
      if (newProjectId) {
        const project = portfolioData.projects.find(p => p.id === newProjectId);
        setSelectedProject(project || null);
      } else {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    const url = new URL(window.location.href);
    url.searchParams.set('project', project.id);
    window.history.pushState({}, '', url);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    window.history.pushState({}, '', url);
  };

  const seoTitle = useMemo(() => {
    if (selectedProject) {
      const projectTitle = language === 'ko' ? selectedProject.title : selectedProject.titleEn;
      return `${projectTitle} | ${t('common.name')}`;
    }
    return t('hero.title');
  }, [selectedProject, language, t]);

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={t('hero.subtitle')} />
        <html lang={language} />
      </Helmet>
      <ScrollProgressBar />
      <CustomCursor theme={theme} />
      <FloatingControls theme={theme} toggleTheme={toggleTheme} />
      <BackgroundEffects />
      <Layout
        theme={theme}
        onNavClick={() => { }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <LanguageContainer language={language}>
              <Hero />
              <Suspense fallback={<div className="container" style={{ padding: '100px 0' }}><Skeleton height="400px" borderRadius="24px" /></div>}>
                <div id="featured">
                  <FeaturedProject onOpenProject={handleOpenProject} />
                </div>
                <Skills />
                <PortfolioGrid onOpenProject={handleOpenProject} />
                <Contact />
              </Suspense>
            </LanguageContainer>
          </motion.div>
        </AnimatePresence>

        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={handleCloseProject}
          />
        </Suspense>
      </Layout>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  useEffect(() => {
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
    <HelmetProvider>
      <TranslationProvider>
        <MainContent theme={theme} toggleTheme={toggleTheme} />
      </TranslationProvider>
    </HelmetProvider>
  );
}

export default App;
