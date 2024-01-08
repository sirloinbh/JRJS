// Modal.tsx
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}


const containerStyle: React.CSSProperties = {
    position: 'fixed', 
    top: '35%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    backgroundColor: 'white', 
    padding: '10px', 
    zIndex: 1000,
    border: '1px solid black',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    height: '40%',
  };

const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    fontSize: '16px',
  };

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div style={ containerStyle }>
      {children}
      <button style={closeButtonStyle} onClick={onClose}>X</button>
    </div>
  );
};

export default Modal;
