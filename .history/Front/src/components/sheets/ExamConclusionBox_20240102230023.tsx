import React from 'react';
import { BorderedBox } from '../../designs/basics/boxes';

const ExamConclusionBox: React.FC = () => {
  return (
    <BorderedBox style={{ padding: '20px', margin: '10px' }}>
      <p>시험을 치르느라 수고하셨습니다. </p>
      <p>Computer Science 면접 대비에 이 사이트가 도움이 되었기를 바랍니다.</p>
      <p>시간적 여유가 된다면 앞으로도 더 많은 컴퓨터 과학 분야의 </p>
      <p>개념 문제들이 추가될 예정입니다.</p>
      <p>크래프톤 정글의 classbinu님의 jungle-pedia 프로젝트에서</p>
      <p>영감을 받아 </p>
    </BorderedBox>
  );
};

export default ExamConclusionBox;