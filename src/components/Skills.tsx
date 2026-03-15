import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTranslation } from '../i18n';

const Skills = () => {
  const { skills } = portfolioData;
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <section id="skills" className="container" style={{ opacity: 0 }} />;

  return (
    <section id="skills" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
