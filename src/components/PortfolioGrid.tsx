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
    className="glass"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    style={{ padding: '0', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
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
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)',
          background: 'var(--glass-bg)',
          borderRadius: '12px',
          border: '1px dashed var(--glass-border)'
        }}>Preview</div>
      </div>
    )}
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>{description}</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
        {tags?.map(tag => (
          <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)' }}>#{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);


const PortfolioGrid = ({ navKey }: { navKey: number }) => {
  const { projects } = portfolioData;

  return (
    <section id="portfolio" className="container">
      <motion.div
        key={navKey}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          My <span className="gradient-text">Work</span>
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(320px, 20vw, 450px), 1fr))', 
          gap: '2.5rem' 
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioGrid;
