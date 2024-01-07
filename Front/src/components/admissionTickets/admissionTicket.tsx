import React from 'react';
import { useDispatch } from 'react-redux';
import { BasicButton } from '../../designs/basics/buttons';
import { logout } from '../../store/userSlice';
import { resetCategories } from '../../store/categorySlice';
import { useNavigate } from 'react-router-dom';

const AdmissionTicket: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = '홍길동'; // 예시 이름
  const examNumber = '123456'; // 예시 수험 번호
  const imagePath = '../../../public/images/human.png'; // 예시 이미지 경로

  const handleLogout = () => {
    console.log('로그아웃');
    dispatch(logout());
    dispatch(resetCategories());
    navigate('/');
  };

  const ticketStyle: React.CSSProperties = {
    display: 'flex',
    padding: '10px',
    width: '300px',
    fontSize: '20px',
    border: '1px solid lightgray' ,
    backgroundColor: '#f2f2f2f1',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.5)',
  };

  const photoStyle: React.CSSProperties = {
    marginRight: '20px',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',

  };

  const infoStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  return (
    <div style={ticketStyle}>
      <div style={photoStyle}>
        <strong>사진</strong>
        <img src={imagePath} alt="Student" style={{ display: 'block', maxWidth: '100px', maxHeight: '100px', margin: '10px 0 10px 0' }} />
      </div>
      <div style={infoStyle}>
        <div style = {{ textAlign: 'left'}}>
          <div style ={{ margin: '10px 0 10px 0'}}><strong>이름: </strong>{name}</div>
          <div style ={{ margin: '10px 0 10px 0'}}><strong>수험 번호: </strong>{examNumber}</div>
        </div>
        <BasicButton onClick={handleLogout} style={{ width: '100px', height: '40px', fontSize:'14px' }}>로그아웃</BasicButton>
      </div>
    </div>
  );
};

export default AdmissionTicket;
