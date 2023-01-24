import React, { ReactElement } from 'react';
import './styles.css' 

interface MessageProps {
    message: string;
}


function Menu(props: MessageProps):ReactElement {
    return (
        <div className='module-contact-container'>
            <div className='grid-header'>USER OPTIONS</div>

            <div className='grid-nav'>a</div>

            <div className='grid-desc'>d</div>
        </div>
    );
};

export default Menu;