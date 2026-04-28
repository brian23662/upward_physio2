'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 1.02, 0.73, 1] },
  }),
};

export function Reveal({ children, className, delay = 0, y = 30 }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.21, 1.02, 0.73, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
