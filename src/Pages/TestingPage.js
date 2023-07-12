import React, { useState, useEffect } from "react";

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
    // Store the value in Session Storage
    sessionStorage.setItem("textInput", text);
  };

  const handleNameChange = (event) => {
    const text = event.target.value;
    setName(text);
    // Store the value in Session Storage
    sessionStorage.setItem("name", text);
  };

  const handleEmailChange = (event) => {
    const text = event.target.value;
    setEmail(text);
    // Store the value in Session Storage
    sessionStorage.setItem("email", text);
  };

  return (
    <div className="default">
      <h1>Testing Page</h1>

      <input
        type="text"
        value={textInput}
        onChange={handleTextInputChange}
        placeholder="Enter text"
      />
      <button onClick={() => sessionStorage.removeItem("textInput")}>
        Clear
      </button>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default TestingPage;
