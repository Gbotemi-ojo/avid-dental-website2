import React from 'react';
import Hero from '../../components/Hero/Hero';
import Statement from '../../components/Statement/Statement';
import ServicesSection from '../../components/Services/Services';
import Stats from '../../components/Stats/Stats';
import Pricing from '../../components/Pricing/Pricing';
import Reasons from '../../components/Reasons/Reasons';
import FAQ from '../../components/FAQ/FAQ';
import PromoMap from '../../components/PromoMap/PromoMap';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Statement />
      <ServicesSection />
      <Stats />
      <Pricing />
      <Reasons />
      <FAQ />
      <PromoMap />
    </main>
  );
};

export default Home;
