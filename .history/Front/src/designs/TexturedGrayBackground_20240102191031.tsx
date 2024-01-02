import React from 'react';

interface TexturedGrayBackgroundProps {
  children: React.ReactNode;
}

const TexturedGrayBackground: React.FC<TexturedGrayBackgroundProps> = ({ children }) => {
  const style = {
    backgroundColor: '#dadada', // 진한 회색
    color: 'black',
    padding: '20px',
    borderRadius: '5px',
    border: '1px solid #787878', // 약간 어두운 회색 테두리
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // 약간의 그림자
    fontFamily: '"Nanum Gothic", sans-serif' // 예시로 나눔고딕 폰트 사용
  };

  return <div style={style}>{children}</div>;
};

export default TexturedGrayBackground;
