import React, { useEffect, useState } from 'react';
import './App.css';
import Ticker from './modules/ticker'
import Menu from './modules/menu';
import BackImage from './images/background.jpg'
import StickerImage from './images/sticker.png'
import PortraitMenu from './modules/portraitMenu';
function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const portrait = width < height;

  return (
    <div className="App">
      <img src={BackImage} className='image' alt="background" />
      {portrait ?
        <>
          <img src={StickerImage} className='stickerPortrait' alt="sticker" />
          <PortraitMenu />
        </>
        :
        <>
          <img src={StickerImage} className='sticker' alt="sticker" />
          <Menu />
        </>
      }
      <Ticker portrait={portrait} />
    </div>
  );
}

export default App;
