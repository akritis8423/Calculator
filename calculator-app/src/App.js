import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the current input
  const [input, setInput] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle the clear button
  const handleClear = () => {
    setInput("");
  };

  // Function to evaluate the mathematical expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // eval evaluates the string as a mathematical expression
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;

