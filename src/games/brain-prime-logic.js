#!/usr/bin/env node

const primeNumber = () => {
  const num = Math.floor(Math.random() * 100);
  let prime = true;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  const question = num;
  const correctAnswer = prime ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default primeNumber;
