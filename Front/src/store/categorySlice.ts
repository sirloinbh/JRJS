import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 카테고리 상태의 형태를 정의
interface CategoryState {
  firstCategory: string;
  secondCategory: string;
  thirdCategory: string;
}

// 초기 상태 정의
const initialState: CategoryState = {
  firstCategory: '',
  secondCategory: '',
  thirdCategory: '',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // 첫 번째 카테고리 설정
    setFirstCategory: (state, action: PayloadAction<string>) => {
      state.firstCategory = action.payload;
    },
    // 두 번째 카테고리 설정
    setSecondCategory: (state, action: PayloadAction<string>) => {
      state.secondCategory = action.payload;
    },
    // 세 번째 카테고리 설정
    setThirdCategory: (state, action: PayloadAction<string>) => {
      state.thirdCategory = action.payload;
    },
    resetCategories: (state) => {
        state.firstCategory = '';
        state.secondCategory = '';
        state.thirdCategory = '';
      },
  },
});

// 액션 생성자 및 리듀서 내보내기
export const { setFirstCategory, setSecondCategory, setThirdCategory, resetCategories } = categorySlice.actions;
export default categorySlice.reducer;
