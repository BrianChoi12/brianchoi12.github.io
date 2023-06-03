import React from "react";
import "./styling/base.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
    <Router>
      <nav>
        <div className="navbar-ul">
          <ul id="navbar-list" className="list-inline">
            <li>
              <Link className="navbar-ref" to="/home">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-ref" to="/education">
                Education
              </Link>
            </li>
            <li>
              <Link className="navbar-ref" to="/experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="navbar-ref" to="/projects">
                Projects
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/home" exact component={<App common={common} />} />
        <Route path="/experience" exact component={<Skills />} />
        <Route path="/projects" exact component={<Project />} />
        <Route path="/education" exact component={<Education />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  </>
);

export default Base;
