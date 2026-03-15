import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTranslation } from '../i18n';

const PortfolioGrid = ({ onOpenProject }: { onOpenProject: (project: any) => void }) => {
  const { projects } = portfolioData;
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          {t('projects.worksTitle')} <span className="gradient-text">{t('projects.worksSpan')}</span>
        </h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              index={index} 
              onOpen={() => onOpenProject(project)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioGrid;
