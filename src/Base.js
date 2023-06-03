import React from "react";
import "./styling/base.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Link as ScrollLink, Element} from 'react-scroll'; 
import Resume from "./Resume";
import App from "./App";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const Base = ({ common, renderHead, renderBody }) => (
  <>
    <title>
      {common.first_name} {common.last_name}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Source+Code+Pro:400,500,600,700"
      type="text/css"
      media="screen"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:900"
      rel="stylesheet"
    />
    {renderHead && renderHead()}
    <nav>
      <div className="navbar-ul">
        <ul id="navbar-list" className="list-inline">
          <li>
            <a className="navbar-ref" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navbar-ref" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="navbar-ref" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="navbar-ref" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="about"><br></br><App common={common} /></div>
    <div id="education"><br></br><Education /></div>
    <div id="experience"><br></br><Experience /></div>
    <div id="skills"><br></br><Skills /></div>
    <div id="projects"><br></br><Project /></div>
    <br></br>
    <br></br>
    <br></br>
  </>
);

export default Base;
