import React from 'react';
import { BorderlessButton } from '../../designs/basics/buttons';

const IconContainer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100px',
    backgroundColor: 'white',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.5)'
  };

  const IconStyle: React.CSSProperties = {
    width: '30px', 
    height: '30px', 
  };

  return (
    <div style={containerStyle}>
      <BorderlessButton a href="https://github.com/sirloinbh/JRJS" target="_blank" >
        <img src="../../../public/images/github.png" alt="GitHub" style = {IconStyle}/>
      </BorderlessButton>
      <BorderlessButton a href="https://www.notion.so/bdd42dc6e9a34e20b899fc3878c39a8d" target="_blank">
        <img src="../../../public/images/notion.png" alt="Notion" style = {IconStyle}/>
      </BorderlessButton>
      <BorderlessButton a href="https://chat.openai.com" target="_blank" >
        <img src="../../../public/images/chatgpt.png" alt="ChatGPT" style = {IconStyle}/>
      </BorderlessButton>
    </div>
  );
};

export default IconContainer;

