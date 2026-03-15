import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectImage from './ProjectImage';
import { useTranslation } from '../i18n';

interface ProjectCardProps {
  title: string;
  description?: string;
  tags?: string[];
  index: number;
  image?: string;
  link?: string;
  onOpen: () => void;
}

const ProjectCard = ({ id, tags, index, image, link, onOpen }: ProjectCardProps & { id: string }) => {
  const { t } = useTranslation();
  // 즉시 화면 크기 감지하여 초기 렌더링 깜빡임 방지
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className="glass card-inner"
      initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={isMobile ? {} : { y: -10, transition: { duration: 0.2 } }}
      style={{ cursor: 'pointer' }}
      onClick={onOpen}
    >
      {image ? (
        <ProjectImage 
          image={image} 
          title={t(`projects.items.${id}.title`)} 
          link={link || '#'} 
          isSmall 
          iconSize={16} 
        />
      ) : (
        <div className="project-image-container small">
          <div className="image-placeholder">Preview</div>
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{t(`projects.items.${id}.title`)}</h3>
        <p className="card-description">{t(`projects.items.${id}.description`)}</p>
        <div className="card-tags">
          {tags?.map(tag => (
            <span key={tag} className="card-tag">#{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
