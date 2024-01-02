import React from 'react';

const FrontEndCategory: React.FC = () => {
  const handleClick = (category: string) => {
    console.log(`${category} 버튼 클릭`);
    // 여기에 각 카테고리에 맞는 로직을 구현할 수 있습니다.
  };

  return (
    <div style={{ padding: '10px' }}>
      <button onClick={() => handleClick('HTML/CSS')} style={{ margin: '10px 0' }}>HTML/CSS</button>
      <button onClick={() => handleClick('JavaScript')} style={{ margin: '10px 0' }}>JavaScript</button>
      <button onClick={() => handleClick('React')} style={{ margin: '10px 0' }}>React</button>
    </div>
  );
};

export default FrontEndCategory;
