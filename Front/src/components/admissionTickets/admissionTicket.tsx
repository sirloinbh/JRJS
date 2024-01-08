import React from 'react';
import { useDispatch } from 'react-redux';
import { BasicButton } from '../../designs/basics/buttons';
import { logout } from '../../store/userSlice';
import { resetCategories } from '../../store/categorySlice';
import { useNavigate } from 'react-router-dom';

const AdmissionTicket: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = '홍길동';
  const examNumber = '123456';
  const imagePath = '../../../public/images/human.png';

  const handleLogout = () => {
    console.log('로그아웃');
    dispatch(logout());
    dispatch(resetCategories());
    navigate('/');
  };

  const ticketStyle: React.CSSProperties = {
    display: 'flex',
    padding: '10px',
    width: '350px',
    height : '150px',
    fontSize: '20px',
    border: '1px solid lightgray',
    backgroundColor: '#f2f2f2f1',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.5)',
  };

  const photoBoxStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '5px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const individualBoxStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '4px',
    margin: '5px 0px',
    display: 'inline-block',
  };

  const createIndividualBoxes = (text: string) => 
    text.split('').map((char, index) => (
      <div key={index} style={individualBoxStyle}>{char}</div>
    ));

  return (
    <div style={ticketStyle}>
      <div>
        <div style = {{ margin: "10px 35px"}}>사진</div>
        <div style={photoBoxStyle}>
          <img src={imagePath} alt="Student" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </div>
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <div style = {{ margin: '10px 10px'}}>이름</div>
          {createIndividualBoxes(name)}
        </div>
        <div style={{ display: 'flex' }}>
          <div style = {{ margin: '10px 10px'}} >수험 번호 </div>
          {createIndividualBoxes(examNumber)}
        </div>
        <BasicButton onClick={handleLogout} style={{ margin: '20px 50px', width: '100px', height: '40px', fontSize:'14px' }}>로그아웃</BasicButton>
      </div>
    </div>
  );
};

export default AdmissionTicket;
