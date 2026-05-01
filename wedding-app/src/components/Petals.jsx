import React from 'react';

const Petals = () => {
  // Tạo 15 cánh hoa lác đác
  const petals = Array.from({ length: 15 });

  return (
    <div className="petals-container">
      {petals.map((_, i) => {
        // Randomize các thông số để cánh hoa rơi tự nhiên nhất
        const left = Math.random() * 100; // Vị trí xuất hiện ngang (0-100vw)
        const fallDuration = 10 + Math.random() * 15; // Thời gian rơi (10-25s)
        const swayDuration = 3 + Math.random() * 4; // Thời gian lắc lư theo gió (3-7s)
        const delay = -Math.random() * 20; // Độ trễ để hoa không rơi cùng lúc
        const scale = 0.5 + Math.random() * 0.6; // Kích thước to nhỏ khác nhau
        const opacity = 0.4 + Math.random() * 0.4; // Độ mờ khác nhau tạo chiều sâu

        return (
          <div 
            key={i} 
            className="petal-wrapper" 
            style={{ 
              left: `${left}vw`, 
              animationDuration: `${fallDuration}s`, 
              animationDelay: `${delay}s` 
            }}
          >
            <div 
              className="petal-sway" 
              style={{ 
                animationDuration: `${swayDuration}s`, 
                animationDelay: `${delay}s` 
              }}
            >
              <svg 
                viewBox="0 0 100 100" 
                style={{ 
                  width: '25px', 
                  height: '25px', 
                  transform: `scale(${scale})`, 
                  opacity: opacity,
                  fill: '#e8b4b8' // Màu hồng nhạt lãng mạn
                }}
              >
                {/* Dáng cánh hoa hồng cách điệu */}
                <path d="M50,0 C20,30 20,70 50,100 C80,70 80,30 50,0 Z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Petals;
