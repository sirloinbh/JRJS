import React from 'react';

// 박스 프롭스 인터페이스
interface BoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

// 기본 박스
export const BasicBox: React.FC<BoxProps> = ({ children, style }) => {
  return <div style={{ padding: '20px', margin: '10px', backgroundColor: 'lightgrey', ...style }}>{children}</div>;
};

// 그림자가 있는 박스
export const ShadowBox: React.FC<BoxProps> = ({ children, style }) => {
  return <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', ...style }}>{children}</div>;
};

// 둥근 모서리의 박스
export const RoundedBox: React.FC<BoxProps> = ({ children, style }) => {
  return <div style={{ borderRadius: '15px', ...style }}>{children}</div>;
};

// 테두리가 있는 박스
export const BorderedBox: React.FC<BoxProps> = ({ children, style }) => {
  return <div style={{ border: '2px solid black', ...style }}>{children}</div>;
};
