import readlineSync from 'readline-sync';

export const name = readlineSync.question('May I have your name? ');
const userName = () => {
  // const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default userName;