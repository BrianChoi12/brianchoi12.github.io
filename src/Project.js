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
      linkStatus: true, 
      link: "https://www.cs.princeton.edu/courses/archive/spring19/cos320/hw/oat2.pdf", 
      linkName: "Oat Language Specification", 
    },
    {
      id: 2,
      title: "Hoplite",
      description:
        "An implementation of a backend distributed data store for task based distributed systems, through a sharded key-value data store for efficiency and fault tolerance.",
      languages: ["Go", "gRPC"],
      linkStatus: true, 
      linkName: "Hoplite Paper", 
      link: "https://arxiv.org/abs/2002.05814",
    },
    {
      id: 3,
      title: "Yost",
      description:
        "A full stack web application to allow Yale students to post notices for lost items and connect with other users when the item is found, completed with four other developers.",
      languages: ["Flask", "Javascript", "SQL", "HTML/CSS"],
      linkStatus: true, 
      linkName: "GitHub Repository", 
      link: "https://github.com/yale-cpsc-419-sp23/project-project-group-4",
    },
    {
      id: 4,
      title: "Gomoku Artificial Intelligence",
      description:
        "An AI agent for Gomoku built using minimax with alpha-beta pruning, achieving 60\% rate against  agent built on baseline minimax algorithm, completed with one developer.",
      languages: ["Python"],
      linkStatus: true, 
      linkName: "GitHub Repository", 
      link: "https://github.com/BrianChoi12/gomoku",
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
              {card.linkStatus ? 
              <a
                className="card-link"
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.linkName}
              </a> : <a></a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
