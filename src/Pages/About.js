import logo from "../logo.svg";
import "../App.css";
import React from "react";

function About() {
  return (
    <div className="Page">
      <header className="App-header">
        <p>This is the about page.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default About;
