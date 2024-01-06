import React, { useState }  from 'react';
import { BasicButton } from '../../designs/basics/buttons';
import ExamNumber4 from './Java/examNumber4';
import ExamNumber5 from './Nodejs_Expressjs/examNumber5';
import ExamNumber6 from './Spring_SpringBoot/examNumber6';

const BackEnd: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleClick = (category: string) => {
    setSelectedCategory(category);
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between', // 요소들을 양쪽 끝으로 분산
    flexDirection: 'row',
    padding: '10px',
    width : '750px'
  };


  return (
    <div>
      {selectedCategory === 'Java' && <ExamNumber4 onBack={() => setSelectedCategory('')} />}
      {selectedCategory === 'Express.js' && <ExamNumber5 onBack={() => setSelectedCategory('')} />}
      {selectedCategory === 'Spring' && <ExamNumber6 onBack={() => setSelectedCategory('')} />}
      {selectedCategory === '' && (
        <div style={ containerStyle }>
          <BasicButton onClick={() => handleClick('Java')} style={{ margin: '10px 0' }}>Java</BasicButton>
          <BasicButton onClick={() => handleClick('Express.js')} style={{ margin: '10px 0' }}>Express.js</BasicButton>
          <BasicButton onClick={() => handleClick('Spring')} style={{ margin: '10px 0' }}>Spring</BasicButton>
          <BasicButton onClick={onBack} style={{ margin: '10px 0' }}>뒤로가기</BasicButton>
        </div>
      )}
      </div>
    );
};

export default BackEnd;
