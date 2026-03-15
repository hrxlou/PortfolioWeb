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
  // 마우스 포인터 감지
  const [isPC, setIsPC] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handleChange = (e: MediaQueryListEvent) => setIsPC(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <motion.div
      className="glass card-inner"
      // 모바일에서는 y축 이동 0으로 설정하여 깜빡임 원천 차단
      initial={{ opacity: 0, y: isPC ? 30 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        delay: isPC ? index * 0.1 : index * 0.05, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={!isPC ? {} : { 
        y: -15, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 15 } 
      }}
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
