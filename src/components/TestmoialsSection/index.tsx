import React from 'react';
import Card2 from '../card/Card2';

const Testmonials: React.FC = () => {
  const cardsData = [
    { imageSrc: '', description:'' },
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
    { imageSrc: '', description: '' },
  ];

  return (
    <div className="container mx-18 p-4">
      <div className="flex overflow-x-visible space-x-4 hide-scrollbar gap-5">
        {cardsData.map((card, index) => (
          <Card2 key={index} imageSrc={card.imageSrc} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Testmonials;
