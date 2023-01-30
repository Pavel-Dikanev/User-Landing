import React, { ReactElement, useState, useEffect } from 'react';
import './styles.css'
import MenuImg from './../../images/menu.png'
import TextImg from './../../images/text.png'
import MaskImage from './../../images/mask.png'
import MaskImage2 from './../../images/mask2.png'
import MaskImage3 from './../../images/mask3.png'
import Photo from './../../images/photo.png'
import Stamp from './../../images/stamp.png'
import Blot from './../../images/blot.png'
import TitleBruh from './../../images/titleBruh.png'

function getRandomLeft(max: number): number {
    return Math.floor(Math.random() * max);
}

function Menu(): ReactElement {

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
        function changeMenu(indMax: number, nexElem: number, indJump: number): void {
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
        <>

            <div className='module-menu-container'>
                <div className='grid-nav'>
                    <img className='menuBackground' src={MenuImg} alt='menu' />
                </div>
                <div className='grid-nav second'>
                    <div className={'menuElement ' + (active[0] ? 'active' : '')} onClick={() => {
                        setActive([true, false, false])
                    }}>
                        <img src={MaskImage3} className={'menuImg ' + (active[0] ? 'activeImg' : '')} alt='text mask' />
                        <p className={'textMenuElement ' + (active[0] ? 'activeText' : '')}>PROFILE</p>
                    </div>
                    <div className={'menuElement ' + (active[1] ? 'active' : '')} onClick={() => {
                        setActive([false, true, false])
                    }}>
                        <img src={MaskImage2} className={'menuImg ' + (active[1] ? 'activeImg' : '')} alt='text mask' />
                        <p className={'textMenuElement ' + (active[1] ? 'activeText' : '')}>SUMMARY</p>
                    </div>
                    <div className={'menuElement ' + (active[2] ? 'active' : '')} onClick={() => {
                        setActive([false, false, true])
                    }}>
                        <img src={MaskImage} className={'menuImg ' + (active[2] ? 'activeImg' : '')} alt='text mask' />
                        <p className={'textMenuElement ' + (active[2] ? 'activeText' : '')}>ABOUT ME</p>
                    </div>
                </div>
            </div>

            <div className={'module-contact-container ' + (active[0] ? 'displayGrid' : '')}>
                <div className={'grid-desc'}>
                    <img className='textBackground' src={TextImg} style={{ transform: 'rotate(-176deg' }} alt='menu' />
                    <img className='textBackground' src={TextImg} style={{ transform: 'scaleY(1) rotate(-185deg' }} alt='menu' />
                    <img className='textBackground' src={TextImg} alt='menu' />
                    <div className='profileContainer'>
                        <div className='profilePhoto'><img className='userPhoto' src={Photo} alt='user' /></div>
                        <div className='profileContacts'>
                            <div className='profileLine one'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText'> name </p>
                                <p className='leftCenterText' style={{ left: 15 + getRandomLeft(40) + '%', transform: 'rotate(-' + getRandomLeft(6) + 'deg)' }}>Pavel</p>
                            </div>
                            <div className='profileLine two'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText'> surname </p>
                                <p className='leftCenterText' style={{ left: 15 + getRandomLeft(25) + '%', transform: 'rotate(-' + getRandomLeft(6) + 'deg)' }}>Dikanev</p>
                            </div>
                            <div className='profileLine three'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText'> profession </p>
                                <p className='leftCenterText profession' style={{ left: 10 + getRandomLeft(10) + '%', transform: 'rotate(-' + getRandomLeft(6) + 'deg)' }}>Frontend developer</p>
                            </div>
                            <div className='profileLine four'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText frameworkLibrary'> framework </p>
                                <p className='leftTopText'>lib</p>
                                <p className='leftCenterText framework' style={{ left: 15 + getRandomLeft(25) + '%', transform: 'rotate(-' + getRandomLeft(6) + 'deg)' }}>React</p>
                            </div>
                            <div className='profileLine five'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText'> company </p>
                                <p className='leftCenterText company' style={{ left: 10 + getRandomLeft(10) + '%', transform: 'rotate(-' + getRandomLeft(3) + 'deg)' }}>Samara-Informsputnik</p>
                            </div>
                            <div className='profileLine six'>
                                {/* <p className='leftBottomText'> name </p> */}
                            </div>
                        </div>
                    </div>
                    <div className='profileContainerStamp'>
                        <div className='profileStamp'>
                            <img className='stampPhoto' src={Stamp} alt='stamp' />
                        </div>
                        <div className='profileBlot'>
                            <img className='blotSticker' src={Blot} alt='blot' />
                        </div>
                    </div>
                </div>
            </div>

            <div className={'module-summary-container ' + (active[1] ? 'displayGrid' : '')}>
                <div className='grid-desc'>
                    <img className='textBackground' src={TextImg} style={{ transform: 'scaleX(-1) rotate(4deg)' }} alt='menu' />
                    <img className='textBackground' src={TextImg} style={{ transform: 'scaleX(-1) rotate(-4deg' }} alt='menu' />
                    <img className='textBackground' src={TextImg} style={{ transform: 'rotate(180deg' }} alt='menu' />
                    <div className='summaryTextContainer'>
                        <div className='headerSummary'>
                            <img className='titleBruh' src={TitleBruh} alt='title bruh' />
                            <p className='summaryHeaderText'>Frontend React Developer</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className={'module-aboutMe-container ' + (active[2] ? 'displayGrid' : '')}>
                <div className='grid-desc'>
                    <img className='textBackground' src={TextImg} style={{ transform: 'scaleY(1) rotate(-182deg)' }} alt='menu' />
                    <img className='textBackground' src={TextImg} style={{ transform: 'rotate(-177deg' }} alt='menu' />
                    <img className='textBackground' src={TextImg} style={{ transform: 'scaleX(-1)' }} alt='menu' />
                </div>
            </div>

        </>
    );
};

export default Menu;