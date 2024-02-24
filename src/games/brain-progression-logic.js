#!/usr/bin/env node

const arithmeticProgression = () => {
  const arr = [];
  const firstNumber = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10);
  const length = 10;

  for (let i = 0; i < length; i += 1) {
    arr.push(firstNumber + step * i);
  }

  const colon = Math.floor(Math.random() * length);
  const newArr = [...arr];
  newArr[colon] = '..';

  const question = newArr.join(' ');
  const correctAnswer = String(arr[colon]);

  return [question, correctAnswer];
};

export default arithmeticProgression;
