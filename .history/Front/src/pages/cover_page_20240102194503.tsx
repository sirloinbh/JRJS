import React from 'react';

const CoverPage: React.FC = () => {
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

  return (
    <div style={pageStyle}>
      <h1>크래프톤 정글 시험 문제지</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={boxStyle}>제 1교시</div>
        <div><h2>자바스크립트 영역</h2></div>
        <div style={boxStyle}>짝수형</div>
      </div>
    </div>
  );
};

export default CoverPage;
