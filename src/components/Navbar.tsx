import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavClick: (id: string) => void;
  theme: 'dark' | 'light';
}

const Navbar = ({ onNavClick, theme }: NavbarProps) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 감지 로직
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navLinks = [
    { name: t('nav.home'), id: 'hero' },
    { name: t('nav.featured'), id: 'featured' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.portfolio'), id: 'portfolio' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  // 테마별 색상 정의
  const glassBg = theme === 'dark' ? 'rgba(15, 17, 21, 0.75)' : 'rgba(255, 255, 255, 0.75)';
  const glassBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.1)';

  return (
    <nav
      className="fixed-nav"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: isMobile ? '1.2rem 0' : '0.8rem 0', // 모바일일 때 여백 조정
        transition: 'all 0.3s ease',
        /* ✅ PC일 때만 전체 배경바 적용, 모바일은 투명 */
        background: isMobile ? 'transparent' : glassBg,
        WebkitBackdropFilter: isMobile ? 'none' : 'blur(12px) saturate(180%)',
        backdropFilter: isMobile ? 'none' : 'blur(12px) saturate(180%)',
        borderBottom: !isMobile ? `1px solid ${glassBorder}` : 'none',
      }}
    >
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="gradient-text nav-logo"
          style={{ fontWeight: 700, fontSize: '1.2rem' }}
        >
          Hyun's Space
        </motion.a>

        <motion.div
          className="nav-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '1rem' : '1.5rem',
            padding: '0.5rem 1.25rem',
            borderRadius: '100px',
            transition: 'all 0.3s ease',

            /* ✅ 모바일일 때만 '알약' 스타일 적용, PC는 투명 */
            background: isMobile ? glassBg : 'transparent',
            border: isMobile ? `1px solid ${glassBorder}` : 'none',
            WebkitBackdropFilter: isMobile ? 'blur(12px) saturate(180%)' : 'none',
            backdropFilter: isMobile ? 'blur(12px) saturate(180%)' : 'none',
            boxShadow: isMobile ? '0 4px 30px rgba(0, 0, 0, 0.2)' : 'none',
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
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