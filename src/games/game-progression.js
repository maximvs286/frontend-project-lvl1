import startEngine from '..';
import { randomInteger, makeGameData } from '../function-lib';

const startMinValue = 1;
const startMaxValue = 90;
const incrementMinValue = 1;
const incrementMaxValue = 10;
const length = 10;
const startAcc = '';
const firstElement = 1;
const gameTask = 'What number is missing in the progression?';

const calcElement = (startNum, increment, position) => increment * position + startNum;

const composeQuestion = (acc, counter, startNum, increment, hidden) => {
  let newAcc = acc;
  if (counter > length) return acc;
  if (counter === hidden) newAcc = `${acc} ..`;
  else newAcc = `${acc} ${calcElement(startNum, increment, counter)}`;
  return composeQuestion(newAcc, counter + 1, startNum, increment, hidden);
};

const gererateGameData = () => {
  const startNum = randomInteger(startMinValue, startMaxValue);
  const increment = randomInteger(incrementMinValue, incrementMaxValue);
  const hidden = randomInteger(firstElement, length);
  const question = composeQuestion(startAcc, firstElement, startNum, increment, hidden);
  const correctAnswer = calcElement(startNum, increment, hidden).toString();
  return makeGameData(question, correctAnswer);
};

const startGame = () => {
  startEngine(gameTask, gererateGameData);
};

export default startGame;
