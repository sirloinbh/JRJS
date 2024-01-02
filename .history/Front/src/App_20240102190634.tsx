import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import TexturedGrayBackground from './TexturedGrayBackground';

const App: React.FC = () => {
  return (
    <TexturedGrayBackground>
      <p>회색 중질지 느낌의 배경입니다.</p>
    </TexturedGrayBackground>
  );
};

export default App;
