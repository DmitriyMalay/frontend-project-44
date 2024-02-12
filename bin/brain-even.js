#!/usr/bin/env node
import readlineSync from 'readline-sync';

const parityCheck = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnswers = 0;

  for (let i = 0; i < 3; i += 1) {
    const random = Math.round(Math.random() * 100);
    console.log(`${'Question: '}${random}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = random % 2 === 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      rightAnswers += 1;
    } else if (answer !== correctAnswer) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again,${name}!`);
      break;
    }
  }

  if (rightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

parityCheck();
