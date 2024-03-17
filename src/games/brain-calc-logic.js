#!/usr/bin/env node

import getRandom from '../getrandom.js';
import runGame from '../index.js';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Invalid operator - ${operator}`);
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandom(0, operators.length - 1)];
};

const generateRound = () => {
  const randomOperator = getRandomOperator();
  const num1 = getRandom();
  const num2 = getRandom();

  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = String(calculation(num1, num2, randomOperator));

  return [question, correctAnswer];
};

const runCalcGame = () => {
  const rules = 'What is the result of the expression?';
  runGame(generateRound, rules);
};

export default runCalcGame;
