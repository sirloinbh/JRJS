import React from 'react';
import { BasicButton } from '../../designs/basics/buttons';

interface QuestionComponentProps {
  number: number; // 문제 번호
  difficulty: string; // 문제 난이도
  text: string; // 퀴즈 텍스트
}

const QuestionBottom: React.FC<QuestionComponentProps> = ({ number, difficulty, text }) => {

  const containerStyle: React.CSSProperties = {
    minHeight: '380px', // 전체 컴포넌트의 최소 세로 길이 설정
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const quizBoxStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '10px',
    margin: '10px 0',
    minHeight: '180px', // 최소 세로 길이 설정
    fontSize: '18px', // 글자 크기 증가
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div>{number}.</div>
        <div>난이도: {difficulty}</div>
      </div>

      <div style={quizBoxStyle}>
        {text}
      </div>

      <div style={buttonStyle}>
        <BasicButton>답안지 작성</BasicButton>
      </div>
    </div>
  );
};

export default QuestionBottom;
