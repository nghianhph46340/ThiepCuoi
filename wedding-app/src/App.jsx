import React from 'react';
import HeroSection from './components/HeroSection';
import DateSection from './components/DateSection';
import PoemSection from './components/PoemSection';
import FamilySection from './components/FamilySection';
import GallerySection from './components/GallerySection';
import CeremonySection from './components/CeremonySection';
import AlbumSection from './components/AlbumSection';
import RsvpSection from './components/RsvpSection';

function App() {
  return (
    <div className="wedding-app">
      <HeroSection />
      <DateSection />
      <PoemSection />
      <FamilySection />
      <GallerySection />
      <CeremonySection />
      <AlbumSection />
      <RsvpSection />
    </div>
  );
}

export default App;
