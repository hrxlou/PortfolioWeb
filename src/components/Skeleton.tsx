import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const Skeleton = ({ className = '', width, height, borderRadius }: SkeletonProps) => {
  return (
    <motion.div
      className={`skeleton ${className}`}
      style={{
        width: width || '100%',
        height: height || '100%',
        borderRadius: borderRadius || '12px',
      }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default Skeleton;
