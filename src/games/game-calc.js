import startEngine from '../index';
import { randomInteger, makeGameData } from '../function-lib';

// definitions
const argMin = 1;
const argMax = 10; // '10' for easy mind calculate
const gameTask = 'What is the result of the expression?';

// random operator
const operations = '-+*';

const randomizeOperator = (operatorsLine) => {
  const startPos = 0;
  return operations[randomInteger(startPos, operatorsLine.length - 1)];
};

// find an answer
const calcAnswer = (operator, arg1, arg2) => {
  switch (operator) {
    case '-':
      return arg1 - arg2;
    case '+':
      return arg1 + arg2;
    case '*':
      return arg1 * arg2;
    default:
      return NaN;
  }
};

// generate game data
const gererateGameData = () => {
  const operator = randomizeOperator(operations);
  const arg1 = randomInteger(argMin, argMax);
  const arg2 = randomInteger(argMin, argMax);

  const question = `${arg1} ${operator} ${arg2}`;
  const correctAnswer = calcAnswer(operator, arg1, arg2).toString();

  return makeGameData(question, correctAnswer);
};

// game start
const startGame = () => {
  startEngine(gameTask, gererateGameData);
};

export default startGame;
