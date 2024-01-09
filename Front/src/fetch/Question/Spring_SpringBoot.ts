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
export const SSQuestion1 = async (): Promise<QuestionsByDifficulty> => {
  const response = await axios.get<QuestionsByDifficulty>('https://8cd10683-76b4-470f-ae0f-ba87532654d9.mock.pstmn.io/Problem/Spring_SpringBoot/1');
  return response.data;
};

// fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const SSQuestion2 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://8cd10683-76b4-470f-ae0f-ba87532654d9.mock.pstmn.io/Problem/Spring_SpringBoot/2');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const SSQuestion3 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://8cd10683-76b4-470f-ae0f-ba87532654d9.mock.pstmn.io/Problem/Spring_SpringBoot/3');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const SSQuestion4 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://8cd10683-76b4-470f-ae0f-ba87532654d9.mock.pstmn.io/Problem/Spring_SpringBoot/4');
    return response.data;
  };

  // fetchQuestion 함수는 Promise<QuestionData>를 반환합니다.
export const SSQuestion5 = async (): Promise<QuestionsByDifficulty> => {
    const response = await axios.get<QuestionsByDifficulty>('https://8cd10683-76b4-470f-ae0f-ba87532654d9.mock.pstmn.io/Problem/Spring_SpringBoot/5');
    return response.data;
  };
  