import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTranslation } from '../i18n';

const Skills = () => {
  const { skills } = portfolioData;
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
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
                initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * (isMobile ? 0.05 : 0.15),
                  ease: "easeOut"
                }}
                whileHover={isMobile ? {} : { y: -10, scale: 1.02 }}
              >
                <h3 className="skill-category">
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
};

export default Skills;
