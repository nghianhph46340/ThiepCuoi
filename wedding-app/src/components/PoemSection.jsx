import React from 'react';
import { motion } from 'framer-motion';

const PoemSection = () => {
  return (
    <motion.section
      className="section poem-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      style={{ padding: '1.5rem 1.5rem 0.5rem 1.5rem', textAlign: 'center' }}
    >
      <div className="poem-content">
        <p className="poem-text title-font">
          Tình yêu không phải là việc chúng ta nhìn chằm chằm vào nhau,<br />
          mà là việc chúng ta cùng nhau nhìn về một hướng.
        </p>
        <div className="album-divider">
          <span className="line" style={{ flex: '0 0 50px' }}></span>
          <span className="heart">❤</span>
          <span className="line" style={{ flex: '0 0 50px' }}></span>
        </div>
        <p className="sans-font" style={{ fontSize: '0.75rem', color: '#999', letterSpacing: '2px', textTransform: 'uppercase' }}>
          — Antoine de Saint-Exupéry —
        </p>
      </div>
    </motion.section>
  );
};

export default PoemSection;
