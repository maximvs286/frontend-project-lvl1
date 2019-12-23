import startEngine from '..';
import { randomInteger, makeGameData } from '../function-lib';

const argMin = 1;
const argMax = 10;
const gameTask = 'What is the result of the expression?';
const operations = '-+*';

const randomizeOperator = (mathOperations) => {
  const startPos = 0;
  return mathOperations[randomInteger(startPos, mathOperations.length - 1)];
};

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

const gererateGameData = () => {
  const operator = randomizeOperator(operations);
  const arg1 = randomInteger(argMin, argMax);
  const arg2 = randomInteger(argMin, argMax);

  const question = `${arg1} ${operator} ${arg2}`;
  const correctAnswer = calcAnswer(operator, arg1, arg2).toString();

  return makeGameData(question, correctAnswer);
};

const startGame = () => {
  startEngine(gameTask, gererateGameData);
};

export default startGame;
