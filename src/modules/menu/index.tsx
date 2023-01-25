import React, { ReactElement } from 'react';
import './styles.css' 
import MenuImg from './../../images/menu.png'
import TextImg from './../../images/text.png'

interface MessageProps {
    message: string;
}


function Menu(props: MessageProps):ReactElement {
    return (
        <div className='module-contact-container'>
            <div className='grid-header'>USER OPTIONS</div>

            <div className='grid-nav'>
                <img className='menuBackground' src={MenuImg} alt='menu'/>
            </div>

            <div className='grid-desc'>
                <img className='textBackground' src={TextImg} alt='menu'/>
            </div>
        </div>
    );
};

export default Menu;