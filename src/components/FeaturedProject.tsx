import ProjectImage from './ProjectImage';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const FeaturedProject = ({ navKey }: { navKey: number }) => {
  const { featuredProjects } = portfolioData;

  return (
    <section id="featured" className="container">
      <motion.div
        key={navKey}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="project-card-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="glass project-card-inner">
              <div className="project-content">
                <span className="gradient-text" style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>{project.label}</span>
                <h3 style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 700 }}>{project.title}</h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 className="project-section-title">아이디어 (구현 의도)</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{project.problem}</p>
                </div>
                
                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 className="project-section-title alt">구현 방법</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{project.solution}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {project.techStack?.map(tech => (
                    <span key={tech} className="project-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.image ? (
                <ProjectImage 
                  image={project.image} 
                  title={project.title} 
                  link={project.link} 
                />
              ) : (
                <div className="project-image-container">
                  <div style={{ width: '100%', height: '100%', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Project Preview
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
