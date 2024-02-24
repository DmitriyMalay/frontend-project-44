#!/usr/bin/env node
import parityCheck from '../src/games/brain-even-logic.js';
import runGame from '../src/index.js';

runGame(parityCheck, 'Answer "yes" if the number is even, otherwise answer "no".');
