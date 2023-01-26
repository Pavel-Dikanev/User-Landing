import React, { ReactElement } from 'react';
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
    return (
        <div className='module-contact-container'>
            <div className='grid-header'>USER OPTIONS</div>

            <div className='grid-nav'>
                <img className='menuBackground' src={MenuImg} alt='menu' />
            </div>
            <div className='grid-nav second'>
                <div className='menuElement active'>
                    <img src={MaskImage} className='menuImg activeImg' alt='text mask'/>
                    <p className='textMenuElement activeText'>PROFILE</p>
                </div>
                <div className='menuElement'>
                    <img src={MaskImage2} className='menuImg' alt='text mask'/>
                    <p className='textMenuElement'>SUMMARY</p>
                </div>
                <div className='menuElement'>
                    <img src={MaskImage3} className='menuImg' alt='text mask'/>
                    <p className='textMenuElement'>ABOUT ME</p>
                </div>
            </div>

            <div className='grid-desc'>
                <img className='textBackground' src={TextImg} alt='menu' />
            </div>
        </div>
    );
};

export default Menu;