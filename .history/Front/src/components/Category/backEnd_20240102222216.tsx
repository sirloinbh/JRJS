import React from 'react';

const BackEnd: React.FC = () => {
  const handleClick = (category: string) => {
    console.log(`${category} 버튼 클릭`);
    // 각 카테고리에 맞는 로직 구현
  };

  const handleBack = () => {
    console.log('뒤로가기 클릭');
    // 뒤로가기 로직 구현
  };

  return (
    <div style={{ padding: '10px' }}>
      <button onClick={() => handleClick('Java')} style={{ margin: '10px 0' }}>Java</button>
      <button onClick={() => handleClick('Express.js')} style={{ margin: '10px 0' }}>Express.js</button>
      <button onClick={() => handleClick('Spring')} style={{ margin: '10px 0' }}>Spring</button>
      <button onClick={handleBack} style={{ margin: '10px 0' }}>뒤로가기</button>
    </div>
  );
};

export default BackEnd;
