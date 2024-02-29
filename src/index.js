import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runGame = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(generateRound);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = rules();
    const answer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
