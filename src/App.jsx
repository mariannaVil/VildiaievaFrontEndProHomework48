import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './pages/MainContainer';
import ModalForm from './components/ModalForm';
import Card from './components/Card';
import { creativeCards } from './constants.js';

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formInput, setFormInput] = useState({ title: '', message: '' });

  const handleGenerateClick = () => {
    const randomIndex = Math.floor(Math.random() * creativeCards.length);
    const randomCard = creativeCards[randomIndex];
    setSelectedCard(randomCard);
  };

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    setCards([...cards, formInput]);
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <MainContainer
        handleGenerateClick={handleGenerateClick}
        handleCreateClick={handleCreateClick}
      />
      {isModalOpen && (
        <ModalForm
          handleCancel={handleCancel}
          handleSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      )}
      {selectedCard && <Card title={selectedCard.title} message={selectedCard.message} image={selectedCard.image} />}
      {cards.map((card) => (
        <Card title={card.title} message={card.message} image={card.image} 
        />
      ))}
    </>
  );
};

export default App;
