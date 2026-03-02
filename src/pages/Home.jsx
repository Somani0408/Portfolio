import React from 'react';
import HeroModern from '../components/ui/HeroModern';
import StatsBar from '../components/ui/StatsBar';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col gap-24 overflow-x-hidden">
      <HeroModern />
      <StatsBar />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
