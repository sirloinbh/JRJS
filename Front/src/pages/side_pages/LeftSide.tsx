// LeftSide.tsx
import React from 'react';
import IconContainer from '../../components/leftside/IconContainer';
import { BorderlessButton } from '../../designs/basics/buttons';
import { useNavigate, useLocation } from 'react-router-dom';

interface LeftSideProps {
  className?: string;
}
const LeftSide: React.FC<LeftSideProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const leftSideStyle: React.CSSProperties = {
    flex: 1, // 왼쪽 사이드 비율 1
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 요소들을 오른쪽 끝으로 정렬
    justifyContent: 'space-around',
    height: '100vh'
  };

  const arrowStyle: React.CSSProperties = {
    width: '50px', 
    height: '50px', 
    opacity: (location.pathname === '/' || location.pathname === '/test1')? 0 : 1, // 기본 페이지일 때 투명하게
    pointerEvents: location.pathname === '/' ? 'none' : 'auto', // 기본 페이지일 때 클릭 비활성화
  };
  const handleLeftArrowClick = () => {
    // 오디오 재생
    const audio = new Audio('/audios/booksound.wav');
    audio.play();
    switch (location.pathname) {
      case '/test2':
        navigate('/test1',{ state: { from: location.pathname } });
        break;
      case '/test3':
        navigate('/test2',{ state: { from: location.pathname } });
        break;
      case '/test4':
        navigate('/test3',{ state: { from: location.pathname } });
        break;
      case '/test5':
        navigate('/test4',{ state: { from: location.pathname } });
        break;
      case '/complete':
        navigate('/test5',{ state: { from: location.pathname } });
        break;
      default:
        // 기본 페이지일 때는 아무것도 하지 않음
        break;
    }
  };


  return (
    <div className = { className } style={leftSideStyle}>
      <IconContainer />
      <BorderlessButton onClick={handleLeftArrowClick} style={{ opacity: arrowStyle.opacity, pointerEvents: arrowStyle.pointerEvents }}>
        <img src="/images/leftarrow.png" alt="Left Arrow" style={arrowStyle} />
      </BorderlessButton>
      <div>
      </div>
    </div>
  );
};


export default LeftSide;
