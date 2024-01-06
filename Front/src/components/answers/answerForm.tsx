import React, { useState } from 'react';
import { BasicButton } from '../../designs/basics/buttons';
import { TextAreaInput } from '../../designs/basics/forms';
import AnswerList from './AnswerList'; 

const AnswerForm: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false); // 제출 상태 관리

  const handleSubmit = () => {
    console.log(answer); // 여기에 댓글 제출 로직을 추가할 수 있습니다.
    setSubmitted(true); // 제출 상태를 true로 설정

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
      {!submitted ? (
        <>
          <TextAreaInput 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="답안을 입력하세요..."
          />
          <BasicButton onClick={handleSubmit}>
            제출하기
          </BasicButton>
        </>
      ) : (
        <AnswerList />
      )}
    </div>
  );
};

export default AnswerForm;