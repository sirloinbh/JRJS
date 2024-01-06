// components/SubjectTimeDisplay.jsx 또는 적절한 경로
import React from 'react';

const SubjectTimeDisplay: React.FC = () => {
  const boxStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '10px',
    display: 'inline-block',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={boxStyle}>제 1교시</div>
      <div>
        <h2>자바스크립트 영역</h2>
      </div>
      <div style={boxStyle}>짝수형</div>
    </div>
  );
};

export default SubjectTimeDisplay;
