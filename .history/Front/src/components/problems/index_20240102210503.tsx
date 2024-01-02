import React from 'react';
import Question from './Question';

const QuestionsContainer: React.FC = () => {
  return (
    <div>
      <Question 
        number={1} 
        difficulty="중수" 
        text="자바스크립트에서 Promise는 무엇인가요?" 
      />
      <QuestionComponent 
        number={2} 
        difficulty="고수" 
        text="React에서 상태 관리를 효율적으로 하기 위한 방법은 무엇인가요?" 
      />
    </div>
  );
};

export default QuestionsContainer;
