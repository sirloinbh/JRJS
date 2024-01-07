// components/SubjectTimeDisplay.jsx 또는 적절한 경로
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const SubjectTimeDisplay: React.FC = () => {
  const firstCategory = useSelector((state: RootState) => state.category.firstCategory);
  const secondCategory = useSelector((state: RootState) => state.category.secondCategory);
  const thirdCategory = useSelector((state: RootState) => state.category.thirdCategory);

  const boxStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '10px',
    display: 'inline-block',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={boxStyle}>제 {thirdCategory}교시</div>
      <div>
        <h2>{secondCategory} 영역</h2>
      </div>
      <div style={boxStyle}>{firstCategory} 형</div>
    </div>
  );
};

export default SubjectTimeDisplay;
