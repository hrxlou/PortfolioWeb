import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = ({ navKey }: { navKey: number }) => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="container">
      <motion.div
        key={navKey}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem',
          marginTop: '3rem'
        }}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ padding: '2rem' }}
            >
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 600, 
                marginBottom: '1.5rem',
                color: 'var(--accent-color)'
              }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="project-badge"
                    style={{ 
                      fontSize: '0.9rem', 
                      padding: '0.5rem 1rem',
                      background: 'rgba(99, 102, 241, 0.05)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
