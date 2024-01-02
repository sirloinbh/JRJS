import React, { useState } from 'react';

const PasswordRecoveryComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('비밀번호 찾기 정보:', { name, email });
    // 여기에 비밀번호 찾기 처리 로직을 추가할 수 있습니다.
  };

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
      </div>
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};

export default PasswordRecoveryComponent;
