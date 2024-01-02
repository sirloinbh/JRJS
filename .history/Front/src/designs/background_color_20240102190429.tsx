import React from 'react';

interface BackgroundColorProps {
  color: 'gray' | 'cream';
  children: React.ReactNode;
}

const BackgroundColor: React.FC<BackgroundColorProps> = ({ color, children }) => {
  const backgroundColor = color === 'gray' ? '#f2f2f2' : '#f5f5eb';
  
  return (
    <div style={{ backgroundColor, padding: '20px', borderRadius: '5px' }}>
      {children}
    </div>
  );
};

export default BackgroundColor;
