import React, { useState } from 'react';
import "./styling/project.css"

const Project = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      languages: ['JavaScript', 'React', 'HTML', 'CSS'],
      githubLink: 'https://github.com/example/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      languages: ['Python', 'Django', 'PostgreSQL'],
      githubLink: 'https://github.com/example/project2',
    },
    // Add more card data as needed
  ];

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const handleOutsideClick = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-row" onClick={handleOutsideClick}>
      <div className="card-container">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCard === card.id ? 'selected' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <div className="card-languages">
              {card.languages.map((language, index) => (
                <div key={index} className="language">
                  {language}
                </div>
              ))}
            </div>
            <a className="card-link" href={card.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;