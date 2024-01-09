import React, { useState } from 'react';
import { LongButton } from '../../designs/basics/buttons';
import AnswerViewComponent from './OtherAnswer';

interface Answer {
  id: number;
  user: string;
  content: string;
}

const answers: Answer[] = [
  { id: 1, user: '사용자1', content: '첫 번째 답안입니다.' },
  { id: 2, user: '사용자2', content: '두 번째 답안입니다.' },
  { id: 3, user: '사용자3', content: '세 번째 답안입니다.' },
  { id: 4, user: '사용자4', content: '네 번째 답안입니다.' },
  { id: 5, user: '사용자5', content: '다섯 번째 답안입니다.' },
  { id: 1, user: '사용자1', content: '화살표 버튼을 누르면' },
  { id: 2, user: '사용자2', content: '다음 페이지로 넘어갑니다.' },
  { id: 3, user: '사용자3', content: '세 번째 답안입니다.' },
  { id: 4, user: '사용자4', content: '네 번째 답안입니다.' },
  { id: 5, user: '사용자5', content: '다섯 번째 답안입니다.' },
  { id: 1, user: '사용자1', content: '한 페이지에는' },
  { id: 2, user: '사용자2', content: '답안이 다섯개 씩 있습니다.' },
  { id: 3, user: '사용자3', content: '세 번째 답안입니다.' },
  { id: 4, user: '사용자4', content: '네 번째 답안입니다.' },
  { id: 5, user: '사용자5', content: '다섯 번째 답안입니다.' },
];


const AnswerList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const answersPerPage = 5;
  const totalPages = Math.ceil(answers.length / answersPerPage);

  const handleAnswerClick = (answer: Answer) => {
    setSelectedAnswer(answer);
  };

  const handleCloseView = () => {
    setSelectedAnswer(null);
  };

  const navigate = (direction: number) => {
    setCurrentPage((prev) => Math.max(0, Math.min(prev + direction, totalPages - 1)));
  };
  const navigationButtonStyle: React.CSSProperties = {
    flex: 1,
    cursor: 'pointer',
    padding: '10px 20px',
    margin: '10px 10px',
    fontSize: '16px',
    border: 'none',
    background: 'transparent',
    borderRadius: '4px',
    boxShadow: 'none',
  };

  const longButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 20px',
    margin: '5px 0',
    fontSize: '16px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%', // Ensure full width
  };

  const arrowStyle = (disabled: boolean): React.CSSProperties => ({
    width: '20px',
    height: '20px',
    opacity: disabled ? 0.5 : 1,
  });

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {selectedAnswer ? (
        <AnswerViewComponent answer={selectedAnswer} onClose={handleCloseView} />
      ) : (
        <>
          {answers
            .slice(currentPage * answersPerPage, (currentPage + 1) * answersPerPage)
            .map((answer) => (
              <LongButton
                key={answer.id}
                onClick={() => handleAnswerClick(answer)}
                style={longButtonStyle}
              >
                <div>
                  <div style={{ fontWeight: 'bold', marginRight: '10px' }}>{answer.user}</div>
                  <div>{answer.content}</div>
                </div>
              </LongButton>
            ))}
          <div style={{ display: 'flex', width: '20%', justifyContent: 'center', margin: '10px 0' }}>
            <button 
              onClick={() => navigate(-1)} 
              disabled={currentPage === 0}
              style={navigationButtonStyle}
            >
              <img src="../../public/images/leftarrow.png"
               alt="Left Arrow"
               style={arrowStyle(currentPage === 0)} 
              />
            </button>
            <button 
              onClick={() => navigate(1)} 
              disabled={currentPage === totalPages - 1}
              style={navigationButtonStyle}
            >
              <img src="../../public/images/rightarrow_.png"
               alt="Right Arrow"
               style={arrowStyle(currentPage === totalPages - 1)} 
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AnswerList;
