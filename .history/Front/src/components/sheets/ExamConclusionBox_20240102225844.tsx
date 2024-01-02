import React from 'react';
import { BorderedBox } from '../../designs/basics/boxes';

const ExamConclusionBox: React.FC = () => {
  return (
    <BorderedBox style={{ padding: '20px', margin: '10px' }}>
      <p>시험을 치르느라 수고하셨습니다. </p>
      <p>Computer Science 면접 대비에 이 사이트가 도움이 되었기를 바랍니다.</p>
      <p>시간적 여유가 된다면 앞으로도 더 많은 컴퓨터 과학 분야의 </p>
      <p>20 문제가 출제됩니다.</p>
      <p></p>
      <p></p>
    </BorderedBox>
  );
};

export default ExamConclusionBox;