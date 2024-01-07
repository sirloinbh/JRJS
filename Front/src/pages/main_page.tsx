// @MainPage.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoverPage from './cover_pages/cover_page';
import TestPage1 from './test_pages/test_page1';
import TestPage2 from './test_pages/test_page2';
import TestPage3 from './test_pages/test_page3';
import TestPage4 from './test_pages/test_page4';
import TestPage5 from './test_pages/test_page5';
import CompletePage from './cover_pages/comlete_page';

const MainPage: React.FC = () => {


// URL 변경을 감지하기 위해 location.pathname 사용

  const pageStyle = {
    maxWidth: '60vw', // 화면 가로 너비의 반
    lineHeight: '2',
    height: '97vh', // 화면 높이와 동일

  };

  return (

    <div  style={pageStyle}>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/test1" element={<TestPage1 />} />
        <Route path="/test2" element={<TestPage2 />} />
        <Route path="/test3" element={<TestPage3 />} />
        <Route path="/test4" element={<TestPage4 />} />
        <Route path="/test5" element={<TestPage5 />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </div>
  );
};

export default MainPage;
