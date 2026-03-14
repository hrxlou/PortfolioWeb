import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import PortfolioGrid from './components/PortfolioGrid';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Layout from './components/Layout';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const [navKey, setNavKey] = useState(0);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = () => setNavKey(prev => prev + 1);

  return (
    <Layout 
      theme={theme} 
      toggleTheme={toggleTheme} 
      onNavClick={handleNavClick}
    >
      <Hero navKey={navKey} />
      <div id="featured">
        <FeaturedProject navKey={navKey} />
      </div>
      <Skills navKey={navKey} />
      <PortfolioGrid navKey={navKey} />
      <Contact navKey={navKey} />
    </Layout>
  );
}

export default App;
