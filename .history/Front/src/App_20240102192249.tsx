import './App.css'
import React from 'react';
import TexturedGrayBackground from './designs/basics/TexturedGrayBackground';
import MainPag

const App: React.FC = () => {
  return (
    <TexturedGrayBackground>
      <MainPage />;
    </TexturedGrayBackground>
  );
};

export default App;
