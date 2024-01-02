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
      <div style={{ margin: '10px' }}>
        <GitHubIcon />
      </div>
      <div style={{ margin: '10px' }}>
        <NotionIcon />
      </div>
      <div style={{ margin: '10px' }}>
        <NotionIcon />
      </div>
    </div>
  );
};

export default IconContainer;
