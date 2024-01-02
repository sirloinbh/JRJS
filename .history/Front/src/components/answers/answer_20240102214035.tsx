import React, { useState } from 'react';

const AnswerForm: React.FC = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(comment); // 여기에 댓글 제출 로직을 추가할 수 있습니다.
    setComment(''); // 제출 후 입력 필드 초기화
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '10px', margin: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <textarea 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: '100%', padding: '10px' }}
          placeholder="답안을 입력하세요..."
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px' }}>제출하기</button>
    </form>
  );
};

export default AnswerForm;
