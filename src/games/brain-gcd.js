#!/usr/bin/env node

import getRandom from '../getrandom.js';

const greatestCommonDivisor = () => {
  const a = getRandom();
  const b = getRandom();

  let gcd = 1;

  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  const question = `${a} ${b}`;
  const correctAnswer = String(gcd);
  return [question, correctAnswer];
};

export default greatestCommonDivisor;
