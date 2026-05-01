import React from 'react';
import { motion } from 'framer-motion';
import weddingData from '../wedding-data.json';

const FamilySection = () => {
  const { groom, bride } = weddingData.couple;

  return (
    <section className="section family-section">
      {/* Nhà Trai */}
      <motion.div className="family-block" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="img-col">
          <img src={groom.image} alt="Chú Rể" />
        </div>
        <div className="text-col">
          <h4 className="sans-font" style={{ fontWeight: 600 }}>NHÀ TRAI</h4>
          <p className="sans-font parent-name">{groom.father}</p>
          <p className="sans-font parent-name" style={{ marginTop: '3px' }}>{groom.mother}</p>
          <p className="serif-font" style={{ fontSize: '0.8rem', marginTop: '12px', color: '#666' }}>{groom.address}</p>
          <p className="serif-font" style={{ fontStyle: 'italic', color: '#888', marginTop: '15px', fontSize: '0.9rem' }}>Chú Rể</p>
          <h3 className="title-font" style={{ fontSize: '2.2rem', marginTop: '-5px', color: '#333', whiteSpace: 'nowrap' }}>{groom.name}</h3>
        </div>
      </motion.div>

      {/* Nhà Gái */}
      <motion.div className="family-block reverse" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="img-col">
          <img src={bride.image} alt="Cô Dâu" />
        </div>
        <div className="text-col">
          <h4 className="sans-font" style={{ fontWeight: 600 }}>NHÀ GÁI</h4>
          <p className="sans-font parent-name">{bride.father}</p>
          <p className="sans-font parent-name" style={{ marginTop: '3px' }}>{bride.mother}</p>
          <p className="serif-font" style={{ fontSize: '0.8rem', marginTop: '12px', color: '#666' }}>{bride.address}</p>
          <p className="serif-font" style={{ fontStyle: 'italic', color: '#888', marginTop: '15px', fontSize: '0.9rem' }}>Cô Dâu</p>
          <h3 className="title-font" style={{ fontSize: '2.2rem', marginTop: '-5px', color: '#333', whiteSpace: 'nowrap' }}>{bride.name}</h3>
        </div>
      </motion.div>
    </section>
  );
};

export default FamilySection;
