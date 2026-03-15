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
        padding: '1.2rem 0',
        background: 'transparent',
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
            background: theme === 'dark' ? 'rgba(26, 28, 34, 0.75)' : 'rgba(255, 255, 255, 0.85)',
            border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.15)'}`,
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {navLinks.map((item) => (
            <a key={item.name} href={`#${item.id}`} onClick={() => onNavClick(item.id)} className="nav-link">
              {item.name}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;