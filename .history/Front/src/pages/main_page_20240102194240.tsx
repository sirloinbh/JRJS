import React from 'react';
import CoverPage from './pages/cover_page';


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
      <h1>대한민국 수학능력시험</h1>
      <p>이 페이지는 수능 시험지를 모티브로 한 메인 페이지입니다.</p>
      <p>여기에는 수능 시험지와 유사한 폰트와 배경색이 사용되었습니다.</p>
      {/* 추가 내용 */}
    </div>
  );
};

export default MainPage;
