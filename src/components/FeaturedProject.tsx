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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="glass" 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                overflow: 'hidden', 
                width: '100%' 
              }}
            >
              <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', minWidth: 0 }}>
                <span className="gradient-text" style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>{project.label}</span>
                <h3 style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 700 }}>{project.title}</h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem', fontSize: '1rem' }}>아이디어 (구현 의도)</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{project.problem}</p>
                </div>
                
                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '1rem' }}>구현 방법</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{project.solution}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {project.techStack.map(tech => (
                    <span key={tech} style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--glass-border)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ 
                background: 'var(--card-bg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                minHeight: '400px',
                position: 'relative',
                overflow: 'hidden',
                padding: '1.5rem',
              }}>
                {project.image ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ width: '100%', height: '100%', cursor: project.link ? 'pointer' : 'default' }}
                  >
                    <motion.img 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      src={project.image} 
                      alt={project.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        opacity: 'var(--image-opacity, 0.9)',
                        borderRadius: '12px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                      }} 
                    />
                  </a>
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px dashed var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Project Preview
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
