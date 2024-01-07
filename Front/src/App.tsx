// App.tsx
import React  from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './store/userSlice';
import './app.css'; 
import LeftSide from './pages/side_pages/LeftSide';
import RightSide from './pages/side_pages/RightSide';
import MainPage from './pages/main_page';
import { BrowserRouter as Router } from 'react-router-dom';
import AdmissionPage from './pages/user_pages/admission_page';

const App: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const pageStyle: React.CSSProperties = {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    height: "97vh",
  };

  const mainPageStyle: React.CSSProperties = {
    flex: 2.5, // 메인 페이지 비율 8
  };

  return (
    <Router>
      <div style={pageStyle}>
        {isLoggedIn ? (
          <>
            <LeftSide className="page-visible" />
            <div style={mainPageStyle }>
              <MainPage />
            </div>
            <RightSide className="slide-in-right"/>
          </>
        ) : (
          <AdmissionPage className="app-container"/>
        )}
      </div>
    </Router>
  );
};

export default App;
