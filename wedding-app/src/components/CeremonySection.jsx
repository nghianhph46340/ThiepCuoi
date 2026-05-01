import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import weddingData from '../wedding-data.json';

const CeremonySection = () => {
  const { ceremony } = weddingData.event;
  const { labels, images } = weddingData;
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.gallery.length);
    }, 3000); // Tự trượt mỗi 3 giây
    return () => clearInterval(timer);
  }, [images.gallery.length]);

  return (
    <section className="section" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="elegant-album-header">
          <h2 className="title-font">{labels.invitationTitle}</h2>
          <div className="album-divider">
            <span className="line"></span>
            <span className="heart">❤</span>
            <span className="line"></span>
          </div>
          <p className="serif-font" style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
            {labels.invitationSubtitle} {labels.coupleNames}
          </p>
        </div>

        {/* Khối Ảnh Slider 3D Coverflow Auto-scroll */}
        <div className="photo-slider-wrapper">
          <div className="photo-slider-3d">
            {images.gallery.map((img, index) => {
              let offset = index - activeIndex;
              const len = images.gallery.length;
              if (offset > Math.floor(len / 2)) offset -= len;
              if (offset < -Math.floor(len / 2)) offset += len;
              
              const isActive = offset === 0;

              return (
                <motion.div 
                  key={index}
                  className="slider-item-3d"
                  animate={{ 
                    x: `calc(-50% + ${offset * 75}%)`, // Dịch chuyển sang hai bên
                    y: '-50%',
                    scale: isActive ? 1.2 : 0.8, // Ảnh giữa to, ảnh phụ nhỏ lại 
                    rotateY: offset * -25, // Nghiêng 25 độ
                    zIndex: isActive ? 10 : 5 - Math.abs(offset)
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <img src={img} alt={`Gallery ${index}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Buổi lễ 1: Lễ Thành Hôn (Tư gia) */}
        <div className="ceremony-info-block" style={{ marginBottom: '3rem' }}>
          <h3 className="sans-font" style={{ fontWeight: 600, fontSize: '1rem', color: '#222', textTransform: 'uppercase', letterSpacing: '2px' }}>{ceremony.title}</h3>
          <p className="serif-font" style={{ fontStyle: 'italic', color: '#777', margin: '10px 0' }}>Vào lúc</p>
          
          <div className="ceremony-time-block">
            <div className="sans-font" style={{ whiteSpace: 'nowrap' }}>{ceremony.time}</div>
            <div className="time-col-mid">
              <div className="sans-font" style={{ fontSize: '0.75rem' }}>{ceremony.dayOfWeek}</div>
              <div className="time-day">{ceremony.day}</div>
              <div className="sans-font" style={{ fontSize: '0.75rem' }}>Tháng {ceremony.month}</div>
            </div>
            <div className="sans-font" style={{ whiteSpace: 'nowrap' }}>Năm {ceremony.year}</div>
          </div>

          <p className="serif-font" style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#888', marginTop: '10px' }}>
            (Tức Ngày {ceremony.lunarDate})
          </p>
          <p className="serif-font" style={{ marginTop: '15px', color: '#444', fontSize: '1.1rem' }}>
            {ceremony.location}
          </p>
        </div>

        {/* Buổi lễ 2: Tiệc Mừng (Trong khung Card như ảnh mẫu) */}
        <div className="ceremony-summary-card" style={{ 
          border: '1px solid #e0e0e0', 
          borderRadius: '15px', 
          padding: '2rem 1.5rem', 
          marginBottom: '3rem',
          background: 'rgba(255,255,255,0.5)'
        }}>
          <h3 className="sans-font" style={{ fontWeight: 600, fontSize: '0.9rem', color: '#222', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
            {weddingData.event.ceremony2.title}
          </h3>
          
          <div className="ceremony-time-display" style={{ marginBottom: '1rem' }}>
            <span className="sans-font" style={{ fontSize: '1.1rem', fontWeight: 500 }}>{weddingData.event.ceremony2.time} - {weddingData.event.ceremony2.dayOfWeek}</span>
            <div className="serif-font" style={{ fontSize: '1.5rem', fontWeight: 600, margin: '5px 0' }}>
              {weddingData.event.ceremony2.day} . {weddingData.event.ceremony2.month} . {weddingData.event.ceremony2.year}
            </div>
          </div>

          <p className="serif-font" style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#777' }}>
            (Tức Ngày {weddingData.event.ceremony2.lunarDate})
          </p>
          <p className="serif-font" style={{ marginTop: '10px', color: '#444', fontSize: '1rem' }}>
            {weddingData.event.ceremony2.location}
          </p>
        </div>

        {/* Khối Lịch */}
        <div className="calendar-wrapper">
          <h4 className="sans-font" style={{ fontSize: '1.1rem', letterSpacing: '3px', marginBottom: '5px', color: '#333', fontWeight: 600 }}>SAVE THE DATE</h4>
          <p className="sans-font" style={{ letterSpacing: '2px', marginBottom: '20px', color: '#888', fontSize: '0.85rem' }}>THÁNG {parseInt(ceremony.month)} - {ceremony.year}</p>
          
          <div className="cal-header-row">
            {['T2','T3','T4','T5','T6','T7','CN'].map(d => (
              <div key={d} className="cal-header-day">{d}</div>
            ))}
          </div>
          <div className="cal-grid">
            <div></div><div></div><div></div>
            {[...Array(31)].map((_, i) => (
              <div key={i} className={`cal-day ${i+1 === parseInt(ceremony.day) ? 'highlight' : ''}`}>
                {i+1}
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <svg width="150" height="20" viewBox="0 0 150 20">
              <path d="M10,10 Q40,20 70,10 T130,10" fill="none" stroke="#e5b2b2" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CeremonySection;
