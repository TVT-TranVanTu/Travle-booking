import React from 'react';
import './App.css';
import Header from './Components/Blocks/Header/Header';
import Topbar from './Components/Blocks/Header/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <hr></hr>
      <Header></Header>
    </div>
  );
}

export default App;
