import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';

interface NavbarProps {
  onNavClick: (id: string) => void;
  theme: 'dark' | 'light';
}

const Navbar = ({ onNavClick, theme }: NavbarProps) => {
  const { t } = useTranslation();

  // 초기 상태를 안전하게 시작 (flicker 방지)
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('nav.home'), id: 'hero' },
    { name: t('nav.featured'), id: 'featured' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.portfolio'), id: 'portfolio' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  const glassBg = theme === 'dark' ? 'rgba(15, 17, 21, 0.75)' : 'rgba(255, 255, 255, 0.85)';
  const glassBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.1)';
  const blurEffect = 'blur(12px) saturate(180%)';
  const shadowEffect = theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.08)';

  const isBarMode = !isMobile && isScrolled;

  return (
    <nav
      className="fixed-nav"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: isBarMode ? '0.8rem 0' : (isMobile ? '0.7rem 0' : '1.2rem 0'),
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isBarMode ? glassBg : 'transparent',
        WebkitBackdropFilter: isBarMode ? blurEffect : 'none',
        backdropFilter: isBarMode ? blurEffect : 'none',
        borderBottom: isBarMode ? `1px solid ${glassBorder}` : 'none',
        boxShadow: isBarMode ? shadowEffect : 'none',
        opacity: isMounted ? 1 : 0, // 마운트 전에는 숨김
      }}
    >
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.a
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMounted ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="gradient-text nav-logo"
        >
          Hyun's Space
        </motion.a>

        <motion.div
          className="nav-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '0.8rem' : '1.5rem',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: isBarMode ? '0' : '0.5rem 1.1rem',
            borderRadius: isBarMode ? '0' : '100px',
            background: isBarMode ? 'transparent' : glassBg,
            border: isBarMode ? 'none' : `1px solid ${glassBorder}`,
            WebkitBackdropFilter: isBarMode ? 'none' : blurEffect,
            backdropFilter: isBarMode ? 'none' : blurEffect,
            boxShadow: isBarMode ? 'none' : shadowEffect,
          }}
          initial={{ opacity: 0, scale: isMobile ? 0.95 : 1 }}
          animate={{ opacity: isMounted ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={() => onNavClick(item.id)}
              className="nav-link"
              style={{ fontSize: isMobile ? '0.85rem' : '1rem' }}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;