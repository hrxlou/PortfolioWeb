import ProjectImage from './ProjectImage';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const FeaturedProject = () => {
  const { featuredProjects } = portfolioData;

  return (
    <section id="featured" className="container">
      <motion.div
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
                <span className="featured-label gradient-text">{project.label}</span>
                <h3 className="featured-title">{project.title}</h3>
                
                <div className="project-info-group">
                  <h4 className="project-section-title">아이디어 (구현 의도)</h4>
                  <p className="project-text">{project.problem}</p>
                </div>
                
                <div className="project-info-group large">
                  <h4 className="project-section-title alt">구현 방법</h4>
                  <p className="project-text">{project.solution}</p>
                </div>
                
                <div className="tech-list">
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
                  <div className="image-placeholder">
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
