import React from 'react';
import { motion } from 'framer-motion';

const AlbumSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <section className="section album-section" style={{ backgroundColor: '#fafafa' }}>
      <h2 className="title-font mb-4" style={{ fontSize: '3.5rem' }}>Album Cưới</h2>
      <div className="album-grid">
        {images.map((img, idx) => (
          <motion.div 
            key={idx} 
            className="album-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <img src={img} alt={`Album ${idx}`} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AlbumSection;
