import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section hero-section">
      {/* Rèm trái */}
      <motion.div
        className="curtain curtain-left"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? '-100%' : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="curtain-inner"></div>
      </motion.div>
      
      {/* Rèm phải */}
      <motion.div
        className="curtain curtain-right"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? '100%' : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="curtain-inner"></div>
      </motion.div>

      {/* Nút bấm để mở thiệp nằm đè lên trên rèm */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            className="open-btn-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(true)}
          >
            <button className="open-btn title-font">Mở Thiệp</button>
            <p className="sans-font mt-2" style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)', fontSize: '0.8rem', letterSpacing: '2px' }}>CHẠM ĐỂ XEM</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nội dung bên trong sẽ hiện ra sau khi mở rèm */}
      <div className="hero-content">
        <motion.h2 
          className="sans-font text-accent mb-2"
          style={{ letterSpacing: '6px', fontSize: '1.2rem' }}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: isOpen ? 1 : 1.5, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          SAVE THE DATE
        </motion.h2>

        <motion.h1 
          className="title-font mb-4"
          style={{ fontSize: '4.5rem' }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: isOpen ? 0 : 30, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Trọng Khang & Minh Anh
        </motion.h1>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          {/* Ảnh Cô Dâu Chú Rể */}
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" alt="Cô Dâu Chú Rể" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
