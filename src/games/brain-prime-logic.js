#!/usr/bin/env node

import getRandom from '../getrandom.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumber = () => {
  const question = getRandom();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(primeNumber, rules);
};

export default runPrimeGame;
