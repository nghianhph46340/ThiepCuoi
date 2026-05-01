import React from 'react';
import HeroSection from './components/HeroSection';
import FamilySection from './components/FamilySection';
import GallerySection from './components/GallerySection';
import CeremonySection from './components/CeremonySection';
import AlbumSection from './components/AlbumSection';
import RsvpSection from './components/RsvpSection';

function App() {
  return (
    <div className="wedding-app">
      <HeroSection />
      <FamilySection />
      <CeremonySection />
      <AlbumSection />
      <RsvpSection />
      
      {/* Nút nhạc cố định góc dưới bên phải toàn trang */}
      <div className="music-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5b2b2" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 15v7"></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
