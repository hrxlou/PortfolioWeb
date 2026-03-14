import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectImageProps {
  image: string;
  title: string;
  link: string;
  isSmall?: boolean;
  iconSize?: number;
}

const ProjectImage = ({ image, title, link, isSmall = false, iconSize = 18 }: ProjectImageProps) => {
  return (
    <div className={`project-image-container ${isSmall ? 'small' : ''}`}>
      <div className="project-image-link">
        <motion.img 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          src={image} 
          alt={title} 
          className="project-image"
          style={{ cursor: 'default' }}
        />
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link-icon"
          title="Visit Project"
        >
          <ExternalLink size={iconSize} />
        </a>
      </div>
    </div>
  );
};

export default ProjectImage;
