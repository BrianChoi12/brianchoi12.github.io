import React, { useState, useEffect } from 'react';
import './styling/Terminal.css';

const commands = ['$whoami', 'John Doe - Full Stack Developer'];
const intro = 'Hello there! I am a full stack developer with over 5 years of experience. I love solving complex problems and building seamless user experiences.';

const Terminal = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorVisibilityInterval = setInterval(() => {
      setShowCursor((showCursor) => !showCursor);
    }, 300);

    let currentCommand = '';
    const fullText = `${commands[0]}\n${commands[1]}\n${intro}`;
    const timer = setInterval(() => {
      if (currentCommand.length === fullText.length) {
        clearInterval(timer);
      } else {
        currentCommand += fullText[currentCommand.length];
        setText(currentCommand);
      }
    }, 15);

    return () => {
      clearInterval(timer);
      clearInterval(cursorVisibilityInterval);
    };
  }, []);

  return (
    <div className="terminal">
      <pre>
        <code>
          {text}
          <span className={showCursor ? "blinking-cursor" : ""}>|</span>
        </code>
      </pre>
    </div>
  );
};

export default Terminal;
