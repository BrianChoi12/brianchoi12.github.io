import React from "react";
import "./styling/Skills.css";
import "./styling/container.css";

function ListItem({ item }) {
  const { name, rating } = item;
  return (
    <li className="list-item">
      <div className="name-container">{name}</div>
      <div className="bar-container">
        <div className="bar" style={{ width: `${rating * 10}%` }} />
      </div>
    </li>
  );
}

function SkillsSection({ title, items }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const languages = [
    { name: "Python", rating: 8 },
    { name: "JavaScript", rating: 9 },
    { name: "Java", rating: 7 },
  ];

  const frameworks = [
    { name: "React.js", rating: 9 },
    { name: "Angular.js", rating: 7 },
    { name: "Vue.js", rating: 8 },
  ];

  return (
    <div className="shadow-container">
      <div className="top-text">
        <h1>Skills</h1>
      </div>
      <div className="container">
        <SkillsSection title="Languages" items={languages} />
        <SkillsSection title="Frameworks" items={frameworks} />
      </div>
    </div>
  );
}

export default Skills;
