import React from 'react';
import CoverPage from './cover_page';


const MainPage: React.FC = () => {
  const pageStyle = {
    fontFamily: '"Malgun Gothic", sans-serif',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '50vw', // 화면 가로 너비의 반
    margin: '1px auto',
    lineHeight: '1.6',
    height: '95vh', // 화면 높이와 동일
  };

  return (
    <div style={pageStyle}>
      <CoverPage/>
    </div>
  );
};

export default MainPage;