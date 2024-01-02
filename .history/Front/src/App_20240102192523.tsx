import './App.css'
import React from 'react';
import TexturedGrayBackground from './designs/basics/TexturedGrayBackground';
import MainPage from './pages/main_page';

const App: React.FC = () => {
  return (
    <TexturedGrayBackground>
      <MainPage />;

  );
};

export default App;
