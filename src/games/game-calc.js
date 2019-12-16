import mainGame from '../index';
import { randomInteger, makeGameData } from '../function-lib';

// definitions
const calcArgMin = 1;
const calcArgMax = 10; // '10' for easy mind calculate
const gameTask = 'What is the result of the expression?';

// random operator
const operations = '-+*';

const randomizeOperator = (operatorsLine) => {
  const startPos = 0;
  return operations[randomInteger(startPos, operatorsLine.length - 1)];
};

// find an answer
const calcAnswer = (operator, calcArg1, calcArg2) => {
  let answer = 0;
  if (operator === '-') answer = calcArg1 - calcArg2;
  if (operator === '+') answer = calcArg1 + calcArg2;
  if (operator === '*') answer = calcArg1 * calcArg2;
  return answer;
};

// generate game data
const gererateGameData = () => {
  const operatorStr = randomizeOperator(operations);
  const calcArg1 = randomInteger(calcArgMin, calcArgMax);
  const calcArg2 = randomInteger(calcArgMin, calcArgMax);

  const question = `${calcArg1} ${operatorStr} ${calcArg2}`;
  const correctAnswer = calcAnswer(operatorStr, calcArg1, calcArg2).toString();

  return makeGameData(question, correctAnswer);
};

// game start
const startGame = () => {
  mainGame(gameTask, gererateGameData);
};

export default startGame;
