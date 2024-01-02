import './App.css'
import React from 'react';
import MainPage from './pages/main_page';
import IconContainer from './components/leftside/IconContainer';
import AdmissionTicket from './components/admissionTickets/admissionTickets';


const App: React.FC = () => {
  const pageStyle = {
    fontFamily: '"Malgun Gothic", sans-serif',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '50vw', // 화면 가로 너비의 반
    margin: '5px auto',
  };

  const handleLeftArrowClick = () => {
    console.log('왼쪽 화살표 클릭');
    // 왼쪽 화살표 클릭 시 수행할 로직
  };

  const handleRightArrowClick = () => {
    console.log('오른쪽 화살표 클릭');
    // 오른쪽 화살표 클릭 시 수행할 로직
  };

  return (
    <div>
      <div>
        <IconContainer />
        <button onClick={handleLeftArrowClick}>
          <img src="../../public/images/leftarrow.png" alt="Left Arrow" />
        </button>
      </div>
      <MainPage /> 
      <div>
        <AdmissionTicket />
        <button onClick={handleRightArrowClick}>
          <img src="../../public/images/rightarrow_.png" alt="Right Arrow" />
        </button>
      </div>

    </div>

  );
};

export default App;
