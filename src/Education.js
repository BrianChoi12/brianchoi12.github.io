import React, { useState, useEffect, useRef } from "react";
import "./styling/Education.css";
import "./styling/container.css";
import mx from './static/mx_logo.png'
import yale from './static/yale_img.png'
import { Link } from 'react-router-dom';

const rectangles = [
  {
    image: yale,
    points: [
      "Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1Point 1",
      "Point 2",
      "Point 3",
    ],
  },
  {
    image: mx,
    points: ["Point A", "Point B", "Point C"],
  },
  // add as many rectangles as you want
];

function Education() {
  return (
    <div className="shadow-container">
      <div className="top-text">
        <h1>Education</h1>
      </div>
      {rectangles.map((rectangle, index) => (
        <div className={`education-container`} key={index}>
          <div className="content-wrapper">
            <img src={rectangle.image} alt="" className="rectangle-image" />
            <ul className="rectangle-points">
              {rectangle.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
