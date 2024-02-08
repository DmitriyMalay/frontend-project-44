import readlineSync from 'readline-sync';

export const userName = (string) => {
const name = readlineSync.question('Your answer: ');
console.log('Hello, ' + name + '!');
};

export userName;

