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
const calcElement = (startNum, increment, position) => increment * position + startNum;

// generate game data
const gererateGameData = () => {
  const startNum = randomInteger(startMinValue, startMaxValue);
  const increment = randomInteger(incrementMinValue, incrementMaxValue);
  const hidden = randomInteger(hiddenMinPosition, hiddenMaxPosition);
  const startAcc = '';
  const startCount = 1;

  const buildString = (acc, count) => { 
    if (count > hiddenMaxPosition) return acc;
    if (count === hidden) acc = `${acc} ..`;
    else acc = `${acc} ${calcElement(startNum, increment, count)}`;
    return buildString(acc, count + 1);
  };

  const question = buildString(startAcc, startCount);
  const correctAnswer = calcElement(startNum, increment, hidden).toString();
  return makeGameData(question, correctAnswer);
};

// game start
const startGame = () => {
  mainGame(gameTask, gererateGameData);
};

export default startGame;