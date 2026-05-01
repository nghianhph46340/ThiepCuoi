import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RsvpSection = () => {
  const [showRsvp, setShowRsvp] = useState(false);
  const [showWishes, setShowWishes] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleWishSubmit = (e) => {
    e.preventDefault();
    setShowWishes(false);
    setShowRsvp(false);
    setShowThankYou(true);
  };

  return (
    <section className="section rsvp-section">
      <h2 className="title-font mb-3" style={{ fontSize: '3.5rem' }}>Chung Vui Cùng Chúng Tôi</h2>
      <p className="serif-font mb-4" style={{ fontSize: '1.2rem', color: '#666' }}>Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng tôi!</p>
      
      <div className="button-group">
        <button className="btn btn-primary" onClick={() => setShowRsvp(true)}>Xác nhận tham gia</button>
        <button className="btn" onClick={() => setShowWishes(true)}>Gửi lời chúc</button>
      </div>

      {/* Modal Xác Nhận Tham Gia */}
      {showRsvp && (
        <div className="modal-overlay" onClick={() => setShowRsvp(false)}>
          <motion.div className="modal-content" onClick={e => e.stopPropagation()} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <span className="modal-close" onClick={() => setShowRsvp(false)}>&times;</span>
            <h3 className="sans-font text-accent mb-3">Xác Nhận Tham Gia</h3>
            <form onSubmit={handleWishSubmit}>
              <input type="text" placeholder="Tên của bạn *" className="form-input mb-2" required />
              <input type="tel" placeholder="Số điện thoại (Tùy chọn)" className="form-input mb-3" />
              <button type="submit" className="btn btn-primary w-100" style={{ margin: 0 }}>Gửi Xác Nhận</button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Modal Gửi Lời Chúc */}
      {showWishes && (
        <div className="modal-overlay" onClick={() => setShowWishes(false)}>
          <motion.div className="modal-content" onClick={e => e.stopPropagation()} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <span className="modal-close" onClick={() => setShowWishes(false)}>&times;</span>
            <h3 className="sans-font text-accent mb-3">Gửi Lời Chúc</h3>
            <form onSubmit={handleWishSubmit}>
              <input type="text" placeholder="Tên người gửi *" className="form-input mb-2" required />
              <textarea placeholder="Lời chúc tốt đẹp nhất dành cho cô dâu chú rể..." className="form-input mb-3" rows="4" required></textarea>
              <button type="submit" className="btn btn-primary w-100" style={{ margin: 0 }}>Gửi Yêu Thương</button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Modal Cảm Ơn (Thiệp mời thiết kế đẹp) */}
      {showThankYou && (
        <div className="modal-overlay" onClick={() => setShowThankYou(false)}>
          <motion.div className="modal-content thank-you-card" onClick={e => e.stopPropagation()} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <span className="modal-close" onClick={() => setShowThankYou(false)}>&times;</span>
            <h2 className="title-font text-accent mb-2" style={{ fontSize: '3.5rem' }}>Cảm ơn bạn!</h2>
            <div className="divider" style={{ width: '80px' }}></div>
            <p className="serif-font" style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#444'}}>
              Lời chúc của bạn là món quà vô giá dành cho chúng tôi trong ngày trọng đại này.<br/>
              Hẹn gặp bạn tại lễ cưới!
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default RsvpSection;
