import ProjectImage from './ProjectImage';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

interface ProjectCardProps {
  title: string;
  description?: string;
  tags?: string[];
  index: number;
  image?: string;
  link?: string;
}

const ProjectCard = ({ title, description, tags, index, image, link }: ProjectCardProps) => (
  <motion.div
    className="glass card-inner"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
  >
    {image ? (
      <ProjectImage 
        image={image} 
        title={title} 
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
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-tags">
        {tags?.map(tag => (
          <span key={tag} className="card-tag">#{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);


const PortfolioGrid = () => {
  const { projects } = portfolioData;

  return (
    <section id="portfolio" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          My <span className="gradient-text">Works</span>
        </h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioGrid;
