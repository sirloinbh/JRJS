// components/Header.jsx 또는 적절한 경로
import React from 'react';

const Header: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px'
  };

  return (
    <div style={headerStyle}>
      <div></div>
      <h1>크래프톤 정글 시험 문제지</h1>
      <h1>{pageNumber}</h1>
    </div>
  );
};

export default Header;
