import React, { useState } from 'react';

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('로그인 정보:', { email, password });
    // 여기에 로그인 처리 로직을 추가할 수 있습니다.
  };

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="패스워드"
        />
      </div>
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};

export default LoginComponent;
