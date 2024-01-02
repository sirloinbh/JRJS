import React from 'react';
import { HorizontalLine , VerticalLine } from '../../designs/basics/lines';


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

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between', // 양쪽 끝으로 요소를 분산
    alignItems: 'center',
    margin: '10px'
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <div></div>
        <h1>크래프톤 정글 시험 문제지</h1>
        <div>1</div> {/* 여기에 번호 추가 */}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={boxStyle}>제 1교시</div>
        <div>
          <h2>자바스크립트 영역</h2>
        </div>
        <div style={boxStyle}>짝수형</div>
      </div>
      <HorizontalLine/>
      <div>
        
        <VerticalLine/>
      </div>


    </div>
  );
};

export default TestPage;
