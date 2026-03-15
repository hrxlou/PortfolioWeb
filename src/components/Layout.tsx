import type { ReactNode } from 'react';
import Navbar from './Navbar';
import BackgroundEffects from './BackgroundEffects';

interface LayoutProps {
  children: ReactNode;
  theme: 'dark' | 'light';
  onNavClick?: () => void;
}

const Layout = ({ children, theme, onNavClick }: LayoutProps) => {
  return (
    <main className="main-layout">
      <BackgroundEffects theme={theme} />
      <Navbar theme={theme} onNavClick={onNavClick || (() => {})} />
      
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
