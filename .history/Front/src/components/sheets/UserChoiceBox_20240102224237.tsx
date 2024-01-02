import React from 'react';
import { BorderedBox } from '../../designs/basics/boxes';

const UserChoiceBox: React.FC = () => {
  return (
    <BorderedBox style={{ padding: '20px', margin: '10px' }}>
      <button>다른 문제 풀러 가기</button>
      <button>로그아웃</button>
      <button>비밀번호 찾기</button>
    </BorderedBox>
  );
};

export default UserChoiceBox;
