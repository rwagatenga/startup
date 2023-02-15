import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};
const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`md:mx-auto rounded-xl shadow-md overflow-hidden px-2 py-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
