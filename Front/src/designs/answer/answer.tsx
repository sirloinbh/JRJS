import React, { useState } from 'react';

const BoardInput = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼의 기본 제출 동작을 방지
    console.log('제목:', title, '내용:', content);
    // 여기서 입력 데이터를 API로 전송하거나 상태 관리할 수 있습니다.

    // 폼 제출 후 입력 필드 초기화
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">내용:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default BoardInput;
