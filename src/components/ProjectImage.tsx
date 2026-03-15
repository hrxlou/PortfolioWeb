import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from './Skeleton';

interface ProjectImageProps {
  image: string;
  title: string;
  link: string;
  isSmall?: boolean;
  iconSize?: number;
}

const ProjectImage = ({ image, title, link, isSmall = false, iconSize = 18 }: ProjectImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`project-image-container ${isSmall ? 'small' : ''}`}>
      <div className="project-image-link">
        <AnimatePresence>
          {!isLoaded && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
              <Skeleton borderRadius="12px" />
            </div>
          )}
        </AnimatePresence>
        
        <motion.img 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          src={image} 
          alt={title} 
          className="project-image"
          style={{ cursor: 'default', opacity: isLoaded ? 1 : 0 }}
          onLoad={() => setIsLoaded(true)}
          decoding="async"
          loading="lazy"
        />
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link-icon"
          title="Visit Project"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={iconSize} />
        </a>
      </div>
    </div>
  );
};

export default ProjectImage;
