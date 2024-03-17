#!/usr/bin/env node

import getRandom from '../getrandom.js';
import runGame from '../index.js';

const findDivisor = (num1, num2) => {
  let gcd = 1;

  for (let i = 1; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const generateRound = () => {
  const a = getRandom();
  const b = getRandom();

  const question = `${a} ${b}`;
  const correctAnswer = String(findDivisor(a, b));
  return [question, correctAnswer];
};

const runGreatestCommonDivisorGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runGame(generateRound, rules);
};

export default runGreatestCommonDivisorGame;
