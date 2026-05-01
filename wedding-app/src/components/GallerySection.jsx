import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  return (
    <section className="section gallery-section" style={{ backgroundColor: '#fff' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
        <h3 className="serif-font" style={{ fontSize: '1.6rem', marginBottom: '15px' }}>Trân trọng kính mời tới tham dự lễ của</h3>
        <h2 className="title-font text-accent" style={{ fontSize: '4rem' }}>Trọng Khang & Minh Anh</h2>
      </motion.div>
      
      <motion.div className="gallery-slider mt-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
        <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80" alt="Wedding 1" />
        <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80" alt="Wedding 2" />
        <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80" alt="Wedding 3" />
      </motion.div>
    </section>
  );
};

export default GallerySection;
