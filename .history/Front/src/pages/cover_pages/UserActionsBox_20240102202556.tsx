import React from 'react';
import { BorderedBox } from '../designs/basics/boxes';

const UserActionsBox: React.FC = () => {
  return (
    <BorderedBox style={{ padding: '20px', margin: '10px' }}>
      <button>회원가입</button>
      <button>로그인</button>
      <button>비밀번호 찾기</button>
    </BorderedBox>
  );
};

export default UserActionsBox;
