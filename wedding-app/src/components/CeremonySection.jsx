import React from 'react';
import { motion } from 'framer-motion';

const CeremonySection = () => {
  return (
    <section className="section ceremony-section">
      <motion.div className="frame-box" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
        <h2 className="title-font mb-3 text-accent" style={{ fontSize: '3rem' }}>Lễ Thành Hôn</h2>
        <p className="sans-font mb-2">Vào lúc 10:30 Sáng</p>
        <p className="sans-font mb-1" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Thứ Sáu, Ngày 15 Tháng 5 Năm 2026</p>
        <p className="serif-font mb-3" style={{ fontStyle: 'italic', color: '#666' }}>(Tức ngày 29 tháng 3 năm Bính Ngọ)</p>
        
        <div className="divider"></div>
        
        <h3 className="sans-font text-accent mt-3 mb-2">TẠI TRUNG TÂM TIỆC CƯỚI HAPPY WEDDING</h3>
        <p className="serif-font" style={{ fontSize: '1.2rem' }}>Số 1, Đường Hạnh Phúc, Quận Tình Yêu, Hà Nội</p>
      </motion.div>

      <motion.div className="calendar mt-4" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
        <h3 className="sans-font mb-3">THÁNG 5 . 2026</h3>
        <div className="calendar-grid">
          {['T2','T3','T4','T5','T6','T7','CN'].map(d => <div key={d} className="cal-day head">{d}</div>)}
          {/* Padding cho ngày 1 vào thứ 6 (chỉ là giả lập) */}
          <div></div><div></div><div></div><div></div>
          {/* Các ngày */}
          {[...Array(31)].map((_, i) => (
             <div key={i} className={`cal-day ${i+1 === 15 ? 'highlight' : ''}`}>{i+1}</div>
          ))}
        </div>
      </motion.div>

      <motion.div className="map-container mt-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <iframe 
          title="Bản đồ địa điểm tổ chức"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.926558661642!2d105.816454215332!3d21.03562449292156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869d494c04b6!2zMjggUC4gTGnhu4V1IEdpYWksIEPhu5FuZyBW4buLLCBCYSDEkMOsbmgsIEjDoCBO4buZaSAxMDAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1683884332908!5m2!1sen!2s" 
          width="100%" 
          height="350" 
          style={{ border: 0, borderRadius: '12px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </motion.div>
    </section>
  );
};

export default CeremonySection;
