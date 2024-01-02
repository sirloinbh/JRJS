import React from 'react';

interface QuestionComponentProps {
  number: number; // 문제 번호
  difficulty: string; // 문제 난이도
  text: string; // 퀴즈 텍스트
}

const QuestionBottom: React.FC<QuestionComponentProps> = ({ number, difficulty, text }) => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const quizBoxStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '15px',
    margin: '10px 0'
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end'
  };

  return (
    <div>
      <div style={headerStyle}>
        <div>문제 {number}</div>
        <div>난이도: {difficulty}</div>
      </div>

      <div style={quizBoxStyle}>
        {text}
      </div>

      <div style={buttonStyle}>
        <button>답안지 작성</button>
      </div>
    </div>
  );
};

export default Question;
