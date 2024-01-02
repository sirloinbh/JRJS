import './App.css'
import React from 'react';
import TexturedGrayBackground from './designs/background_color/TexturedGrayBackground';

const App: React.FC = () => {
  return (
    <TexturedGrayBackground>
      <p>회색 중질지 느낌의 배경입니다.</p>
    </TexturedGrayBackground>
  );
};

export default App;
