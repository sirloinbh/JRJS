import React from 'react';
import { BasicButton } from '../../../designs/basics/buttons';
import { useNavigate } from 'react-router-dom'; 

const ExamNumber6: React.FC<{ onBack: () => void }> = ({ onBack }) => {

  const navigate = useNavigate(); 

  const handleClick = (examNumber: number) => {
    console.log(`${examNumber}번 문제지 클릭`);
    navigate('/test1');
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between', // 요소들을 양쪽 끝으로 분산
    flexDirection: 'row',
    padding: '10px',
    width : '900px'
  };

  return (
    <div style={containerStyle}>
      {[1, 2, 3, 4, 5].map((num) => (
        <BasicButton key={num} onClick={() => handleClick(num)} style={{ display: 'block', margin: '10px 0' }}>
          {num}번 문제지
        </BasicButton>
      ))}
      <BasicButton onClick={onBack} style={{ margin: '10px 0' }}>뒤로가기</BasicButton>
    </div>
  );
};

export default ExamNumber6;
