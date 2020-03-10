import React from 'react';
import './App.css';
import Header from './Components/Blocks/Header/Header';
import Topbar from './Components/Blocks/Header/Topbar';
import Cricle_Svg from './Components/Blocks/Contacts/Cricle_Svg';
import Box_chat from './Components/Blocks/Contacts/Box_chat';

function App() {
  return (
    <div className="App">
      <Cricle_Svg></Cricle_Svg>
      <Box_chat></Box_chat>
      <Topbar></Topbar>
      <hr></hr>
      <Header></Header>
    </div>
  );
}

export default App;
