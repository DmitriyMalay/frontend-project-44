#!/usr/bin/env node
import runGame from '../index.js';
import getRandom from '../getrandom.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getProgression = () => {
  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10);
  const length = 10;

  const progression = generateProgression(start, step, length);
  const randomIndex = getRandom(0, progression.length - 1);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const generateRound = () => {
  const [question, correctAnswer] = getProgression();
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  runGame(generateRound, rules);
};

export default runProgressionGame;
