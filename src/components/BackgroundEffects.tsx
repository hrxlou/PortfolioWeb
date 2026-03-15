import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const BackgroundEffects = ({ theme }: { theme: 'dark' | 'light' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement for spotlight
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of spotlight size (600px / 2 = 300)
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="bg-effects-container">
      {/* Noise Filter Overlay */}
      <div className="noise-overlay" />

      {/* Interactive Spotlight (Option 3) */}
      <motion.div 
        className="spotlight"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Floating Mesh Blobs (Option 1) */}
      <motion.div
        className="mesh-blob"
        style={{
          width: '600px',
          height: '600px',
          background: 'var(--accent-color)',
          top: '10%',
          right: '5%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="mesh-blob"
        style={{
          width: '500px',
          height: '500px',
          background: 'var(--accent-secondary)',
          bottom: '15%',
          left: '10%',
        }}
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Extra subtle blobs for depth */}
      <motion.div
        className="mesh-blob"
        style={{
          width: '400px',
          height: '400px',
          background: theme === 'dark' ? '#4f46e5' : '#818cf8',
          top: '40%',
          left: '30%',
          opacity: 0.1,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
