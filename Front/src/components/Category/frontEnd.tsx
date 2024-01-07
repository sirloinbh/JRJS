import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSecondCategory } from '../../store/categorySlice';

import { BasicButton } from '../../designs/basics/buttons';
import ExamNumber1 from './HTML_CSS/examNumber1';
import ExamNumber2 from './JavaScript/examNumber2';
import ExamNumber3 from './React_TypeScript/examNumber3';


const FrontEnd: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleClick = (category: string) => {
    setSelectedCategory(category);
    dispatch(setSecondCategory(category));
  };


  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between', // 요소들을 양쪽 끝으로 분산
    flexDirection: 'row',
    padding: '10px',
    width : '750px'
  };

  return (
    <div>
      {selectedCategory === 'HTML/CSS' && <ExamNumber1 onBack={() => setSelectedCategory('')} />}
      {selectedCategory === 'JavaScript' && <ExamNumber2 onBack={() => setSelectedCategory('')} />}
      {selectedCategory === 'React/TypeScript' && <ExamNumber3 onBack={() => setSelectedCategory('')} />}
      {selectedCategory === '' && (
        <div style={containerStyle}>
          <BasicButton onClick={() => handleClick('HTML/CSS')}>HTML/CSS</BasicButton>
          <BasicButton onClick={() => handleClick('JavaScript')}>JavaScript</BasicButton>
          <BasicButton onClick={() => handleClick('React/TypeScript')}>React/TypeScript</BasicButton>
          <BasicButton onClick={onBack}>뒤로가기</BasicButton>
        </div>
      )}
    </div>
  );
};

export default FrontEnd;
