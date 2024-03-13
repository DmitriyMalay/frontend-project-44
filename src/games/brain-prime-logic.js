#!/usr/bin/env node

import getRandom from '../getrandom.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  const result = isPrime(num) ? 'yes' : 'no';
  return result;
};

const primeNumber = () => {
  const question = getRandom();
  const correctAnswer = sayPrimeOrNot(question);
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(primeNumber, rules);
};

export default runPrimeGame;
