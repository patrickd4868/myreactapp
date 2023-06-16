import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className={`sidebar ${isNavOpen ? "open" : ""}`}>
          <button className="menu-toggle" onClick={toggleNav}>
            <FiX />
          </button>
          <ul>
            <li>
              <Link to="/" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleNav}>
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`content ${isNavOpen ? "nav-open" : ""}`}>
          {!isNavOpen && (
            <button className="menu-toggle" onClick={toggleNav}>
              <FiMenu />
            </button>
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
