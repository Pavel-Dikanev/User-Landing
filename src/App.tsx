import React from 'react';
import './App.css';
import Ticker from './modules/ticker'
import Menu from './modules/menu';
import BackImage from './images/background.jpg'
function App() {
  return (
    <div className="App">
      <img src={BackImage} className='image' alt="background"/>
      <Ticker/>
      <Menu message='Hello'/>
    </div>
  );
}

export default App;
