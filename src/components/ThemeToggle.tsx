import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isEmbedded?: boolean;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="glass theme-toggle-btn"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '56px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        color: 'var(--text-primary)',
        cursor: 'pointer',
        padding: 0,
        borderRadius: '50%',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );
};

export default ThemeToggle;
