import React from 'react';
import './App.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <header>
          <h1>Welcome to My Personal Website</h1>
        </header>

        <nav>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <main>
          <section>
            <h2>About Me</h2>
            <p>Hello! My name is John Doe. I am a Web Developer. Welcome to my personal website.</p>
          </section>

          <section>
            <h2>Latest Blog Post</h2>
            <p>Check out my latest blog post on React.js!</p>
          </section>
        </main>

        <footer>
          <p>© 2023 John Doe. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default HomePage;
