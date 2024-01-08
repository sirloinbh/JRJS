// @Rightside.tsx
import React from 'react';
import { BorderlessButton } from '../../designs/basics/buttons';
import AdmissionTicket from '../../components/admissionTickets/admissionTicket';
import { useNavigate, useLocation } from 'react-router-dom';

interface RightSideProps {
  className?: string;
}
const RightSide: React.FC<RightSideProps> = ({ className }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const rightSideStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around', // 요소들을 위아래로 고르게 분산
        alignItems: 'center', // 요소들을 가로 중앙으로 정렬
        height: '100vh', // 높이를 부모 컨테이너의 100%로 설정
      };

      const arrowStyle: React.CSSProperties = {
        width: '50px', 
        height: '50px', 
        opacity: ( location.pathname === '/complete' || location.pathname === '/') ? 0 : 1, // /complete 페이지일 때 투명하게
        pointerEvents: ( location.pathname === '/complete' || location.pathname === '/') ? 'none' : 'auto', // /complete 페이지일 때 클릭 비활성화
      };
    

  const handleRightArrowClick = () => {

    // 오디오 재생
    const audio = new Audio('/audios/booksound2.wav');
    audio.play();

    switch (location.pathname) {
      case '/test1':
        navigate('/test2',{ state: { from: location.pathname } });
        break;
      case '/test2':
        navigate('/test3',{ state: { from: location.pathname } });
        break;
      case '/test3':
        navigate('/test4',{ state: { from: location.pathname } });
        break;
      case '/test4':
        navigate('/test5',{ state: { from: location.pathname } });
        break;
      case '/test5':
        navigate('/complete',{ state: { from: location.pathname } });
        break;
      // '/complete' 경로일 때는 추가 동작이 없음
      default:
        break;
    }
  };

  return (
    <div className={className} style={rightSideStyle}>
      <AdmissionTicket />
      <BorderlessButton onClick={handleRightArrowClick} style={{ opacity: arrowStyle.opacity, pointerEvents: arrowStyle.pointerEvents }}>
        <img src="../../public/images/rightarrow_.png" alt="Right Arrow" style={arrowStyle} />
      </BorderlessButton>
      <div>
      </div>
    </div>
  );
};

export default RightSide;
