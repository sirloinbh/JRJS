import React , { useState } from 'react';
import { BasicButton } from '../../designs/basics/buttons';
import AnswerForm from '../answers/answerForm';
import ModalTop from '../../designs/answer/ModalTop';
import AnswerList from '../answers/AnswerList';

interface QuestionComponentProps {
  number: number; // 문제 번호
  difficulty: string; // 문제 난이도
  text: string; // 퀴즈 텍스트
}

const QuestionTop: React.FC<QuestionComponentProps> = ({ number, difficulty, text }) => {

  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState<'answerForm' | 'answerList' | null>(null);

  const handleOpenAnswerForm = () => {
    setShowModal(true);
    setCurrentModal('answerForm');
  };

  const handleOpenAnswerList = () => {
    setShowModal(true);
    setCurrentModal('answerList');
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentModal(null);
  };
  const containerStyle: React.CSSProperties = {
    minHeight: '380px', // 전체 컴포넌트의 최소 세로 길이 설정
    
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    fontSize: '18px', // 글자 크기 증가
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
    justifyContent: 'center',
    fontSize: '18px',
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
      <BasicButton onClick={handleOpenAnswerForm}>답안지 작성</BasicButton>
      <BasicButton onClick={handleOpenAnswerList}>다른답 보기</BasicButton> 
      </div>
      {showModal && (
        <ModalTop onClose={handleCloseModal}>
          {currentModal === 'answerForm' && <AnswerForm />}
          {currentModal === 'answerList' && <AnswerList />}
        </ModalTop>
      )}
    </div>
  );
};

export default QuestionTop;
