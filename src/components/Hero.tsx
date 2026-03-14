import { motion } from 'framer-motion';
import { Github, Instagram, ExternalLink, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ navKey }: { navKey: number }) => {
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
    <section id="hero" className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <motion.div
        key={navKey}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          key={`tagline-${navKey}`}
          className="gradient-text" 
          style={{ fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.8rem', fontSize: '1.1rem' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {tagline}
        </motion.p>
        <motion.h1 
          key={`title-${navKey}`}
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 600, marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          안녕하세요, <br />
          저는 <span className="gradient-text">{name}</span>입니다.
        </motion.h1>
        <motion.p 
          style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', maxWidth: '650px', marginBottom: '3.5rem', fontWeight: 400, opacity: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {social.map((item) => (
            <motion.a 
              key={item.name}
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.8rem 1.8rem', fontWeight: 600 }}
              whileHover={{ scale: 1.05, backgroundColor: 'var(--glass-bg)' }}
              whileTap={{ scale: 0.95 }}
            >
              {getIcon(item.name)}
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-secondary)',
          opacity: 0.6
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;

