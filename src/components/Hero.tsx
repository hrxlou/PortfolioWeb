import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SocialIcon from './SocialIcon';

const Hero = () => {
  const { name, tagline, description } = portfolioData.personal;
  const { social } = portfolioData;

  return (
    <section id="hero" className="container hero-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          className="gradient-text hero-tagline"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {tagline}
        </motion.p>
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          안녕하세요, <br />
          저는 <span className="gradient-text">{name}</span>입니다.
        </motion.h1>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {social.map((item) => (
            <motion.a 
              key={item.name}
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass social-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon name={item.name} />
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span className="scroll-text">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
