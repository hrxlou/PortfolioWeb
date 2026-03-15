import type { ReactNode } from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import BackgroundEffects from './BackgroundEffects';

interface LayoutProps {
  children: ReactNode;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onNavClick?: () => void;
}

const Layout = ({ children, theme, toggleTheme, onNavClick }: LayoutProps) => {
  return (
    <main className="main-layout">
      <BackgroundEffects theme={theme} />
      <Navbar theme={theme} onNavClick={onNavClick || (() => {})} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <div className="content-relative">
        {children}
      </div>

      <footer className="footer container">
        <p className="footer-text">
          © {new Date().getFullYear()} Developer Portfolio. Built with React & Framer Motion.
        </p>
      </footer>
    </main>
  );
};

export default Layout;
