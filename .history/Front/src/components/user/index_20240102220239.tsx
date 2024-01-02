import React from 'react';

const UserActionsContainer: React.FC = () => {
  const handleSignUp = () => {
    console.log('회원가입 클릭');
    // 회원가입 로직 또는 컴포넌트 렌더링
  };

  const handleLogin = () => {
    console.log('로그인 클릭');
    // 로그인 로직 또는 컴포넌트 렌더링
  };

  const handlePasswordRecovery = () => {
    console.log('비밀번호 찾기 클릭');
    // 비밀번호 찾기 로직 또는 컴포넌트 렌더링
  };

  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={handleSignUp} style={{ margin: '10px' }}>회원가입</button>
      <button onClick={handleLogin} style={{ margin: '10px' }}>로그인</button>
      <button onClick={handlePasswordRecovery} style={{ margin: '10px' }}>비밀번호 찾기</button>
    </div>
  );
};

export default UserActionsContainer;
