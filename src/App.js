import React from "react";
import './styling/home.css';

const App = (props) => {
  const { common } = props;

  return (
    <div className="container">
      <div className="wrapper scroll-wrapper">
        <div className="top-text">
          <h1>{common.first_name} {common.last_name}</h1>
          <p className="text-title mobile-view">{common.first_name} {common.last_name}</p>
          <div className="social-icons">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com">
              <img className="title-logo" src="static/images/github.svg" alt="Github"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
              <img className="title-logo" src="static/images/linkedin-logo.svg" alt="LinkedIn"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com">
              <img className="title-logo" src="static/images/twitter.svg" alt="Twitter"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
              <img className="title-logo" src="static/images/insta.svg" alt="Instagram"/>
            </a>
          </div>
        </div>
        <div className="middle-text">
          <p className="text-content">"intro stuff"</p>
          <p className="text-content">Let's get in touch! Reach me at brian.choi@yale.edu (todo: link). </p>
          <p className="text-content">Brian Choi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
