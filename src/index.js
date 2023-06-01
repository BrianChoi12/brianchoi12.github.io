import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Base from "./Base";
import Resume from "./Resume"; 
import reportWebVitals from "./reportWebVitals";

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
  </React.StrictMode>
);
