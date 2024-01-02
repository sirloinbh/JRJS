import './App.css'
import React from 'react';
import MainPage from './pages/main_page';
import CoverPage from './pages/cover_page';

const App: React.FC = () => {
  return (
    <div>
      <MainPage /> 
      <CoverPage/>
      </div>
  );
};

export default App;
