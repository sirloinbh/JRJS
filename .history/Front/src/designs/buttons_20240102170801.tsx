import React from 'react';

interface BasicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const BasicButton: React.FC<BasicButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 15px', margin: '5px' }}>
      {children}
    </button>
  );
};
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{ padding: '10px 15px', margin: '5px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

export default BasicButton;