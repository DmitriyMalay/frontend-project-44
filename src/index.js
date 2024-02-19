import readlineSync from 'readline-sync';

const numberOfRounds = 3;
let rightAnswers = 0;

const runGame = (questionWithAnswer, gameDiscription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameDiscription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = questionWithAnswer();
    const answer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );

    if (answer === correctAnswer) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again,${name}!`);
      break;
    }
  }
  if (rightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
