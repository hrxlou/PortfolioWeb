import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import PortfolioGrid from './components/PortfolioGrid';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark'; // Default to dark
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Background decoration */}
      <div style={{ 
        position: 'fixed', 
        top: '-10%', 
        right: '-10%', 
        width: '50vw', 
        height: '50vw', 
        background: theme === 'dark' 
          ? 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(0,0,0,0) 70%)'
          : 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{ 
        position: 'fixed', 
        bottom: '-10%', 
        left: '-10%', 
        width: '50vw', 
        height: '50vw', 
        background: theme === 'dark'
          ? 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(0,0,0,0) 70%)'
          : 'radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <FeaturedProject />
        <PortfolioGrid />
        <Contact />
      </div>

      <footer className="container" style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2026 Developer Portfolio. Built with React & Framer Motion.
        </p>
      </footer>
    </main>
  );
}


export default App;
