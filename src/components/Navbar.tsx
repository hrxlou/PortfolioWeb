import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';

interface NavbarProps {
  onNavClick: (id: string) => void;
  theme: 'dark' | 'light';
}

const Navbar = ({ onNavClick, theme }: NavbarProps) => {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 화면 크기 & 스크롤 감지
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    // 초기 상태 세팅
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

  // 테마별 디자인 변수 세팅 (라이트 모드에서도 잘 보이게 그림자 추가)
  const glassBg = theme === 'dark' ? 'rgba(15, 17, 21, 0.75)' : 'rgba(255, 255, 255, 0.85)';
  const glassBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.1)';
  const blurEffect = 'blur(12px) saturate(180%)';
  const shadowEffect = theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.08)';

  // 띠(Bar) 모드 발동 조건: "모바일이 아니면서" AND "스크롤을 내렸을 때"
  const isBarMode = !isMobile && isScrolled;

  return (
    <nav
      className="fixed-nav"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: isBarMode ? '0.8rem 0' : '1.2rem 0', // 띠 모드일 땐 얇게, 알약일 땐 넉넉하게
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',

        /* [전체 네비바] 띠(Bar) 모드일 때만 배경, 블러, 띠(테두리/그림자) 적용 */
        background: isBarMode ? glassBg : 'transparent',
        WebkitBackdropFilter: isBarMode ? blurEffect : 'none',
        backdropFilter: isBarMode ? blurEffect : 'none',
        borderBottom: isBarMode ? `1px solid ${glassBorder}` : 'none',
        boxShadow: isBarMode ? shadowEffect : 'none', // 잃어버린 띠 그림자 복구!
      }}
    >
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="gradient-text nav-logo"
        >
          Hyun's Space
        </motion.a>

        <motion.div
          className="nav-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '1rem' : '1.5rem',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',

            /* [메뉴 부분] 띠(Bar) 모드가 아닐 때(=알약 모드일 때) 개별 스타일 적용 */
            padding: isBarMode ? '0' : '0.5rem 1.25rem',
            borderRadius: isBarMode ? '0' : '100px',
            background: isBarMode ? 'transparent' : glassBg,
            border: isBarMode ? 'none' : `1px solid ${glassBorder}`,
            WebkitBackdropFilter: isBarMode ? 'none' : blurEffect,
            backdropFilter: isBarMode ? 'none' : blurEffect,
            boxShadow: isBarMode ? 'none' : shadowEffect, // 알약일 때의 그림자 복구!
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