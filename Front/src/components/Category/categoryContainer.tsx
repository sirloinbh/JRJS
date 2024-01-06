import React, { useState } from 'react';
import { BasicButton } from '../../designs/basics/buttons';
import FrontEnd from './frontEnd';
import BackEnd from './backEnd';

const CategoryContainer: React.FC = () => {

  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showBackEnd, setShowBackEnd] = useState(false); 

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between', // 요소들을 양쪽 끝으로 분산
    padding: '10px',
    width : '500px'
  };

  const handleFrontEndClick = () => {
    setShowFrontEnd(true);
    setShowBackEnd(false);
  };

  const handleBackEndClick = () => {
    setShowBackEnd(true);
    setShowFrontEnd(false);
  };

  const handleBack = () => {
    setShowFrontEnd(false);
    setShowBackEnd(false); // FrontEnd 컴포넌트에서 뒤로가기를 누를 때 실행될 로직
  };


  return (
    <div>
      {showFrontEnd ? (
        <FrontEnd onBack={handleBack} />
      ) : showBackEnd ? (
        <BackEnd onBack={handleBack} />
      ) : (
        <div style={containerStyle}>
          <BasicButton onClick={handleFrontEndClick}>프론트 엔드</BasicButton>
          <BasicButton onClick={handleBackEndClick}>백 엔드</BasicButton>
        </div>
      )}
    </div>
  );
};


export default CategoryContainer;
