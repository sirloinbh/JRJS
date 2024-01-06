import React from 'react';

// 스타일 정의
const styles = {
  basicButton: {
    padding: '10px 15px',
    margin: '5px',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontFamily: 'ChosunSM',
    
  },
  numberButton: {
    padding: '10px 15px',
    margin: '5px',
    fontSize: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'ChosunSM',
  },
  borderlessButton: {
    padding: '10px 15px',
    margin: '5px',
    fontSize: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'ChosunSM',
  },
  numberCircle: {
    display: 'inline-block',
    width: 25, // 단위 없이 숫자로 표현
    height: 25, // 단위 없이 숫자로 표현
    lineHeight: '25px', // lineHeight는 문자열로 유지
    borderRadius: '50%',
    textAlign: 'center' as const, // TypeScript 타입 불일치 해결
    marginRight: 5, // 단위 없이 숫자로 표현
    border: '2px solid black',
    fontSize: 25, // 단위 없이 숫자로 표현
    fontFamily: 'ChosunSM',
  },
  longButton: {
    padding: '10px 15px',
    margin: '5px',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontFamily: 'ChosunSM',
    width: '80%', // 가로 길이 확장
    border: '1px solid #ddd', // 테두리 스타일
    display : 'flex',
    flexDirection :'row',
  },
};


// 버튼에 :hover 스타일을 적용하기 위한 래퍼 컴포넌트
const ButtonWrapper: React.FC<{
  style: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ style, hoverStyle, onClick, children }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      style={{ ...style, ...(hover ? hoverStyle : {}) }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
};

// 기본 버튼 Props
interface BasicButtonProps {
  number?: number;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  a?: boolean; 
  href?: string; 
  target?: string;
}

// 기본 버튼
export const BasicButton: React.FC<BasicButtonProps> = ({ children, onClick, style, a, href, target }) => {
  if (a) {
    return (
      <a href={href} target={target} style={style} onClick={onClick} >
        {children}
      </a>
    );
  } else {
    return (
      <ButtonWrapper style={{ ...styles.basicButton, ...style }} hoverStyle={{ backgroundColor: '#ddd' }} onClick={onClick}>
        {children}
      </ButtonWrapper>
    );
  }
};

// 숫자 버튼
export const NumberButton: React.FC<BasicButtonProps> = ({ number, children, onClick, style }) => {
  return (
    <ButtonWrapper style={{...styles.basicButton, ...style}} hoverStyle={{ backgroundColor: '#dddddd1e' }} onClick={onClick}>
      <span style={styles.numberCircle}>{number}</span>
      {children}
    </ButtonWrapper>
  );
};

// 테두리와 배경색이 없는 버튼
export const BorderlessButton: React.FC<BasicButtonProps> = ({ children, onClick, a, href, target }) => {
  const [hover, setHover] = React.useState(false);

  const buttonStyle = {
    ...styles.borderlessButton,
    ...(hover ? { backgroundColor: '#dddddd8c' } : {})
  };

  if (a) {
    return (
      <a
        href={href}
        target={target}
        style={buttonStyle}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </a>
    );
  } else {
    return (
      <ButtonWrapper style={buttonStyle} hoverStyle={{ backgroundColor: '#dddddd34' }} onClick={onClick}>
        {children}
      </ButtonWrapper>
    );
  }
};

// LongButton 컴포넌트
export const LongButton: React.FC<BasicButtonProps> = ({ children, onClick, style }) => {
  return (
    <ButtonWrapper style={{ ...styles.longButton, ...style }} hoverStyle={{ backgroundColor: '#ddd' }} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};