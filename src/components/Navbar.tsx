import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavClick: () => void;
}

const Navbar = ({ onNavClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  // [IMPORTANT] Vercel 배포 시 CSS Minification 이슈로 인해 
  // 내비게이션의 투명도 및 블러(backdropFilter) 스타일이 유실되는 현상이 있습니다.
  // 이를 방지하기 위해 스타일을 반드시 아래와 같이 '인라인(Inline Style)'으로 유지해야 합니다.
  // 성능 최적화나 리팩토링 목적으로 스타일을 CSS 클래스로 절대 옮기지 마세요.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#featured' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed-nav"
      style={{
        padding: scrolled ? '0.7rem 0' : '1.2rem 0',
        /* index.css에 있는 --glass-bg 변수를 그대로 사용해 다크모드 완벽 호환 */
        /* 모바일에서는 항상 투명하게 유지하여 네모 바 제거 */
        background: (scrolled && !isMobile) ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: (scrolled && !isMobile) ? 'blur(15px) saturate(180%)' : 'none',
        WebkitBackdropFilter: (scrolled && !isMobile) ? 'blur(15px) saturate(180%)' : 'none',
        borderBottom: (scrolled && !isMobile) ? '1px solid var(--glass-border)' : 'none',
        boxShadow: (scrolled && !isMobile) ? '0 10px 30px rgba(0, 0, 0, 0.2)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 100,
      }}
    >
      <div className="container nav-container">
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
            /* [IMPORTANT] Vercel 배포 시 CSS Minification 이슈로 인해 알약(Pill) 메뉴의 backdropFilter와 background가 유실될 수 있습니다. */
            /* 이를 방지하기 위해 로컬 스타일과 동일한 값을 인라인으로 강제 적용합니다. */
            background: scrolled ? 'transparent' : 'var(--glass-bg)',
            border: scrolled ? 'none' : '1px solid var(--glass-border)',
            backdropFilter: scrolled ? 'none' : 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: scrolled ? 'none' : 'blur(12px) saturate(180%)',
            boxShadow: scrolled ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            /* 모바일에서도 알약 모양 유지 */
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={onNavClick} className="nav-link">
              {item.name}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;