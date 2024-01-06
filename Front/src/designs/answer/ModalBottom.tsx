// Modal.tsx
import React from 'react';
import { BasicButton } from '../basics/buttons';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}


const containerStyle: React.CSSProperties = {
    position: 'fixed', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    backgroundColor: 'white', 
    padding: '20px', 
    zIndex: 1000,
    border: '1px solid black',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };


const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div style={ containerStyle }>
      {children}
      <BasicButton onClick={onClose} style={{ marginTop: '10px' }}>닫기</BasicButton>
    </div>
  );
};

export default Modal;
