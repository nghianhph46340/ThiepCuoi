import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import weddingData from '../wedding-data.json';

const RsvpSection = () => {
  const [showRsvp, setShowRsvp] = useState(false);
  const { labels } = weddingData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRsvp(false);
    alert('Cảm ơn bạn đã xác nhận tham dự!');
  };

  return (
    <section className="section text-center" style={{ paddingBottom: '6rem' }}>
      <h2 className="title-font" style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{labels.rsvpTitle}</h2>
      <p className="serif-font" style={{ color: '#666', marginBottom: '2rem', fontSize: '0.9rem' }}>{labels.rsvpSubtitle}</p>
      
      <button className="btn-primary" style={{ width: '80%', maxWidth: '280px' }} onClick={() => setShowRsvp(true)}>
        {labels.confirmButton}
      </button>

      <AnimatePresence>
        {showRsvp && (
          <div className="modal-overlay" onClick={() => setShowRsvp(false)}>
            <motion.div 
              className="modal-content" 
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <span className="modal-close" onClick={() => setShowRsvp(false)}>&times;</span>
              <h3 className="title-font" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#222' }}>Xác Nhận</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Tên của bạn *" className="form-input" required />
                <input type="tel" placeholder="Số điện thoại" className="form-input" />
                <select className="form-input" required>
                  <option value="">Bạn sẽ tham dự chứ?</option>
                  <option value="yes">Chắc chắn tham dự</option>
                  <option value="no">Rất tiếc, tôi không thể</option>
                </select>
                <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>GỬI ĐI</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RsvpSection;
