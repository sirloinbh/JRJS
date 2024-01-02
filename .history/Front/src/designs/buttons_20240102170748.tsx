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

export default BasicButton;