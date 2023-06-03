import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Base from "./Base";
import Education from "./Education"; 
import Experience from "./Experience"; 
import Skills from "./Skills"; 
import Project from "./Project"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
const my_info = {
  first_name: "Brian",
  last_name: "Choi",
};

root.render(
  <React.StrictMode>
    <Base
      common={my_info}
    />
    <App common={my_info}/>
    <Education />
    <Experience />
    <Skills />
    <Project />
    <br></br>
    <br></br>
    <br></br>
  </React.StrictMode>
);
