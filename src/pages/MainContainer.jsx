import React, { useState } from 'react';
import './styles.css';
import Card from '../components/Card';
import { creativeCards } from '../constants';

const MainContainer = ({ handleGenerateClick, handleCreateClick }) => {
 
    return (
      <div className='main-wrapper'>
        <div className='buttons'>
          <button className='generate' onClick={handleGenerateClick}>Generate Congratulation</button>
          <button className='create' onClick={handleCreateClick}>Create New Congratulation</button>
        </div>
        <div className='main-field'>
          {Array.isArray(creativeCards) && creativeCards.map((card) => (
      <Card
        title={card.title}
        message={card.message}
        image={card.image}
      />
    ))}
        </div>
      </div>
    );
  }  

export default MainContainer;
