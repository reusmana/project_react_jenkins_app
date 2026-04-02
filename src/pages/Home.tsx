import React from 'react';
import HeroSection from '../components/HeroSection';
import MarqueeSection from '../components/MarqueeSection';
import WorkScrollStory from '../components/WorkScrollStory';
import JourneySection from '../components/JourneySection';
import SkillsBentoGrid from '../components/SkillsBentoGrid';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <WorkScrollStory />
      <JourneySection />
      <SkillsBentoGrid />
      <ContactSection />
    </>
  );
}

export default Home;
