import React, { useState } from 'react';
import { BasicButton } from '../../designs/basics/buttons';
import { TextInput } from '../../designs/basics/forms';

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
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '10px' }}>

      {/* Top Row: Answer content and comment list */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', height : '320px' }}>
        {/* Answer content */}
        <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
          {answerContent}
        </div>

        {/* Comment list */}
        <div style={{ width: '45%', maxHeight: '400px', overflowY: 'auto' }}>
          {comments.map(comment => (
            <div key={comment.id} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
              <strong>{comment.user}</strong>: {comment.content}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Input form and submit button */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
  );
};

export default AnswerViewComponent;
