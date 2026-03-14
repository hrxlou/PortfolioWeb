import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavClick: () => void;
}

const Navbar = ({ onNavClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#featured' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{ 
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, 
      padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo Section */}
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="gradient-text nav-logo"
          style={{ fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
        >
          Developer Portfolio
        </motion.a>

        {/* Right Menu Section */}
        <motion.div 
          className="glass nav-menu"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ 
            padding: '0.4rem 1.25rem', 
            display: 'flex', 
            gap: '1.5rem',
            background: scrolled ? 'var(--glass-bg)' : 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={onNavClick} className="nav-link" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
              {item.name}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
