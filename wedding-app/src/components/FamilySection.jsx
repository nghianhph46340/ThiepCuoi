import React from 'react';
import { motion } from 'framer-motion';

const FamilySection = () => {
  return (
    <section className="section family-section">
      <h2 className="title-font mb-4" style={{ fontSize: '3.5rem' }}>Gia Đình 2 Bên</h2>
      
      <div className="family-grid">
        {/* Nhà Trai */}
        <motion.div className="family-card" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="family-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Chú Rể" />
          </div>
          <div className="family-info">
            <h3 className="sans-font text-accent mb-2">Nhà Trai</h3>
            <p className="serif-font" style={{ fontSize: '1.2rem' }}>Ông: Trần Văn A</p>
            <p className="serif-font" style={{ fontSize: '1.2rem' }}>Bà: Nguyễn Thị B</p>
            <h4 className="title-font mt-4" style={{ fontSize: '2.5rem', color: '#333' }}>Trọng Khang</h4>
            <p className="sans-font" style={{ fontSize: '0.8rem', marginTop: '5px' }}>Chú Rể</p>
          </div>
        </motion.div>

        {/* Nhà Gái */}
        <motion.div className="family-card reverse" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="family-image">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Cô Dâu" />
          </div>
          <div className="family-info">
            <h3 className="sans-font text-accent mb-2">Nhà Gái</h3>
            <p className="serif-font" style={{ fontSize: '1.2rem' }}>Ông: Lê Văn C</p>
            <p className="serif-font" style={{ fontSize: '1.2rem' }}>Bà: Phạm Thị D</p>
            <h4 className="title-font mt-4" style={{ fontSize: '2.5rem', color: '#333' }}>Minh Anh</h4>
            <p className="sans-font" style={{ fontSize: '0.8rem', marginTop: '5px' }}>Cô Dâu</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilySection;
