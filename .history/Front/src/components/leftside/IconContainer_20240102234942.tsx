import React from 'react';

const IconContainer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const IconStyle: React.CSSProperties = {
    width: '30px', // 화살표의 너비를 20px로 설정
    height: '30px', // 화살표의 높이를 20px로 설정
  };

  return (
    <div style={containerStyle}>
      <a href="https://github.com" target="_blank" style={{ margin: '10px' }}>
        <img src="../../../public/images/github.png" alt="GitHub" style = {IconStyle}/>
      </a>
      <a href="https://www.notion.so/bdd42dc6e9a34e20b899fc3878c39a8d" target="_blank" style={{ margin: '10px' }}>
        <img src="../../../public/images/notion.png" alt="Notion" style = {IconStyle}/>
      </a>
      <a href="https://chat.openai.com" target="_blank" style={{ margin: '10px' }}>
        <img src="../../../public/images/chatgpt.png" alt="ChatGPT" style = {IconStyle}/>
      </a>
    </div>
  );
};

export default IconContainer;

