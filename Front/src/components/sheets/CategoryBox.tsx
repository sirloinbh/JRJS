import React from 'react';
import { BorderedBox } from '../../designs/basics/boxes';
import CategoryContainer from '../Category/categoryContainer';

const CategoryContainerBox: React.FC = () => {

  const boxStyle: React.CSSProperties = {
    padding: '20px',
    margin: '10px',
    fontSize: '10px',
    height: '200px',
    display: 'flex',       // Flexbox 레이아웃 적용
    flexDirection: 'column', // 항목들을 세로로 정렬
    alignItems: 'center',    // 가운데 정렬
    justifyContent: 'space-evenly', // 간격을 균등하게 분배
    gap: '0px'              // 버튼 사이의 간격
  };

  return (
    <BorderedBox style={boxStyle} >
      <CategoryContainer />
    </BorderedBox>
  );
};

export default CategoryContainerBox;
