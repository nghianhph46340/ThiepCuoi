import React from 'react';
import { motion } from 'framer-motion';
import weddingData from '../wedding-data.json';

const AlbumSection = () => {
  const { ceremony } = weddingData.event;
  const { images, labels } = weddingData;

  return (
    <>
      {/* Map Section */}
      <section className="section map-section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e5b2b2" strokeWidth="1.5" style={{ marginBottom: '10px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p className="serif-font" style={{ color: '#444', fontSize: '0.9rem' }}>{weddingData.couple.groom.address}</p>
          <a href={ceremony.mapGoogleLink} target="_blank" rel="noreferrer" className="btn-outline">Xem Chỉ Đường</a>
          
          <div className="map-frame">
            <iframe 
              title="Map"
              src={ceremony.mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </motion.div>
      </section>

      {/* Album Masonry */}
      <section className="section" style={{ paddingTop: 0 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <h2 className="title-font" style={{ fontSize: '3.5rem', marginBottom: '10px' }}>{labels.albumTitle}</h2>
        </motion.div>
        
        <div className="masonry-grid">
          {images.album.map((img, idx) => (
            <motion.img 
              key={idx} 
              src={img} 
              alt={`Album ${idx}`} 
              className="masonry-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AlbumSection;
