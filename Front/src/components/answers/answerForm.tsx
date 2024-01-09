import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BasicButton } from '../../designs/basics/buttons';
import { TextAreaInput } from '../../designs/basics/forms';

const AnswerForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://983ab1dc-e6c8-486e-807d-5c8e8bf44662.mock.pstmn.io/Answer', {
        answer
      });
      if (onClose) onClose();
      toast(response.data); // 응답을 토스트 메시지로 표시
    } catch (error) {
      console.error('답변 제출 실패:', error);
      toast.error('답변 제출에 실패했습니다.'); // 오류를 토스트 메시지로 표시
    }
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