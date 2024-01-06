import React from 'react';
import UserActions from '../../components/admissionTickets/user/userActions';
import { BorderedBox } from '../../designs/basics/boxes';

const AdmissionPage: React.FC = () => {
    const boxStyle: React.CSSProperties = {
        padding: '10px',
        margin: '0px',
        fontSize: '10px',
        height: '180px',
        width: '350px',
        display: 'flex',       // Flexbox 레이아웃 적용
        flexDirection: 'column', // 항목들을 세로로 정렬
        alignItems: 'center',    // 가운데 정렬
        justifyContent: 'space-evenly', // 간격을 균등하게 분배
        gap: '0px' ,             // 버튼 사이의 간격
        backgroundColor: 'white',
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.5)'
      };
    

  return (
    <BorderedBox style={boxStyle} >
        <UserActions/>
    </BorderedBox>
  );
};

export default AdmissionPage;
