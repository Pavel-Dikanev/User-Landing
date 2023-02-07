import React, { ReactElement, useState, useEffect } from 'react';
import './styles.scss'
import MenuImg from './../../images/menu.png'
import TextImg from './../../images/text.png'
import MaskImage from './../../images/mask.png'
import MaskImage2 from './../../images/mask2.png'
import MaskImage3 from './../../images/mask3.png'
import Photo from './../../images/photo.png'
import Stamp from './../../images/stamp.png'
import Blot from './../../images/blot.png'
import Drifting from './../../images/drift.png'
import Serials from './../../images/serials.webp'
import Dragon from './../../images/dragon.png'

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
        <div className='menuBlock'>

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
                                <p className='leftCenterText' style={{ left: 15 + getRandomLeft(40) + '%', transform: 'rotate(-' + getRandomLeft(3) + 'deg)' }}>Pavel</p>
                            </div>
                            <div className='profileLine two'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText'> surname </p>
                                <p className='leftCenterText' style={{ left: 15 + getRandomLeft(25) + '%', transform: 'rotate(-' + getRandomLeft(3) + 'deg)' }}>Dikanev</p>
                            </div>
                            <div className='profileLine three'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText'> profession </p>
                                <p className='leftCenterText profession' style={{ left: 10 + getRandomLeft(10) + '%', transform: 'rotate(-' + getRandomLeft(3) + 'deg)' }}>frontend developer</p>
                            </div>
                            <div className='profileLine four'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText'> github </p>
                                {/* <p className='leftTopText'>lib</p> */}
                                <p className='leftCenterText github' style={{ left: 10 + getRandomLeft(20) + '%', transform: 'rotate(-' + getRandomLeft(3) + 'deg)' }}><a className='blackLink' href='https://github.com/Pavel-Adlf'>@Pavel-Adlf</a></p>
                            </div>
                            <div className='profileLine five'>
                                <div className='bottomBlurLine' />
                                <p className='leftBottomText'> mail </p>
                                <p className='leftCenterText mail' style={{ left: 0 + getRandomLeft(10) + '%', transform: 'rotate(-' + getRandomLeft(3) + 'deg)' }}><a className='blackLink' href="mailto:dikanev.pavel@mail.ru">dikanev.pavel@mail.ru</a></p>
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
                            <p className='summaryHeaderText'>Frontend React Developer</p>
                        </div>

                        <div className='summaryLine one'>
                                <p className='summaryText'> <span className='titleOfRow'>Work experience:</span> Samara-Informsputnik, 2 years </p>
                        </div>

                        <div className='summaryLine two'>
                                <p className='summaryText'> <span className='titleOfRow'>Stack:</span> React, Leaflet, Bootstrap, Webpack, SASS </p>
                        </div>

                        <div className='summaryLine three'>
                                <p className='summaryText'> <span className='titleOfRow'>Responsibilities:</span> development and support of geo projects: work with marker's geometry on the map, modals and toolbars creation, pixel perfect layout</p>
                        </div>

                        <div className='summaryLine four'>
                                <p className='summaryText'> <span className='titleOfRow'>Work schedule:</span> remote work, flexible hours, full time </p>
                        </div>

                        <div className='summaryLine five'>
                                <p className='summaryText'> <span className='titleOfRow'>Key skills:</span> react, javascript, typescript, github, css, sass, html, webpack, bootstrap </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'module-aboutMe-container ' + (active[2] ? 'displayGrid' : '')}>
                <div className='grid-desc'>
                    <img className='textBackground' src={TextImg} style={{ transform: 'scaleY(1) rotate(-182deg)' }} alt='menu' />
                    <img className='textBackground' src={TextImg} style={{ transform: 'rotate(-177deg' }} alt='menu' />
                    <img className='textBackground' src={TextImg} style={{ transform: 'scaleX(-1)' }} alt='menu' />
                    <div className='abouMeTextContainer'>
                        {/* <div className='headerAboutMe'>
                            <p className='aboutMeHeaderText'>Winter drifter, bicyclist, whovian, specialist</p>
                        </div> */}

                        <div className='aboutMeline four'>
                            <img src={Drifting} className='driftingClass' alt='drift'/>
                        </div>

                        <div className='aboutMeline three'>
                                <p className='aboutMeText'> <span className='titleOfRow'>Winter drifter:</span> Lada 2104, WeeRide JL, watt's linkage </p>
                        </div>

                        <div className='aboutMeline one'>
                            <img src={Serials} className='boClass' alt='drift'/>
                        </div>

                        <div className='aboutMeline two'>
                                <p className='aboutMeText'> <span className='titleOfRow'>Serials fan:</span> Scrubs (9 season suck), Doctor Who (10 season and further sucks), Sherlock, Shameless, The Big Bang Theory, Loki, Rick and Morty, BoJack Horseman, Archer, GTO, Attack on Titan, etc.</p>
                        </div>

                        <div className='aboutMeline five'>
                            <img src={Dragon} className='bicycleClass' alt='drift'/>
                        </div>

                        <div className='aboutMeline six'>
                                <p className='aboutMeText'> <span className='titleOfRow'>Cross-country biker:</span> Jamis Dragon 2014, Manitou Marvel Comp, Formula R0, Deore XT Set </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Menu;