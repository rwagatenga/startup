import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testmonials: React.FC = () => {
  const cardsData = [
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
  ];

  return (
    <div className="container pt-8  mx-auto flex flex-wrap justify-between mt-44">
      <div className="flex overflow-x-visible space-x-4 hide-scrollbar gap-3">
        {cardsData.map((card, index) => (
          <TestimonialCard
            key={index}
            imageSrc={card.imageSrc}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Testmonials;
