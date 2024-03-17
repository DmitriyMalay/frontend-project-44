#!/usr/bin/env node

import getRandom from '../getrandom.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(generateRound, rules);
};

export default runEvenGame;
