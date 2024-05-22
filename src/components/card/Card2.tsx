
import React from 'react';

interface CardProps {
  imageSrc: string;
  description: string;
}

const Card2: React.FC<CardProps> = ({ imageSrc, description }) => {
  return (
    <div className="flex border rounded-lg p-4 shadow-md mr-1 bg-gray-800 border-blue-200 mx-10">
      <div className="w-10 h-28">
        <div className="rounded-full w-11 h-11 object-cover bg-gray-200">
            {imageSrc}
        </div>
      </div>
      <div className="ml-4">
        <p className="font-bold text-lg">James Mahoro</p>
        <p className="text-blue-200 text-xs">janviermuhawenimana@gmail.com</p>
        <p>{description}</p>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.<br/> Lorem netus lacinia convallis.</p>
      </div>
    </div>
  );
};

export default Card2;
