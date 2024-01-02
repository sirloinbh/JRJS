import React from 'react';
import CoverPage from './cover_pages/cover_page';
import TestPage from './test_pages/test_page1';
import IconContainer from '../components/leftside/IconContainer';
import 


const MainPage: React.FC = () => {
  const pageStyle = {
    fontFamily: '"Malgun Gothic", sans-serif',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '50vw', // 화면 가로 너비의 반
    margin: '5px auto',
    lineHeight: '1.6',
    height: '95vh', // 화면 높이와 동일
  };

  const handleLeftArrowClick = () => {
    console.log('왼쪽 화살표 클릭');
    // 왼쪽 화살표 클릭 시 수행할 로직
  };

  const handleRightArrowClick = () => {
    console.log('오른쪽 화살표 클릭');
    // 오른쪽 화살표 클릭 시 수행할 로직
  };

  return (
    <div style={pageStyle}>
      <div>
        <IconContainer />
        <button onClick={handleLeftArrowClick}>
          <img src="/images/left-arrow.png" alt="Left Arrow" />
        </button>
      </div>
      <div>
        <CoverPage/>
        <TestPage />
      </div>
      <div>
        <AdmissionTicket />
        <button onClick={handleRightArrowClick}>
          <img src="/images/right-arrow.png" alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default MainPage;
