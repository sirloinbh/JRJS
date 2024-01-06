import React, { useState } from 'react';
import { EmailInput, PasswordInput } from '../../../designs/basics/forms';
import { BasicButton } from '../../../designs/basics/buttons';

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    console.log('로그인 정보:', { email, password });
    // 여기에 로그인 처리 로직을 추가할 수 있습니다.
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // 가로 중앙 정렬
    alignItems: 'center', // 세로 중앙 정렬
    height: '100vh', // 전체 화면 높이
    width: '100vw', // 전체 화면 너비
  };


  return (
    <div style={ containerStyle }>
      <div style={{ marginBottom: '10px' }}>
        <EmailInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <BasicButton style={{ backgroundColor:'white', width: '80px', height: '40px', fontSize:'12px'}} onClick={handleSubmit}>확인</BasicButton>
    </div>
  );
};

export default Login;
