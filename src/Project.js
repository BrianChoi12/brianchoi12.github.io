import React, { useState } from "react";
import "./styling/container.css";
import "./styling/project.css";

const Project = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    {
      id: 1,
      title: "Oat Compiler",
      description: "A complete compiler to turn Oat, a C-like language, into x86 assembly, including optimizations based on data flow analysis and graph coloring to achieve a fourfold performance improvement over baseline.",
      languages: ["OCaml", "LLVM", "x86"],
      github: false, 
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      languages: ["Python", "Django", "PostgreSQL"],
      github: true, 
      githubLink: "https://github.com/example/project2",
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
    <div className="shadow-container">
      <div className="top-text">
        <h1>Projects</h1>
      </div>
      <div className="card-row" onClick={handleOutsideClick}>
        <div className="card-container">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCard === card.id ? "selected" : ""}`}
              onClick={() => handleCardClick(card.id)}
            >
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <br></br>
              <div className="card-languages">
                {card.languages.map((language, index) => (
                  <div key={index} className="language">
                    {language}
                  </div>
                ))}

              </div>
              {card.githubLink ? 
              <a
                className="card-link"
                href={card.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a> : <a></a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
