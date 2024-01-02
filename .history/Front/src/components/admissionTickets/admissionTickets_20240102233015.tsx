import React from 'react';

const AdmissionTicket: React.FC = () => {
  const name = '홍길동'; // 예시 이름
  const examNumber = '123456'; // 예시 수험 번호
  const imagePath = '../../../public/images/human.png'; // 예시 이미지 경로

  const handleLogout = () => {
    console.log('로그아웃');
    // 로그아웃 로직 구현
  };

  const ticketStyle: React.CSSProperties = {
    display: 'flex',
    border: '1px solid black',
    padding: '20px'
  };

  const photoStyle: React.CSSProperties = {
    marginRight: '20px'
  };

  const infoStyle: React.CSSProperties = {
    textAlign: 'left'
  };

  return (
    <div style={ticketStyle}>
      <div style={photoStyle}>
        <strong>사진</strong>
        <img src={imagePath} alt="Student" style={{ display: 'block', maxWidth: '100px', maxHeight: '100px', margin: '10px 0' }} />
      </div>
      <div style={infoStyle}>
        <div><strong>이름: </strong>{name}</div>
        <div><strong>수험 번호: </strong>{examNumber}</div>
        <button onClick={handleLogout} style={{ marginTop: '10px' }}>로그아웃</button>
      </div>
    </div>
  );
};

export default AdmissionTicket;
