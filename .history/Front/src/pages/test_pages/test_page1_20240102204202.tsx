import React from 'react';
import { HorizontalLine, VerticalLine } from '../../designs/basics/lines';

const TestPage: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    fontFamily: '"Malgun Gothic", sans-serif',
    textAlign: 'center',
    padding: '20px',
  };

  const boxStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '10px',
    display: 'inline-block',
    margin: '10px'
  };

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around', // 요소들을 균등하게 분산
    alignItems: 'center',
    margin: '20px 0'
  };

  return (
    <div style={pageStyle}>
      {/* 헤더 영역 */}
      <div style={boxStyle}>제 1교시</div>
      <div>
        <h2>자바스크립트 영역</h2>
      </div>
      <div style={boxStyle}>짝수형</div>
      <HorizontalLine/>
      
      {/* 세로로 분리된 섹션 */}
      <div style={sectionStyle}>
        <div style={{ width: '40%' }}>왼쪽 공간</div>
        <VerticalLine length="200px" thickness="2px" color="black" />
        <div style={{ width: '40%' }}>오른쪽 공간</div>
      </div>
    </div>
  );
};

export default TestPage;
