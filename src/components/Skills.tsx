import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTranslation } from '../i18n';

const Skills = memo(() => {
  const { skills } = portfolioData;
  const { t } = useTranslation();
  // 마우스 포인터 감지
  const [isPC, setIsPC] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handleChange = (e: MediaQueryListEvent) => setIsPC(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    setIsMounted(true);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section id="skills" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          {t('skills.title')} <span className="gradient-text">{t('skills.span')}</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => {
            const categoryKey = skillGroup.category.toLowerCase();
            return (
              <motion.div
                key={skillGroup.category}
                className="glass skill-card"
                // 모바일에서는 initial/whileInView 로직 무시
                initial={isPC ? { opacity: 0, y: 30 } : false}
                whileInView={isPC ? { opacity: 1, y: 0 } : {}}
                animate={!isPC ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true, amount: 0.1 }}
                transition={isPC ? { 
                  duration: isMounted ? 0.3 : 0.6, 
                  delay: isMounted ? 0 : 0.15 + (index * 0.1),
                  ease: "easeOut"
                } : { duration: 0 }}
                whileHover={!isPC ? {} : { 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 500, damping: 25 }
                }}
              >                <h3 className="skill-category">
                  {t(`skills.categories.${categoryKey}`)}
                </h3>
                <div className="skills-list">
                  {Array.isArray(t(`skills.items.${categoryKey}`)) ? 
                    (t(`skills.items.${categoryKey}`) as unknown as string[]).map((skill) => (
                      <span 
                        key={skill} 
                        className="project-badge skill-badge"
                      >
                        {skill}
                      </span>
                    )) : null
                  }
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
});

export default Skills;
