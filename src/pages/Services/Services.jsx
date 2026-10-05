import React from 'react';
import DetailedServices from '../../components/DetailedServices/DetailedServices';
import Reasons from '../../components/Reasons/Reasons';

const Services = () => {
  return (
    <main className="services-page">
      <DetailedServices />
      <Reasons />
    </main>
  );
};

export default Services;