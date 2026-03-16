import { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';

interface NavbarProps {
  onNavClick: (id: string) => void;
  theme: 'dark' | 'light';
}

const Navbar = ({ onNavClick, theme }: NavbarProps) => {
  const { t } = useTranslation();

  // 첫 렌더링 시점에 즉시 값을 할당하여 깜빡임 방지 (동기화)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);

  useEffect(() => {
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
        paddingTop: `calc(${isBarMode ? '0.8rem' : (isMobile ? '0.7rem' : '1.2rem')} + env(safe-area-inset-top))`,
        paddingBottom: isBarMode ? '0.8rem' : (isMobile ? '0.7rem' : '1.2rem'),
        // all 대신 특정 속성만 지정하여 깜빡임 방지
        transition: 'padding 0.4s ease, background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease',
        background: isBarMode ? glassBg : 'transparent',
        WebkitBackdropFilter: isBarMode ? blurEffect : 'none',
        backdropFilter: isBarMode ? blurEffect : 'none',
        borderBottom: isBarMode ? `1px solid ${glassBorder}` : 'none',
        boxShadow: isBarMode ? shadowEffect : 'none',
      }}
    >
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="gradient-text nav-logo" style={{ fontWeight: 700, fontSize: '1.4rem' }}>
          Hyun's Space
        </div>

        <div
          className="nav-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '0.8rem' : '1.5rem',
            // 트랜지션 타이밍을 최적화하고 투명도 위주로 제어
            transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
            padding: isBarMode ? '0' : '0.5rem 1.1rem',
            borderRadius: '100px', // 고정하여 전환 시 직사각형 현상 방지 (어차피 투명해짐)
            background: isBarMode ? 'transparent' : glassBg,
            // 'none' 대신 'transparent'를 사용하여 테두리 사라짐을 부드럽게 처리
            border: `1px solid ${isBarMode ? 'transparent' : glassBorder}`,
            WebkitBackdropFilter: isBarMode ? 'none' : blurEffect,
            backdropFilter: isBarMode ? 'none' : blurEffect,
            boxShadow: isBarMode ? 'none' : shadowEffect,
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={() => onNavClick(item.id)}
              className="nav-link"
              style={{ fontSize: isMobile ? '0.85rem' : '1rem', fontWeight: 500 }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
