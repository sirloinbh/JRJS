import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import store from './store/store';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// React Query Client 인스턴스 생성
const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="bottom-left" />
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
