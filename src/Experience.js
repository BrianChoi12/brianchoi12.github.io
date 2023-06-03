import React, { useState, useEffect, useRef } from "react";
import "./styling/Experience.css";
import "./styling/container.css";
import qraft from "./static/qraftec_logo.webp"
import img from "./static/yale-img.png"
import yale from "./static/yale-seas.png"

const rectangles = [
  {
    image: qraft,
    points: [
      "Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1",
      "Point 2",
      "Point 3",
    ],
  },
  {
    image: img,
    points: ["Point A", "Point B", "Point C"],
  },
  {
    image: yale,
    points: ["Point A", "Point B", "Point C"],
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
          <ul className="rectangle-points">
            {rectangles[currentIndex].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="rectangle-buttons">
          <button disabled={fade} onClick={goToPreviousRectangle}>
            Previous
          </button>
          <button disabled={fade} onClick={goToNextRectangle}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
