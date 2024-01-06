import React, { useState } from 'react';
import { BasicButton } from '../../designs/basics/buttons';
import { TextInput } from '../../designs/basics/forms';

// 대답과 댓글의 예시 데이터
const answerContent = "여기에 다른 사람의 답안지 내용이 들어갑니다.";
const comments = [
  { id: 1, user: '사용자1', content: '댓글 내용 1' },
  { id: 2, user: '사용자2', content: '댓글 내용 2' },
  // 추가 댓글
];

const AnswerViewComponent: React.FC = () => {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    console.log(newComment); // 댓글 제출 로직
    setNewComment('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* 왼쪽 답안지 부분 */}
      <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
        {answerContent}
      </div>

      {/* 오른쪽 댓글 부분 */}
      <div style={{ width: '45%' }}>

        
        {/* 댓글 목록 */}
        <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
          {comments.map(comment => (
            <div key={comment.id} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
              <div style={{ fontWeight: 'bold' }}>{comment.user}</div>
              <div>{comment.content}</div>
            </div>
          ))}
        </div>

        {/* 댓글 입력 폼 */}
        <div>
          <TextInput
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요..."
          />
          <BasicButton onClick={handleSubmitComment}>
            댓글달기
          </BasicButton>
        </div>
      </div>
    </div>
  );
};

export default AnswerViewComponent;
