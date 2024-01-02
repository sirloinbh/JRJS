import React from 'react';


const AdmissionTicket: React.FC = () => {
  const name = '홍길동'; // 예시 이름
  const examNumber = '123456'; // 예시 수험 번호
  const imagePath = '/images/student-photo.png'; // 예시 이미지 경로

  const handleLogout = () => {
    console.log('로그아웃');
    // 로그아웃 로직 구현
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <strong>이름: </strong>{name}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>사진: </strong>
        <img src={imagePath} alt="Student" style={{ maxWidth: '100px', maxHeight: '100px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>수험 번호: </strong>{examNumber}
      </div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default AdmissionTicket;
