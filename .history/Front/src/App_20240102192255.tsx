import './App.css'
import React from 'react';
import TexturedGrayBackground from './designs/basics/TexturedGrayBackground';
import mai

const App: React.FC = () => {
  return (
    <TexturedGrayBackground>
      <MainPage />;
    </TexturedGrayBackground>
  );
};

export default App;
