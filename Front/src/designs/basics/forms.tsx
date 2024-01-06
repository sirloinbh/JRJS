import React, { ChangeEvent } from 'react';

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  // 공통 스타일 정의
const inputStyle: React.CSSProperties = {
    width: '300px', // 폼 너비
    height: '40px', // 폼 높이
    fontSize: '16px', // 폰트 크기
  };
  

// 이름 입력 컴포넌트
const NameInput: React.FC<InputProps> = ({ value, onChange }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="이름"
      style={inputStyle}
    />
  );
  
  // 이메일 입력 컴포넌트
  const EmailInput: React.FC<InputProps> = ({ value, onChange }) => (
    <input
      type="email"
      value={value}
      onChange={onChange}
      placeholder="이메일"
      style={inputStyle}
    />
  );
  
  // 비밀번호 입력 컴포넌트
  const PasswordInput: React.FC<InputProps> = ({ value, onChange }) => (
    <input
      type="password"
      value={value}
      onChange={onChange}
      placeholder="비밀번호"
      style={inputStyle}
    />
  );

// 일반 텍스트 입력 컴포넌트
interface TextInputProps extends InputProps {
    placeholder?: string;
  }
  

  const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={inputStyle}
    />
  );

  // TextInputProps를 업데이트하여 HTMLTextAreaElement와 호환되도록 함
interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
}

// TextAreaInput 컴포넌트
const TextAreaInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  // 선의 간격과 색상을 조정할 수 있습니다.
  const lineSpacing = '30px'; // 선 사이의 간격
  const lineColor = '#e0e0e0'; // 선의 색상

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    minHeight: '330px',
    minWidth: '780px',
    backgroundSize: `100% ${lineSpacing}`,
    backgroundImage: `linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
    lineHeight: lineSpacing, // 텍스트 줄 간격을 선과 동일하게 설정
  };

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={textareaStyle}
    />
  );
};

export { NameInput, EmailInput, PasswordInput, TextInput, TextAreaInput };
