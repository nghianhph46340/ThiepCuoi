import React from 'react';
import { motion } from 'framer-motion';
import weddingData from '../wedding-data.json';

const GallerySection = () => {
  const { couple, images, labels } = weddingData;

  return (
    <section className="section gallery-section">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="fancy-divider">
          <span className="title-font" style={{ fontSize: '3rem' }}>{labels.invitationTitle}</span>
        </div>
        <p className="sans-font text-center" style={{ letterSpacing: '2px', color: '#555', marginTop: '10px' }}>
          {labels.invitationSubtitle} {couple.groom.name.toUpperCase()} & {couple.bride.name.toUpperCase()}
        </p>
      </motion.div>

      <motion.div className="collage-grid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        {images.gallery.map((img, idx) => (
          <img key={idx} src={img} alt={`Gallery ${idx}`} className={idx === 0 ? "collage-img-main" : "collage-img-sub"} />
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
