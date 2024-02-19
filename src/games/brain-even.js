#!/usr/bin/env node

import getRandom from '../getrandom.js';

const parityCheck = () => {
  const question = getRandom();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default parityCheck;
