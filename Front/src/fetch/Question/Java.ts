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
export const JVQuestion1 = async (): Promise<QuestionsByDifficulty> => {
  const response = await axios.get<QuestionsByDifficulty>('https://2d29f8fc-985b-40f9-a1de-a0edb16b112c.mock.pstmn.io/Problem/Java/1');
  return response.data;
};

// fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JVQuestion2 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://2d29f8fc-985b-40f9-a1de-a0edb16b112c.mock.pstmn.io/Problem/Java/2');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JVQuestion3 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://2d29f8fc-985b-40f9-a1de-a0edb16b112c.mock.pstmn.io/Problem/Java/3');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JVQuestion4 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://2d29f8fc-985b-40f9-a1de-a0edb16b112c.mock.pstmn.io/Problem/Java/4');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const JVQuestion5 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://2d29f8fc-985b-40f9-a1de-a0edb16b112c.mock.pstmn.io/Problem/Java/5');
    return response.data;
  };
  