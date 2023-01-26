import React, { ReactElement, useState, useEffect } from 'react';
import './styles.css' 
import MenuImg from './../../images/menu.png'
import TextImg from './../../images/text.png'
import MaskImage3 from './../../images/mask.png'
import MaskImage2 from './../../images/mask2.png'
import MaskImage from './../../images/mask3.png'

interface MessageProps {
    message: string;
}


function Menu(props: MessageProps): ReactElement {

    const [active, setActive] = useState([true, false, false])



    useEffect(() => {

        function pointerPush(e: KeyboardEvent): void {
            if (e.key === 'ArrowDown') {
                changeMenu(active.length - 1, 1, 0)
            }
            if (e.key === 'ArrowUp') {
                changeMenu(0, -1, active.length - 1)
            }
        }
        function changeMenu (indMax: number, nexElem: number, indJump: number): void {
            let newActive = [false, false, false]
            active.forEach((index, i) => {
                if (index) {
                    if (i !== indMax) {
                        newActive[i + nexElem] = true
                    }
                    else newActive[indJump] = true
                }
            })
            setActive(newActive)
        }

        window.addEventListener('keydown', pointerPush)
        return () => window.removeEventListener('keydown', pointerPush);
    }, [active])

    return (
        <div className='module-contact-container'>
            <div className='grid-header'>USER OPTIONS</div>

            <div className='grid-nav'>
                <img className='menuBackground' src={MenuImg} alt='menu' />
            </div>
            <div className='grid-nav second'>
                <div className={'menuElement ' + (active[0] && 'active')} onClick={() => {
                    setActive([true,false,false])
                    }}>
                    <img src={MaskImage} className={'menuImg ' + (active[0] && 'activeImg')} alt='text mask' />
                    <p className={'textMenuElement ' + (active[0] && 'activeText')}>PROFILE</p>
                </div>
                <div className={'menuElement ' + (active[1] && 'active')} onClick={() => {
                    setActive([false,true,false])
                    }}>
                    <img src={MaskImage2} className={'menuImg ' + (active[1] && 'activeImg')} alt='text mask' />
                    <p className={'textMenuElement ' + (active[1] && 'activeText')}>SUMMARY</p>
                </div>
                <div className={'menuElement ' + (active[2] && 'active')} onClick={() => {
                    setActive([false,false,true])
                    }}>
                    <img src={MaskImage3} className={'menuImg ' + (active[2] && 'activeImg')} alt='text mask' />
                    <p className={'textMenuElement ' + (active[2] && 'activeText')}>ABOUT ME</p>
                </div>
            </div>

            <div className='grid-desc profile'>
                <img className='textBackground' src={TextImg} alt='menu' />
            </div>
            <div className='grid-desc summary'>
                <img className='textBackground' src={TextImg} alt='menu' />
            </div>
            <div className='grid-desc about-me'>
                <img className='textBackground' src={TextImg} alt='menu' />
            </div>
        </div>
    );
};

export default Menu;