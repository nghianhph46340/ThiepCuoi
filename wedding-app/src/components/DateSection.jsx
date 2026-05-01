import React from 'react';
import { motion } from 'framer-motion';

const DateSection = () => {
  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <div className="date-box text-center">
        <h3 className="sans-font text-accent mb-2">Lễ Thành Hôn</h3>
        <h2 className="serif-font" style={{ fontSize: '3.5rem', margin: '1rem 0', color: '#333' }}>15 . 05 . 2026</h2>
        <div className="divider"></div>
        <p className="sans-font" style={{ fontSize: '1rem', color: '#666' }}>Tức ngày 29 tháng 3 năm Bính Ngọ</p>
      </div>
    </motion.section>
  );
};

export default DateSection;
