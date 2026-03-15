import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';

interface NavbarProps {
  onNavClick: (id: string) => void;
  theme: 'dark' | 'light';
}

const Navbar = ({ onNavClick, theme }: NavbarProps) => {
  const { t } = useTranslation();

  // 초기값을 null로 설정하여 첫 렌더링 시의 불필요한 레이아웃 계산을 방지하거나, 
  // 클라이언트 사이드에서 즉시 확인하도록 수정
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleResize();
    handleScroll();

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

  // 모바일 여부가 결정되기 전에는 기본적으로 투명하게 유지하여 깜빡임 방지
  if (isMobile === null) return null;

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
      }}
    >
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.a
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="gradient-text nav-logo"
        >
          Hyun's Space
        </motion.a>

        <motion.div
          className="nav-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '0.85rem' : '1.5rem',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: isBarMode ? '0' : '0.5rem 1.1rem',
            borderRadius: isBarMode ? '0' : '100px',
            background: isBarMode ? 'transparent' : glassBg,
            border: isBarMode ? 'none' : `1px solid ${glassBorder}`,
            WebkitBackdropFilter: isBarMode ? 'none' : blurEffect,
            backdropFilter: isBarMode ? 'none' : blurEffect,
            boxShadow: isBarMode ? 'none' : shadowEffect,
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
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