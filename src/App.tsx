import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import PortfolioGrid from './components/PortfolioGrid';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Layout from './components/Layout';
import { TranslationProvider } from './i18n';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingControls from './components/FloatingControls';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
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
      <ScrollProgressBar />
      <CustomCursor theme={theme} />
      <FloatingControls theme={theme} toggleTheme={toggleTheme} />
      <Layout 
        theme={theme} 
        onNavClick={() => {}}
      >
        <Hero />
        <div id="featured">
          <FeaturedProject />
        </div>
        <Skills />
        <PortfolioGrid />
        <Contact />
      </Layout>
    </TranslationProvider>
  );
}

export default App;
