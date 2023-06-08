import logo from '../logo.svg';
import '../App.css';
import React from 'react';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the home page.
        </p>
    
      </header>
    </div>
  );
}

export default Home;
