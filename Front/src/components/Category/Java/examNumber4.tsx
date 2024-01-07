import React from 'react';
import { BasicButton } from '../../../designs/basics/buttons';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { setThirdCategory, setSecondCategory } from '../../../store/categorySlice';

const ExamNumber4: React.FC<{ onBack: () => void }> = ({ onBack }) => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const handleClick = (examNumber: number) => {
    console.log(`${examNumber}번 문제지 클릭`);
    dispatch(setThirdCategory(String(examNumber))); 
    navigate('/test1');
  };

  const handleBack = () => {
    dispatch(setSecondCategory('')); // 두 번째 카테고리 초기화
    onBack(); // 상위 컴포넌트로 뒤로가기 액션 전파
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
      <BasicButton onClick={handleBack} style={{ margin: '10px 0' }}>뒤로가기</BasicButton>
    </div>
  );
};

export default ExamNumber4;
