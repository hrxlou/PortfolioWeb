import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SocialIcon from './SocialIcon';
import { useTranslation } from '../i18n';

const Hero = () => {
  const { social } = portfolioData;
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!isMounted) return <section id="hero" className="container hero-section" style={{ opacity: 0 }} />;

  return (
    <section id="hero" className="container hero-section">
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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

        {/* 3. 소셜 링크 */}
        {/* 3. 소셜 링크: 기존 위치 그대로 유지 (AnimatePresence 밖이 아닌, 원래의 flex flow 안에 배치) */}
        <div className="social-links">
          {social.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass social-item"
              initial={{ opacity: 0, y: isMobile ? 5 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (index * (isMobile ? 0.05 : 0.1)), duration: 0.6 }}
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon name={item.name} />
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span className="scroll-text">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;