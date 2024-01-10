import axios from 'axios';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface UserInfo {
  name: string;
  examinationNumber: number;
}

interface ApiResponse {
    message: string;
    // 필요한 다른 필드들을 추가하세요
  }

// 회원가입 API
export const signUp = async (data: SignUpData): Promise<ApiResponse> => {
  const response = await axios.post('YOUR_MOCK_SERVER/signup', data);
  return response.data;
};

// 로그인 API
export const login = async (data: LoginData): Promise<ApiResponse> => {
  const response = await axios.post('YOUR_MOCK_SERVER/login', data);
  return response.data;
};

// 유저 정보 조회 API
export const fetchUserInfo = async (): Promise<UserInfo> => {
  const response = await axios.get<UserInfo>('YOUR_MOCK_SERVER/userinfo');
  return response.data;
};
