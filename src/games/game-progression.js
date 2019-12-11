import mainGame from '../index';
import { randomInteger, makeGameData } from '../finction-lib';

// definitions
const startMinValue = 1;
const startMaxValue = 90;
const incrementMinValue = 1;
const incrementMaxValue = 10;
const hiddenMinPosition = 1;
const hiddenMaxPosition = 10;
const gameTask = 'What number is missing in the progression?';

// calc a prog element

const calcProgressionElement = (startNum, increment, position) => increment * position + startNum;

// generate game data

const gererateGameData = () => {
  const startNum = randomInteger(startMinValue, startMaxValue);
  const increment = randomInteger(incrementMinValue, incrementMaxValue);
  const hidden = randomInteger(hiddenMinPosition, hiddenMaxPosition);
  const startAcc = '';
  const startCount = 1;

  const buildProgressionString = (acc, count) => { 
    if (count > hiddenMaxPosition) return acc;
    if (count === hidden) acc = `${acc} ..`;
    else acc = `${acc} ${calcProgressionElement(startNum, increment, count)}`;
    return buildProgressionString(acc, count + 1);
  };

  const question = buildProgressionString(startAcc, startCount);
  const correctAnswer = calcProgressionElement(startNum, increment, hidden).toString();
  return makeGameData(question, correctAnswer);
};

// game start

const startGame = () => {
  mainGame(gameTask, gererateGameData);
};

export default startGame;