import React from 'react';
import { motion } from 'framer-motion';
import weddingData from '../wedding-data.json';

const HeroSection = () => {
  const { couple, event, images, labels } = weddingData;

  return (
    <section className="hero-section">
      <div className="hero-text-content">
        <motion.div
          className="hero-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="title-font" style={{ fontSize: '3.5rem', marginBottom: '-5px' }}>{labels.saveTheDate}</h2>
          <h3 className="title-font" style={{ fontSize: '2rem', color: '#444' }}>{labels.coupleNames}</h3>
        </motion.div>

        <motion.div
          className="hero-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="date-block-container" style={{ marginTop: '30px' }}>
            <div className="date-col-1 sans-font">
              <div>{event.mainDate.time}</div>
              <div style={{ marginTop: '2px' }}>{event.mainDate.dayOfWeek}</div>
            </div>
            <div className="date-col-2">{event.mainDate.day}.{event.mainDate.month}</div>
            <div className="date-col-3 sans-font">
              <div>{event.mainDate.yearShort}</div>
              <div style={{ marginTop: '2px' }}>{event.mainDate.yearFull.slice(-2)}</div>
            </div>
          </div>

          <div className="serif-font" style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#777', textAlign: 'center', marginTop: '5px' }}>
            (Tức Ngày {event.mainDate.lunarDate})
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <img src={images.hero} alt="Couple" style={{ marginTop: '20px' }} />
      </motion.div>

      {/* Icon cuộn xuống tối giản */}
      <motion.div 
        className="scroll-down-simple"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
          <motion.path 
            d="M5 5 L15 15 L25 5" 
            stroke="#888" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <span className="serif-font" style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '1px' }}>Kéo xuống</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
