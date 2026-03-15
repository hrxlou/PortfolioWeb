import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="glass skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="skill-category">
                {skillGroup.category}
              </h3>
              <div className="skills-list">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="project-badge skill-badge"
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
