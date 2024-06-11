// src/Calculator.jsx
import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDivision = () => {
    if (parseFloat(num2) === 0) {
      setResult('Error: Division by zero');
    } else {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(quotient);
    }
  };

  return (
    <div className="calculator">
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter number"
      />
      <div>
        <button onClick={handleAddition}>Addition (+)</button>
        <button onClick={handleSubtraction}>Subtraction (-)</button>
        <button onClick={handleMultiplication}>Multiplication (*)</button>
        <button onClick={handleDivision}>Division (/)</button>
      </div>
      <div className="result">
        Result: {result !== null ? result : 'Please enter valid numbers'}
      </div>
    </div>
  );
};

export default Calculator;
