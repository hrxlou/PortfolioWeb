import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectImage from './ProjectImage';
import { portfolioData } from '../data/portfolioData';
import { useTranslation } from '../i18n';

const FeaturedProject = ({ onOpenProject }: { onOpenProject: (project: any) => void }) => {
  const { featuredProjects } = portfolioData;
  const { t } = useTranslation();
  // 마우스 포인터 감지
  const [isPC, setIsPC] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handleChange = (e: MediaQueryListEvent) => setIsPC(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section id="featured" className="container">
      <motion.div
        // 모바일에서는 애니메이션 건너뜀
        initial={isPC ? { opacity: 0, y: 40 } : false}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={isPC ? { duration: 0.8, ease: "easeOut" } : { duration: 0 }}
      >
        <h2>
          {t('projects.featuredTitle')} <span className="gradient-text">{t('projects.featuredSpan')}</span>
        </h2>
        
        <div className="project-card-grid">
          {featuredProjects.map((project, index) => {
            const projectKey = project.id;
            return (
              <div 
                key={index} 
                className="glass project-card-inner"
                style={{ cursor: 'pointer' }}
                onClick={() => onOpenProject(project)}
              >
                <div className="project-content">
                  <span className="featured-label gradient-text">
                    {t(`projects.items.${projectKey}.label`)}
                  </span>
                  <h3 className="featured-title">
                    {t(`projects.items.${projectKey}.title`)}
                  </h3>
                  
                  <div className="project-info-group">
                    <h4 className="project-section-title">{t('projects.idea')}</h4>
                    <p className="project-text">
                      {t(`projects.items.${projectKey}.problem`)}
                    </p>
                  </div>
                  
                  <div className="project-info-group large">
                    <h4 className="project-section-title alt">{t('projects.solution')}</h4>
                    <p className="project-text">
                      {t(`projects.items.${projectKey}.solution`)}
                    </p>
                  </div>
                  
                  <div className="tech-list">
                    {project.techStack?.map((tech) => (
                      <span key={tech} className="project-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.image ? (
                  <ProjectImage 
                    image={project.image} 
                    title={t(`projects.items.${projectKey}.title`)} 
                    link={project.link} 
                  />
                ) : (
                  <div className="project-image-container">
                    <div className="image-placeholder">
                      Project Preview
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
