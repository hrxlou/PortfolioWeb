import { motion } from 'framer-motion';
import { Sun, Moon, Languages } from 'lucide-react';
import { useTranslation } from '../i18n';

interface FloatingControlsProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const FloatingControls = ({ theme, toggleTheme }: FloatingControlsProps) => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <div className="floating-controls" style={{ gap: '0.8rem', bottom: '1.5rem', right: '1.5rem' }}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLanguage}
        className="floating-btn glass"
        aria-label="Toggle Language"
      >
        <Languages size={20} />
        <span className="floating-btn-text">
          {language === 'ko' ? 'EN' : 'KR'}
        </span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="floating-btn glass"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </div>
  );
};

export default FloatingControls;
