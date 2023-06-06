import React, { useState, useEffect, useRef } from "react";
import "./styling/Experience.css";
import "./styling/container.css";
import qraft from "./static/qraftec_logo.webp";
import img from "./static/yale-img.png";
import yale from "./static/yale-cs.png";

const rectangles = [
  {
    image: qraft,
    name: "Qraft Technologies",
    position: "Software Engineer Intern",
    time: "May 2023 - Aug 2023",
    points: [
      "Deliver order management system (OMS) in Go for Qraft's internal trading platform, a mission critical feature that allows for fast rollout of new trading strategies and virtualization of accounts for easy collection of evaluation metrics.",
      "Construct infrastructure to connect to multiple brokerage firms through WebSockets on OMS startup, and allow for flexible order transmission from the client through a clearly defined unified client interface.",
      "Design feature to support trade logic simulation, allowing for transition to live trading with a single switch for safer rollout of trading strategies.",
    ],
  },
  {
    image: img,
    name: "Yale Interactive Machines Group",
    position: "Research Intern",
    time: "Jan 2022 - May 2023",
    points: ["Built original data processing pipelines for social robot navigation in virtual simulation to represent environmental information in graph structure using PyTorch Geometric. ",
    "Implemented message passing graph neural network and custom loss function in PyTorch and used contrastive learning to train model to output effective social context representations.",
    "Trained robot controller by building off using graph representations, improving autonomous navigation performance through increased awareness of human behavior patterns."],
  },
  {
    image: yale,
    name: "Yale Department of Computer Science",
    position: "Undergraduate Learning Assistant",
    time: "Jan 2023 - May 2023",
    points: ["Held 7 hours of office hours each week for Data Structures \& course with 200+ students.", 
    "Explained course concepts, guided problem set walkthroughs, and assisted students in debugging both C and C++.",
    ],
  },
];

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const fadeTimeoutRef = useRef();

  useEffect(() => {
    if (fade) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => {
        setFade(false);
      }, 200); // Adjust timeout to match new transition speed
    }
  }, [fade]);

  function goToNextRectangle() {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % rectangles.length);
    }, 200);
  }

  function goToPreviousRectangle() {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (currentIndex - 1 + rectangles.length) % rectangles.length
      );
    }, 200);
  }

  return (
    <div className="shadow-container">
      <div className="top-text">
        <h1>Experiences</h1>
      </div>
      <div className={`rectangle-container ${fade ? "fade" : ""}`}>
        <div className="content-wrapper">
          <img
            src={rectangles[currentIndex].image}
            alt=""
            className="rectangle-image"
          />
          <div>
            <ul className="rectangle-points">
              <div id="experience-info">
                <h3>
                  <b>{rectangles[currentIndex].name}</b>
                </h3>
                <p>
                  <u>{rectangles[currentIndex].position}, {rectangles[currentIndex].time}</u>
                </p>
              </div>
              {rectangles[currentIndex].points.map((point, index) => (
                <div>
                  <li key={index}>{point}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="rectangle-buttons">
          <button
            disabled={fade}
            style={{ fontSize: "20px" }}
            onClick={goToPreviousRectangle}
          >
            Previous
          </button>
          <button
            disabled={fade}
            style={{ fontSize: "20px" }}
            onClick={goToNextRectangle}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
