import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstCategory, setSecondCategory  } from '../../store/categorySlice';

import { BasicButton } from '../../designs/basics/buttons';
import FrontEnd from './frontEnd';
import BackEnd from './backEnd';
import { RootState } from '../../store/store';

const CategoryContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { firstCategory, secondCategory} = useSelector((state: RootState) => state.category);


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
    dispatch(setFirstCategory('프론트'));
  };

  const handleBackEndClick = () => {
    setShowBackEnd(true);
    setShowFrontEnd(false);
    dispatch(setFirstCategory('백'));
  };

  const handleBack = () => {
    setShowFrontEnd(false);
    setShowBackEnd(false); 
    if (secondCategory) {
      dispatch(setSecondCategory(''));
    } else if (firstCategory) {
      dispatch(setFirstCategory(''));
    }
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
