import React from 'react';

const CategoryContainer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between', // 요소들을 양쪽 끝으로 분산
    padding: '10px',
    margin: '10px 0'
  };

  const handleFrontEndClick = () => {
    console.log('프론트 엔드 클릭');
    // 프론트 엔드 관련 로직 또는 컴포넌트 렌더링
  };

  const handleBackEndClick = () => {
    console.log('백 엔드 클릭');
    // 백 엔드 관련 로직 또는 컴포넌트 렌더링
  };

  return (
    <div style={containerStyle}>
      <button onClick={handleFrontEndClick}>프론트 엔드</button>
      <button onClick={handleBackEndClick}>백 엔드</button>
    </div>
  );
};

export default CategoryContainer;
