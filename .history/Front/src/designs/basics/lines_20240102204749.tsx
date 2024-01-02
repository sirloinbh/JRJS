import React from 'react';

interface LineProps {
  length?: string; // 선의 길이 (가로선의 경우 높이, 세로선의 경우 너비)
  thickness?: string; // 선의 두께
  color?: string; // 선의 색상
}

// 가로선
export const HorizontalLine: React.FC<LineProps> = ({
  length = '100%',
  thickness = '2px',
  color = 'black'
}) => {
  return <div style={{ width: length, height: thickness, backgroundColor: color }} />;
};

// 세로선
export const VerticalLine: React.FC<LineProps> = ({
  length = '100%',
  thickness = '2px',
  color = 'black'
}) => {
  return <div style={{ height: length, width: thickness, backgroundColor: color }} />;
};
