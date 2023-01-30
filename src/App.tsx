import React from 'react';
import './App.css';
import Ticker from './modules/ticker'
import Menu from './modules/menu';
import BackImage from './images/background.jpg'
import StickerImage from './images/sticker.png'
function App() {
  return (
    <div className="App">
      <img src={BackImage} className='image' alt="background"/>
      <img src={StickerImage} className='sticker' alt="sticker"/>
      <Ticker/>
      <Menu/>
    </div>
  );
}

export default App;
