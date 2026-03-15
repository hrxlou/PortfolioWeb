import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SocialIcon from './SocialIcon';
import { useTranslation } from '../i18n';

const Hero = () => {
  const { social } = portfolioData;
  const { t } = useTranslation();
  
  // 첫 렌더링 시점에 즉시 화면 크기를 확인하여 깜빡임 방지
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('featured');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="container hero-section">
      <motion.div
        // 구조를 { opacity, y }로 통일하여 리렌더링 시 구조 변경 방지
        initial={{ opacity: 0, y: isMobile ? 10 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-content">
          <p className="gradient-text hero-tagline">
            {t('hero.tagline')}
          </p>
          <h1 className="hero-title">
            {t('hero.greeting')} <br />
            {t('hero.iam')} <span className="gradient-text">{t('personal.name')}</span>{t('hero.suffix')}
          </h1>
          <p className="hero-description">
            {t('hero.description')}
          </p>
        </div>

        <div className="social-links">
          {social.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass social-item"
              // 여기도 구조 통일
              initial={{ opacity: 0, y: isMobile ? 5 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: isMobile ? (index * 0.05) : 0.6 + (index * 0.15), 
                duration: 0.8,
                ease: "easeOut"
              }}
              whileHover={isMobile ? {} : { 
                scale: 1.08, 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon name={item.name} />
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* 스크롤 인디케이터: 클릭 기능 추가 */}
      <motion.button
        className="scroll-indicator"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-label="Scroll to featured projects"
      >
        <span className="scroll-text">Scroll</span>
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
};

export default Hero;