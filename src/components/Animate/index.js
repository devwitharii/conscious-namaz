"use client"
import { motion } from 'framer-motion';

const Animate = ({ as: Component = 'div', children, ...props }) => {
    const MotionComponent = motion[Component];

  return (
    <MotionComponent
        initial={{ opacity: 0, y : 40 }}
        whileInView={{ opacity: 1, y : 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Animate;
