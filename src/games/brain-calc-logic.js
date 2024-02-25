#!/usr/bin/env node

import getRandom from '../getrandom.js';

const brainCalc = () => {
  const operations = ['+', '-', '*'];
  const randomOperators = Math.floor(Math.random() * operations.length);
  const randomOperator = operations[randomOperators];

  const num1 = getRandom();
  const num2 = getRandom();

  const question = `${num1} ${randomOperator} ${num2}`;

  let result;

  if (randomOperator === '+') {
    result = num1 + num2;
  } else if (randomOperator === '-') {
    result = num1 - num2;
  } else if (randomOperator === '*') {
    result = num1 * num2;
  }

  const correctAnswer = String(result);
  return [question, correctAnswer];
};

export default brainCalc;
