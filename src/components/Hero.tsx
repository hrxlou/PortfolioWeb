import { motion } from 'framer-motion';
import { Github, Instagram, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, tagline, description } = portfolioData.personal;
  const { social } = portfolioData;

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={20} />;
      case 'instagram': return <Instagram size={20} />;
      case 'blog': return <ExternalLink size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <section id="hero" className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          className="gradient-text" 
          style={{ fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >

          {tagline}
        </motion.p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          안녕하세요, <br />
          저는 <span className="gradient-text">{name}</span>입니다.
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '600px', marginBottom: '3rem' }}>
          {description}
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {social.map((item) => (
            <motion.a 
              key={item.name}
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', fontWeight: 600 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {getIcon(item.name)}
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

