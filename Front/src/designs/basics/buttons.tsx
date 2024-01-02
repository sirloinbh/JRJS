import React from 'react';

// 기본 버튼 Props
interface BasicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// 기본 버튼
export const BasicButton: React.FC<BasicButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 15px', margin: '5px' }}>
      {children}
    </button>
  );
};

// 프라이머리 버튼 Props
interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// 프라이머리 버튼
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{ padding: '10px 15px', margin: '5px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}
    >
      {children}
    </button>
  );
};

// 세컨더리 버튼 Props
interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// 세컨더리 버튼
export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: '10px 15px', margin: '5px', backgroundColor: 'gray', color: 'black', border: '1px solid black', borderRadius: '4px' }}
    >
      {children}
    </button>
  );
};
