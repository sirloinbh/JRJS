import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { EmailInput, NameInput } from '../../../designs/basics/forms';
import { BasicButton } from '../../../designs/basics/buttons';

interface PasswordRecoveryProps {
  onRecoverySuccess?: () => void;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ onRecoverySuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://093f0bad-bef4-4db9-aec3-a0292b56fc60.mock.pstmn.io/passwordRecovery', {
        name,
        email
      });

      toast(response.data); // 응답 데이터를 토스트 메시지로 출력
      if (onRecoverySuccess) {
        onRecoverySuccess(); // 비밀번호 찾기 성공 후 처리
      }
    } catch (error) {
      console.error('비밀번호 찾기 실패:', error);
      toast.error('비밀번호 찾기에 실패했습니다.'); // 오류 토스트 메시지
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
    <div style={containerStyle}>
      <div style={{ marginBottom: '10px' }}>
        <NameInput
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <EmailInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <BasicButton style={{ backgroundColor:'white', width: '80px', height: '40px', fontSize:'12px'}} onClick={handleSubmit}>확인</BasicButton>
    </div>
  );
};

export default PasswordRecovery;
