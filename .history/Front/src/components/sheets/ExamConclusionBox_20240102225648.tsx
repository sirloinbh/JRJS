import React from 'react';
import { BorderedBox } from '../../designs/basics/boxes';

const ExamConclusionBox: React.FC = () => {
  return (
    <BorderedBox style={{ padding: '20px', margin: '10px' }}>
      <p>시험을 치르느라 수고하셨습니다. </p>
      <p>Computer Science 면접 대비로 이 사이트가 도움이 되었기를 바랍니다.</p>
      <p>문제는 각 카테고리별로 100 문제 중 랜덤하게</p>
      <p>20 문제가 출제됩니다.</p>
      <p>문제 난이도는 입문, 하수, 중수, 고수, 전문가 </p>
      <p>5개가 있습니다.</p>
    </BorderedBox>
  );
};

export default ExamConclusionBox;