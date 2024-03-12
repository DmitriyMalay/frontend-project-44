#!/usr/bin/env node

import getRandom from '../getrandom.js';
import runGame from '../index.js';

const even = (num) => (num % 2 === 0 ? 'yes' : 'no');

const parityCheck = () => {
  const question = getRandom();
  const correctAnswer = String(even(question));

  return [question, correctAnswer];
};

const runEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(parityCheck, rules);
};

export default runEvenGame;
