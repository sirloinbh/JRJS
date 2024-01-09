import React, { useState } from 'react';
import axios from 'axios';
import { EmailInput, PasswordInput } from '../../../designs/basics/forms';
import { BasicButton } from '../../../designs/basics/buttons';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/userSlice';

import { toast } from 'react-toastify';

interface LoginProps {
  onLoginSuccess?: () => void;
}
const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://093f0bad-bef4-4db9-aec3-a0292b56fc60.mock.pstmn.io/logIn', {
        email,
        password
      });

      toast(response.data); // 응답을 토스트 메시지로 표시
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      dispatch(login());
    } catch (error) {
      console.error('로그인 실패:', error);
      toast.error('로그인에 실패했습니다.'); // 오류를 토스트 메시지로 표시
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
