import React from "react";
import "./styling/home.css";
import "./styling/container.css";
import Terminal from "./Terminal";
import githubLogo from './static/github.svg';
import linkedinLogo from './static/linkedin-logo.svg';
import mailLogo from './static/email-mail-svgrepo-com.svg'
import profilePic from './static/profile.jpeg';  

const App = (props) => {
  const { common } = props;

  return (
    <div className="shadow-container">
      <div className="wrapper scroll-wrapper">
        <div className="top-text">
          <h1>
            {common.first_name} {common.last_name}
          </h1>
          <p className="text-title mobile-view">
            {common.first_name} {common.last_name}
          </p>
          <div className="social-icons">
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto::brian.choi@yale.edu"
            >
              <img
                className="title-logo"
                src={mailLogo}
                alt="Email"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com"
            >
              <img
                className="title-logo"
                src={githubLogo}
                alt="Github"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/"
            >
              <img
                className="title-logo"
                src={linkedinLogo}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <br></br>
        <div className="terminal-with-image"> 
          <img
            className="profile-pic"
            src={profilePic}
            alt="Profile"
          />
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default App;
