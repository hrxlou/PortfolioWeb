import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';

interface NavbarProps {
  onNavClick: (id: string) => void;
  theme: 'dark' | 'light';
}

const Navbar = ({ onNavClick, theme }: NavbarProps) => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), id: 'hero' },
    { name: t('nav.featured'), id: 'featured' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.portfolio'), id: 'portfolio' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav
      className="fixed-nav"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '0.8rem 0',
        transition: 'all 0.3s ease',

        /* ✅ [변경] 알약에 있던 배경과 블러를 네비바 전체로 이동 */
        background: theme === 'dark'
          ? 'rgba(15, 17, 21, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        backdropFilter: 'blur(12px) saturate(180%)',
        borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.05)'}`,
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
            /* ✅ [변경] 알약 모양을 만드는 속성들을 제거/투명화 */
            background: 'transparent',
            border: 'none',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            boxShadow: 'none',
            borderRadius: '0',

            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem', // 메뉴 사이 간격
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