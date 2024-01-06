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
  { id: 1, user: '사용자1', content: '첫 번째 답안입니다.' },
  { id: 2, user: '사용자2', content: '두 번째 답안입니다.' },
  { id: 3, user: '사용자3', content: '세 번째 답안입니다.' },
  { id: 4, user: '사용자4', content: '네 번째 답안입니다.' },
  { id: 5, user: '사용자5', content: '다섯 번째 답안입니다.' },
  { id: 1, user: '사용자1', content: '첫 번째 답안입니다.' },
  { id: 2, user: '사용자2', content: '두 번째 답안입니다.' },
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

  return (
    <div style={{ padding: '10px' }}>
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
                style={{ display: 'block', margin: '0 0', width: '100%' }}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px' }}>
                  <div style={{ fontWeight: 'bold', marginRight: '10px' }}>{answer.user}</div>
                  <div>{answer.content}</div>
                </div>
              </LongButton>
            ))}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button onClick={() => navigate(-1)} disabled={currentPage === 0}>◀ 이전</button>
            <button onClick={() => navigate(1)} disabled={currentPage === totalPages - 1}>다음 ▶</button>
          </div>
        </>
      )}
    </div>
  );
};


export default AnswerList;
