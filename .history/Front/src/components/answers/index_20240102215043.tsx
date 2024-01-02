import React from 'react';

interface Answer {
  id: number;
  user: string;
  content: string;
}

const answers: Answer[] = [
  { id: 1, user: '사용자1', content: '첫 번째 답안입니다.' },
  { id: 2, user: '사용자2', content: '두 번째 답안입니다.' },
  // 더 많은 답안을 추가할 수 있습니다.
];

const AnswerList: React.FC = () => {
  return (
    <div style={{ padding: '10px' }}>
      {answers.map(answer => (
        <div key={answer.id} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
          <div style={{ fontWeight: 'bold' }}>{answer.user}</div>
          <div>{answer.content}</div>
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
