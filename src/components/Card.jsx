import React from 'react';
import './style.css';

const Card = ({ title, message, image }) => {
    return (
        <div className='card-wrapper'>
            <div className='card'>
        <p className='title'>{title}</p>
        <p className='message'>{message}</p>
        <div className='img-wrapper'>
            <img src={image} alt=''/>
        </div>
    </div>

        </div>
        
    )
}

export default Card;
