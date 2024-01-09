import React, { useState } from 'react';
import { BasicButton } from '../../designs/basics/buttons';
import { TextInput } from '../../designs/basics/forms';
import axios from 'axios';
import { toast } from 'react-toastify';

const answerContent = "여기에 다른 사람의 답안지 내용이 들어갑니다.";
const comments = [
  { id: 1, user: '사용자1', content: '댓글 내용 1' },
  { id: 2, user: '사용자2', content: '댓글 내용 2' },
  { id: 3, user: '사용자3', content: '댓글 내용 3' },
  { id: 4, user: '사용자4', content: '댓글 내용 4' },
  { id: 5, user: '사용자5', content: '추가 댓글은' },
  { id: 6, user: '사용자6', content: '스크롤을 내리면' },
  { id: 7, user: '사용자7', content: '보입니다.' },
];

const AnswerViewComponent: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = async () => {
    try {
      const response = await axios.post('https://983ab1dc-e6c8-486e-807d-5c8e8bf44662.mock.pstmn.io/Comment', {
        comment: newComment
      });
      if (onClose) onClose();
      toast(response.data); // 응답을 토스트 메시지로 표시
      setNewComment(''); // 입력 필드 초기화
    } catch (error) {
      console.error('댓글 제출 실패:', error);
      toast.error('댓글 제출에 실패했습니다.'); // 오류를 토스트 메시지로 표시
    }
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
