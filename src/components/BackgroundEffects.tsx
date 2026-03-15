import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const BackgroundEffects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement for spotlight
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        // Offset by half of spotlight size (600px / 2 = 300)
        mouseX.set(e.clientX - 300);
        mouseY.set(e.clientY - 300);
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, isMobile]);

  return (
    <div className="bg-effects-container">
      {/* Noise Filter Overlay */}
      <div className="noise-overlay" />

      {/* Interactive Spotlight / Mobile Floating Light */}
      <motion.div 
        className="spotlight"
        style={!isMobile ? {
          x: springX,
          y: springY,
        } : {}}
        animate={isMobile ? {
          x: ['-10%', '30%', '-20%', '10%'],
          y: ['-10%', '10%', '20%', '-5%'],
          scale: [1, 1.2, 0.9, 1.1],
        } : {}}
        transition={isMobile ? {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        } : {}}
      />

      {/* Floating Mesh Blobs */}
      <motion.div
        className="mesh-blob"
        style={{
          width: isMobile ? '300px' : '700px', // 모바일 400->300
          height: isMobile ? '300px' : '700px',
          background: 'var(--accent-color)',
          top: '5%',
          right: '5%',
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 150, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="mesh-blob"
        style={{
          width: isMobile ? '250px' : '600px', // 모바일 350->250
          height: isMobile ? '250px' : '600px',
          background: 'var(--accent-secondary)',
          bottom: '10%',
          left: '5%',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -70, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
