// fetch/Answer/Answer.ts
import axios from 'axios';

// 답변 목록을 가져오는 함수
const fetchAnswerList = async () => {
  const { data } = await axios.get('https://e23f8d53-dffd-4381-ba7f-be458c84bbc0.mock.pstmn.io/AnswerList');
  return data;
};

// 댓글 목록을 가져오는 함수
const fetchCommentList = async () => {
  const { data } = await axios.get('https://e23f8d53-dffd-4381-ba7f-be458c84bbc0.mock.pstmn.io/CommentList');
  return data;
};

export { fetchAnswerList, fetchCommentList };