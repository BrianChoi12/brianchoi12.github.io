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
    <nav className="fixed-nav">
      <div className="navbar-ul">
        <ul id="navbar-list" className="list-inline">
          <li>
            <ScrollLink className="navbar-ref" to="about" spy={true} smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="navbar-ref" to="education" spy={true} smooth={true} duration={500}>
              Education
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="navbar-ref" to="experience" spy={true} smooth={true} duration={500}>
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="navbar-ref" to="projects" spy={true} smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="navbar-ref" to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
    <Element name="about"><br></br><br></br><br></br><App common={common}/></Element>
    <Element name="education"><br></br><br></br><br></br><Education/></Element>
    <Element name="experience"><br></br><br></br><br></br><Experience/></Element>
    <Element name="projects"><br></br><br></br><br></br><Project/></Element>
    <Element name="skills"><br></br><br></br><br></br><Skills/></Element>
    <br></br>
    <br></br>
    <br></br>
  </>
);

export default Base;
