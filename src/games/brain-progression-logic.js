#!/usr/bin/env node
import runGame from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const progression = () => {
  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10);
  const length = 10;

  const arr = generateProgression(start, step, length);

  const colon = Math.floor(Math.random() * length);
  const newArr = [...arr];
  newArr[colon] = '..';
  const question = newArr.join(' ');
  const correctAnswer = String(arr[colon]);

  return [question, correctAnswer];
};

const generateRound = () => {
  const [question, correctAnswer] = progression();
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  runGame(generateRound, rules);
};

export default runProgressionGame;
