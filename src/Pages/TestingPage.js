import React, { useState, useEffect } from "react";
import "./TestingPage.css";

function TestingPage() {
  const [textInput, setTextInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Load stored values from Session Storage when the component mounts
    const storedTextInput = sessionStorage.getItem("textInput");
    if (storedTextInput) {
      setTextInput(storedTextInput);
    }

    const storedName = sessionStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }

    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleTextInputChange = (event) => {
    const text = event.target.value;
    setTextInput(text);
    sessionStorage.setItem("textInput", text);
  };

  const handleNameChange = (event) => {
    const text = event.target.value;
    setName(text);
    sessionStorage.setItem("name", text);
  };

  const handleEmailChange = (event) => {
    const text = event.target.value;
    setEmail(text);
    sessionStorage.setItem("email", text);
  };

  const handleClear = () => {
    setTextInput("");
    setName("");
    setEmail("");
    sessionStorage.removeItem("textInput");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
  };

  return (
    <div className="testing-page">
      <h1>Testing Page</h1>

      <label htmlFor="textInput">Text input:</label>
      <input
        type="text"
        value={textInput}
        onChange={handleTextInputChange}
        placeholder="Enter text"
        className="text-input"
        data-testid="text-input"
      />
      <button
        onClick={() => setTextInput("")}
        className="clear-button"
        data-testid="clear-button"
      >
        Clear
      </button>

      <ul className="list" data-testid="test-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      <select className="dropdown" data-testid="test-dropdown">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>

      <form className="my-form" data-testid="test-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="name-input"
          data-testid="name-input"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
          data-testid="email-input"
        />

        <input
          type="submit"
          value="Submit"
          className="submit-button"
          data-testid="submit-button"
        />
      </form>

      <div></div>
      <button
        onClick={handleClear}
        className="clear-all-button"
        data-testid="clear-all-button"
      >
        Clear All
      </button>
    </div>
  );
}

export default TestingPage;
