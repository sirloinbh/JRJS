import React from 'react';
import GitHubIcon from './path/to/GitHubIcon';
import NotionIcon from './path/to/NotionIcon';

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
        <GitHubIcon />
      </a>
      <a href="https://www.notion.so" target="_blank" style={{ margin: '10px' }}>
        <NotionIcon />
      </a>
      <a href="https://www.notion.so" target="_blank" style={{ margin: '10px' }}>
        <NotionIcon />
      </a>
    </div>
  );
};

export default IconContainer;
