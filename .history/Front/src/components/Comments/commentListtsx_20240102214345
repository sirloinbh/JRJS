import React from 'react';

interface Comment {
  id: number;
  user: string;
  content: string;
}

const comments: Comment[] = [
  { id: 1, user: '사용자1', content: '첫 번째 댓글입니다.' },
  { id: 2, user: '사용자2', content: '두 번째 댓글입니다.' },
  // 더 많은 댓글을 추가할 수 있습니다.
];

const CommentList: React.FC = () => {
  return (
    <div style={{ padding: '10px' }}>
      {comments.map(comment => (
        <div key={comment.id} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
          <div style={{ fontWeight: 'bold' }}>{comment.user}</div>
          <div>{comment.content}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
