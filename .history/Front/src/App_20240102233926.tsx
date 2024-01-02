import './App.css'
import React from 'react';
import MainPage from './pages/main_page';
import IconContainer from '../components/leftside/IconContainer';
import AdmissionTicket from '../components/admissionTickets/admissionTickets';


const App: React.FC = () => {
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
