// @CoverPage.tsx
import React, { useState, useEffect }  from 'react';
import { HorizontalLine } from '../../designs/basics/lines';
import ExamDescriptionBox from '../../components/sheets/ExamDescriptionBox';
import Header from '../../components/Header/Header';
import SubjectTimeDisplay from '../../components/Header/SubjectTimeDisplay';
import CategoryContainerBox from '../../components/sheets/CategoryBox';
import { BorderedBox } from '../../designs/basics/boxes';
import { useLocation } from 'react-router-dom';

const CoverPage: React.FC = () => {
  const [animationClass, setAnimationClass] = useState("page");
  const location = useLocation();

  useEffect(() => {
    // test1에서 오는 경우 왼쪽으로 회전, 그 외에는 오른쪽으로 회전
    const className = location.state?.from === '/test1' ? 'page-turn-left' : 'page-turn-right';
    setAnimationClass(className);
    // 페이지가 로드될 때 오디오 재생
    const audio = new Audio('/audios/intro2.mp3');
    audio.play();
    
    // 컴포넌트가 언마운트될 때 오디오 정지
    return () => {
      audio.pause();
    };
  }, [location.state]);

  const pageStyle: React.CSSProperties = {
    
    padding: '40px',

    maxWidth: '50vw', // 화면 가로 너비의 반
    lineHeight: '1.8',
    height: '90vh',
    border: '1px solid lightgray' ,
    backgroundColor: '#f2f2f2f1',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  };

  const centerStyle: React.CSSProperties = {
    display: 'flex', // Flex 컨테이너 적용
    justifyContent: 'center', // 가로축 중앙 정렬
    width: '100%', // 너비를 100%로 설정
    marginTop: '30px',
  };

  return (
    <div className={`page ${animationClass}`} style={pageStyle}>
      <Header pageNumber={1} />
      <SubjectTimeDisplay />
      <HorizontalLine/>
      <ExamDescriptionBox />
      <CategoryContainerBox />
      <div style={centerStyle}> 
        <BorderedBox style={{width: '7%',textAlign: 'center'}}>1/7</BorderedBox> {/* 페이지 숫자 표시 */}
      </div>
    </div>

  );
};

export default CoverPage;
