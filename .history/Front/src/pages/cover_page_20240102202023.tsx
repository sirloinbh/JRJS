import React from 'react';
import { HorizontalLine } from '../designs/basics/lines'
import { BasicBox, ShadowBox, RoundedBox, BorderedBox } from '../designs/basics/boxes';

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
      <BorderedBox style={{ padding: '20px', margin: '10px' }}>
        <p>본 시험은 크래프톤 정글 학생들의 프론트 엔드 / 백 엔드 </p>
기술 지식을 향상시키기 위해 제작되었습니다.

문제는 각 카테고리별로 100 문제 중 랜덤하게 
20 문제가 출제됩니다.

문제 난이도는 입문, 하수, 중수, 고수, 전문가 
5개가 있습니다.
</p>
      </BorderedBox>
      <BorderedBox style={{ padding: '20px', margin: '10px' }}>
      </BorderedBox>
    </div>
  );
};

export default CoverPage;
