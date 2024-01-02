import React from 'react';
import { BorderedBox } from '../../designs/basics/boxes';

const ExamConclusionBox: React.FC = () => {
  return (
    <BorderedBox style={{ padding: '20px', margin: '10px' }}>
      <p>본 시험은 크래프톤 정글 학생들의 프론트 엔드 / 백 엔드 </p>
      <p>기술 지식을 향상시키기 위해 제작되었습니다.</p>
      <p>문제는 각 카테고리별로 100 문제 중 랜덤하게</p>
      <p>20 문제가 출제됩니다.</p>
      <p>문제 난이도는 입문, 하수, 중수, 고수, 전문가 </p>
      <p>5개가 있습니다.</p>
    </BorderedBox>
  );
};

export default ExamConclusionBox;