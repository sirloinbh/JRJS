import React from 'react';

const ExamNumber: React.FC = () => {
  const handleClick = (examNumber: number) => {
    console.log(`${examNumber}번 문제지 클릭`);
    // 여기에 문제지 선택 로직을 구현할 수 있습니다.
  };

  const handleBack = () => {
    console.log('뒤로가기 클릭');
    // 뒤로가기 로직 구현
  };

  return (
    <div style={{ padding: '10px' }}>
      {[1, 2, 3, 4, 5].map((num) => (
        <button key={num} onClick={() => handleClick(num)} style={{ display: 'block', margin: '10px 0' }}>
          {num}번 문제지
        </button>
      ))}
      <button onClick={handleBack} style={{ margin: '10px 0' }}>뒤로가기</button>
    </div>
  );
};

export default ExamCategory;
