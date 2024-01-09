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
export const HCQuestion1 = async (): Promise<QuestionsByDifficulty> => {
  const response = await axios.get<QuestionsByDifficulty>('https://99df60f1-fe58-4c21-912a-8973bf348770.mock.pstmn.io/question/front/html_css/1');
  return response.data;
};

// fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const HCQuestion2 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://99df60f1-fe58-4c21-912a-8973bf348770.mock.pstmn.io/question/front/html_css/2');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const HCQuestion3 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://99df60f1-fe58-4c21-912a-8973bf348770.mock.pstmn.io/question/front/html_css/3');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const HCQuestion4 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://99df60f1-fe58-4c21-912a-8973bf348770.mock.pstmn.io/question/front/html_css/4');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const HCQuestion5 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://99df60f1-fe58-4c21-912a-8973bf348770.mock.pstmn.io/question/front/html_css/5');
    return response.data;
  };
  