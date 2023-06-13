import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
        
      
      </div>      
    </Router> 
     
  );
}

export default App;
