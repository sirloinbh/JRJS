import React from 'react';

const IconContainer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      <a href="https://github.com" target="_blank" style={{ margin: '10px' }}>
        <img src="../../../public/images/github.png" alt="GitHub" />
      </a>
      <a href="https://www.notion.so" target="_blank" style={{ margin: '10px' }}>
        <img src="../../../public/images/notion.png" alt="Notion" />
      </a>
      <a href="https://chat.openai.com/" target="_blank" style={{ margin: '10px' }}>
        <img src="../../../public/images/chat.png" alt="Notion" />
      </a>
    </div>
  );
};

export default IconContainer;

