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
export const NEQuestion1 = async (): Promise<QuestionsByDifficulty> => {
  const response = await axios.get<QuestionsByDifficulty>('https://d103e56d-537b-4dfa-b8bc-8128a849b2b4.mock.pstmn.io/Problem/Nodejs_Expressjs/1');
  return response.data;
};

// fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const NEQuestion2 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://d103e56d-537b-4dfa-b8bc-8128a849b2b4.mock.pstmn.io/Problem/Nodejs_Expressjs/2');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const NEQuestion3 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://d103e56d-537b-4dfa-b8bc-8128a849b2b4.mock.pstmn.io/Problem/Nodejs_Expressjs/3');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const NEQuestion4 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://d103e56d-537b-4dfa-b8bc-8128a849b2b4.mock.pstmn.io/Problem/Nodejs_Expressjs/4');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const NEQuestion5 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://d103e56d-537b-4dfa-b8bc-8128a849b2b4.mock.pstmn.io/Problem/Nodejs_Expressjs/5');
    return response.data;
  };
  