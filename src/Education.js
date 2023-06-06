import React, { useState, useEffect, useRef } from "react";
import "./styling/Education.css";
import "./styling/container.css";
import mx from "./static/mx_logo.png";
import yale from "./static/yale_img.png";
import { Link } from "react-router-dom";

const rectangles = [
  {
    image: yale,
    title: "Yale University",
    points: [
      {
        text: "Degree: ",
        isBold: true,
        details: "B.S. Computer Science (Expected May 2025), GP4.0/4.0",
      },
      {
        text: "CS Coursework: ",
        isBold: true,
        details:
          "Distributed Systems, Compilers, Algorithms, Systems Programming, Data Structures, Machine Learning, AI for Games, Discrete Math",
      },
      {
        text: "Activities: ",
        isBold: true,
        details:
          "Yale Computer Society, Yale Daily News (developer), Club Squash",
      },
    ],
  },
  {
    image: mx,
    title: "Middlesex School",
    points: [
      {
        text: "STEM Coursework: ",
        isBold: true,
        details:
          "AP Computer Science A, AP Calculus BC, Multivariable Calculus, Linear Algebra",
      },
      {
        text: "Activities: ",
        isBold: true,
        details:
          "Anvil Newspaper (Editor in Chief), Math Club (Club Head)",
      },
      {
        text: "Athletics: ",
        isBold: true,
        details:
          "Varsity Squash (Captain), Varsity Tennis",
      },

    ],
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
        <div>
          <div id="education-title">
            <h2>{rectangle.title}</h2>
          </div>
          <div className={`education-container`} key={index}>
            <div className="content-wrapper">
              <img src={rectangle.image} alt="" className="rectangle-image" />
              <div>
                <ul className="rectangle-points">
                  {rectangle.points.map((point, pointIndex) => (
                    <div>
                      <li key={pointIndex}>
                        {point.isBold ? <b>{point.text}</b> : point.text}
                        {point.details}
                      </li>
                      <br></br>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
