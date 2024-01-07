import React, { useState } from 'react';
import SignUp from './signUp';
import Login from './logIn';
import PasswordRecovery from './passwordRecovery';
import { BasicButton } from '../../../designs/basics/buttons';
import AdmissionTicket from '../admissionTicket';

const UserActions: React.FC = () => {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
  const [showAdmissionTicket, setShowAdmissionTicket] = useState(false);


  const handleSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
    setShowPasswordRecovery(false);
  };

  const handleLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
    setShowPasswordRecovery(false);
  };

  const handlePasswordRecovery = () => {
    setShowPasswordRecovery(true);
    setShowSignUp(false);
    setShowLogin(false);
  };
  const handleLoginSuccess = () => {
    setShowAdmissionTicket(true);
    // 기타 필요한 상태 변경
  };

  const handleSignUpSuccess = () => {
    console.log("회원가입 성공");
    setShowSignUp(false);
    // 필요한 다른 상태 변경
  };

  const handleRecoverySuccess = () => {
    console.log("비밀번호 찾기 성공");
    setShowPasswordRecovery(false);
    // 필요한 다른 상태 변경
  };


  const buttonsContainerStyle: React.CSSProperties = {
    display: 'flex', // Flex 레이아웃 사용
    flexDirection: 'row', // 요소들을 가로 방향으로 정렬
    justifyContent: 'center', // 요소들을 가로 중앙에 배치
    alignItems: 'center', // 요소들을 세로 중앙에 배치
    gap: '10px', // 버튼 사이의 간격
  };

  return (
    <div >
      {showAdmissionTicket ? (
        <AdmissionTicket />
      ) : (
        <div style={buttonsContainerStyle}>
          {showSignUp && <SignUp onSignUpSuccess={handleSignUpSuccess}/>}
          {showLogin && <Login onLoginSuccess={handleLoginSuccess} />}
          {showPasswordRecovery && <PasswordRecovery onRecoverySuccess={handleRecoverySuccess}/>}
          {!showSignUp && !showLogin && !showPasswordRecovery && (
            <>
              <BasicButton style={{  width: '100px', height: '40px', fontSize:'14px'}} onClick={handleSignUp} number={1}>회원가입</BasicButton>
              <BasicButton style={{  width: '100px', height: '40px', fontSize:'14px' }} onClick={handleLogin} number={2}>로그인</BasicButton>
              <BasicButton style={{  padding: '0', width: '100px', height: '40px', fontSize:'14px' }} onClick={handlePasswordRecovery} number={3}>비밀번호 찾기</BasicButton>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserActions;
