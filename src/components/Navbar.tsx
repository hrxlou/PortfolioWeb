import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavClick: () => void;
}

const Navbar = ({ onNavClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  // [IMPORTANT] Vercel 배포 시 CSS Minification 이슈로 인해 
  // 내비게이션의 투명도 및 블러(backdropFilter) 스타일이 유실되는 현상이 있습니다.
  // 이를 방지하기 위해 스타일을 반드시 아래와 같이 '인라인(Inline Style)'으로 유지해야 합니다.
  // 성능 최적화나 리팩토링 목적으로 스타일을 CSS 클래스로 절대 옮기지 마세요.
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
    <nav
      className="fixed-nav"
      style={{
        padding: scrolled ? '0.7rem 0' : '1.2rem 0',
        /* index.css에 있는 --glass-bg 변수를 그대로 사용해 다크모드 완벽 호환 */
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(15px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.2)' : 'none',
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
            /* 스크롤 시 내부 메뉴 캡슐의 중복 배경을 투명하게 제거 */
            background: scrolled ? 'transparent' : 'var(--glass-bg)',
            border: scrolled ? 'none' : '1px solid var(--glass-border)',
            backdropFilter: scrolled ? 'none' : 'blur(10px)',
            WebkitBackdropFilter: scrolled ? 'none' : 'blur(10px)',
            boxShadow: scrolled ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
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