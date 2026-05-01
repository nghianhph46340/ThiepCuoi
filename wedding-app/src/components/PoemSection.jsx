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
      style={{ backgroundColor: '#fafafa' }}
    >
      <div className="poem-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p className="serif-font text-accent" style={{ fontSize: '1.8rem', lineHeight: '2', fontStyle: 'italic', color: '#8c7635' }}>
          "Tình yêu không phải là việc chúng ta nhìn chằm chằm vào nhau,<br/>
          mà là việc chúng ta cùng nhau nhìn về một hướng."
        </p>
        <p className="sans-font mt-4" style={{ fontSize: '0.8rem', color: '#999' }}>— Antoine de Saint-Exupéry —</p>
      </div>
    </motion.section>
  );
};

export default PoemSection;
