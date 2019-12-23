import startEngine from '..';
import { randomInteger, makeGameData } from '../function-lib';

const startMinValue = 1;
const startMaxValue = 90;
const incrementMinValue = 1;
const incrementMaxValue = 10;
const length = 10;
const startAcc = '';
const elementCounter = 1;
const gameTask = 'What number is missing in the progression?';

const calcElement = (startNum, increment, position) => increment * position + startNum;

const composeQuestion = (acc, counter, startNum, increment, hiddenElementIndex) => {
  let newAcc = acc;
  if (counter > length) return newAcc;
  if (counter === hiddenElementIndex) newAcc = `${acc} ..`;
  else newAcc = `${acc} ${calcElement(startNum, increment, counter)}`;
  return composeQuestion(newAcc, counter + 1, startNum, increment, hiddenElementIndex);
};

const gererateGameData = () => {
  const startNum = randomInteger(startMinValue, startMaxValue);
  const increment = randomInteger(incrementMinValue, incrementMaxValue);
  const hiddenElementIndex = randomInteger(elementCounter, length);
  const question = composeQuestion(
    startAcc, elementCounter, startNum, increment,
    hiddenElementIndex,
  );
  const correctAnswer = calcElement(startNum, increment, hiddenElementIndex).toString();
  return makeGameData(question, correctAnswer);
};

const startGame = () => {
  startEngine(gameTask, gererateGameData);
};

export default startGame;
