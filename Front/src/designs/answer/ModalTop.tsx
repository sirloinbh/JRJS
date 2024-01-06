import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const containerStyle: React.CSSProperties = {
  position: 'fixed', 
  bottom: '5%',  // 아래에서 10px 떨어진 위치
  left: '30%',    // 왼쪽에서 10px 떨어진 위치
  transform: 'translate(-25%, 0)', 
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

const ModalTop: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div style={containerStyle}>
      {children}
      <button style={closeButtonStyle} onClick={onClose}>X</button>
    </div>
  );
};

export default ModalTop;
