import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EmailInput, NameInput, PasswordInput } from '../../../designs/basics/forms';
import { BasicButton } from '../../../designs/basics/buttons';

interface SignUpProps {
  onSignUpSuccess?: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://093f0bad-bef4-4db9-aec3-a0292b56fc60.mock.pstmn.io/signUp', {
        name,
        email,
        password
      });

      toast(response.data); // 응답을 토스트 메시지로 표시
      if (onSignUpSuccess) {
        onSignUpSuccess(); // 회원가입 성공 후 처리
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
      toast.error('회원가입에 실패했습니다.'); // 오류를 토스트 메시지로 표시
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
    <div style={containerStyle} >
      <div style={{ marginBottom: '5px' }}>
        <NameInput
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <EmailInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <BasicButton style={{ backgroundColor:'white', width: '80px', height: '30px', fontSize:'12px'}} onClick={handleSubmit}>확인</BasicButton>
    </div>
  );
};

export default SignUp;
