import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QuestionBottom from './QuestionBottom';
import QuestionTop from './QuestionTop';
import { RootState } from '../../store/store';
import { HCQuestion1, HCQuestion2, HCQuestion3,  HCQuestion4, HCQuestion5  } from '../../fetch/Question/HTML_CSS';
import { JSQuestion1, JSQuestion2, JSQuestion3,  JSQuestion4, JSQuestion5  } from '../../fetch/Question/JavaScript';
import { RTQuestion1, RTQuestion2, RTQuestion3,  RTQuestion4, RTQuestion5  } from '../../fetch/Question/React_TypeScript';
import { JVQuestion1, JVQuestion2, JVQuestion3,  JVQuestion4, JVQuestion5  } from '../../fetch/Question/Java';
import { NEQuestion1, NEQuestion2, NEQuestion3,  NEQuestion4, NEQuestion5  } from '../../fetch/Question/Nodejs_Expressjs';
import { SSQuestion1, SSQuestion2, SSQuestion3,  SSQuestion4, SSQuestion5  } from '../../fetch/Question/Spring_SpringBoot';


interface Question {
  questionnumber: number;
  description: string;
}

interface QuestionsData {
  [key: string]: Question[];
}

const QuestionsContainerLeft: React.FC = () => {
  const [data, setData] = useState<QuestionsData | null>(null);

  // Redux 스토어에서 상태 가져오기
  const category = useSelector((state: RootState) => state.category);
  const page = useSelector((state: RootState) => state.page);

  // 예시: 상태 출력을 위한 로그 (실제 구현에서는 필요에 따라 상태를 사용하세요)
  console.log(category, page);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        let questionData;
        switch (category.secondCategory) {
          case 'HTML/CSS':
            switch (category.thirdCategory) {
              case '1': questionData = await HCQuestion1(); break;
              case '2': questionData = await HCQuestion2(); break;
              case '3': questionData = await HCQuestion3(); break;
              case '4': questionData = await HCQuestion4(); break;
              case '5': questionData = await HCQuestion5(); break;
              default: questionData = null;
            }
            break;
          case 'JavaScript':
            switch (category.thirdCategory) {
              case '1': questionData = await JSQuestion1(); break;
              case '2': questionData = await JSQuestion2(); break;
              case '3': questionData = await JSQuestion3(); break;
              case '4': questionData = await JSQuestion4(); break;
              case '5': questionData = await JSQuestion5(); break;
              default: questionData = null;
            }
            break;
          case 'React/TypeScript':
            switch (category.thirdCategory) {
              case '1': questionData = await RTQuestion1(); break;
              case '2': questionData = await RTQuestion2(); break;
              case '3': questionData = await RTQuestion3(); break;
              case '4': questionData = await RTQuestion4(); break;
              case '5': questionData = await RTQuestion5(); break;
              default: questionData = null;
            }
            break;
            case 'Java':
              switch (category.thirdCategory) {
                case '1': questionData = await JVQuestion1(); break;
                case '2': questionData = await JVQuestion2(); break;
                case '3': questionData = await JVQuestion3(); break;
                case '4': questionData = await JVQuestion4(); break;
                case '5': questionData = await JVQuestion5(); break;
                default: questionData = null;
              }
              break;
            case 'Node.js/Express.js':
              switch (category.thirdCategory) {
                case '1': questionData = await NEQuestion1(); break;
                case '2': questionData = await NEQuestion2(); break;
                case '3': questionData = await NEQuestion3(); break;
                case '4': questionData = await NEQuestion4(); break;
                case '5': questionData = await NEQuestion5(); break;
                default: questionData = null;
              }
              break;
            case 'Spring/SpringBoot':
              switch (category.thirdCategory) {
                case '1': questionData = await SSQuestion1(); break;
                case '2': questionData = await SSQuestion2(); break;
                case '3': questionData = await SSQuestion3(); break;
                case '4': questionData = await SSQuestion4(); break;
                case '5': questionData = await SSQuestion5(); break;
                default: questionData = null;
              }
              break;
          default:
            questionData = null;
        }
        setData(questionData);
      } catch (error) {
        console.error('문제를 불러오는 데 실패했습니다:', error);
      }
    };

    fetchQuestion();
  }, [category.secondCategory, category.thirdCategory]);

  // 현재 페이지 번호에 따라 질문 번호를 계산합니다.
  const questionTopNumber = 4 * (page.pageNumber - 2) + 3;
  const questionBottomNumber = 4 * (page.pageNumber - 2) + 4;

  // 현재 페이지 번호에 따라 난이도를 계산합니다.
  const difficulty = String(page.pageNumber - 1);

  // 질문의 설명을 가져오기 위한 계산
  const questionTopText = data && data[difficulty] && data[difficulty].find(q => q.questionnumber === 3)?.description || '';
  const questionBottomText = data && data[difficulty] && data[difficulty].find(q => q.questionnumber === 4)?.description || '';


    return (
      <div>
        <QuestionTop 
          number={questionTopNumber} 
          difficulty={difficulty} 
          text={questionTopText} 
        />
        <QuestionBottom 
          number={questionBottomNumber} 
          difficulty={difficulty} 
          text={questionBottomText} 
        />
      </div>
    );
  };
  

export default QuestionsContainerLeft;
