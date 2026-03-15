import { useState, useEffect, lazy, Suspense } from 'react';
import Hero from './components/Hero';
import Layout from './components/Layout';
import { TranslationProvider, useTranslation, TranslationContext, getTranslation } from './i18n';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingControls from './components/FloatingControls';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from './data/portfolioData';
import Skeleton from './components/Skeleton';

// Lazy loaded components
const FeaturedProject = lazy(() => import('./components/FeaturedProject'));
const PortfolioGrid = lazy(() => import('./components/PortfolioGrid'));
const Contact = lazy(() => import('./components/Contact'));
const Skills = lazy(() => import('./components/Skills'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));

type Project = typeof portfolioData.projects[0];

/**
 * LanguageContainer는 AnimatePresence의 퇴장 애니메이션이 진행되는 동안 
 * 해당 컴포넌트 트리의 언어 상태를 고정시켜 깜빡임을 방지합니다.
 */
function LanguageContainer({ language, children }: { language: string, children: React.ReactNode }) {
  const { setLanguage } = useTranslation();

  // 전달받은 language props에 수동으로 바인딩된 t 함수를 생성하여 하위 컴포넌트에 주입
  const frozenT = (path: string) => getTranslation(language as any, path);

  return (
    <TranslationContext.Provider value={{ language: language as any, setLanguage, t: frozenT }}>
      {children}
    </TranslationContext.Provider>
  );
}

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
    
    // iOS 사파리 시스템 UI 색상 동적 업데이트 (Nuclear Option 1)
    const themeColor = theme === 'light' ? '#f8fafc' : '#0f1115';
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    } else {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      metaThemeColor.setAttribute('content', themeColor);
      document.head.appendChild(metaThemeColor);
    }
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
