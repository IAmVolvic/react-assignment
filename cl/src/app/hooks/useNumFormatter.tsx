import React from 'react';

interface NumberFormatterProps {
  number: number;
}

const NumberFormatter: React.FC<NumberFormatterProps> = ({ number }) => {
  const formattedNumber = number >= 1 && number <= 10 ? number.toString().padStart(2, '0') : number;
  return <span>{formattedNumber}</span>;
};

export default NumberFormatter;
