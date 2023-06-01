import React from "react";
import "./styling/resume.css";
import resume from "./static/resume.pdf"

const Resume = () => {
  return (
    <div class="resume">
    <embed
    src={resume}
    type="application/pdf"
    height={1200}
    width={1000}
  />
  </div>
  );
};

export default Resume;
