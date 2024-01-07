import React, { useState } from 'react';
import { BasicButton } from '../../designs/basics/buttons';
import { TextAreaInput } from '../../designs/basics/forms';

const AnswerForm: React.FC = () => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    console.log(answer); // 여기에 댓글 제출 로직을 추가할 수 있습니다.
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // 가로 중앙 정렬
    alignItems: 'center', // 세로 중앙 정렬
    width : '100%',
    height : '100%',
  };

  return (
    <div style = { containerStyle }>
      <TextAreaInput 
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="답안을 입력하세요..."
      />
      <BasicButton onClick={handleSubmit}>
        제출하기
      </BasicButton>
    </div>
  );
};

export default AnswerForm;