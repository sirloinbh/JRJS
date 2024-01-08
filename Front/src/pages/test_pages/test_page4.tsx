import React, { useState, useEffect } from 'react';
import { HorizontalLine , VerticalLine } from '../../designs/basics/lines';
import QuestionsContainerLeft from '../../components/problems/QuestionsContainerLeft';
import QuestionsContainerRight from '../../components/problems/QuestionsContainerRight';
import Header from '../../components/Header/Header';
import SubjectTimeDisplay from '../../components/Header/SubjectTimeDisplay';
import { BorderedBox } from '../../designs/basics/boxes';
import { useLocation } from 'react-router-dom';

const TestPage4: React.FC = () => {
    const [animationClass, setAnimationClass] = useState("page");
    const location = useLocation();

    useEffect(() => {
      const className = location.state?.from === '/test5' ? 'page-turn-left' : 'page-turn-right';
      setAnimationClass(className);
    }, [location.state]);

  const pageStyle: React.CSSProperties = {
    backgroundColor: '#f2f2f2f1',
    padding: '40px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '60vw', // 화면 가로 너비의 반
    lineHeight: '1.8',
    height: '90vh',
    border: '1px solid lightgray' ,// 검정색 테두리 추가
    marginTop: '1.5vh'
  };

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around', // 요소들을 균등하게 분산
    alignItems: 'center',
  };

  const centerStyle: React.CSSProperties = {
    display: 'flex', // Flex 컨테이너 적용
    justifyContent: 'center', // 가로축 중앙 정렬
    width: '100%', // 너비를 100%로 설정
  };

  return (
    <div className={`page ${animationClass}`} style={pageStyle}>
      <Header pageNumber={5} />
      <SubjectTimeDisplay />
      <HorizontalLine/>
      <div>
        {/* 세로로 분리된 섹션 */}
        <div style={sectionStyle}>
            <div style={{ width: '40%' }}>
                <QuestionsContainerLeft />
            </div>
            <VerticalLine length="65vh" color="black" />
            <div style={{ width: '40%' }}>
                <QuestionsContainerRight />
            </div>
        </div>
      </div>
      <div style={centerStyle}>
        <BorderedBox style={{width: '7%',textAlign: 'center'}}>5/7</BorderedBox> {/* 페이지 숫자 표시 */}
      </div>
    </div>
  );
};

export default TestPage4;
