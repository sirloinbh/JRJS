// fetch/Question/HTML_CSS.ts
import axios from 'axios';

// 각 질문의 구조를 정의합니다.
interface Question {
    questionnumber: number;
    description: string;
  }
  
  // 난이도별로 질문 배열을 매핑합니다.
  interface QuestionsByDifficulty {
    [difficulty: string]: Question[];
  }
  

// fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JSQuestion1 = async (): Promise<QuestionsByDifficulty> => {
  const response = await axios.get<QuestionsByDifficulty>('https://5e40fe73-5374-44db-9b88-d266cedd91fc.mock.pstmn.io/Question/Front/JavaScript/1');
  return response.data;
};

// fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JSQuestion2 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://5e40fe73-5374-44db-9b88-d266cedd91fc.mock.pstmn.io/Question/Front/JavaScript/2');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JSQuestion3 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://5e40fe73-5374-44db-9b88-d266cedd91fc.mock.pstmn.io/Question/Front/JavaScript/3');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JSQuestion4 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://5e40fe73-5374-44db-9b88-d266cedd91fc.mock.pstmn.io/Question/Front/JavaScript/4');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JSQuestion5 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://5e40fe73-5374-44db-9b88-d266cedd91fc.mock.pstmn.io/Question/Front/JavaScript/5');
    return response.data;
  };
  