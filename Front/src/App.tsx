import './App.css'
import React from 'react';
import MainPage from './pages/main_page';
import IconContainer from './components/leftside/IconContainer';
import AdmissionTicket from './components/admissionTickets/admissionTickets';


const App: React.FC = () => {
  const pageStyle = {
    display: 'flex', // flex 레이아웃 적용
    alignItems: 'center', // 수직 중앙 정렬
    justifyContent: 'center', // 수평 중앙 정렬
    borderRadius: '8px',
    margin: '5px auto',
  };

  const arrowStyle: React.CSSProperties = {
    width: '20px', 
    height: '20px', 
  };

  const handleLeftArrowClick = () => {
    console.log('왼쪽 화살표 클릭');
    // 왼쪽 화살표 클릭 시 수행할 로직
  };

  const handleRightArrowClick = () => {
    console.log('오른쪽 화살표 클릭');
    // 오른쪽 화살표 클릭 시 수행할 로직
  };

  const rightSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end' // 요소들을 오른쪽 끝으로 정렬
  };

  return (
    <div style={pageStyle}>
      <div>
        <IconContainer />
        <button onClick={handleLeftArrowClick}>
          <img src="../../public/images/leftarrow.png" alt="Left Arrow" style={arrowStyle} />
        </button>
      </div>
      <MainPage /> 
      <div style={rightSectionStyle}>
        <AdmissionTicket />
        <button onClick={handleRightArrowClick}>
          <img src="../../public/images/rightarrow_.png" alt="Right Arrow" style={arrowStyle} />
        </button>
      </div>

    </div>

  );
};

export default App;
